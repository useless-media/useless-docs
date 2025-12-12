# HlsWackaError

## Extends

- [`PlaybackEngineWackaError`](PlaybackEngineWackaError.md)<[`IHlsWackaErrorDetails`](reference/interfaces/IHlsWackaErrorDetails.md)>

## Constructors

### Constructor

> **new HlsWackaError**(`code`, `hlsError`, `details`, `properties?`): `HlsWackaError`

#### Parameters

##### code

[`WackaPlaybackEngineErrorCodes`](reference/enumerations/WackaPlaybackEngineErrorCodes.md)

##### hlsError

`ErrorData`

##### details

[`IHlsWackaErrorDetails`](reference/interfaces/IHlsWackaErrorDetails.md)

##### properties?

`Partial`<`IUselessError`<[`IHlsWackaErrorDetails`](reference/interfaces/IHlsWackaErrorDetails.md)>>

#### Returns

`HlsWackaError`

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
