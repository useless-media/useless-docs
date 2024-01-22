# Signalling the presence of Server-Side stitched advertisements (SSAI)

## Introduction
If you are new to DeCaf we suggest checking out [Part 1](guides/DeCafClient.Part1.md) and
[Part 2](guides/DeCafClient.Part2.md) first.

In this guide we'll learn how to `signal` the presence of advertisements embedded in the stream (SSAI). We say `signal`
because it is actually not strictly necessary to do anything with or towards the DeCaf framework in order to run SSAI
on a Chromecast (!) If your player supports SSAI streams you can just run that. However, in order for the senders to
know that advertisements are active and behave correctly (blocking seek requests and such) it is necessary to supply
the framework with advertisement data at the correct times.
Usually, if you have a player with an SSAI implementation you should be able to get all the necessary data out of that
fairly easily. In this guide we are going to skip over the actual SSAI implementation and use mock data that would
otherwise have come from the SSAI player.

## Environment setup
We'll start where we left off in [Part 2](guides/DeCafClient.Part2.md) with a working hls.js client. If you don't have
that lying around you can clone the finished repository from
[here](https://github.com/useless-media/useless-decaf-client-guide-part-2).

## Concepts

* **Absolute Timeline vs Content Timeline**

  > This topic can quite easily become very complicated and would need a long description to cover everything there is
  > to say about it. That is however not the purpose of this guide, so we will just give a very brief description of
  > what we mean when we talk about absolute time and content time below.
  >
  > Absolute Timeline = The full timeline including content and advertisement duration.
  > Content Timeline = Only the timeline of the content, excluding advertisements.
  >
  > Example: You have a video that is 1 minute long. The full duration of the Content Timeline is 1 minute. In this
  > stream you have injected two advertisement breaks, each 20 seconds long. This makes the duration of the stream and
  > the Absolute Timeline 1 minute and 40 (100 seconds) long.
  >
  > The first break starts at position 10 in the Content Timeline and the Absolute Timeline. As the playhead progresses
  > past this point, the Absolute Timeline keeps ticking up but the Content Timeline stops/pauses at 10 while the
  > advertisement is playing. Once the advertisement break finishes the Content Timeline will start ticking up again
  > from 10 (and the Absolute Timeline will at this point be at 30).
  >
  > This means that the second advertisement break, which is slotted at the 30-second mark in the Content Timeline will
  > start at position 50 in the Absolute Timeline.

## Mock data
Let's start by adding our mock data in `mock-data/MockEmbeddedAdvertisementData.ts` and an `index.ts` to export it. The
data contains two advertisement breaks that each are 20 seconds long, on at 10 seconds on the content timeline and one
at 30 seconds on the content timeline (which is at this point equivalent to position 50 on the absolute timeline).
These breaks both contain two unique advertisements that are each 10 seconds long.
It is worth noting that the advertisement breaks are marked `isEmbedded: true` which is what indicates that these are
SSAI advertisements, i.e. embedded in the stream. That means that their duration will be counted away from the content
timeline.

```
// mock-data/MockEmbeddedAdvertisementData.ts

export const MockEmbeddedBreaks = [
  {
    id: 'break-1',
    duration: 20,
    position: 10,
    isWatched: false,
    isEmbedded: true,
    breakClipIds: [
      'break-clip-1',
      'break-clip-2'
    ]
  },
  {
    id: 'break-2',
    duration: 20,
    position: 30,
    isWatched: false,
    isEmbedded: true,
    breakClipIds: [
      'break-clip-3',
      'break-clip-4'
    ]
  }
];

export const MockEmbeddedBreakClips = [
  {
    id: 'break-clip-1',
    duration: 10,
    title: 'Break Clip 1',
    posterUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/images/480x270/ForBiggerEscapes.jpg',
    clickThroughUrl: 'https://google.com',
    whenSkippable: 3,
    customData: {}
  },
  {
    id: 'break-clip-2',
    duration: 10,
    title: 'Break Clip 2'
  },
  {
    id: 'break-clip-3',
    duration: 10,
    title: 'Break Clip 3'
  },
  {
    id: 'break-clip-4',
    duration: 10,
    title: 'Break Clip 4'
  }
];

export const MockEmbeddedAdvertisementData = {
  breaks: MockEmbeddedBreaks,
  breakClips: MockEmbeddedBreakClips
};
```

```
// mock-data/index.ts

export * from './MockEmbeddedAdvertisementData';
```

## Reporting embedded advertisement information to DeCaf
In order to simplify the work needed to correctly report the advertisement information to DeCaf, we provide an open,
player agnostic, utility: `EmbeddedAdvertisementDataManager.ts`. If you already get this functionality from your player
there is no need to use this, but for this tutorial we're going let it do the heavy lifting.

The EmbeddedAdvertisementDataManager has four main points of integration:
* In the constructor it takes a delegate that matches the DeCafProxy, so you can just send that along.
* The `setAdvertisementData(breaks: Array<Break>, breakClips: Array<BreakClip>): void` function, used to register
the advertisement breaks and the advertisements (breakClips). The manager will then also register these with DeCaf 
through the DeCafProxy/its delegate.
* The `setAbsoluteTime(absoluteTime: number): void` function, which continuously expects the currentTime in the absolute
timeline. 
* The `reset` function which resets the manager.

The manager will continuously check if anything has changed in the advertisement state, like if we just entered or
exited a break and if we are inside a break it will keep track of which advertisement is the active one and how long we
have played, both inside the break and withing the currently active breakClip.

If we just entered a break the manager will apply a seek restriction on DeCaf and if we just exited the break it will
remove the seek restriction again.

Finally, it will continuously update DeCaf on the `breakStatus` which lets senders know when advertisement is active.

So, let´s add the manager utility to our repo.

```
// utils/index.ts

export * from './EmbeddedAdvertisementDataManager';
```

```
// utils/EmbeddedAdvertisementDataManager.ts

import { Break, BreakClip, BreakStatus, Command } from '@useless-media-public/useless-decaf-client-sdk';

const findIndex = (array: Array<any>, predicate: (...args: Array<any>) => any | undefined): number => {
  if (0 === array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) return i;
  }

  return -1;
};

export interface AdvertisementData {
  breaks: Array<Break>;
  breakClips: Array<BreakClip>;
}

export interface EmbeddedAdvertisementDataManagerDelegate {
  addRestriction: (command: Command) => void;
  removeRestriction: (command: Command) => void;
  setAdvertisementData: (breaks: Array<Break>, breakClips: Array<BreakClip>) => void;
  setBreakStatus: (breakStatus?: BreakStatus) => void;
}

export interface EmbeddedAdvertisementDataManagerArgs {
  delegate: EmbeddedAdvertisementDataManagerDelegate;
}

export class EmbeddedAdvertisementDataManager {
  private readonly delegate: EmbeddedAdvertisementDataManagerDelegate;

  private activeBreakClip?: BreakClip;
  private activeBreakClipStartedAtTime: number = 0;
  private advertisementData?: AdvertisementData;
  private breakStatus?: BreakStatus;

  constructor(args: EmbeddedAdvertisementDataManagerArgs) {
    this.delegate = args.delegate;
  }

  private delegateBreakStatus(breakStatus?: BreakStatus): void {
    this.breakStatus = breakStatus;
    this.delegate.setBreakStatus(breakStatus);
  }

  private getActiveBreakClip(breakClips: Array<BreakClip>, currentBreakTime: number): BreakClip | undefined {
    let pastDuration = 0;
    for (let bc in breakClips) {
      if (pastDuration + breakClips[bc].duration > currentBreakTime) return breakClips[bc];
      pastDuration += breakClips[bc].duration;
    }
  }

  private getBreakClips(b: Break): Array<BreakClip> {
    if (!this.advertisementData?.breakClips?.length) return [];

    return this.advertisementData.breakClips.filter(bc => b.breakClipIds.includes(bc.id));
  }

  private getEmbeddedAdvertisementBreakAtAbsolutePosition(absolutePosition: number, margin: number = 0.4): Break | undefined {
    if (!this.advertisementData?.breaks?.length) return;

    return this.advertisementData.breaks
      .filter(b => b.isEmbedded)
      .find(b => (b.position - margin) <= absolutePosition && absolutePosition <= (b.position + b.duration));
  }

  private getBreakStatus(absolutePosition: number): BreakStatus | undefined {
    const b = this.getEmbeddedAdvertisementBreakAtAbsolutePosition(absolutePosition);
    if (!b) {
      this.activeBreakClip = undefined;
      this.activeBreakClipStartedAtTime = 0;
      return;
    }

    const currentBreakTime = Math.max(0, absolutePosition - b.position);
    const breakClips = this.getBreakClips(b);
    const activeBreakClip = this.getActiveBreakClip(breakClips, currentBreakTime);
    if (activeBreakClip && activeBreakClip.id != this.activeBreakClip?.id) {
      this.activeBreakClip = activeBreakClip;
      this.activeBreakClipStartedAtTime = Math.max(absolutePosition, b.position);
    }

    const currentBreakClipTime = Math.max(0, absolutePosition - this.activeBreakClipStartedAtTime);
    return {
      breakId: b.id,
      breakClipId: activeBreakClip?.id,
      currentBreakTime: currentBreakTime,
      currentBreakClipTime: this.activeBreakClip ? Math.min(currentBreakTime, currentBreakClipTime) : undefined,
      whenSkippable: activeBreakClip?.whenSkippable
    };
  }

  public setAbsoluteTime(absoluteTime: number): void {
    const breakStatus = this.getBreakStatus(absoluteTime);
    const enteredOrExitedBreak = breakStatus?.breakId !== this.breakStatus?.breakId;
    if (enteredOrExitedBreak) {
      if (breakStatus) {
        this.delegate.addRestriction(Command.SEEK);
      }
      else { // Exited, mark current break as watched
        const index = findIndex(this.advertisementData?.breaks ?? [], ({ id }) => id === this.breakStatus?.breakId);
        if (this.advertisementData?.breaks?.[index]) {
          this.advertisementData.breaks[index].isWatched = true;

          this.delegate.setAdvertisementData(this.advertisementData.breaks, this.advertisementData.breakClips);
        }

        this.delegate.removeRestriction(Command.SEEK);
      }
    }

    this.delegateBreakStatus(breakStatus);
  }

  public setAdvertisementData(breaks: Array<Break>, breakClips: Array<BreakClip>): void {
    this.advertisementData = { breaks, breakClips };
    this.delegate.setAdvertisementData(breaks, breakClips);
  }

  public reset(): void {
    this.activeBreakClip = undefined;
    this.activeBreakClipStartedAtTime = 0;
    this.advertisementData = undefined;
    this.breakStatus = undefined;
  }
}
```

## Using the EmbeddedAdvertisementDataManager
In our client we can now implement the EmbeddedAdvertisementDataManager:
```
import { EmbeddedAdvertisementDataManager } from './utils';
import { MockEmbeddedAdvertisementData } from './mock-data';
```

```
private readonly advertisementDataManager: EmbeddedAdvertisementDataManager;
```

And in the constructor.

```
this.advertisementDataManager = new EmbeddedAdvertisementDataManager({
  delegate: this.deCaf
});
```

Then we are going register our mock data with the manager and for the purposes of mimicking a real SSAI player let's
guess that we will have received the advertisement data from the player around the `loadeddata` event from the video
element.

```
this.video.addEventListener('loadeddata', () => {
  ...
  this.advertisementDataManager.setAdvertisementData(MockEmbeddedAdvertisementData.breaks, MockEmbeddedAdvertisementData.breakClips);
});
```

We need to report time updates to it.

```
this.video.addEventListener(MediaElementEvents.TimeUpdate, () => {
  this.advertisementDataManager.setAbsoluteTime(this.video.currentTime);
  this.state.setTime(this.video.currentTime);
});
```

And finally, let's reset the manager at the start of handleLoad so that we always start clean when something new will
play.

```
public async handleLoad(message: LoadMessage): Promise<LoadMessage | void> {
  if (this.player) {
    this.player.destroy();
  }
  this.player = undefined;
  this.trackIdReverseMap = {};
  this.advertisementDataManager.reset();

  ...
}
```

## Testing
Now we are ready to see this in action so if you haven't already, it is now time to start the build:
```
npm run start:dev
```

Head over to the Useless Emu-Later, start up the emulator and play any asset with a duration longer than 70 seconds
which is the minimum Absolute Timeline duration needed to play both advertisement breaks in our mock data.

Head over to the `State` view which visualizes the internal state of the DeCaf framework, and you should be able to see
our breaks and breakClips and when the playhead reaches 10 you should see a breakStatus appearing in there.

## Conclusion
If you already have an SSAI capable player, that is all you need to get it running on a Chromecast using the DeCaf
framework.

If you don't have an SSAI capable player but would like to, feel free to reach out to us at
[Useless Media](https://useless.media).

The full code for this tutorial can also be found
[here](https://github.com/useless-media/useless-decaf-client-guide-part-3).

## Further reading
Over time more guides will be published but in the meantime, if you want more in-depth information you can check out
the reference documentation for the
[DeCaf Client Sdk](https://useless-media.github.io/useless-docs/useless-decaf-client-sdk/#/reference/index) and the
[DeCaf Framework](https://useless-media.github.io/useless-docs/useless-decaf/#/reference/index).

You can also check out our public [Client Demo](ToDo:LinkHere) repository which has some example clients.