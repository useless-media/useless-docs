# Deferred<T>

## Type Parameters

### T

`T` = `void`

## Constructors

### Constructor

> **new Deferred**<`T`>(`options?`): `Deferred`<`T`>

#### Parameters

##### options?

`DeferredOptions`

#### Returns

`Deferred`<`T`>

## Properties

### options?

> **options**?: `DeferredOptions`

***

### promise

> **promise**: `Promise`<`T` | `undefined`>

***

### rejected

> **rejected**: `boolean` = `false`

***

### resolved

> **resolved**: `boolean` = `false`

## Accessors

### [toStringTag]

#### Get Signature

> **get** **[toStringTag]**(): `string`

##### Returns

`string`

***

### fulfilled

#### Get Signature

> **get** **fulfilled**(): `boolean`

##### Returns

`boolean`

***

### pending

#### Get Signature

> **get** **pending**(): `boolean`

##### Returns

`boolean`

## Methods

### catch()

> **catch**(`fn`): `Promise`<`void` | `T`>

#### Parameters

##### fn

(`error`) => `void`

#### Returns

`Promise`<`void` | `T`>

***

### reject()

> **reject**(`error`): `void`

#### Parameters

##### error

`any` = `undefined`

#### Returns

`void`

***

### resolve()

> **resolve**(`data`): `void`

#### Parameters

##### data

`T`

#### Returns

`void`

***

### then()

> **then**(`fn`): `Promise`<`void` | `T`>

#### Parameters

##### fn

(`data?`) => `void`

#### Returns

`Promise`<`void` | `T`>

***

### Create()

> `static` **Create**<`T`>(`options?`): `Deferred`<`T`>

#### Type Parameters

##### T

`T`

#### Parameters

##### options?

`DeferredOptions`

#### Returns

`Deferred`<`T`>
