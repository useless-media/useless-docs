# PlaybackSessionState
[PlaybackSessionStateDescription](PlaybackSessionState.Description.md ':include')

<div class="useless-tab-container">

- TypeScript

  ```ts
  interface PlaybackSessionState {
    advertisement: AdvertisementState;
    content?: Omit<Content, 'streams'>;
    playbackState: PlaybackStates;
    stillWatching?: StillWatching;
    streamRestrictions: StreamRestrictions;
    timeline: Timeline;
    tracks?: Array<Track>;
    volume?: Volume;
  }
  ```

- Kotlin

  ```kotlin
  data class PlaybackSessionState(
    var advertisement: AdvertisementState = AdvertisementState(),
    var content: Content? = null,
    var playbackState: PlaybackStates = PlaybackStates.Idle,
    var stillWatching: StillWatching? = null,
    var streamRestrictions: StreamRestrictions = StreamRestrictions(),
    var timeline: Timeline = Timeline(),
    var tracks: List<Track> = listOf(),
    var volume: Volume = Volume()
  )
  ```

- Swift

  ```swift
  public struct PlaybackSessionState: Codable {
    public var advertisement: AdvertisementState? = AdvertisementState()
    public var content: Content? = nil
    public var nextContent: Content? = nil
    public var playbackState: PlaybackStates? = PlaybackStates.Idle
    public var stillWatching: StillWatching?=nil
    public var timeline: Timeline = Timeline()
    public var tracks: [Track]? = nil
  }
  ```

</div>

## AdvertisementState
[AdvertisementState](dtos/AdvertisementState.md ':include')

### AdvertisementStateActive
[AdvertisementStateActive](dtos/AdvertisementStateActive.md ':include')

#### AdvertisementBreak
[AdvertisementBreak](dtos/AdvertisementBreak.md ':include')

#### Advertisement
[Advertisement](dtos/Advertisement.md ':include')

## Content
[Content](dtos/Content.md ':include')

### Metadata
[Metadata](dtos/Metadata.md ':include')

#### Channel
[Channel](dtos/Channel.md ':include')

#### Image
[Image](dtos/Image.md ':include')

#### Section
[Section](dtos/Section.md ':include')

#### Series
[Series](dtos/Series.md ':include')

### StreamRestrictions
[StreamRestrictions](dtos/StreamRestrictions.md ':include')

## StillWatching
[StillWatching](dtos/StillWatching.md ':include')

## StreamRestrictions
[StreamRestrictions](dtos/StreamRestrictions.md ':include')

## Timeline
[Timeline](dtos/Timeline.md ':include')

### TimelineItem
[TimelineItem](dtos/TimelineItem.md ':include')

### TimelineMetadata
[TimelineMetadata](dtos/TimelineMetadata.md ':include')

### TimelineSection
[TimelineSection](dtos/TimelineSection.md ':include')

### Seekable
[Seekable](dtos/Seekable.md ':include')

### TimelineBehavior
[TimelineBehavior](dtos/TimelineBehavior.md ':include')

## Track
[Track](dtos/Track.md ':include')

## Volume
[Volume](dtos/Volume.md ':include')