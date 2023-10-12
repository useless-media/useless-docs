<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TimelineSectionTypes {
    AdvertisementBreak = 'TimelineSectionTypes.AdvertisementBreak',
    ClosingCredits = 'TimelineSectionTypes.ClosingCredits',
    Intro = 'TimelineSectionTypes.Intro',
    Recap = 'TimelineSectionTypes.Recap'
  }
  ```

- Kotlin

  ```kotlin
  enum class TimelineSectionTypes(override val type: String): TypeEnum {
    AdvertisementBreak ("TimelineSectionTypes.AdvertisementBreak"),
    ClosingCredits ("TimelineSectionTypes.ClosingCredits"),
    Intro ("TimelineSectionTypes.Intro"),
    Recap ("TimelineSectionTypes.Recap");
  }
  ```

- Swift

  ```swift
  public enum TimelineSectionTypes:String, Codable {
    case AdvertisementBreak = "TimelineSectionTypes.AdvertisementBreak"
    case ClosingCredits = "TimelineSectionTypes.ClosingCredits"
    case Intro = "TimelineSectionTypes.Intro"
    case Recap = "TimelineSectionTypes.Recap"
  }
  ```

</div>