<div class="useless-tab-container">

- TypeScript

  ```ts
  enum StoppedReasons {
    AdvertisementSkip = 'StoppedReasons.AdvertisementSkip',
    AdvertisementSwitch = 'StoppedReasons.AdvertisementSwitch',
    ConcurrentStreams = 'StoppedReasons.ConcurrentStreams',
    EndOfStream = 'StoppedReasons.EndOfStream',
    Error = 'StoppedReasons.Error',
    Inactivity = 'StoppedReasons.Inactivity',
    Interrupted = 'StoppedReasons.Interrupted',
    NextContentAutomatic = 'StoppedReasons.NextContentAutomatic',
    User = 'StoppedReasons.User',
    Unknown = 'StoppedReasons.Unknown'
  }
  ```

- Kotlin

  ```kotlin
  enum class StoppedReasons(override val type: String): TypeEnum {
    AdvertisementSkip("StoppedReasons.AdvertisementSkip"),
    AdvertisementSwitch("StoppedReasons.AdvertisementSwitch"),
    ConcurrentStreams("StoppedReasons.ConcurrentStreams"),
    EndOfStream("StoppedReasons.EndOfStream"),
    Error("StoppedReasons.Error"),
    Inactivity("StoppedReasons.Inactivity"),
    Interrupted("StoppedReasons.Interrupted"),
    NextContentAutomatic("StoppedReasons.NextContentAutomatic"),
    User("StoppedReasons.User"),
    Unknown("StoppedReasons.Unknown");
  }
  ```

</div>