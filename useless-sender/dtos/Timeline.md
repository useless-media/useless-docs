<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Timeline {
    activeMetadata?: TimelineMetadata;
    activeSection?: TimelineSection;
    items: Record<string, TimelineItem>;
    position: number;
    seekableRange: Seekable;
    stream0Time: number;
    streamType: StreamTypes;
    timeRepresentation: TimeRepresentations;
    timelineEnd: number;
    timelineStart: number;
    timelineStartOffset: number;
    behavior: TimelineBehavior;
  }
  ```

- Kotlin

  ```kotlin
  data class Timeline(
    var activeMetadata: TimelineMetadata? = null,
    var activeSection: TimelineSection? = null,
    var items: Map<String, TimelineItem> = mapOf(),

    var position: Double = 0.0,
    var seekableRange: Seekable? = null,
    var streamTypes: StreamTypes = StreamTypes.OnDemand,
    var timeRepresentation: TimeRepresentations = TimeRepresentations.ZeroBased,
    var timelineEnd: Double = 0.0,
    var timelineStart: Double = 0.0,
    var behavior: TimelineBehavior = TimelineBehavior()
  )
  ```

- Swift

  ```swift
  public class Timeline: Codable {
    public var activeMetadata: TimelineMetadata?=nil;
    public var activeSection: TimelineSection?=nil;
    public var items: [String: TimelineItem]? = [:]
    public var position: Double = 0
    public var seekableRange: TimelineSeekableRange?=nil
    public var timeRepresentation: TimeRepresentations? = TimeRepresentations.ZeroBased;
    public var timelineEnd: Double = 0
    public var timelineStart:Double = 0
    public var behavior:TimelineBehavior = TimelineBehavior()
  }
  ```

</div>