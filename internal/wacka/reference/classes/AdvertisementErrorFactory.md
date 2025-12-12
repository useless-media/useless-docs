# AdvertisementErrorFactory<TErrorCodes>

## Extends

- [`ErrorFactory`](reference/classes/ErrorFactory.md)<`TErrorCodes`>

## Type Parameters

### TErrorCodes

`TErrorCodes` *extends* `WackaErrorCodes`

## Constructors

### Constructor

> **new AdvertisementErrorFactory**<`TErrorCodes`>(`origin`): `AdvertisementErrorFactory`<`TErrorCodes`>

#### Parameters

##### origin

[`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Returns

`AdvertisementErrorFactory`<`TErrorCodes`>

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`constructor`](ErrorFactory.md#constructor)

## Properties

### origin

> `protected` `readonly` **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`origin`](ErrorFactory.md#origin)

## Methods

### createAdvertisementError()

> **createAdvertisementError**<`TDetails`, `TErrorCode`>(`code`, `severity`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TDetails

`TDetails` *extends* [`IAdvertisementWackaErrorDetails`](reference/interfaces/IAdvertisementWackaErrorDetails.md) = [`IAdvertisementWackaErrorDetails`](../interfaces/IAdvertisementWackaErrorDetails.md)

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes` = [`Generic`](reference/enumerations/WackaAdvertisementErrorCodes.md#generic)

#### Parameters

##### code

`TErrorCode`

##### severity

`ErrorSeverities`

##### details

`TDetails`

##### properties?

`Partial`<[`AdvertisementWackaError`](reference/classes/AdvertisementWackaError.md)<`TDetails`>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

***

### createAdvertisementErrorFromError()

> **createAdvertisementErrorFromError**<`TDetails`, `TErrorCode`>(`code`, `error`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TDetails

`TDetails` *extends* [`IAdvertisementWackaErrorDetails`](reference/interfaces/IAdvertisementWackaErrorDetails.md) = [`IAdvertisementWackaErrorDetails`](../interfaces/IAdvertisementWackaErrorDetails.md)

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes` = [`WackaGenericErrorCodes`](reference/enumerations/WackaGenericErrorCodes.md) | [`WackaAdvertisementErrorCodes`](../enumerations/WackaAdvertisementErrorCodes.md) | `TErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### error

`Error` | [`WackaError`](reference/classes/WackaError.md)<{ }>

##### details

`TDetails`

##### properties?

`Partial`<[`AdvertisementWackaError`](reference/classes/AdvertisementWackaError.md)<`TDetails`>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

***

### createError()

> **createError**<`TErrorCode`>(`code`, `type`, `severity`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### type

`ErrorTypes`

##### severity

`ErrorSeverities`

##### details

[`WackaErrorPayloads`](reference/interfaces/WackaErrorPayloads.md)[`TErrorCode`]

##### properties?

`Partial`<`IUselessError`<{ }>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createError`](ErrorFactory.md#createerror)

***

### createErrorFromError()

> **createErrorFromError**<`TErrorCode`>(`code`, `error`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### error

`Error` | [`WackaError`](reference/classes/WackaError.md)<{ }>

##### details

[`WackaErrorPayloads`](reference/interfaces/WackaErrorPayloads.md)[`TErrorCode`]

##### properties?

`Partial`<`IUselessError`<{ }>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createErrorFromError`](ErrorFactory.md#createerrorfromerror)

***

### createFatalAdvertisementError()

> **createFatalAdvertisementError**<`TDetails`, `TErrorCode`>(`code`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TDetails

`TDetails` *extends* [`IAdvertisementWackaErrorDetails`](reference/interfaces/IAdvertisementWackaErrorDetails.md) = [`IAdvertisementWackaErrorDetails`](../interfaces/IAdvertisementWackaErrorDetails.md)

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes` = [`WackaGenericErrorCodes`](reference/enumerations/WackaGenericErrorCodes.md) | [`WackaAdvertisementErrorCodes`](../enumerations/WackaAdvertisementErrorCodes.md) | `TErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### details

`TDetails`

##### properties?

`Partial`<[`AdvertisementWackaError`](reference/classes/AdvertisementWackaError.md)<`TDetails`>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

***

### createFatalError()

> **createFatalError**<`TErrorCode`>(`code`, `type`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### type

`ErrorTypes`

##### details

[`WackaErrorPayloads`](reference/interfaces/WackaErrorPayloads.md)[`TErrorCode`]

##### properties?

`Partial`<`IUselessError`<{ }>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createFatalError`](ErrorFactory.md#createfatalerror)

***

### createLenientError()

> **createLenientError**<`TErrorCode`>(`code`, `type`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### type

`ErrorTypes`

##### details

[`WackaErrorPayloads`](reference/interfaces/WackaErrorPayloads.md)[`TErrorCode`]

##### properties?

`Partial`<`IUselessError`<{ }>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createLenientError`](ErrorFactory.md#createlenienterror)

***

### createModerateError()

> **createModerateError**<`TErrorCode`>(`code`, `type`, `details`, `properties?`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

##### type

`ErrorTypes`

##### details

[`WackaErrorPayloads`](reference/interfaces/WackaErrorPayloads.md)[`TErrorCode`]

##### properties?

`Partial`<`IUselessError`<{ }>>

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createModerateError`](ErrorFactory.md#createmoderateerror)

***

### createUselessErrorCodeFromErrorCode()

> **createUselessErrorCodeFromErrorCode**<`TErrorCode`>(`code`): `object`

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes` = [`Generic`](reference/enumerations/WackaAdvertisementErrorCodes.md#generic)

#### Parameters

##### code

`TErrorCode`

#### Returns

`object`

##### name

> **name**: `Record`<`number`, `string`>[`TErrorCode`]

##### value

> **value**: `TErrorCode` = `code`

#### Overrides

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`createUselessErrorCodeFromErrorCode`](ErrorFactory.md#createuselesserrorcodefromerrorcode)

***

### processError()

> **processError**<`TErrorCode`>(`error`, `fallback`): [`WackaError`](reference/classes/WackaError.md)

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### error

`any`

##### fallback

###### code

`TErrorCode`

###### message?

`string`

###### type

`ErrorTypes`

#### Returns

[`WackaError`](reference/classes/WackaError.md)

#### Inherited from

[`ErrorFactory`](reference/classes/ErrorFactory.md).[`processError`](ErrorFactory.md#processerror)
