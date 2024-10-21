# Session commands

## dismissStillWatching
```
dismissStillWatching();
```

### Will lead to
`playbackSessionState.stillWatching` being deleted.

## pause
```
pause();
```

### Will lead to
`playbackSessionState.playbackState` being updated.

## play
```
play();
```

### Will lead to
`playbackSessionState.playbackState` being updated.

## seek
```
seek({
  position: number;
  relative?: boolean;
});
```

### Will lead to
`playbackSessionState.playbackState` being updated.
`playbackSessionState.timeline.position` being updated.

## setAudioTrack
```
setAudioTrack({
  id: number;
});
```

### Will lead to
`playbackSessionState.tracks[*].active` being updated.

## setTextTrack
```
setTextTrack({
  id?: number;
});
```

### Will lead to
`playbackSessionState.tracks[*].active` being updated.

## setTracks
```
type TrackDescriptor = {
  language: string;
  roles: Array<Roles>;
  type: TrackTypes;
}

setTracks({
  byIds?: {
    ids: Array<number>;
  };
  byDescriptors?: {
    descriptors: Array<TrackDescriptor>;
  };
  byTracks?: {
    tracks: Array<Track>;
  };
});
```

### Will lead to
`playbackSessionState.tracks[*].active` being updated.

## skipSection()
```
skipSection({
  keepWatching?: boolean;
  section?: TimelineSection;
});
```

### Will lead to
`playbackSessionState.timeline.activeSection` being deleted/updated.

## stop()
```
stop({
  reason?: StoppedReasons;
});
```

### Will lead to
`playbackSessionState` being cleared/reset.