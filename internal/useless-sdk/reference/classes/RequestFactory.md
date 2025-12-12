# RequestFactory

## Constructors

### Constructor

> **new RequestFactory**(`logger`, `configuration`): `RequestFactory`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

##### configuration

[`RequestFactoryConfiguration`](reference/interfaces/RequestFactoryConfiguration.md)

#### Returns

`RequestFactory`

## Methods

### asFetch()

> **asFetch**(`origin?`): (`input`, `init?`) => `Promise`<`Response`>

#### Parameters

##### origin?

[`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Returns

> (`input`, `init?`): `Promise`<`Response`>

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

###### input

`RequestInfo` | `URL`

###### init?

`RequestInit`

##### Returns

`Promise`<`Response`>

***

### create()

> **create**<`TResponse`, `TRequest`>(`origin`, `request`): [`DeferredRequest`](reference/classes/DeferredRequest.md)<`TRequest`, `TResponse`>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### origin

`RequestOrigin`

##### request

`Optional`<[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>, `"method"`>

#### Returns

[`DeferredRequest`](reference/classes/DeferredRequest.md)<`TRequest`, `TResponse`>

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

> **request**<`TResponse`, `TRequest`>(`origin`, `request`): `Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Type Parameters

##### TResponse

`TResponse`

##### TRequest

`TRequest` = `void`

#### Parameters

##### origin

`RequestOrigin`

##### request

`Optional`<[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>, `"method"`>

#### Returns

`Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

***

### setAuthorizationHeader()

> **setAuthorizationHeader**(`value?`): `void`

#### Parameters

##### value?

`string`

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
