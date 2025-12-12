# AdvertisementWackaError<T>

## Extends

- [`WackaError`](reference/classes/WackaError.md)<`T`>

## Type Parameters

### T

`T` *extends* [`IAdvertisementWackaErrorDetails`](reference/interfaces/IAdvertisementWackaErrorDetails.md) = { }

## Constructors

### Constructor

> **new AdvertisementWackaError**<`T`>(`args`): `AdvertisementWackaError`<`T`>

#### Parameters

##### args

[`AdvertisementWackaErrorArgs`](reference/interfaces/AdvertisementWackaErrorArgs.md)<`T`>

#### Returns

`AdvertisementWackaError`<`T`>

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
