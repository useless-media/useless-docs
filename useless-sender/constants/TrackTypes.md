<div class="useless-tab-container">

- TypeScript

  ```ts
  enum TrackTypes {
    Audio = 'TrackTypes.Audio',
    Text = 'TrackTypes.Text',
    Video = 'TrackTypes.Video',
    Unknown = 'TrackTypes.Unknown'
  }
  ```

- Kotlin

  ```kotlin
  enum class TrackTypes(override val type: String): TypeEnum {
    Audio("TrackTypes.Audio"),
    Text("TrackTypes.Text"),
    Video("TrackTypes.Video"),
    Unknown("TrackTypes.Unknown");
  }
  ```

- Swift

  ```swift
  public enum TrackTypes: String, Codable {
    case Audio = "TrackTypes.Audio"
    case Text = "TrackTypes.Text"
    case Video = "TrackTypes.Video"
    case Unknown = "TrackTypes.Unknow"
  }
  ```

</div>