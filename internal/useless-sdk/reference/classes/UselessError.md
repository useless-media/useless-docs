# UselessError<T>

## Extends

- `Error`

## Extended by

- [`ArgumentError`](reference/classes/ArgumentError.md)
- [`HttpError`](reference/classes/HttpError.md)
- [`LicenseError`](reference/classes/LicenseError.md)

## Type Parameters

### T

`T` *extends* [`IErrorDetails`](reference/interfaces/IErrorDetails.md) = { }

## Implements

- [`IUselessError`](reference/interfaces/IUselessError.md)<`T`>

## Constructors

### Constructor

> **new UselessError**<`T`>(`args`): `UselessError`<`T`>

#### Parameters

##### args

[`UselessErrorArgs`](reference/interfaces/UselessErrorArgs.md)<`T`>

#### Returns

`UselessError`<`T`>

#### Overrides

`Error.constructor`

## Properties

### category

> **category**: `string`

#### Implementation of

`IUselessError.category`

***

### code

> **code**: [`IErrorCode`](reference/interfaces/IErrorCode.md)

#### Implementation of

`IUselessError.code`

***

### details?

> **details**?: `T`

#### Implementation of

`IUselessError.details`

***

### displayMessage?

> **displayMessage**?: `string`

#### Implementation of

`IUselessError.displayMessage`

***

### label?

> **label**?: `string`

#### Implementation of

`IUselessError.label`

***

### message

> **message**: `string`

#### Implementation of

`IUselessError.message`

#### Overrides

`Error.message`

***

### name

> **name**: `string`

#### Implementation of

`IUselessError.name`

#### Overrides

`Error.name`

***

### origin

> **origin**: `string`

#### Implementation of

`IUselessError.origin`

***

### originalError?

> **originalError**?: `TUselessErrorErrorUnion`

#### Implementation of

[`IUselessError`](reference/interfaces/IUselessError.md).[`originalError`](../interfaces/IUselessError.md#originalerror)

***

### severity

> **severity**: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

#### Implementation of

`IUselessError.severity`

***

### source?

> **source**?: `string`

#### Implementation of

`IUselessError.source`

***

### stack?

> **stack**?: `string`

#### Implementation of

`IUselessError.stack`

#### Overrides

`Error.stack`

***

### stackedErrors

> **stackedErrors**: [`IError`](reference/interfaces/IError.md)[]

#### Implementation of

`IUselessError.stackedErrors`

***

### type

> **type**: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### Implementation of

`IUselessError.type`

## Accessors

### fatal

#### Get Signature

> **get** **fatal**(): `boolean`

##### Returns

`boolean`

## Methods

### stackError()

> **stackError**(`error`): `void`

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`void`
