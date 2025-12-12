# PlaybackEngine

## Extends

- `Listener`

## Extended by

- [`HlsPlaybackEngine`](reference/classes/HlsPlaybackEngine.md)
- [`NativePlaybackEngine`](reference/classes/NativePlaybackEngine.md)
- [`ShakaPlaybackEngine`](reference/classes/ShakaPlaybackEngine.md)

## Constructors

### Constructor

> `protected` **new PlaybackEngine**(`args`): `PlaybackEngine`

#### Parameters

##### args

[`PlaybackEngineArgs`](reference/interfaces/PlaybackEngineArgs.md)

#### Returns

`PlaybackEngine`

#### Overrides

`Listener.constructor`

## Properties

### configurationManager

> `protected` `readonly` **configurationManager**: [`ConfigurationManager`](reference/classes/ConfigurationManager.md)

***

### delegate

> `protected` `readonly` **delegate**: [`PlaybackEngineDelegate`](reference/interfaces/PlaybackEngineDelegate.md)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

***

### mediaElement

> `protected` `readonly` **mediaElement**: [`WackaMediaElement`](reference/interfaces/WackaMediaElement.md)

***

### networkDelegate

> `protected` **networkDelegate**: `Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)> = `DefaultNetworkDelegate`

***

### streamInfo

> **streamInfo**: [`StreamInformation`](reference/interfaces/StreamInformation.md)

***

### throttledBufferMetricsUpdated

> `protected` **throttledBufferMetricsUpdated**: `TThrottledFunction`

***

### throttledLiveOffsetMetricsUpdated

> `protected` **throttledLiveOffsetMetricsUpdated**: `TThrottledFunction`

***

### throttledSeekableRangeUpdated

> `protected` **throttledSeekableRangeUpdated**: `TThrottledFunction`

***

### tracksIntegration

> `abstract` **tracksIntegration**: [`TracksIntegration`](reference/classes/TracksIntegration.md) | `undefined`

***

### type

> **type**: `PlaybackEngineTypes` = `PlaybackEngineTypes.Unknown`

## Methods

### configure()

> `abstract` **configure**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> `abstract` **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`Listener.destroy`

***

### getConfiguration()

> `abstract` **getConfiguration**(): `Promise`<`any`>

#### Returns

`Promise`<`any`>

***

### getNetworkDelegate()

> **getNetworkDelegate**(): `Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

#### Returns

`Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

***

### initialize()

> `abstract` **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### load()

> `abstract` **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`PlaybackEngineLoadArgs`](reference/interfaces/PlaybackEngineLoadArgs.md)

#### Returns

`Promise`<`void`>

***

### pause()

> `abstract` **pause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### play()

> `abstract` **play**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### recreateThrottledUpdaters()

> `protected` **recreateThrottledUpdaters**(): `void`

#### Returns

`void`

***

### reset()

> `abstract` **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### seek()

> `abstract` **seek**(`position`, `relative?`): `Promise`<`void`>

#### Parameters

##### position

`number`

##### relative?

`boolean`

#### Returns

`Promise`<`void`>

***

### setDrmInfo()

> `abstract` **setDrmInfo**(`drm`): `Promise`<`void`>

#### Parameters

##### drm

`Drm`

#### Returns

`Promise`<`void`>

***

### setNetworkDelegate()

> **setNetworkDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`Required`<[`PlaybackEngineNetworkDelegate`](reference/interfaces/PlaybackEngineNetworkDelegate.md)>

#### Returns

`void`

***

### setPlaybackLimitation()

> `abstract` **setPlaybackLimitation**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### stop()

> `abstract` **stop**(`reason?`): `Promise`<`void`>

#### Parameters

##### reason?

`StoppedReasons`

#### Returns

`Promise`<`void`>

***

### IsSupported()

> `static` **IsSupported**(): `boolean`

#### Returns

`boolean`
