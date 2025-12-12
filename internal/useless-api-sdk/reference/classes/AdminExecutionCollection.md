# AdminExecutionCollection

## Extends

- [`UselessApiCollection`](UselessApiCollection.md)<[`Execution`](reference/interfaces/Execution.md)>

## Constructors

### Constructor

> **new AdminExecutionCollection**(`configuration`): `AdminExecutionCollection`

#### Parameters

##### configuration

[`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Returns

`AdminExecutionCollection`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`constructor`](UselessApiCollection.md#constructor)

## Properties

### basePath

> **basePath**: `string` = `'/api/v1/admin/action/executions'`

***

### configuration

> `protected` **configuration**: [`UselessApiCollectionConfiguration`](reference/interfaces/UselessApiCollectionConfiguration.md)

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`configuration`](UselessApiCollection.md#configuration)

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`getClient`](UselessApiCollection.md#getclient)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`logger`](UselessApiCollection.md#logger)

***

### name

> **name**: `string` = `'AdminExecutionCollection'`

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`name`](UselessApiCollection.md#name)

***

### origin

> `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`origin`](UselessApiCollection.md#origin)

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`requestFactory`](UselessApiCollection.md#requestfactory)

## Methods

### create()

> **create**<`TRequest`>(`body`): `Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` = [`AdminCreateExecutionDto`](reference/interfaces/AdminCreateExecutionDto.md)

#### Parameters

##### body

`TRequest`

#### Returns

`Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`create`](UselessApiCollection.md#create)

***

### delete()

> **delete**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`void`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`delete`](UselessApiCollection.md#delete)

***

### find()

> **find**<`TRequest`, `TPagination`, `TPaginationResponse`>(`query`, `pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` = [`QueryExecutionDto`](reference/interfaces/QueryExecutionDto.md)

##### TPagination

`TPagination` = [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` = [`PaginationResponse`](PaginationResponse.md)<[`Execution`](reference/interfaces/Execution.md)>

#### Parameters

##### query

`TRequest`

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`find`](UselessApiCollection.md#find)

***

### get()

> **get**(`id`): `Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`get`](UselessApiCollection.md#get)

***

### getAll()

> **getAll**<`TPagination`, `TPaginationResponse`>(`pagination?`): `Promise`<`TPaginationResponse` | `undefined`>

#### Type Parameters

##### TPagination

`TPagination` = [`IPagination`](reference/interfaces/IPagination.md)

##### TPaginationResponse

`TPaginationResponse` = [`PaginationResponse`](PaginationResponse.md)<[`Execution`](reference/interfaces/Execution.md)>

#### Parameters

##### pagination?

`TPagination`

#### Returns

`Promise`<`TPaginationResponse` | `undefined`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`getAll`](UselessApiCollection.md#getall)

***

### getData()

> **getData**(`id`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`onError`](UselessApiCollection.md#onerror)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`registerRequestInterceptor`](UselessApiCollection.md#registerrequestinterceptor)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`registerResponseInterceptor`](UselessApiCollection.md#registerresponseinterceptor)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`request`](UselessApiCollection.md#request)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`requestData`](UselessApiCollection.md#requestdata)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`requestDataOk`](UselessApiCollection.md#requestdataok)

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

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`requestOk`](UselessApiCollection.md#requestok)

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`setClientGetter`](UselessApiCollection.md#setclientgetter)

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`setErrorHandler`](UselessApiCollection.md#seterrorhandler)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`setLogger`](UselessApiCollection.md#setlogger)

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`setRequestFactory`](UselessApiCollection.md#setrequestfactory)

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`setThrowErrors`](UselessApiCollection.md#setthrowerrors)

***

### update()

> **update**(`id`, `body`): `Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

##### body

`PartialDto`<[`Execution`](reference/interfaces/Execution.md)>

#### Returns

`Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Overrides

[`UselessApiCollection`](reference/classes/UselessApiCollection.md).[`update`](UselessApiCollection.md#update)

***

### updateDataLocation()

> **updateDataLocation**(`id`, `storageType`, `path`): `Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

##### storageType

`string`

##### path

`string`

#### Returns

`Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

***

### updateExecutionStatus()

> **updateExecutionStatus**(`id`, `status`): `Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

##### status

[`ExecutionStatusEnum`](reference/enumerations/ExecutionStatusEnum.md)

#### Returns

`Promise`<[`Execution`](reference/interfaces/Execution.md) | `undefined`>
