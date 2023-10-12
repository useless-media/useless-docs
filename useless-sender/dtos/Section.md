<div class="useless-tab-container">

- TypeScript

  ```ts
  interface Section {
    duration: number;
    startTime: number;
    endTime: number;
  }
  ```

- Kotlin

  ```kotlin
  data class Section(
    val duration: Double,
    val endTime: Double,
    val startTime: Double
  )
  ```

- Swift

  ```swift
  public struct Section: Codable {
    var duration: Double;
    var startTime: Double;
    var endTime: Double;
  }
  ```

</div>