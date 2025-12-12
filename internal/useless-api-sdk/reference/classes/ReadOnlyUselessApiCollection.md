# ReadOnlyUselessApiCollection<TDto>

## Extends

- `ReadOnlyApiCollection`<`TDto`>

## Extended by

- [`ExecutionCollection`](reference/classes/ExecutionCollection.md)
- [`TimedTriggerCollection`](reference/classes/TimedTriggerCollection.md)
- [`ProductCollection`](reference/classes/ProductCollection.md)
- [`ProductInstanceCollection`](reference/classes/ProductInstanceCollection.md)

## Type Parameters

### TDto

`TDto` *extends* [`IDto`](reference/interfaces/IDto.md)

## Constructors

### Constructor

> **new ReadOnlyUselessApiCollection**<`TDto`>(`configuration`): `ReadOnlyUselessApiCollection`<`TDto`>

#### Parameters

##### configuration

[`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Returns

`ReadOnlyUselessApiCollection`<`TDto`>

#### Overrides

`ReadOnlyApiCollection<TDto>.constructor`

## Properties

### configuration

> `protected` **configuration**: [`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Overrides

`ReadOnlyApiCollection.configuration`

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

`ReadOnlyApiCollection.getClient`

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

`ReadOnlyApiCollection.logger`

***

### name

> `abstract` **name**: `string`

#### Inherited from

`ReadOnlyApiCollection.name`

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Inherited from

`ReadOnlyApiCollection.origin`

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

`ReadOnlyApiCollection.requestFactory`

## Methods

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

`ReadOnlyApiCollection.find`

***

### get()

> `abstract` **get**(`id`): `Promise`<`TDto` | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`TDto` | `undefined`>

#### Inherited from

`ReadOnlyApiCollection.get`

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

`ReadOnlyApiCollection.getAll`

***

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

`ReadOnlyApiCollection.onError`

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

`ReadOnlyApiCollection.registerRequestInterceptor`

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

`ReadOnlyApiCollection.registerResponseInterceptor`

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

`ReadOnlyApiCollection.request`

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

`ReadOnlyApiCollection.requestData`

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

`ReadOnlyApiCollection.requestDataOk`

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

`ReadOnlyApiCollection.requestOk`

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

`ReadOnlyApiCollection.setClientGetter`

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

`ReadOnlyApiCollection.setErrorHandler`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

`ReadOnlyApiCollection.setLogger`

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

`ReadOnlyApiCollection.setRequestFactory`

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

`ReadOnlyApiCollection.setThrowErrors`
