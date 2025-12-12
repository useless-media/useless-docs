# ApiController

## Extended by

- [`ReadOnlyApiCollection`](reference/classes/ReadOnlyApiCollection.md)

## Constructors

### Constructor

> **new ApiController**(`configuration`): `ApiController`

#### Parameters

##### configuration

[`ControllerConfiguration`](reference/interfaces/ControllerConfiguration.md)

#### Returns

`ApiController`

## Properties

### configuration

> `protected` **configuration**: [`ControllerConfiguration`](reference/interfaces/ControllerConfiguration.md)

***

### getClient

> `protected` **getClient**: `ClientGetter`

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

***

### name

> `abstract` **name**: `string`

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

***

### requestFactory

> `protected` **requestFactory**: [`RequestFactory`](reference/classes/RequestFactory.md)

## Methods

### onError()

> **onError**(`error`): `Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

#### Parameters

##### error

[`UselessError`](reference/classes/UselessError.md)

#### Returns

`Promise`<[`UselessError`](reference/classes/UselessError.md)<{ }> | `undefined`>

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

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

[`UselessErrorHandler`](reference/interfaces/UselessErrorHandler.md)

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

[`RequestFactory`](reference/classes/RequestFactory.md)

#### Returns

`void`

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`
