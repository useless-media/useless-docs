# WackaMediaElementError

## Extends

- [`WackaError`](reference/classes/WackaError.md)

## Constructors

### Constructor

> **new WackaMediaElementError**(`error`, `code?`): `WackaMediaElementError`

#### Parameters

##### error

`MediaError`

##### code?

`WackaErrorCodes`

#### Returns

`WackaMediaElementError`

#### Overrides

[`WackaError`](reference/classes/WackaError.md).[`constructor`](WackaError.md#constructor)

## Properties

### category

> **category**: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`category`](WackaError.md#category)

***

### code

> **code**: [`IErrorCode`](reference/interfaces/IErrorCode.md)

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`code`](WackaError.md#code)

***

### details?

> **details**?: `object`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`details`](WackaError.md#details)

***

### displayMessage?

> **displayMessage**?: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`displayMessage`](WackaError.md#displaymessage)

***

### errorCode

> `readonly` **errorCode**: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`errorCode`](WackaError.md#errorcode)

***

### inRecovery

> **inRecovery**: `boolean`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`inRecovery`](WackaError.md#inrecovery)

***

### label?

> **label**?: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`label`](WackaError.md#label)

***

### message

> **message**: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`message`](WackaError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`name`](WackaError.md#name)

***

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`origin`](WackaError.md#origin)

***

### originalError?

> **originalError**?: `TUselessErrorErrorUnion`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`originalError`](WackaError.md#originalerror)

***

### severity

> **severity**: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`severity`](WackaError.md#severity)

***

### source?

> **source**?: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`source`](WackaError.md#source)

***

### stack?

> **stack**?: `string`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`stack`](WackaError.md#stack)

***

### stackedErrors

> **stackedErrors**: [`IError`](reference/interfaces/IError.md)[]

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`stackedErrors`](WackaError.md#stackederrors)

***

### type

> **type**: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`type`](WackaError.md#type)

## Accessors

### fatal

#### Get Signature

> **get** **fatal**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`fatal`](WackaError.md#fatal)

## Methods

### stackError()

> **stackError**(`error`): `void`

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`void`

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`stackError`](WackaError.md#stackerror)
