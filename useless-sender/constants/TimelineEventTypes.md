<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TimelineEventTypes {
    Custom = 'TimelineEventTypes.Custom',
    PrepareNextContent = 'TimelineEventTypes.PrepareNextContent'
  }
  ```

- Kotlin

  ```kotlin
  enum class TimelineEventTypes(override val type: String): TypeEnum {
    Custom ("TimelineEventTypes.Custom"),
    PrepareNextContent ("TimelineEventTypes.PrepareNextContent");
  }
  ```

- Swift

  ```swift
  public enum TimelineEventTypes: String, Codable {
    case Custom = "TimelineEventTypes.Custom"
    case PrepareNextContent = "TimelineEventTypes.PrepareNextContent"
  }
  ```

</div>