# RecoveryManager

## Properties

### awaitingRecoveryStatus

> **awaitingRecoveryStatus**: `boolean` = `false`

## Accessors

### recoveryModeActive

#### Get Signature

> **get** **recoveryModeActive**(): `boolean`

##### Returns

`boolean`

## Methods

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

`Partial`<[`RecoveryManagerConfiguration`](reference/classes/RecoveryManagerConfiguration.md)>

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

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

### initialize()

> **initialize**(`args`): `void`

#### Parameters

##### args

`RecoveryManagerInitializationArgs`

#### Returns

`void`

***

### preload()

> **preload**(): `void`

#### Returns

`void`

***

### recoveryCompleted()

> **recoveryCompleted**(): `void`

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setRecoveryIntegration()

> **setRecoveryIntegration**(`Integration`): `void`

#### Parameters

##### Integration

`RecoveryIntegrationClass`

#### Returns

`void`
