# RecoveryIntegration

## Extended by

- [`DefaultRecoveryIntegration`](reference/classes/DefaultRecoveryIntegration.md)

## Implements

- [`IRecoveryActions`](reference/interfaces/IRecoveryActions.md)

## Constructors

### Constructor

> `protected` **new RecoveryIntegration**(`args`): `RecoveryIntegration`

#### Parameters

##### args

[`RecoveryIntegrationArgs`](reference/interfaces/RecoveryIntegrationArgs.md)

#### Returns

`RecoveryIntegration`

## Properties

### attempts

> `protected` **attempts**: `number` = `0`

***

### handleRecoveryFailed()

> `protected` `readonly` **handleRecoveryFailed**: (`error`) => `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

***

### loadController

> `protected` **loadController**: `LoadController`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

***

### maxAttempts

> `protected` **maxAttempts**: `number` = `5`

***

### playbackEngineController

> `protected` **playbackEngineController**: [`PlaybackEngineController`](reference/interfaces/PlaybackEngineController.md)

***

### recoveryActions

> **recoveryActions**: `Record`<`string`, `RecoveryActionSignature`>

***

### recoveryFlows

> `protected` **recoveryFlows**: `Record`<`RecoveryFlowKey`, [`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)>

***

### recoveryModeActive

> **recoveryModeActive**: `boolean` = `false`

***

### retryConfiguration

> `protected` **retryConfiguration**: `any`

***

### streamController

> `protected` **streamController**: [`StreamController`](reference/classes/StreamController.md)

## Accessors

### playbackEngineState

#### Get Signature

> **get** `protected` **playbackEngineState**(): [`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

##### Returns

[`PlaybackEngineState`](reference/interfaces/PlaybackEngineState.md)

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

#### Implementation of

[`IRecoveryActions`](reference/interfaces/IRecoveryActions.md).[`abandonedCurrentStream`](../interfaces/IRecoveryActions.md#abandonedcurrentstream)

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

***

### createRecoveryFlow()

> `protected` **createRecoveryFlow**(`args`): [`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)

#### Parameters

##### args

[`RecoveryFlowArgs`](reference/interfaces/RecoveryFlowArgs.md)

#### Returns

[`RecoveryFlow`](reference/interfaces/RecoveryFlow.md)

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

#### Implementation of

[`IRecoveryActions`](reference/interfaces/IRecoveryActions.md).[`delay`](../interfaces/IRecoveryActions.md#delay)

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

***

### recoveryCompleted()

> **recoveryCompleted**(): `void`

#### Returns

`void`

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

***

### registerRecoveryFlow()

> `protected` **registerRecoveryFlow**(`args`): `void`

#### Parameters

##### args

[`RecoveryFlowArgs`](reference/interfaces/RecoveryFlowArgs.md)

#### Returns

`void`

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

#### Implementation of

[`IRecoveryActions`](reference/interfaces/IRecoveryActions.md).[`updateRecoveryOptions`](../interfaces/IRecoveryActions.md#updaterecoveryoptions)

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

#### Implementation of

[`IRecoveryActions`](reference/interfaces/IRecoveryActions.md).[`updateStreamControllerRestrictions`](../interfaces/IRecoveryActions.md#updatestreamcontrollerrestrictions)
