- TypeScript :useless-tab

  ```ts
  enum MetadataTypes {
    MidRoll = 'AdvertisementBreakTypes.MidRoll',
    PostRoll = 'AdvertisementBreakTypes.PostRoll',
    PreRoll = 'AdvertisementBreakTypes.PreRoll'
  }
  ```

- Kotlin :useless-tab

  ```kotlin
  enum class AdvertisementBreakTypes(override val type: String): TypeEnum {
    MidRoll("AdvertisementBreakTypes.MidRoll"),
    PostRoll("AdvertisementBreakTypes.PostRoll"),
    PreRoll("AdvertisementBreakTypes.PreRoll");
  }
  ```