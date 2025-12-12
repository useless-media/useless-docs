# RecoveryReport

## Constructors

### Constructor

> **new RecoveryReport**(): `RecoveryReport`

#### Returns

`RecoveryReport`

## Properties

### attempts

> **attempts**: `Record`<`string`, [`RecoveryReportAttempt`](reference/interfaces/RecoveryReportAttempt.md)> = `{}`

***

### initialError?

> **initialError**?: [`WackaError`](reference/classes/WackaError.md)<{ }>

***

### recoveryStart?

> **recoveryStart**?: `number`

***

### recoveryStop?

> **recoveryStop**?: `number`

***

### recoveryTime?

> **recoveryTime**?: `number`

***

### successful?

> **successful**?: `boolean`

## Methods

### getCurrentAttempt()

> **getCurrentAttempt**(): [`RecoveryReportAttempt`](reference/interfaces/RecoveryReportAttempt.md) | `undefined`

#### Returns

[`RecoveryReportAttempt`](reference/interfaces/RecoveryReportAttempt.md) | `undefined`

***

### recoveryCompleted()

> **recoveryCompleted**(): `void`

#### Returns

`void`

***

### recoveryFailed()

> **recoveryFailed**(`error`): `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

***

### registerAttempt()

> **registerAttempt**(`error`, `data`): `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

##### data

`Record`<`string`, `any`>

#### Returns

`void`
