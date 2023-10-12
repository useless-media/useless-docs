<div class="useless-tab-container">

- TypeScript

  ```ts
  enum AdvertisementTypes {
    None = 'AdvertisementTypes.None',
    Csai = 'AdvertisementTypes.Csai',
    Ssai = 'AdvertisementTypes.Ssai'
  }
  ```

- Kotlin

  ```kotlin
  enum class AdvertisementTypes(override val type: String): TypeEnum {
    None("AdvertisementTypes.None"),
    Csai("AdvertisementTypes.Csai"),
    Ssai("AdvertisementTypes.Ssai");
  }
  ```

</div>