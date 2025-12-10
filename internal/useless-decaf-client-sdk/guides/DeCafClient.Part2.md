# Building a DeCaf client with a custom video player (hls.js)

## Introduction
If you are new to DeCaf we suggest checking out [Part 1](guides/DeCafClient.Part1.md) first.

In this guide we are going to build a DeCaf client using the [hls.js](https://github.com/video-dev/hls.js) video player.

## Environment setup
We'll start just like in [Part 1](guides/DeCafClient.Part1.md#environment-setup) with the
[scaffold](https://github.com/useless-media/useless-decaf-client-scaffold) project.

```
git clone https://github.com/useless-media/useless-decaf-client-scaffold hls-js-decaf-client
cd hls-js-decaf-client
npm install
npm run start:dev
```

And rename the `ScaffoldDeCafClient` to `HlsJsDeCafClient`.

## Building an hls.js decaf client
### PlaybackSessionState updates
We are going to add the same listeners to the video element from Part 1 to update the `PlaybackSessionState`.
```
private registerListeners(): void {
  this.video.addEventListener('durationchange', () => {
    this.state.setDuration(this.video.duration);
  });
  this.video.addEventListener('ended', () => {
    this.state.reset();
  });
  this.video.addEventListener('loadeddata', () => {
    this.state.setPlaybackState(PlaybackStates.Loaded);
  });
  this.video.addEventListener('pause', () => {
    this.state.setPlaybackState(PlaybackStates.Paused);
  });
  this.video.addEventListener('playing', () => {
    this.state.setPlaybackState(PlaybackStates.Playing);
  });
  this.video.addEventListener('timeupdate', () => {
    this.state.setTime(this.video.currentTime);
  });
  this.video.addEventListener('volumechange', () => {
    this.state.setVolume(this.video.volume, this.video.muted);
  });
}
```

And call it at the end of the constructor.
```
...
    container.appendChild(this.video);
  }

  this.registerListeners();
}
```

### Adding hls.js
now let's install hls.js.
```
npm install --save-dev hls.js
```

Then import what we need (MediaPlaylist will be used later in the Tracks section).
```
import Hls, { MediaPlaylist } from 'hls.js';
```

Declare a class member.
```
private player?: Hls;
```

### handleLoad
This time handleLoad is going to be doing a few more things, like instantiating hls.js.
```
public async handleLoad(message: LoadMessage): Promise<void> {
  // We start by resetting the local state, in case we are already playing something when the request comes in 
  if (this.player) {
    this.player.destroy();
  }
  this.player = undefined;

  if (message.media.contentUrl) {
    this.state.setPlaybackState(PlaybackStates.Loading);

    this.player = new Hls();
    this.player.attachMedia(this.video);
    this.player.loadSource(url);
  }
}
```

At this point we have enough start playing HLS content so if you wish you can try it out by casting some HLS assets
from the Emu-Later.

### Playback Controls
Next up we're going to implement some basic playback controls so that we can do a little more than just starting videos.

```
public async handlePause(): Promise<void> {
  this.video.pause();
}

public async handlePlay(): Promise<void> {
  await this.video.play();
}

public async handleSeek(message: SeekMessage): Promise<void> {
  if (typeof (message.currentTime) === 'number') {
    this.video.currentTime = message.currentTime;
  }
}

public async handleSetVolume(message: SetVolumeMessage): Promise<void> {
  const willChangeVolume = message.volume.level !== this.video.volume;
  const willChangeMuted = message.volume.muted !== this.video.muted;
  if (!willChangeVolume && !willChangeMuted) return;

  this.video.volume = message.volume.level;
  this.video.muted = message.volume.muted;
  this.state.setVolume(this.video.volume, this.video.muted);
}

public async handleStop(message: StopMessage): Promise<void> {
  this.player?.destroy();
  this.player = undefined;
}
```

Now we should be able to use most of the playback controls in the Emu-Later.

### Tracks
Moving on to adding support for changing audio and text tracks. First we need tell DeCaf and the senders that tracks are
available and to do that we will need to map the hls.js tracks into DeCafTracks. Hls.js keeps audio and text tracks
separate, each with their own id-series starting at 0. The Chromecast firmware expects all tracks to be in the same
array, within the same id-series and with all the audio tracks first, so we will need to generate new ids for the DeCaf
tracks. This means, of course, that when a sender will try to change tracks the incoming request will contain DeCaf
track ids. So to be able to change tracks on the hls.js player we also need to keep a mapping of DeCafTrackId =>
HlsJsTrack.

#### Mapper
We have made a small mapper to do this for us, which we will now implement in our client. So, lets create a `mappers`
folder and an `index.ts` in that one:
```
export * from './mapHlsJsTracksToDeCafTracks';
```

And `mapHlsJsTracksToDeCafTracks.ts`:
```
import { DeCafTrack, TrackTypes } from '@useless-media-public/useless-decaf-client-sdk';
import Hls, { MediaPlaylist } from 'hls.js';

export interface DecafTracksAndIdReverseMap {
  tracks: Array<DeCafTrack>;
  idReverseMap: Record<number, MediaPlaylist>;
}

export const mapHlsJsTracksToDeCafTracks = (player: Hls) => {
  const tracks = [...player.audioTracks, ...player.subtitleTracks];
  const deCafTracks: Array<DeCafTrack> = [];
  const idReverseMap: Record<number, MediaPlaylist> = {};
  for (let i = 0; i < tracks.length; i++) {
    idReverseMap[i] = tracks[i];
    let active = false;
    let deCafTrackType: TrackTypes | undefined = undefined;
    switch (tracks[i].type) {
      case 'AUDIO': {
        active = i === player.audioTrack;
        deCafTrackType = TrackTypes.Audio;
        break;
      }
      case 'CLOSED-CAPTIONS':
      case 'SUBTITLES': {
        active = (i - player.audioTracks.length) === player.subtitleTrack;
        deCafTrackType = TrackTypes.Text;
        break;
      }
    }
    if (deCafTrackType) {
      deCafTracks.push(DeCafTrack({
        id: i,
        type: deCafTrackType,
        active,
        language: tracks[i].lang ?? '',
        name: tracks[i].name
      }));
    }
  }
  return {
    tracks: deCafTracks,
    idReverseMap
  };
};
```

#### Handling tracks in the client
Now we can import the mapper:
```
import { mapHlsJsTracksToDeCafTracks } from './mappers';
```

And we will declare a class member to store the track id reverse map that the mapper creates:
```
private trackIdReverseMap: Record<number, MediaPlaylist> = {};
```

For good measure we'll also start by resetting this map in `handleLoad` to make sure we don't carry over any stale data
between different playback sessions:
```
...
  }
  this.player = undefined;
  this.trackIdReverseMap = {};

  if (message.media.contentUrl) {
...
```

Then we go to our video element listener for `loadeddata` - at that point tracks will be available in hls.js.
```
this.video.addEventListener('loadeddata', () => {
  this.state.setPlaybackState(PlaybackStates.Loaded);

  if (!this.player) return;
  const mapped = mapHlsJsTracksToDeCafTracks(this.player);
  
  // Store the track id reverse map for later use
  this.trackIdReverseMap = mapped.idReverseMap;

  // Update the DeCaf PlaybackSessionState with which tracks are available and which ones might be active
  this.state.setTracks(mapped.tracks);
  this.state.setActiveTracks(mapped.tracks.filter(t => t.active));
});
```

And then we can go and implement the request handler for changing tracks `handleEditTracks`:
```
public async handleEditTracks(message: EditTracksInfoMessage): Promise<void> {
  if (!message.activeTrackIds || !this.player) return;

  let audioId: number | undefined = undefined;
  let textId: number = -1;

  // Here we use the track id reverse map to get the hls.js track ids per type of track
  for (let i in message.activeTrackIds) {
    const track = this.trackIdReverseMap[message.activeTrackIds[i]];
    if (track) {
      if (['SUBTITLES', 'CLOSED-CAPTIONS'].includes(track.type)) {
        textId = track.id;
      }
      if (['AUDIO'].includes(track.type)) {
        audioId = track.id;
      }
    }
  }

  // And then we change the tracks on our player
  if (typeof (audioId) === 'number') {
    this.player.audioTrack = audioId;
  }
  if (textId > -1) {
    this.player.subtitleDisplay = true;
    this.player.subtitleTrack = textId;
  }
  else {
    this.player.subtitleDisplay = false;
  }
}
```

And now we can use the Emu-Later to change audio and text tracks.

## Conclusion
Now equipped with this knowledge, you have the power to (with minimal effort) build a feature-rich DeCaf client with any
custom video player, opening up new possibilities for your Chromecast receiver applications.

The full code for this tutorial can also be found
[here](https://github.com/useless-media/useless-decaf-client-guide-part-2).

## Next up
Next we'll see how we can signal the presence of Server-Side stitched advertisements (SSAI) in
[DeCaf Client - Part 3](guides/DeCafClient.Part3.md).