<div class="useless-tab-container">

- TypeScript

  ```ts
  interface StillWatching {
    interactionTimeout: number;
    remaining?: number;
  }
  ```

- Kotlin

  ```kotlin
  data class StillWatching(
    val interactionTimeout: Int,
    val remaining: Double? = null
  )
  ```

- Swift

  ```swift
  public class StillWatching: Codable {
    public var interactionTimeout: Double
    public var remaining: Double? = nil
  }
  ```

</div>