# WackaError<T>

## Extends

- `UselessError`<`T`>

## Extended by

- [`PlaybackEngineWackaError`](reference/classes/PlaybackEngineWackaError.md)
- [`WackaMediaElementError`](reference/classes/WackaMediaElementError.md)
- [`AdvertisementWackaError`](reference/classes/AdvertisementWackaError.md)

## Type Parameters

### T

`T` *extends* `IErrorDetails` = { }

## Constructors

### Constructor

> **new WackaError**<`T`>(`args`): `WackaError`<`T`>

#### Parameters

##### args

[`WackaErrorArgs`](reference/interfaces/WackaErrorArgs.md)<`T`>

#### Returns

`WackaError`<`T`>

#### Overrides

`UselessError<T>.constructor`

## Properties

### errorCode

> `readonly` **errorCode**: `string`

***

### inRecovery

> **inRecovery**: `boolean`

***

### origin

> **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Overrides

`UselessError.origin`
