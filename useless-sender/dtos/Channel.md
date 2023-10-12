<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Channel {
    name: string;
    logo?: Image;
  }
  ```

- Kotlin

  ```kotlin
  data class Channel(
    val name: String,
    val logo: Image? = null
  )
  ```

- Swift

  ```swift
  public struct Channel: Codable {
    public var name: String;
    public var logo: UselessImage?=nil;
  }
  ```

</div>