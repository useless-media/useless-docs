# ShakaWackaError

## Extends

- [`PlaybackEngineWackaError`](PlaybackEngineWackaError.md)<[`IShakaWackaErrorDetails`](reference/interfaces/IShakaWackaErrorDetails.md)>

## Constructors

### Constructor

> **new ShakaWackaError**(`code`, `shakaError`, `details`, `properties?`): `ShakaWackaError`

#### Parameters

##### code

`WackaErrorCodes`

##### shakaError

`Error`

##### details

[`IShakaWackaErrorDetails`](reference/interfaces/IShakaWackaErrorDetails.md)

##### properties?

`Partial`<`IUselessError`<[`IShakaWackaErrorDetails`](reference/interfaces/IShakaWackaErrorDetails.md)>>

#### Returns

`ShakaWackaError`

#### Overrides

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`constructor`](PlaybackEngineWackaError.md#constructor)

## Properties

### category

> **category**: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`category`](PlaybackEngineWackaError.md#category)

***

### code

> **code**: [`IErrorCode`](reference/interfaces/IErrorCode.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`code`](PlaybackEngineWackaError.md#code)

***

### details?

> **details**?: [`IShakaWackaErrorDetails`](reference/interfaces/IShakaWackaErrorDetails.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`details`](PlaybackEngineWackaError.md#details)

***

### displayMessage?

> **displayMessage**?: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`displayMessage`](PlaybackEngineWackaError.md#displaymessage)

***

### errorCode

> `readonly` **errorCode**: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`errorCode`](PlaybackEngineWackaError.md#errorcode)

***

### inRecovery

> **inRecovery**: `boolean`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`inRecovery`](PlaybackEngineWackaError.md#inrecovery)

***

### label?

> **label**?: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`label`](PlaybackEngineWackaError.md#label)

***

### message

> **message**: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`message`](PlaybackEngineWackaError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`name`](PlaybackEngineWackaError.md#name)

***

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`origin`](PlaybackEngineWackaError.md#origin)

***

### originalError?

> **originalError**?: `TUselessErrorErrorUnion`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`originalError`](PlaybackEngineWackaError.md#originalerror)

***

### severity

> **severity**: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`severity`](PlaybackEngineWackaError.md#severity)

***

### source?

> **source**?: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`source`](PlaybackEngineWackaError.md#source)

***

### stack?

> **stack**?: `string`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`stack`](PlaybackEngineWackaError.md#stack)

***

### stackedErrors

> **stackedErrors**: [`IError`](reference/interfaces/IError.md)[]

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`stackedErrors`](PlaybackEngineWackaError.md#stackederrors)

***

### type

> **type**: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`type`](PlaybackEngineWackaError.md#type)

## Accessors

### fatal

#### Get Signature

> **get** **fatal**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`fatal`](PlaybackEngineWackaError.md#fatal)

## Methods

### stackError()

> **stackError**(`error`): `void`

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`void`

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`stackError`](PlaybackEngineWackaError.md#stackerror)
