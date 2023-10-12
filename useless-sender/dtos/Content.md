<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Content {
    auxiliaryData?: Record<string, any>;
    id: string;
    metadata?: Metadata;
    nextContent: boolean;
    streams: Array<Stream>;
    type?: string;
  }
  ```

- Kotlin

  ```kotlin
  data class Content(
    val auxiliaryData: JsonObject? = null,
    val id: String,
    val metadata: Metadata? = null,
    val nextContent: Boolean = false,
    val streamRestrictions: StreamRestrictions = StreamRestrictions(),
    val type: String? = null
  )
  ```

- Swift

  ```swift
  public struct Content: Codable {
    enum keys: CodingKey {
        case auxiliaryData, id, metadata, nextContent, streamRestrictions, type
    }

    public var auxiliaryData: [String: Any] = [:]
    public var id: String
    public var metadata: Metadata;
    public var nextContent: Bool?;
    public var streamRestrictions: StreamRestrictions?;
  }
  ```

</div>