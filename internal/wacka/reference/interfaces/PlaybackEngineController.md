# PlaybackEngineController

## Implements

- [`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md)
- [`IStreamCapabilities`](reference/interfaces/IStreamCapabilities.md)

## Properties

### mediaElement

> **mediaElement**: [`WackaMediaElement`](reference/interfaces/WackaMediaElement.md)

***

### name

> **name**: `string` = `'PlaybackEngineController'`

#### Implementation of

`ILoadControllerLoadable.name`

***

### playbackEngineState

> **playbackEngineState**: [`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

## Accessors

### state

#### Get Signature

> **get** **state**(): [`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

##### Returns

[`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

***

### tracksIntegration

#### Get Signature

> **get** **tracksIntegration**(): [`TracksIntegration`](reference/classes/TracksIntegration.md) | `undefined`

##### Returns

[`TracksIntegration`](reference/classes/TracksIntegration.md) | `undefined`

***

### type

#### Get Signature

> **get** **type**(): `PlaybackEngineTypes`

##### Returns

`PlaybackEngineTypes`

## Methods

### canHandleStream()

> **canHandleStream**(`stream`): `Promise`<`boolean`>

#### Parameters

##### stream

`Stream`

#### Returns

`Promise`<`boolean`>

#### Implementation of

`IStreamCapabilities.canHandleStream`

***

### configure()

> **configure**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### createEngine()

> **createEngine**(`playbackEngineType`): `Promise`<[`PlaybackEngine`](reference/classes/PlaybackEngine.md)>

#### Parameters

##### playbackEngineType

`string`

#### Returns

`Promise`<[`PlaybackEngine`](reference/classes/PlaybackEngine.md)>

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getConfiguration()

> **getConfiguration**(): `Promise`<`any`>

#### Returns

`Promise`<`any`>

***

### getHlsReference()

> **getHlsReference**(): `HlsReference` | `undefined`

#### Returns

`HlsReference` | `undefined`

***

### getShakaReference()

> **getShakaReference**(): `ShakaReference` | `undefined`

#### Returns

`ShakaReference` | `undefined`

***

### handleBuffered()

> **handleBuffered**(): `void`

#### Returns

`void`

***

### handleBuffering()

> **handleBuffering**(): `void`

#### Returns

`void`

***

### handleDroppedFrames()

> **handleDroppedFrames**(`frames`, `total`): `void`

#### Parameters

##### frames

`number`

##### total

`number`

#### Returns

`void`

***

### handleDurationChanged()

> **handleDurationChanged**(`absoluteDuration`): `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

***

### handleError()

> **handleError**(`error`): `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

***

### handlePaused()

> **handlePaused**(): `void`

#### Returns

`void`

***

### handlePlaybackMetricsUpdated()

> **handlePlaybackMetricsUpdated**(`metrics`): `void`

#### Parameters

##### metrics

[`PlaybackEnginePlaybackMetrics`](reference/interfaces/PlaybackEnginePlaybackMetrics.md)

#### Returns

`void`

***

### handlePlaybackStateChanged()

> **handlePlaybackStateChanged**(`playbackState`): `void`

#### Parameters

##### playbackState

`PlaybackStates`

#### Returns

`void`

***

### handlePlaying()

> **handlePlaying**(): `void`

#### Returns

`void`

***

### handleSeekableRangeUpdated()

> **handleSeekableRangeUpdated**(`absoluteSeekableRange?`): `void`

#### Parameters

##### absoluteSeekableRange?

`SeekableRange`

#### Returns

`void`

***

### handleSeeked()

> **handleSeeked**(): `void`

#### Returns

`void`

***

### handleSeeking()

> **handleSeeking**(): `void`

#### Returns

`void`

***

### handleSegmentLoaded()

> **handleSegmentLoaded**(`segmentInformation`): `void`

#### Parameters

##### segmentInformation

`SegmentInformation`

#### Returns

`void`

***

### handleSourceBuffers()

> **handleSourceBuffers**(`sourceBuffers`): `void`

#### Parameters

##### sourceBuffers

[`SourceBuffers`](reference/interfaces/SourceBuffers.md)

#### Returns

`void`

***

### handleStreamCue()

> **handleStreamCue**(`streamCue`): `void`

#### Parameters

##### streamCue

`StreamCue`

#### Returns

`void`

***

### handleStreamFinished()

> **handleStreamFinished**(`reason`): `void`

#### Parameters

##### reason

`StoppedReasons`

#### Returns

`void`

***

### handleStreamLoaded()

> **handleStreamLoaded**(): `void`

#### Returns

`void`

***

### handleStreamLoading()

> **handleStreamLoading**(): `void`

#### Returns

`void`

***

### handleTimeUpdated()

> **handleTimeUpdated**(`absoluteTime`, `absoluteEpochTime`): `void`

#### Parameters

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

#### Returns

`void`

***

### handleVolumeChanged()

> **handleVolumeChanged**(`volume`, `muted`): `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### load()

> **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

#### Implementation of

`ILoadControllerLoadable.load`

***

### pause()

> **pause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### play()

> **play**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### preload()

> **preload**(`preload`): `Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

#### Parameters

##### preload

[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)

#### Returns

`Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

#### Implementation of

`ILoadControllerLoadable.preload`

***

### preloadPlayers()

> **preloadPlayers**(`types?`): `Promise`<`void`>

#### Parameters

##### types?

`string`[]

#### Returns

`Promise`<`void`>

***

### registerPlaybackEngine()

> **registerPlaybackEngine**<`TType`>(`type`, `clazz`): `void`

#### Type Parameters

##### TType

`TType` *extends* `string`

#### Parameters

##### type

`TType`

##### clazz

[`IPlaybackEngines`](reference/interfaces/IPlaybackEngines.md)[`TType`]

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

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

***

### selectPlaybackEngine()

> **selectPlaybackEngine**(`stream`): `Promise`<`string`>

#### Parameters

##### stream

`Stream`

#### Returns

`Promise`<`string`>

***

### setHlsReference()

> **setHlsReference**(`ref`): `void`

#### Parameters

##### ref

`HlsReference`

#### Returns

`void`

***

### setMediaElement()

> **setMediaElement**(`mediaElement`): `void`

#### Parameters

##### mediaElement

`HTMLMediaElement`

#### Returns

`void`

***

### setMuted()

> **setMuted**(`muted?`): `Promise`<`void`>

#### Parameters

##### muted?

`boolean`

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

### setPlaybackEngineSelector()

> **setPlaybackEngineSelector**(`playbackEngineSelector?`): `void`

#### Parameters

##### playbackEngineSelector?

[`IPlaybackEngineSelector`](reference/interfaces/IPlaybackEngineSelector.md)

#### Returns

`void`

***

### setPlaybackLimitation()

> **setPlaybackLimitation**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setPlaybackRate()

> **setPlaybackRate**(`playbackRate`): `Promise`<`void`>

#### Parameters

##### playbackRate

`number`

#### Returns

`Promise`<`void`>

***

### setShakaReference()

> **setShakaReference**(`ref`): `void`

#### Parameters

##### ref

`ShakaReference`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume`, `muted?`): `Promise`<`void`>

#### Parameters

##### volume

`number`

##### muted?

`boolean`

#### Returns

`Promise`<`void`>

***

### stop()

> **stop**(`reason?`): `Promise`<`void`>

#### Parameters

##### reason?

`StoppedReasons`

#### Returns

`Promise`<`void`>
