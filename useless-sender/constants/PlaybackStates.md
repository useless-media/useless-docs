<div class="useless-tab-container">

- TypeScript

  ```ts
  enum PlaybackStates {
    Buffering = 'PlaybackStates.Buffering',
    Idle = 'PlaybackStates.Idle',
    Loading = 'PlaybackStates.Loading',
    Loaded = 'PlaybackStates.Loaded',
    Paused = 'PlaybackStates.Paused',
    Playing = 'PlaybackStates.Playing',
    Seeking = 'PlaybackStates.Seeking',
    Unknown = 'PlaybackStates.Unknown'
  }
  ```

- Kotlin

  ```kotlin
  enum class PlaybackStates(override val type: String): TypeEnum {
    Buffering("PlaybackStates.Buffering"),
    Idle("PlaybackStates.Idle"),
    Loading("PlaybackStates.Loading"),
    Loaded("PlaybackStates.Loaded"),
    Paused("PlaybackStates.Paused"),
    Playing("PlaybackStates.Playing"),
    Seeking("PlaybackStates.Seeking"),
    Unknown("PlaybackStates.Unknown");
  }
  ```

- Swift

  ```swift
  public enum PlaybackStates: String, Codable {
    case Buffering = "PlaybackStates.Buffering"
    case Idle = "PlaybackStates.Idle"
    case Loading = "PlaybackStates.Loading"
    case Loaded = "PlaybackStates.Loaded"
    case Paused = "PlaybackStates.Paused"
    case Playing = "PlaybackStates.Playing"
    case Seeking = "PlaybackStates.Seeking"
    case Unknown = "PlaybackStates.Unknown"
  }
  ```

</div>