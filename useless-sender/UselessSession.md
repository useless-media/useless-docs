# Session
[UselessSessionDescription](UselessSession.Description.md ':include')

## Getters

### PlaybackSession State
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.playbackSessionState
  ```

- Swift

  ```swift
  session.playbackSessionState
  ```

</div>

### Connection State
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.getConnected()
  ```

</div>

### Session Id
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.getId()
  ```

</div>

## Delegate

### Handling callbacks
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  interface UselessSessionDelegate {
    fun handleDestroyed(finalPlaybackSessionState: PlaybackSessionState)
    fun handlePlaybackSessionStateChanged(changedKeys: List<PlaybackSessionEventKeys>)
  }

  session.setDelegate(delegate: UselessSessionDelegate? = null)
  ```

</div>

#### handleDestroyed
This is called whenever the session gets destroyed, either actively or passively. As an argument it receives the final
PlaybackSession state.

#### handlePlaybackSessionStateChanged
This is called whenever the PlaybackSession state has been updated (fairly frequently). As an argument it receives a
list of keys indicating which part of the state that has been changed.

## Commands

### cast
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.cast(load: Load)
  ```

  or

  ```
  session.cast(jsonString: String)
  ```

- Swift

  ```swift
  session.cast(loadRequest load: UselessLoadRequest, startOffset: Double?)
  ```

</div>

### dismissStillWatching
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.dismissStillWatching()
  ```

- Swift

  ```swift
  session.dismissStillWatching()
  ```

</div>

##### Will lead to
`playbackSessionState.stillWatching` being deleted.

### pause
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.pause()
  ```

- Swift

  ```swift
  session.pause()
  ```

</div>

##### Will lead to
`playbackSessionState.playbackState` being updated.

### play
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.play()
  ```

- Swift

  ```swift
  session.play()
  ```

</div>

##### Will lead to
`playbackSessionState.playbackState` being updated.

### seek
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.seek(position: Double? = null, relative: Boolean? = null)
  ```

- Swift

  ```swift
  session.seek(position value: Double, relative: Bool? = false)
  ```

</div>

##### Will lead to
`playbackSessionState.playbackState` and `playbackSessionState.timeline.position` being updated.

### setAudioTrack
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.setAudioTrack(id: Int)
  ```

- Swift

  ```swift
  session.setAudioTrack(audioTrackId id: Int?)
  ```

</div>

##### Will lead to
`playbackSessionState.tracks[*].active` being updated.

### setTextTrack
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.setTextTrack(id: Int? = null)
  ```

- Swift

  ```swift
  session.setTextTrack(textTrackId id: Int?)
  ```

</div>

##### Will lead to
`playbackSessionState.tracks[*].active` being updated.

### setTracks
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  type TrackDescriptor = {
    language: string;
    roles: Array<Roles>;
    type: TrackTypes;
  }

  type SetTracksByIds = {
    ids: List<Int>;
  }

  type SetTracksByDescriptors = {
    descriptors: List<TrackDescriptor>;
  }

  type SetTracksByTracks = {
    tracks: List<Track>;
  }

  session.setTracks(byIds: SetTracksByIds? = null, byDescriptors: SetTracksByDescriptors? = null, byTracks: SetTracksByTracks? = null);
  ```

- Swift

  ```swift
  session.setTracks(byTracks tracks: [Track])
  ```

</div>

##### Will lead to
`playbackSessionState.tracks[*].active` being updated.

### skipSection
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.skipSection(keepWatching: Boolean?)
  ```

- Swift

  ```swift
  session.skipSection(keepWatching value: Bool? = nil)
  ```

</div>

##### Will lead to
`playbackSessionState.timeline.activeSection` being deleted/updated.

### stop
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.stop(reason: StoppedReasons? = StoppedReasons.User)
  ```

- Swift

  ```swift
  session.stop(reason: StoppedReasons = StoppedReasons.User)
  ```

</div>

##### Will lead to
Playback stopping and the playbackSessionState to be reset.

### destroy
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  session.destroy(stopCasting: Boolean = false)
  ```

</div>

##### Will lead to
The session being destroyed and the `delegate.handleDestroyed` being called with the final PlaybackSession state.