# UselessSender
[UselessSenderDescription](UselessSender.Description.md ':include')

## Getters

### Device
Gets the [device](dtos/UselessDevice.md) that the sender is currently connected to, if any.
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.getDevice()
  ```

</div>

### Devices
Gets a list of [devices](dtos/UselessDevice.md) that can be connected to.
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.getDevices()
  ```

</div>

### Session
Gets the current [session](UselessSession.md), if any.
<div class="useless-tab-container">

- TypeScript

  ```ts
  sender.getSession();
  ```

- Kotlin

  ```kotlin
  sender.getSession()
  ```

- Swift

  ```swift
  sender.getSession()
  ```

</div>

### Supported
Indicates whether the library is supported on the user´s device.
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.getSupported()
  ```

</div>

### Version
Version of the library
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.getVersion()
  ```

</div>

## Delegate

### Handling callbacks
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  interface UselessSenderDelegate {
    fun devicesChanged(devices: List<UselessDevice>)
    fun initialized(supported: Boolean)
    fun sessionStarting(device: UselessDevice?)
    fun sessionStarted(session: UselessSession)
    fun sessionEnded(finalSessionState: PlaybackSessionState)
  }

  sender.setDelegate(delegate: UselessSenderDelegate? = null)
  ```

</div>

#### devicesChanged
This is called whenever the list of available devices is updated.

#### initialized
This is called when the sender has been initialized and is ready for interaction.

#### sessionStarting
This is called when attempting to start or resume a [session](UselessSession.md).

#### sessionStarted
This is called when a [session](UselessSession.md) has been started or resumed.

#### sessionEnded
This is called when a [session](UselessSession.md) has ended.

## Commands

### connect
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.connect(device: UselessDevice)
  ```
  
  or
  
  ```kotlin
  sender.connect(deviceName: String)
  ```

- Swift

  ```swift
  sender.connect(device value: Device)
  ```

</div>

### disconnect
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.disconnect(stopCasting: Boolean)
  ```

- Swift

  ```swift
  sender.disconnect(stopCasting value: Bool)
  ```

</div>

### destroy
This will also call disconnect, forwarding `stopCasting`.
<div class="useless-tab-container">

- Kotlin

  ```kotlin
  sender.destroy(stopCasting: Boolean)
  ```

</div>