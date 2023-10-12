<div class="useless-tab-container">

- TypeScript

  ```ts
  interface AdvertisementStateActive {
    advertisementBreak?: AdvertisementBreak;
    advertisement?: Advertisement;
  }
  ```

- Kotlin

  ```kotlin
  data class AdvertisementStateActive(
    val advertisementBreak: AdvertisementBreak? = null,
    val advertisement: Advertisement? = null
  )
  ```

- Swift

  ```swift
  public struct Active: Codable {
    public var advertisementBreak: Advertisement?=nil
    public var advertisement: AdvertisementBreak?=nil
  }
  ```

</div>