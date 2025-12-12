# ErrorFactory<TErrorCodes>

## Extended by

- [`AdvertisementErrorFactory`](reference/classes/AdvertisementErrorFactory.md)

## Type Parameters

### TErrorCodes

`TErrorCodes` *extends* `WackaErrorCodes`

## Constructors

### Constructor

> **new ErrorFactory**<`TErrorCodes`>(`origin`): `ErrorFactory`<`TErrorCodes`>

#### Parameters

##### origin

[`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

#### Returns

`ErrorFactory`<`TErrorCodes`>

## Properties

### origin

> `protected` `readonly` **origin**: [`WackaErrorOrigins`](reference/enumerations/WackaErrorOrigins.md)

## Methods

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

***

### createUselessErrorCodeFromErrorCode()

> **createUselessErrorCodeFromErrorCode**<`TErrorCode`>(`code`): `object`

#### Type Parameters

##### TErrorCode

`TErrorCode` *extends* `WackaErrorCodes`

#### Parameters

##### code

`TErrorCode`

#### Returns

`object`

##### name

> **name**: `Record`<`number`, `string`>[`TErrorCode`]

##### value

> **value**: `TErrorCode` = `code`

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
