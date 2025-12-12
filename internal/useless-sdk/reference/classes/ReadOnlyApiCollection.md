# ReadOnlyApiCollection<TDto>

## Extends

- [`ApiController`](reference/classes/ApiController.md)

## Extended by

- [`ApiCollection`](reference/classes/ApiCollection.md)

## Type Parameters

### TDto

`TDto` *extends* [`IDto`](reference/interfaces/IDto.md)

## Constructors

### Constructor

> **new ReadOnlyApiCollection**<`TDto`>(`configuration`): `ReadOnlyApiCollection`<`TDto`>

#### Parameters

##### configuration

[`CollectionConfiguration`](reference/interfaces/CollectionConfiguration.md)

#### Returns

`ReadOnlyApiCollection`<`TDto`>

#### Overrides

[`ApiController`](reference/classes/ApiController.md).[`constructor`](ApiController.md#constructor)

## Properties

### configuration

> `protected` **configuration**: [`CollectionConfiguration`](reference/interfaces/CollectionConfiguration.md)

#### Overrides

[`ApiController`](reference/classes/ApiController.md).[`configuration`](ApiController.md#configuration)

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`getClient`](ApiController.md#getclient)

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`logger`](ApiController.md#logger)

***

### name

> `abstract` **name**: `string`

#### Overrides

[`ApiController`](reference/classes/ApiController.md).[`name`](ApiController.md#name)

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Overrides

[`ApiController`](reference/classes/ApiController.md).[`origin`](ApiController.md#origin)

***

### requestFactory

> `protected` **requestFactory**: [`RequestFactory`](reference/classes/RequestFactory.md)

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`requestFactory`](ApiController.md#requestfactory)

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

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

***

### get()

> `abstract` **get**(`id`): `Promise`<`TDto` | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`TDto` | `undefined`>

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

***

### onError()

> **onError**(`error`): `Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

#### Parameters

##### error

[`UselessError`](reference/classes/UselessError.md)

#### Returns

`Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`onError`](ApiController.md#onerror)

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

[`ApiController`](reference/classes/ApiController.md).[`registerRequestInterceptor`](ApiController.md#registerrequestinterceptor)

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

[`ApiController`](reference/classes/ApiController.md).[`registerResponseInterceptor`](ApiController.md#registerresponseinterceptor)

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

[`ApiController`](reference/classes/ApiController.md).[`request`](ApiController.md#request)

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

[`ApiController`](reference/classes/ApiController.md).[`requestData`](ApiController.md#requestdata)

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

[`ApiController`](reference/classes/ApiController.md).[`requestDataOk`](ApiController.md#requestdataok)

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

[`ApiController`](reference/classes/ApiController.md).[`requestOk`](ApiController.md#requestok)

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`setClientGetter`](ApiController.md#setclientgetter)

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

[`UselessErrorHandler`](reference/interfaces/UselessErrorHandler.md)

#### Returns

`void`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`setErrorHandler`](ApiController.md#seterrorhandler)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`setLogger`](ApiController.md#setlogger)

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

[`RequestFactory`](reference/classes/RequestFactory.md)

#### Returns

`void`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`setRequestFactory`](ApiController.md#setrequestfactory)

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

[`ApiController`](reference/classes/ApiController.md).[`setThrowErrors`](ApiController.md#setthrowerrors)
