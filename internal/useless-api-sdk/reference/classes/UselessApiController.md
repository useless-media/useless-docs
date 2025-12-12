# UselessApiController

## Extends

- `ApiController`

## Extended by

- [`ApiTokenController`](reference/classes/ApiTokenController.md)
- [`AuthenticationController`](reference/classes/AuthenticationController.md)
- [`NotificationsController`](reference/classes/NotificationsController.md)
- [`UserController`](reference/classes/UserController.md)
- [`InformationController`](reference/classes/InformationController.md)
- [`NotifyController`](reference/classes/NotifyController.md)
- [`TriggerController`](reference/classes/TriggerController.md)
- [`AdminLogsController`](reference/classes/AdminLogsController.md)
- [`AdminActionGatewayController`](reference/classes/AdminActionGatewayController.md)

## Constructors

### Constructor

> **new UselessApiController**(`configuration`): `UselessApiController`

#### Parameters

##### configuration

[`UselessApiControllerConfiguration`](reference/interfaces/UselessApiControllerConfiguration.md)

#### Returns

`UselessApiController`

#### Overrides

`ApiController.constructor`

## Properties

### configuration

> `protected` **configuration**: [`UselessApiControllerConfiguration`](reference/interfaces/UselessApiControllerConfiguration.md)

#### Overrides

`ApiController.configuration`

***

### getClient

> `protected` **getClient**: `ClientGetter`

#### Inherited from

`ApiController.getClient`

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

`ApiController.logger`

***

### name

> `abstract` **name**: `string`

#### Inherited from

`ApiController.name`

***

### origin

> `abstract` `protected` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Inherited from

`ApiController.origin`

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

`ApiController.requestFactory`

## Methods

### onError()

> **onError**(`error`): `Promise`<`UselessError`<{ }> | `undefined`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`UselessError`<{ }> | `undefined`>

#### Inherited from

`ApiController.onError`

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

`ApiController.registerRequestInterceptor`

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

`ApiController.registerResponseInterceptor`

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

`ApiController.request`

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

`ApiController.requestData`

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

`ApiController.requestDataOk`

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

`ApiController.requestOk`

***

### setClientGetter()

> **setClientGetter**(`clientGetter`): `void`

#### Parameters

##### clientGetter

`ClientGetter`

#### Returns

`void`

#### Inherited from

`ApiController.setClientGetter`

***

### setErrorHandler()

> **setErrorHandler**(`handler`): `void`

#### Parameters

##### handler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

`ApiController.setErrorHandler`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

`ApiController.setLogger`

***

### setRequestFactory()

> **setRequestFactory**(`requestFactory`): `void`

#### Parameters

##### requestFactory

`RequestFactory`

#### Returns

`void`

#### Inherited from

`ApiController.setRequestFactory`

***

### setThrowErrors()

> **setThrowErrors**(`throwErrors`): `void`

#### Parameters

##### throwErrors

`boolean`

#### Returns

`void`

#### Inherited from

`ApiController.setThrowErrors`
