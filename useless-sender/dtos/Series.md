<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Series {
    episode?: number;
    season?: number;
    title: string;
  }
  ```

- Kotlin

  ```kotlin
  data class Series(
    val title: String,
    val season: Int? = null,
    val episode: Int? = null,
  )
  ```

- Swift

  ```swift
  public struct Series: Codable {
   public let title: String
    public var season: Int?=nil
    public var episode: Int?=nil
  }
  ```

</div>