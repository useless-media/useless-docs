# TimedTriggerCollection

## Extends

- [`ReadOnlyUselessApiCollection`](ReadOnlyUselessApiCollection.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)>

## Constructors

### Constructor

> **new TimedTriggerCollection**(`configuration`): `TimedTriggerCollection`

#### Parameters

##### configuration

[`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Returns

`TimedTriggerCollection`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`constructor`](ReadOnlyUselessApiCollection.md#constructor)

## Properties

### basePath

> **basePath**: `string` = `'/api/v1/action/timed-triggers'`

***

### configuration

> `protected` **configuration**: [`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`configuration`](ReadOnlyUselessApiCollection.md#configuration)

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`getClient`](ReadOnlyUselessApiCollection.md#getclient)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`logger`](ReadOnlyUselessApiCollection.md#logger)

***

### name

> **name**: `string` = `'TimedTriggerCollection'`

#### Overrides

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`name`](ReadOnlyUselessApiCollection.md#name)

***

### origin

> `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Overrides

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`origin`](ReadOnlyUselessApiCollection.md#origin)

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`requestFactory`](ReadOnlyUselessApiCollection.md#requestfactory)

## Methods

### find()

> **find**<`TRequest`, `TPagination`, `TPaginationResponse`>(`query`, `pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` = [`QueryTimedTriggerDto`](reference/interfaces/QueryTimedTriggerDto.md)

##### TPagination

`TPagination` = [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` = [`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)>

#### Parameters

##### query

`TRequest`

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Overrides

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`find`](ReadOnlyUselessApiCollection.md#find)

***

### get()

> **get**(`id`): `Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Overrides

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`get`](ReadOnlyUselessApiCollection.md#get)

***

### getAll()

> **getAll**<`TPagination`, `TPaginationResponse`>(`pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TPagination

`TPagination` = [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` = [`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)>

#### Parameters

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Overrides

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`getAll`](ReadOnlyUselessApiCollection.md#getall)

***

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`onError`](ReadOnlyUselessApiCollection.md#onerror)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`registerRequestInterceptor`](ReadOnlyUselessApiCollection.md#registerrequestinterceptor)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`registerResponseInterceptor`](ReadOnlyUselessApiCollection.md#registerresponseinterceptor)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`request`](ReadOnlyUselessApiCollection.md#request)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`requestData`](ReadOnlyUselessApiCollection.md#requestdata)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`requestDataOk`](ReadOnlyUselessApiCollection.md#requestdataok)

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

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`requestOk`](ReadOnlyUselessApiCollection.md#requestok)

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`setClientGetter`](ReadOnlyUselessApiCollection.md#setclientgetter)

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`setErrorHandler`](ReadOnlyUselessApiCollection.md#seterrorhandler)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`setLogger`](ReadOnlyUselessApiCollection.md#setlogger)

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`setRequestFactory`](ReadOnlyUselessApiCollection.md#setrequestfactory)

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

[`ReadOnlyUselessApiCollection`](reference/classes/ReadOnlyUselessApiCollection.md).[`setThrowErrors`](ReadOnlyUselessApiCollection.md#setthrowerrors)
