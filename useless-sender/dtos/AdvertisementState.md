<div class="useless-tab-container">

- TypeScript

  ```ts
  interface AdvertisementState {
    active: AdvertisementStateActive;
  }
  ```

- Kotlin

  ```kotlin
  data class AdvertisementState(
    val active: AdvertisementStateActive = AdvertisementStateActive()
  )
  ```

- Swift

  ```swift
  public struct AdvertisementState: Codable {
    public let active: Active = Active()
  }
  ```

</div>