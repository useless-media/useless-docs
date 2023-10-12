<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Metadata {
    auxiliaryData?: Record<string, any>;
    channel?: Channel;
    description?: string;
    images: Array<Image>;
    poster?: Image;
    releaseDate?: string;
    section?: Section;
    series?: Series;
    title?: string;
    type: MetadataTypes;
  }
  ```

- Kotlin

  ```kotlin
  data class Metadata(
    val auxiliaryData: JsonObject? = null,
    var channel: Channel? = null,
    val description: String? = null,
    val images: List<Image>? = null,
    val poster: Image? = null,
    var releaseDate: String? = null,
    var section: Section? = null,
    var series: Series? = null,
    val title: String? = null,
    var type: MetadataTypes = MetadataTypes.Unknown
  )
  ```

- Swift

  ```swift
  public struct Metadata: Codable {
     public var channel: Channel?=nil;
     public var description: String?=nil;
     public var images: Array<UselessImage>? = [];
     public var poster: UselessImage?=nil;
     public var releaseDate: String?=nil;
     public var series: Series?=nil;
     public var title: String;
  }
  ```

</div>