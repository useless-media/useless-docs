# UselessApiCollection<TDto>

## Extends

- `ApiCollection`<`TDto`>

## Extended by

- [`AdminExecutionCollection`](reference/classes/AdminExecutionCollection.md)
- [`AdminTimedTriggerCollection`](reference/classes/AdminTimedTriggerCollection.md)
- [`AdminProductCollection`](reference/classes/AdminProductCollection.md)
- [`AdminProductInstanceCollection`](reference/classes/AdminProductInstanceCollection.md)
- [`AdminUserCollection`](reference/classes/AdminUserCollection.md)

## Type Parameters

### TDto

`TDto` *extends* [`IDto`](reference/interfaces/IDto.md)

## Constructors

### Constructor

> **new UselessApiCollection**<`TDto`>(`configuration`): `UselessApiCollection`<`TDto`>

#### Parameters

##### configuration

[`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Returns

`UselessApiCollection`<`TDto`>

#### Overrides

`ApiCollection<TDto>.constructor`

## Properties

### configuration

> `protected` **configuration**: [`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Overrides

`ApiCollection.configuration`

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

`ApiCollection.getClient`

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

`ApiCollection.logger`

***

### name

> `abstract` **name**: `string`

#### Inherited from

`ApiCollection.name`

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Inherited from

`ApiCollection.origin`

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

`ApiCollection.requestFactory`

## Methods

### create()

> `abstract` **create**<`TRequest`>(`dto`): `Promise`<`TDto` | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` *extends* `PartialDto`<`TDto`> = `PartialDto`<`TDto`>

#### Parameters

##### dto

`PartialDto`<`TDto`>

#### Returns

`Promise`<`TDto` | `undefined`>

#### Inherited from

`ApiCollection.create`

***

### delete()

> `abstract` **delete**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`void`>

#### Inherited from

`ApiCollection.delete`

***

### find()

> `abstract` **find**<`TRequest`, `TPagination`, `TPaginationResponse`>(`request`, `pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TRequest

`TRequest`

##### TPagination

`TPagination` *extends* [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` *extends* [`IPaginationResponse`](reference/interfaces/IPaginationResponse.md)<`TDto`>

#### Parameters

##### request

`UselessRequest`<`TRequest`>

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Inherited from

`ApiCollection.find`

***

### get()

> `abstract` **get**(`id`): `Promise`<`TDto` | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`TDto` | `undefined`>

#### Inherited from

`ApiCollection.get`

***

### getAll()

> `abstract` **getAll**<`TPagination`, `TPaginationResponse`>(`pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TPagination

`TPagination` *extends* [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` *extends* [`IPaginationResponse`](reference/interfaces/IPaginationResponse.md)<`TDto`>

#### Parameters

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Inherited from

`ApiCollection.getAll`

***

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

`ApiCollection.onError`

***

### registerRequestInterceptor()

> **registerRequestInterceptor**<`TRequest`, `TResponse`>(`origin`, `interceptor`): `void`

#### Type Parameters

##### TRequest

`TRequest` = `any`

##### TResponse

`TResponse` = `any`

#### Parameters

##### origin

`string`

##### interceptor

`IRequestInterceptor`<`TRequest`, `TResponse`>

#### Returns

`void`

#### Inherited from

`ApiCollection.registerRequestInterceptor`

***

### registerResponseInterceptor()

> **registerResponseInterceptor**<`TResponse`>(`origin`, `interceptor`): `void`

#### Type Parameters

##### TResponse

`TResponse` = `any`

#### Parameters

##### origin

`string`

##### interceptor

`IResponseInterceptor`<`TResponse`>

#### Returns

`void`

#### Inherited from

`ApiCollection.registerResponseInterceptor`

***

### request()

> **request**<`TResponse`, `TRequest`>(`request`): `Promise`<`UselessResponse`<`TResponse`>>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### request

`UselessRequest`<`TRequest`>

#### Returns

`Promise`<`UselessResponse`<`TResponse`>>

#### Inherited from

`ApiCollection.request`

***

### requestData()

> **requestData**<`TResponse`, `TRequest`>(`request`): `Promise`<`TResponse` | `undefined`>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### request

`UselessRequest`<`TRequest`>

#### Returns

`Promise`<`TResponse` | `undefined`>

#### Inherited from

`ApiCollection.requestData`

***

### requestDataOk()

> **requestDataOk**<`TResponse`, `TRequest`>(`request`): `Promise`<`TResponse` | `undefined`>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### request

`UselessRequest`<`TRequest`>

#### Returns

`Promise`<`TResponse` | `undefined`>

#### Inherited from

`ApiCollection.requestDataOk`

***

### requestOk()

> **requestOk**<`TResponse`, `TRequest`>(`request`): `Promise`<`UselessResponseWithBody`<`TResponse`> | `undefined`>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### request

`UselessRequest`<`TRequest`>

#### Returns

`Promise`<`UselessResponseWithBody`<`TResponse`> | `undefined`>

#### Inherited from

`ApiCollection.requestOk`

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

`ApiCollection.setClientGetter`

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

`ApiCollection.setErrorHandler`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

`ApiCollection.setLogger`

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

`ApiCollection.setRequestFactory`

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

`ApiCollection.setThrowErrors`

***

### update()

> `abstract` **update**<`TRequest`>(`id`, `dto`): `Promise`<`TDto` | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` *extends* `PartialDto`<`TDto`> = `PartialDto`<`TDto`>

#### Parameters

##### id

`string`

##### dto

`TRequest`

#### Returns

`Promise`<`TDto` | `undefined`>

#### Inherited from

`ApiCollection.update`
