<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TimeRepresentations {
    Epoch = 'TimeRepresentations.Epoch',
    ZeroBased = 'TimeRepresentations.ZeroBased'
  }
  ```

- Kotlin

  ```kotlin
  enum class TimeRepresentations(override val type: String): TypeEnum {
    Epoch ("TimeRepresentations.Epoch"),
    ZeroBased ("TimeRepresentations.ZeroBased");
  }
  ```

- Swift

  ```swift
  public enum TimeRepresentations:String, Codable {
    case Epoch = "TimeRepresentations.Epoch"
    case ZeroBased = "TimeRepresentations.ZeroBased"
  }
  ```

</div>