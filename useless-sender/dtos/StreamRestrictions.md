<div class="useless-tab-container">

- TypeScript

  ```ts
  interface StreamRestrictions {
    pause: boolean;
    seek: boolean;
  }
  ```

- Kotlin

  ```kotlin
  data class StreamRestrictions(
    val pause: Boolean = false, // false === pause is not prohibited
    val seek: Boolean = false // false === seek is not prohibited
  )
  ```

- Swift

  ```swift
  public struct StreamRestrictions: Codable {
    public var pause: Bool? = false
    public var seek: Bool? = false
  }
  ```

</div>