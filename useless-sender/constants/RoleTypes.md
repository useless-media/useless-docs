<div class="useless-tab-container">

- TypeScript

  ```ts
  enum Roles {
    Caption = 'caption', // [video, text]
    Subtitle = 'subtitle', // [video, text]
    Main = 'main', // [any]
    Alternate = 'alternate', // [any]
    Supplementary = 'supplementary', // [any]
    Commentary = 'commentary', // [audio, text]
    Dub = 'dub', // [audio, text]
    Description = 'description', // [audio, text]
    Sign = 'sign', // [video]
    Metadata = 'metadata', // [text]
    Emergency = 'emergency', // [any]
    Easyreader = 'easyreader', // [text, video]
    EnhancedAudioIntelligibility = 'enhanced-audio-intelligibility', // [audio]
    ForcedSubtitle = 'forced-subtitle' // [text]
  }
  ```

- Kotlin

  ```kotlin
  enum class RoleTypes(override val type: String): TypeEnum {
    Caption("caption"),
    Subtitle("subtitle"),
    Main("main"),
    Alternate("alternate"),
    Supplementary("supplementary"),
    Commentary("commentary"),
    Dub("dub"),
    Description("description"),
    Sign("sign"),
    Metadata("metadata"),
    Emergency("emergency"),
    Easyreader("easyreader"),
    EnhancedAudioIntelligibility("enhanced-audio-intelligibility"),
    ForcedSubtitle("forced-subtitle");
  }
  ```

- Swift

  ```swift
  public enum RoleTypes: String, Codable {
    case Caption = "caption"
    case Subtitle = "subtitle"
    case Main = "main"
    case Alternate = "alternate"
    case Supplementary = "supplementary"
    case Commentary = "commentary"
    case Dub = "dub"
    case Description = "description"
    case Sign = "sign"
    case Metadata = "metadata"
    case Emergency = "emergency"
    case Easyreader = "easyreader"
    case EnhancedAudioIntelligibility = "enhanced-audio-intelligibility"
    case ForcedSubtitle = "forced-subtitle"
  }
  ```

</div>