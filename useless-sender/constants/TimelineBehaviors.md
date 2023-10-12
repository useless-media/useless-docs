<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TimelineBehaviors {
    Static = 'TimelineBehaviors.Static',
    Dynamic = 'TimelineBehaviors.Dynamic'
  }
  ```

- Kotlin

  ```kotlin
  enum class TimelineBehaviors(override val type: String): TypeEnum {
    Dynamic("TimelineBehaviors.Dynamic"),
    Static("TimelineBehaviors.Static");
  }
  ```

- Swift

  ```swift
  public enum TimelineBehaviors: String, Codable {
    case Static = "TimelineBehaviors.Static"
    case Dynamic = "TimelineBehaviors.Dynamic"
  }
  ```

</div>