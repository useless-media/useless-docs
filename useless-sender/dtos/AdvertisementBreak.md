<div class="useless-tab-container">

- TypeScript

  ```ts
  interface AdvertisementBreak {
    id: string;
    type: AdvertisementBreakTypes;
    active: boolean;
    advertisementIds: Array<string>;
    auxiliaryData?: Record<string, any>;
    completion: number;
    contentPosition?: number;
    duration: number;
    embedded: boolean;
    name: string;
    position: number;
    watched: boolean;
  }
  ```

- Kotlin

  ```kotlin
  data class AdvertisementBreak(
    var active: Boolean = false,
    val advertisementIds: List<String>?,
    val auxiliaryData: JsonObject? = null,
    val completion: Double,
    val contentPosition: Double? = null,
    val duration: Double,
    val embedded: Boolean,
    val id: String,
    val name: String,
    val position: Double,
    val type: AdvertisementBreakTypes,
    var watched: Boolean = false
  )
  ```

- Swift

  ```swift
  public struct AdvertisementBreak: Codable {
    public let id: String
    public let active: Bool
    public let advertisementIds: [String]
    public let completion: Double
    public var contentPosition: Double?=nil
    public let duration: Double
    public let embedded: Bool
    public let name: String
    public let position: Double
    public let watched: Bool
  }
  ```

</div>