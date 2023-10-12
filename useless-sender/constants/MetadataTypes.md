<div class="useless-tab-container">

- TypeScript

  ```ts
  enum MetadataTypes {
    AudioBookChapter = 'MetadataTypes.AudioBookChapter',
    Generic = 'MetadataTypes.Generic',
    Movie = 'MetadataTypes.Movie',
    MusicTrack = 'MetadataTypes.MusicTrack',
    Photo = 'MetadataTypes.Photo',
    TvShow = 'MetadataTypes.TvShow',
    Unknown = 'MetadataTypes.Unknown',
    User = 'MetadataTypes.User'
  }
  ```

- Kotlin

  ```kotlin
  enum class MetadataTypes(override val type: String): TypeEnum {
    AudioBookChapter("MetadataTypes.AudioBookChapter"),
    Generic("MetadataTypes.Generic"),
    Movie("MetadataTypes.Movie"),
    MusicTrack("MetadataTypes.MusicTrack"),
    Photo("MetadataTypes.Photo"),
    TvShow("MetadataTypes.TvShow"),
    Unknown("MetadataTypes.Unknown"),
    User("MetadataTypes.User");
  }
  ```

- Swift

  ```swift
  public enum MetadataTypes: String, Codable {
    case AudioBookChapter = "MetadataTypes.AudioBookChapter"
    case Generic = "MetadataTypes.Generic"
    case Movie = "MetadataTypes.Movie"
    case MusicTrack = "MetadataTypes.MusicTrack"
    case Photo = "MetadataTypes.Photo"
    case TvShow = "MetadataTypes.TvShow"
    case Unknown = "MetadataTypes.Unknown"
    case User = "MetadataTypes.User"
  }
  ```

</div>