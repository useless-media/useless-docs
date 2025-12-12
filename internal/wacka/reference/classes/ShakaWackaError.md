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

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Inherited from

[`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md).[`origin`](PlaybackEngineWackaError.md#origin)
