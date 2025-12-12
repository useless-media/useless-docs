# MetricManager

## Properties

### state

> **state**: [`MetricState`](reference/interfaces/MetricState.md)

***

### timeSeries

> **timeSeries**: [`MetricTimeSeries`](reference/interfaces/MetricTimeSeries.md)

## Methods

### addNetworkInfo()

> **addNetworkInfo**(`networkInfo`): `void`

#### Parameters

##### networkInfo

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`void`

***

### addPlaybackMetrics()

> **addPlaybackMetrics**(`metrics`): `void`

#### Parameters

##### metrics

[`PlaybackEnginePlaybackMetrics`](reference/interfaces/PlaybackEnginePlaybackMetrics.md)

#### Returns

`void`

***

### addWackaError()

> **addWackaError**(`error`): `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

***

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

`Partial`<[`MetricManagerConfiguration`](reference/classes/MetricManagerConfiguration.md)>

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

***

### preload()

> **preload**(): `void`

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setAbsoluteTime()

> **setAbsoluteTime**(`absoluteTime`): `void`

#### Parameters

##### absoluteTime

`number`

#### Returns

`void`

***

### setPlaybackState()

> **setPlaybackState**(`playbackState`): `void`

#### Parameters

##### playbackState

`PlaybackStates`

#### Returns

`void`
