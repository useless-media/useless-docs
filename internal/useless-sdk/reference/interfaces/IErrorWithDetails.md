# IErrorWithDetails<T>

## Extends

- [`IError`](reference/interfaces/IError.md)

## Extended by

- [`IUselessError`](reference/interfaces/IUselessError.md)

## Type Parameters

### T

`T` *extends* [`IErrorDetails`](reference/interfaces/IErrorDetails.md) = { }

## Properties

### category

> **category**: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`category`](IError.md#category)

***

### code

> **code**: [`IErrorCode`](reference/interfaces/IErrorCode.md)

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`code`](IError.md#code)

***

### details?

> **details**?: `T`

#### Overrides

[`IError`](reference/interfaces/IError.md).[`details`](IError.md#details)

***

### displayMessage?

> **displayMessage**?: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`displayMessage`](IError.md#displaymessage)

***

### label?

> **label**?: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`label`](IError.md#label)

***

### message

> **message**: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`message`](IError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`name`](IError.md#name)

***

### origin

> **origin**: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`origin`](IError.md#origin)

***

### originalError?

> **originalError**?: `TErrorWithDetailsErrorUnion`

#### Overrides

[`IError`](reference/interfaces/IError.md).[`originalError`](IError.md#originalerror)

***

### severity

> **severity**: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`severity`](IError.md#severity)

***

### source?

> **source**?: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`source`](IError.md#source)

***

### stack?

> **stack**?: `string`

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`stack`](IError.md#stack)

***

### stackedErrors

> **stackedErrors**: [`IError`](reference/interfaces/IError.md)[]

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`stackedErrors`](IError.md#stackederrors)

***

### type

> **type**: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### Inherited from

[`IError`](reference/interfaces/IError.md).[`type`](IError.md#type)
