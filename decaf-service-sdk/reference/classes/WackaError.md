# WackaError<T>

## Extends

- [`UselessError`](reference/classes/UselessError.md)<`T`>

## Extended by

- [`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md)
- [`WackaMediaElementError`](reference/classes/WackaMediaElementError.md)

## Type Parameters

### T

`T` *extends* [`IErrorDetails`](reference/interfaces/IErrorDetails.md) = { }

## Constructors

### Constructor

> **new WackaError**<`T`>(`args`): `WackaError`<`T`>

#### Parameters

##### args

`WackaErrorArgs`<`T`>

#### Returns

`WackaError`<`T`>

#### Overrides

[`UselessError`](reference/classes/UselessError.md).[`constructor`](UselessError.md#constructor)

## Properties

### category

> **category**: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`category`](UselessError.md#category)

***

### code

> **code**: [`IErrorCode`](reference/interfaces/IErrorCode.md)

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`code`](UselessError.md#code)

***

### details?

> **details**?: `T`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`details`](UselessError.md#details)

***

### displayMessage?

> **displayMessage**?: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`displayMessage`](UselessError.md#displaymessage)

***

### errorCode

> `readonly` **errorCode**: `string`

***

### inRecovery

> **inRecovery**: `boolean`

***

### label?

> **label**?: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`label`](UselessError.md#label)

***

### message

> **message**: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`message`](UselessError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`name`](UselessError.md#name)

***

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Overrides

[`UselessError`](reference/classes/UselessError.md).[`origin`](UselessError.md#origin)

***

### originalError?

> **originalError**?: `TUselessErrorErrorUnion`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`originalError`](UselessError.md#originalerror)

***

### severity

> **severity**: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`severity`](UselessError.md#severity)

***

### source?

> **source**?: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`source`](UselessError.md#source)

***

### stack?

> **stack**?: `string`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`stack`](UselessError.md#stack)

***

### stackedErrors

> **stackedErrors**: [`IError`](reference/interfaces/IError.md)[]

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`stackedErrors`](UselessError.md#stackederrors)

***

### type

> **type**: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`type`](UselessError.md#type)

## Accessors

### fatal

#### Get Signature

> **get** **fatal**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`fatal`](UselessError.md#fatal)

## Methods

### stackError()

> **stackError**(`error`): `void`

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`void`

#### Inherited from

[`UselessError`](reference/classes/UselessError.md).[`stackError`](UselessError.md#stackerror)
