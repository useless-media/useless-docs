<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Track {
    accessibility: boolean;
    active: boolean;
    id: number;
    language: ISOLanguage;
    name: string;
    roles: Array<Roles>;
    type: TrackTypes;
  }
  ```

- Kotlin

  ```kotlin
  data class Track(
    val accessibility: Boolean,
    val active: Boolean,
    val id: String,
    val language: String,
    val name: String,
    val roles: List<RoleTypes>,
    val type: TrackTypes
  )
  ```

- Swift

  ```swift
  public struct Track: Codable {
    public let active: Bool
    public let accessibility: Bool
    public let id: Int
    public let language: String
    public let name: String
    public let type: TrackTypes
    public let roles: [String]
  }
  ```

</div>