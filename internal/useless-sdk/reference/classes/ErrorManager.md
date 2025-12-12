# ErrorManager

## Constructors

### Constructor

> **new ErrorManager**(`args?`): `ErrorManager`

#### Parameters

##### args?

[`ErrorManagerArgs`](reference/interfaces/ErrorManagerArgs.md)

#### Returns

`ErrorManager`

## Properties

### name

> `readonly` **name**: `string` = `'ErrorManager'`

## Methods

### augmentError()

> `protected` **augmentError**<`T`>(`error`): `T`

#### Type Parameters

##### T

`T` *extends* [`IError`](reference/interfaces/IError.md)

#### Parameters

##### error

`T`

#### Returns

`T`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### dispatchError()

> **dispatchError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`TErrorUnion`

#### Returns

`Promise`<`void`>

***

### handleError()

> **handleError**(`error`): `Promise`<`void` | [`IError`](reference/interfaces/IError.md)>

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`Promise`<`void` | [`IError`](reference/interfaces/IError.md)>

***

### handleFinalError()

> **handleFinalError**(`error`): `Promise`<`void`>

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`Promise`<`void`>

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### registerErrorCodes()

> **registerErrorCodes**(`errorCodesEnum`, `errorCodesEnumToNamesMap?`): `void`

#### Parameters

##### errorCodesEnum

`Record`<`string`, `string` | `number`>

##### errorCodesEnumToNamesMap?

`Record`<`string` | `number`, `string`>

#### Returns

`void`

***

### registerTransientData()

> **registerTransientData**(`transientData`): `void`

#### Parameters

##### transientData

`Record`<`string`, `any`>

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setDelegate()

> **setDelegate**(`delegate?`): `void`

#### Parameters

##### delegate?

[`ErrorManagerDelegate`](reference/interfaces/ErrorManagerDelegate.md)

#### Returns

`void`

***

### setI18n()

> **setI18n**(`i18n`): `void`

#### Parameters

##### i18n

[`I18n`](reference/classes/I18n.md)

#### Returns

`void`

***

### stackError()

> **stackError**(`error`): `void`

#### Parameters

##### error

`Error` | [`IError`](reference/interfaces/IError.md)

#### Returns

`void`
