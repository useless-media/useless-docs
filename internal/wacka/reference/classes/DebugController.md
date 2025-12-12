# DebugController

## Constructors

### Constructor

> **new DebugController**(`args`): `DebugController`

#### Parameters

##### args

[`DebugControllerArgs`](reference/interfaces/DebugControllerArgs.md)

#### Returns

`DebugController`

## Accessors

### mediaElement

#### Get Signature

> **get** **mediaElement**(): `HTMLMediaElement` | `undefined`

##### Returns

`HTMLMediaElement` | `undefined`

***

### metrics

#### Get Signature

> **get** **metrics**(): `object`

##### Returns

`object`

###### enabled

> **enabled**: `boolean`

###### state

> **state**: [`MetricState`](reference/interfaces/MetricState.md)

###### timeSeries

> **timeSeries**: [`MetricTimeSeries`](reference/interfaces/MetricTimeSeries.md)

***

### playbackEngine

#### Get Signature

> **get** **playbackEngine**(): [`PlaybackEngine`](reference/classes/PlaybackEngine.md) | `undefined`

##### Returns

[`PlaybackEngine`](reference/classes/PlaybackEngine.md) | `undefined`

***

### player

#### Get Signature

> **get** **player**(): `any`

##### Returns

`any`

***

### recovery

#### Get Signature

> **get** **recovery**(): `object`

##### Returns

`object`

###### active

> **active**: `boolean`

###### enabled

> **enabled**: `boolean`

###### integration?

> **integration**?: [`RecoveryIntegration`](reference/classes/RecoveryIntegration.md)

###### report

> **report**: [`RecoveryReport`](reference/classes/RecoveryReport.md)

***

### restrictions

#### Get Signature

> **get** **restrictions**(): [`StreamControllerRestrictions`](reference/classes/StreamControllerRestrictions.md)

##### Returns

[`StreamControllerRestrictions`](reference/classes/StreamControllerRestrictions.md)

***

### wackaMediaElement

#### Get Signature

> **get** **wackaMediaElement**(): [`WackaMediaElement`](reference/interfaces/WackaMediaElement.md)

##### Returns

[`WackaMediaElement`](reference/interfaces/WackaMediaElement.md)

## Methods

### clearRecoveryStorage()

> **clearRecoveryStorage**(): `void`

#### Returns

`void`

***

### clearRecoveryStorageAndRestrictions()

> **clearRecoveryStorageAndRestrictions**(): `void`

#### Returns

`void`

***

### clearRestrictions()

> **clearRestrictions**(): `void`

#### Returns

`void`

***

### enableDebugLogging()

> **enableDebugLogging**(): `void`

#### Returns

`void`

***

### getLogLevel()

> **getLogLevel**(): `LogLevels`

#### Returns

`LogLevels`

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

##### level

`LogLevels`

#### Returns

`void`

***

### simulateDecodeError()

> **simulateDecodeError**(`type`): `Promise`<`void`>

#### Parameters

##### type

[`RecoveryErrorType`](reference/enumerations/RecoveryErrorType.md) = `RecoveryErrorType.Playback`

#### Returns

`Promise`<`void`>

***

### simulateError()

> **simulateError**(`code`, `type`): `Promise`<`void`>

#### Parameters

##### code

`WackaErrorCodes`

##### type

[`RecoveryErrorType`](reference/enumerations/RecoveryErrorType.md) = `RecoveryErrorType.Playback`

#### Returns

`Promise`<`void`>
