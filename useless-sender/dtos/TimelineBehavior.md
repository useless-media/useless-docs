<div class="useless-tab-container">

- TypeScript

  ```ts
  interface TimelineBehavior {
    position: TimelineBehaviors;
    timelineStart: TimelineBehaviors;
    timelineEnd: TimelineBehaviors;
    seekableStart: TimelineBehaviors;
    seekableEnd: TimelineBehaviors;
  }
  ```

- Kotlin

  ```kotlin
  data class TimelineBehavior(
    val position: TimelineBehaviors = TimelineBehaviors.Dynamic,
    val seekableEnd: TimelineBehaviors = TimelineBehaviors.Static,
    val seekableStart: TimelineBehaviors = TimelineBehaviors.Static,
    val timelineEnd: TimelineBehaviors = TimelineBehaviors.Static,
    val timelineStart: TimelineBehaviors = TimelineBehaviors.Static
  )
  ```

- Swift

  ```swift
  public struct TimelineBehavior:Codable {
    public var position: TimelineBehaviors? = TimelineBehaviors.Static
    public var timelineStart: TimelineBehaviors? = TimelineBehaviors.Static
    public var timelineEnd: TimelineBehaviors? = TimelineBehaviors.Static
    public var seekableStart: TimelineBehaviors? = TimelineBehaviors.Static
    public var seekableEnd: TimelineBehaviors? = TimelineBehaviors.Static
  }
  ```

</div>