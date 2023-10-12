<div class="useless-tab-container">

- TypeScript

  ```ts
  interface TimelineMetadata extends TimelineItem {
    metadata: Omit<Metadata, 'section'>;
  }
  ```

- Kotlin

  ```kotlin
  data class TimelineMetadata(
    override val auxiliaryData: JsonObject? = null,
    override var duration: Double,
    override var enabled: Boolean,
    override var id: String,
    override var offset: Double,
    override var once: Boolean,
    override var type: TimelineItemTypes,

    val metadata: Metadata
  ): TimelineItem()
  ```

- Swift

  ```swift
  public struct TimelineMetadata:Codable{
    public let metadata:Metadata
  }
  ```

</div>