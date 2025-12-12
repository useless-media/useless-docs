# DefaultRecoveryIntegration

## Extends

- [`RecoveryIntegration`](reference/classes/RecoveryIntegration.md)

## Constructors

### Constructor

> **new DefaultRecoveryIntegration**(`args`): `DefaultRecoveryIntegration`

#### Parameters

##### args

[`RecoveryIntegrationArgs`](reference/interfaces/RecoveryIntegrationArgs.md)

#### Returns

`DefaultRecoveryIntegration`

#### Overrides

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`constructor`](RecoveryIntegration.md#constructor)

## Properties

### attempts

> `protected` **attempts**: `number` = `0`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`attempts`](RecoveryIntegration.md#attempts)

***

### handleRecoveryFailed()

> `protected` `readonly` **handleRecoveryFailed**: (`error`) => `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`handleRecoveryFailed`](RecoveryIntegration.md#handlerecoveryfailed)

***

### loadController

> `protected` **loadController**: `LoadController`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`loadController`](RecoveryIntegration.md#loadcontroller)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`logger`](RecoveryIntegration.md#logger)

***

### maxAttempts

> `protected` **maxAttempts**: `number` = `5`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`maxAttempts`](RecoveryIntegration.md#maxattempts)

***

### playbackEngineController

> `protected` **playbackEngineController**: [`PlaybackEngineController`](reference/interfaces/PlaybackEngineController.md)

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`playbackEngineController`](RecoveryIntegration.md#playbackenginecontroller)

***

### recoveryActions

> **recoveryActions**: `Record`<`string`, `RecoveryActionSignature`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`recoveryActions`](RecoveryIntegration.md#recoveryactions)

***

### recoveryFlows

> `protected` **recoveryFlows**: `Record`<`RecoveryFlowKey`, [`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`recoveryFlows`](RecoveryIntegration.md#recoveryflows)

***

### recoveryModeActive

> **recoveryModeActive**: `boolean` = `false`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`recoveryModeActive`](RecoveryIntegration.md#recoverymodeactive)

***

### retryConfiguration

> `protected` **retryConfiguration**: `any`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`retryConfiguration`](RecoveryIntegration.md#retryconfiguration)

***

### streamController

> `protected` **streamController**: [`StreamController`](reference/classes/StreamController.md)

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`streamController`](RecoveryIntegration.md#streamcontroller)

## Accessors

### playbackEngineState

#### Get Signature

> **get** `protected` **playbackEngineState**(): [`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

##### Returns

[`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`playbackEngineState`](RecoveryIntegration.md#playbackenginestate)

## Methods

### abandonedCurrentStream()

> **abandonedCurrentStream**(`error`, `stream?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`abandonedCurrentStream`](RecoveryIntegration.md#abandonedcurrentstream)

***

### abandonedCurrentStreamTechnology()

> **abandonedCurrentStreamTechnology**(`error`, `stream?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`abandonedCurrentStreamTechnology`](RecoveryIntegration.md#abandonedcurrentstreamtechnology)

***

### createRecoveryFlow()

> `protected` **createRecoveryFlow**(`args`): [`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)

#### Parameters

##### args

[`RecoveryFlowArgs`](reference/interfaces/RecoveryFlowArgs.md)

#### Returns

[`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`createRecoveryFlow`](RecoveryIntegration.md#createrecoveryflow)

***

### delay()

> **delay**(`error`, `stream?`, `options?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

##### options?

[`DelayOptions`](reference/interfaces/DelayOptions.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`delay`](RecoveryIntegration.md#delay)

***

### getRecoveryFlow()

> `protected` **getRecoveryFlow**(`error`, `stream?`): [`RecoveryFlow`](reference/interfaces/RecoveryFlow.md) | `undefined`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

[`RecoveryFlow`](reference/interfaces/RecoveryFlow.md) | `undefined`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`getRecoveryFlow`](RecoveryIntegration.md#getrecoveryflow)

***

### handleError()

> **handleError**(`error`, `errorType`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### errorType

[`RecoveryErrorType`](reference/enumerations/RecoveryErrorType.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`handleError`](RecoveryIntegration.md#handleerror)

***

### handleLoadError()

> **handleLoadError**(`error`, `stream?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

`Promise`<`void`>

#### Overrides

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`handleLoadError`](RecoveryIntegration.md#handleloaderror)

***

### handlePlaybackError()

> **handlePlaybackError**(`error`, `stream?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

`Promise`<`void`>

#### Overrides

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`handlePlaybackError`](RecoveryIntegration.md#handleplaybackerror)

***

### handlePreloadError()

> **handlePreloadError**(`error`, `stream?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

#### Returns

`Promise`<`void`>

#### Overrides

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`handlePreloadError`](RecoveryIntegration.md#handlepreloaderror)

***

### recoveryCompleted()

> **recoveryCompleted**(): `void`

#### Returns

`void`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`recoveryCompleted`](RecoveryIntegration.md#recoverycompleted)

***

### registerRecoveryAction()

> `protected` **registerRecoveryAction**(`recoveryActionKey`, `action`): `void`

#### Parameters

##### recoveryActionKey

`string`

##### action

`RecoveryActionSignature`

#### Returns

`void`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`registerRecoveryAction`](RecoveryIntegration.md#registerrecoveryaction)

***

### registerRecoveryFlow()

> `protected` **registerRecoveryFlow**(`args`): `void`

#### Parameters

##### args

[`RecoveryFlowArgs`](reference/interfaces/RecoveryFlowArgs.md)

#### Returns

`void`

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`registerRecoveryFlow`](RecoveryIntegration.md#registerrecoveryflow)

***

### updateRecoveryOptions()

> **updateRecoveryOptions**(`error`, `stream?`, `options?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

##### options?

[`RecoveryOptions`](reference/interfaces/RecoveryOptions.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`updateRecoveryOptions`](RecoveryIntegration.md#updaterecoveryoptions)

***

### updateStreamControllerRestrictions()

> **updateStreamControllerRestrictions**(`error`, `stream?`, `options?`): `Promise`<`void`>

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### stream?

`Stream`

##### options?

[`UpdateStreamControllerRestrictionsOptions`](reference/interfaces/UpdateStreamControllerRestrictionsOptions.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`RecoveryIntegration`](reference/classes/RecoveryIntegration.md).[`updateStreamControllerRestrictions`](RecoveryIntegration.md#updatestreamcontrollerrestrictions)
