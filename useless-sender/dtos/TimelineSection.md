<div class="useless-tab-container">

- TypeScript

  ```ts
  interface TimelineSection extends TimelineItem {
    sectionType: TimelineSectionTypes;
    skippable: boolean;
  }
  ```

- Kotlin

  ```kotlin
  data class TimelineSection(
    override val auxiliaryData: JsonObject? = null,
    override var duration: Double,
    override var enabled: Boolean,
    override var id: String,
    override var offset: Double,
    override var once: Boolean,
    override var type: TimelineItemTypes,

    val sectionType: TimelineSectionTypes,
    val skippable: Boolean,
  ): TimelineItem()
  ```

- Swift

  ```swift
  public struct TimelineSection:Codable {
    public var duration: Double
    public var enabled: Bool
    public var id: String
    public var offset: Double
    public var once: Bool
    public var type: TimelineItemTypes

    public let sectionType: TimelineSectionTypes;
    public let skippable: Bool;
  }
  ```

</div>