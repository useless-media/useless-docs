<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Advertisement {
    id: string;
    active: boolean;
    auxiliaryData?: Record<string, any>;
    completion: number;
    duration: number;
    name: string;
    position?: number;
    title?: string;
    watched: boolean;
  }
  ```

- Kotlin

  ```kotlin
  data class Advertisement(
    val active: Boolean,
    val auxiliaryData: JsonObject? = null,
    val completion: Double = 0.0,
    val duration: Double = 0.0,
    val id: String,
    val name: String? = null,
    val position: Double? = null,
    val title: String? = null,
    val watched: Boolean = false
  )
  ```

- Swift

  ```swift
  public struct Advertisement: Codable{
    public let id: String
    public let duration: Double
    public let name: String
    public var title: String?=nil
  }
  ```

</div>