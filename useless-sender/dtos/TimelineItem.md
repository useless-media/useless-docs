<div class="useless-tab-container">

- TypeScript

  ```ts
  interface TimelineItem {
    auxiliaryData?: Record<string, any>;
    duration: number;
    enabled: boolean;
    id: string;
    isDynamic?:boolean
    offset: number;
    once: boolean;
    type: TimelineItemTypes;
  }
  ```

- Kotlin

  ```kotlin
  abstract class TimelineItem {
    abstract val auxiliaryData: JsonObject?
    abstract val duration: Double
    abstract val enabled: Boolean
    abstract val id: String
    abstract val offset: Double
    abstract val once: Boolean
    abstract val type: TimelineItemTypes
  }
  ```

- Swift

  ```swift
  public struct TimelineItem:Codable {
    public var duration: Double
    public var enabled: Bool
    public var id: String
    public var offset: Double
    public var once: Bool
    public var type: TimelineItemTypes
  }
  ```

</div>