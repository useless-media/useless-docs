# PlaybackEngineWackaError<T>

## Extends

- [`WackaError`](reference/classes/WackaError.md)<`T`>

## Extended by

- [`HlsWackaError`](reference/classes/HlsWackaError.md)
- [`ShakaWackaError`](reference/classes/ShakaWackaError.md)

## Type Parameters

### T

`T` *extends* [`IPlaybackEngineWackaErrorDetails`](reference/interfaces/IPlaybackEngineWackaErrorDetails.md)

## Constructors

### Constructor

> **new PlaybackEngineWackaError**<`T`>(`properties`, `details`): `PlaybackEngineWackaError`<`T`>

#### Parameters

##### properties

`Partial`<`IUselessError`<`T`>>

##### details

`T`

#### Returns

`PlaybackEngineWackaError`<`T`>

#### Overrides

[`WackaError`](reference/classes/WackaError.md).[`constructor`](WackaError.md#constructor)

## Properties

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

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Inherited from

[`WackaError`](reference/classes/WackaError.md).[`origin`](WackaError.md#origin)
