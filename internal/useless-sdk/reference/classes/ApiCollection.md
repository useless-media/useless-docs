# ApiCollection<TDto>

## Extends

- [`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md)<`TDto`>

## Type Parameters

### TDto

`TDto` *extends* [`IDto`](reference/interfaces/IDto.md)

## Constructors

### Constructor

> **new ApiCollection**<`TDto`>(`configuration`): `ApiCollection`<`TDto`>

#### Parameters

##### configuration

[`CollectionConfiguration`](reference/interfaces/CollectionConfiguration.md)

#### Returns

`ApiCollection`<`TDto`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`constructor`](ReadOnlyApiCollection.md#constructor)

## Properties

### configuration

> `protected` **configuration**: [`CollectionConfiguration`](reference/interfaces/CollectionConfiguration.md)

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`configuration`](ReadOnlyApiCollection.md#configuration)

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`getClient`](ReadOnlyApiCollection.md#getclient)

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`logger`](ReadOnlyApiCollection.md#logger)

***

### name

> `abstract` **name**: `string`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`name`](ReadOnlyApiCollection.md#name)

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`origin`](ReadOnlyApiCollection.md#origin)

***

### requestFactory

> `protected` **requestFactory**: [`RequestFactory`](reference/classes/RequestFactory.md)

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`requestFactory`](ReadOnlyApiCollection.md#requestfactory)

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

***

### delete()

> `abstract` **delete**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`void`>

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

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`find`](ReadOnlyApiCollection.md#find)

***

### get()

> `abstract` **get**(`id`): `Promise`<`TDto` | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`TDto` | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`get`](ReadOnlyApiCollection.md#get)

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

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`getAll`](ReadOnlyApiCollection.md#getall)

***

### onError()

> **onError**(`error`): `Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

#### Parameters

##### error

[`UselessError`](reference/classes/UselessError.md)

#### Returns

`Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`onError`](ReadOnlyApiCollection.md#onerror)

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

[`IRequestInterceptor`](reference/interfaces/IRequestInterceptor.md)<`TRequest`, `TResponse`>

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`registerRequestInterceptor`](ReadOnlyApiCollection.md#registerrequestinterceptor)

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

[`IResponseInterceptor`](reference/interfaces/IResponseInterceptor.md)<`TResponse`>

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`registerResponseInterceptor`](ReadOnlyApiCollection.md#registerresponseinterceptor)

***

### request()

> **request**<`TResponse`, `TRequest`>(`request`): `Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### request

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Returns

`Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`request`](ReadOnlyApiCollection.md#request)

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

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Returns

`Promise`<`TResponse` | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`requestData`](ReadOnlyApiCollection.md#requestdata)

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

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Returns

`Promise`<`TResponse` | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`requestDataOk`](ReadOnlyApiCollection.md#requestdataok)

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

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Returns

`Promise`<`UselessResponseWithBody`<`TResponse`> | `undefined`>

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`requestOk`](ReadOnlyApiCollection.md#requestok)

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`setClientGetter`](ReadOnlyApiCollection.md#setclientgetter)

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

[`UselessErrorHandler`](reference/interfaces/UselessErrorHandler.md)

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`setErrorHandler`](ReadOnlyApiCollection.md#seterrorhandler)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`setLogger`](ReadOnlyApiCollection.md#setlogger)

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

[`RequestFactory`](reference/classes/RequestFactory.md)

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`setRequestFactory`](ReadOnlyApiCollection.md#setrequestfactory)

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

[`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md).[`setThrowErrors`](ReadOnlyApiCollection.md#setthrowerrors)

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
