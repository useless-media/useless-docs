# NativePlaybackEngine

## Extends

- [`PlaybackEngine`](reference/classes/PlaybackEngine.md)

## Constructors

### Constructor

> **new NativePlaybackEngine**(`args`): `NativePlaybackEngine`

#### Parameters

##### args

[`NativePlaybackEngineArgs`](reference/interfaces/NativePlaybackEngineArgs.md)

#### Returns

`NativePlaybackEngine`

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`constructor`](PlaybackEngine.md#constructor)

## Properties

### configurationManager

> `protected` `readonly` **configurationManager**: [`ConfigurationManager`](reference/classes/ConfigurationManager.md)

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`configurationManager`](PlaybackEngine.md#configurationmanager)

***

### delegate

> `protected` `readonly` **delegate**: [`PlaybackEngineDelegate`](reference/interfaces/PlaybackEngineDelegate.md)

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`delegate`](PlaybackEngine.md#delegate)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`logger`](PlaybackEngine.md#logger)

***

### mediaElement

> `protected` `readonly` **mediaElement**: [`WackaMediaElement`](reference/interfaces/WackaMediaElement.md)

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`mediaElement`](PlaybackEngine.md#mediaelement)

***

### networkDelegate

> `protected` **networkDelegate**: `Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)> = `DefaultNetworkDelegate`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`networkDelegate`](PlaybackEngine.md#networkdelegate)

***

### streamInfo

> **streamInfo**: [`StreamInformation`](reference/interfaces/StreamInformation.md)

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`streamInfo`](PlaybackEngine.md#streaminfo)

***

### throttledBufferMetricsUpdated

> `protected` **throttledBufferMetricsUpdated**: `TThrottledFunction`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`throttledBufferMetricsUpdated`](PlaybackEngine.md#throttledbuffermetricsupdated)

***

### throttledLiveOffsetMetricsUpdated

> `protected` **throttledLiveOffsetMetricsUpdated**: `TThrottledFunction`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`throttledLiveOffsetMetricsUpdated`](PlaybackEngine.md#throttledliveoffsetmetricsupdated)

***

### throttledSeekableRangeUpdated

> `protected` **throttledSeekableRangeUpdated**: `TThrottledFunction`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`throttledSeekableRangeUpdated`](PlaybackEngine.md#throttledseekablerangeupdated)

***

### tracksIntegration

> **tracksIntegration**: `NativeTracksIntegration` | `undefined`

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`tracksIntegration`](PlaybackEngine.md#tracksintegration)

***

### type

> **type**: `Native` = `PlaybackEngineTypes.Native`

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`type`](PlaybackEngine.md#type)

## Methods

### configure()

> **configure**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`configure`](PlaybackEngine.md#configure)

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`destroy`](PlaybackEngine.md#destroy)

***

### getConfiguration()

> **getConfiguration**(): `Promise`<{ `liveOffsetThreshold?`: `number`; `seekToLiveOnStart?`: `boolean`; }>

#### Returns

`Promise`<{ `liveOffsetThreshold?`: `number`; `seekToLiveOnStart?`: `boolean`; }>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`getConfiguration`](PlaybackEngine.md#getconfiguration)

***

### getNetworkDelegate()

> **getNetworkDelegate**(): `Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

#### Returns

`Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`getNetworkDelegate`](PlaybackEngine.md#getnetworkdelegate)

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`initialize`](PlaybackEngine.md#initialize)

***

### load()

> **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`load`](PlaybackEngine.md#load)

***

### pause()

> **pause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`pause`](PlaybackEngine.md#pause)

***

### play()

> **play**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`play`](PlaybackEngine.md#play)

***

### recreateThrottledUpdaters()

> `protected` **recreateThrottledUpdaters**(): `void`

#### Returns

`void`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`recreateThrottledUpdaters`](PlaybackEngine.md#recreatethrottledupdaters)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`reset`](PlaybackEngine.md#reset)

***

### seek()

> **seek**(`position`, `relative?`): `Promise`<`void`>

#### Parameters

##### position

`number`

##### relative?

`boolean`

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`seek`](PlaybackEngine.md#seek)

***

### setDrmInfo()

> **setDrmInfo**(`drm`): `Promise`<`void`>

#### Parameters

##### drm

`Drm`

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`setDrmInfo`](PlaybackEngine.md#setdrminfo)

***

### setNetworkDelegate()

> **setNetworkDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

#### Returns

`void`

#### Inherited from

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`setNetworkDelegate`](PlaybackEngine.md#setnetworkdelegate)

***

### setPlaybackLimitation()

> **setPlaybackLimitation**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`setPlaybackLimitation`](PlaybackEngine.md#setplaybacklimitation)

***

### stop()

> **stop**(`reason`): `Promise`<`void`>

#### Parameters

##### reason

`StoppedReasons` = `StoppedReasons.Unknown`

#### Returns

`Promise`<`void`>

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`stop`](PlaybackEngine.md#stop)

***

### IsSupported()

> `static` **IsSupported**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`PlaybackEngine`](reference/classes/PlaybackEngine.md).[`IsSupported`](PlaybackEngine.md#issupported)
