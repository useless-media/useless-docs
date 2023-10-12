<div class="useless-tab-container">

- TypeScript

  ```ts
  enum PlaybackSessionEventKeys {
    // Receiver
    Advertisement = 'advertisement',
    Content = 'content',
    ContentMetadata = 'content.metadata',
    PlaybackState = 'playbackState',
    Tracks = 'tracks',
    TracksActive = 'tracks.active',
    Volume = 'volume',
  
    // Client
    AdvertisementActiveAdvertisement = 'advertisement.active.advertisement',
    AdvertisementActiveAdvertisementBreak = 'advertisement.active.advertisementBreak',
    StillWatching = 'stillWatching',
    StillWatchingRemaining = 'stillWatching.remaining',
    StreamRestrictions = 'streamRestrictions',
    Timeline = 'timeline',
    TimelineActiveMetadata = 'timeline.activeMetadata',
    TimelineActiveSection = 'timeline.activeSection',
    TimelineBehavior = 'timeline.behavior',
    TimelineItems = 'timeline.items',
    TimelinePosition = 'timeline.position',

    All = '*'
  }
  ```

- Kotlin

  ```kotlin
  enum class PlaybackSessionEventKeys(override val type: String): TypeEnum {
    // Receiver
    Advertisement("advertisement"),
    Content("content"),
    ContentMetadata("content.metadata"),
    PlaybackState("playbackState"),
    Tracks("tracks"),
    TracksActive("tracks.active"),
    Volume("volume"),

    // Client
    AdvertisementActiveAdvertisement("advertisement.active.advertisement"),
    AdvertisementActiveAdvertisementBreak("advertisement.active.advertisementBreak"),
    StillWatching("stillWatching"),
    StillWatchingRemaining("stillWatching.remaining"),
    StreamRestrictions("streamRestrictions"),
    Timeline("timeline"),
    TimelineActiveMetadata("timeline.activeMetadata"),
    TimelineActiveSection("timeline.activeSection"),
    TimelineBehavior("timeline.behavior"),
    TimelineItems("timeline.items"),
    TimelinePosition("timeline.position"),

    All("*"),

    Unknown("unknown");
  }
  ```

- Swift

  ```swift
  public enum PlaybackSessionEventKeys: String {
    //playback
    case Advertisement = "advertisement"
    case Autoplay = "autoplay"
    case Bitrate = "bitrate"
    case Content = "content"
    case ContentMetadata = "content.metadata"
    case CurrentTime = "currentTime"
    case Duration = "duration"
    case EpochTime = "epochTime"
    case PlaybackState = "playbackState"
    case SeekableRange = "seekableRange"
    case Stream = "stream"
    case Tracks = "tracks"
    case TracksActive = "tracks.active"
    case Volume = "volume"
    //client
    case AdvertisementActiveAdvertisement = "advertisement.active.advertisement"
    case AdvertisementActiveAdvertisementBreak = "advertisement.active.advertisementBreak"
    case Error = "error"
    case NextContent = "nextContent"
    case StillWatching = "stillWatching"
    case StillWatchingRemaining = "stillWatching.remaining"
    case Timeline = "timeline"
    case TimelineActiveMetadata = "timeline.activeMetadata"
    case TimelineActiveSection = "timeline.activeSection"
    case TimelineBehavior = "timeline.behavior"
    case TimelineItems = "timeline.items"
    case TimelinePosition = "timeline.position"
    //wildcard
    case All = "*"
    //utils
    case Unknown = "unknown"
  }
  ```

</div>