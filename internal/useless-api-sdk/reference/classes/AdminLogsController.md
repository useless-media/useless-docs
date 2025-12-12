# AdminLogsController

## Extends

- [`UselessApiController`](reference/classes/UselessApiController.md)

## Constructors

### Constructor

> **new AdminLogsController**(`configuration`): `AdminLogsController`

#### Parameters

##### configuration

[`UselessApiControllerConfiguration`](reference/interfaces/UselessApiControllerConfiguration.md)

#### Returns

`AdminLogsController`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`constructor`](UselessApiController.md#constructor)

## Properties

### basePath

> **basePath**: `string` = `'/api/v1/admin/logs'`

***

### configuration

> `protected` **configuration**: [`UselessApiControllerConfiguration`](reference/interfaces/UselessApiControllerConfiguration.md)

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`configuration`](UselessApiController.md#configuration)

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`getClient`](UselessApiController.md#getclient)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`logger`](UselessApiController.md#logger)

***

### name

> **name**: `string` = `'AdminLogsController'`

#### Overrides

[`UselessApiController`](reference/classes/UselessApiController.md).[`name`](UselessApiController.md#name)

***

### origin

> `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Overrides

[`UselessApiController`](reference/classes/UselessApiController.md).[`origin`](UselessApiController.md#origin)

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`requestFactory`](UselessApiController.md#requestfactory)

## Methods

### getAccessLogs()

> **getAccessLogs**(): `Promise`<`string` | `undefined`>

#### Returns

`Promise`<`string` | `undefined`>

***

### getApplicationLogs()

> **getApplicationLogs**(): `Promise`<`string` | `undefined`>

#### Returns

`Promise`<`string` | `undefined`>

***

### getErrorLogs()

> **getErrorLogs**(): `Promise`<`string` | `undefined`>

#### Returns

`Promise`<`string` | `undefined`>

***

### getExceptionsLogs()

> **getExceptionsLogs**(): `Promise`<`string` | `undefined`>

#### Returns

`Promise`<`string` | `undefined`>

***

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`onError`](UselessApiController.md#onerror)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`registerRequestInterceptor`](UselessApiController.md#registerrequestinterceptor)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`registerResponseInterceptor`](UselessApiController.md#registerresponseinterceptor)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`request`](UselessApiController.md#request)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`requestData`](UselessApiController.md#requestdata)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`requestDataOk`](UselessApiController.md#requestdataok)

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

[`UselessApiController`](reference/classes/UselessApiController.md).[`requestOk`](UselessApiController.md#requestok)

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`setClientGetter`](UselessApiController.md#setclientgetter)

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`setErrorHandler`](UselessApiController.md#seterrorhandler)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`setLogger`](UselessApiController.md#setlogger)

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`setRequestFactory`](UselessApiController.md#setrequestfactory)

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`setThrowErrors`](UselessApiController.md#setthrowerrors)
