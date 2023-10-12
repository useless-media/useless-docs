<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TimelineItemTypes {
    Event = 'TimelineItemTypes.Event',
    Metadata = 'TimelineItemTypes.Metadata',
    Section = 'TimelineItemTypes.Section'
  }
  ```

- Kotlin

  ```kotlin
  enum class TimelineItemTypes(override val type: String): TypeEnum {
    Event ("TimelineItemTypes.Event"),
    Metadata ("TimelineItemTypes.Metadata"),
    Section ("TimelineItemTypes.Section");
  }
  ```

- Swift

  ```swift
  public enum TimelineItemTypes:String, Codable {
    case Event = "TimelineItemTypes.Event"
    case Metadata = "TimelineItemTypes.Metadata"
    case Section = "TimelineItemTypes.Section"
  }
  ```

</div>