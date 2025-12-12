# UserController

## Extends

- [`UselessApiController`](reference/classes/UselessApiController.md)

## Constructors

### Constructor

> **new UserController**(`configuration`): `UserController`

#### Parameters

##### configuration

[`UselessApiControllerConfiguration`](reference/interfaces/UselessApiControllerConfiguration.md)

#### Returns

`UserController`

#### Inherited from

[`UselessApiController`](reference/classes/UselessApiController.md).[`constructor`](UselessApiController.md#constructor)

## Properties

### basePath

> **basePath**: `string` = `'/api/v1/authentication/users'`

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

> **name**: `string` = `'UserCollection'`

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

### activateProductInstance()

> **activateProductInstance**(`userId`, `productInstanceId`): `Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

***

### activateTimedTrigger()

> **activateTimedTrigger**(`userId`, `timedTriggerId`): `Promise`<`Record`<`string`, `any`> | [`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### timedTriggerId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | [`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

***

### configureProductInstance()

> **configureProductInstance**<`TRequest`>(`userId`, `productInstanceId`, `body`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Type Parameters

##### TRequest

`TRequest` = `Record`<`string`, `any`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

##### body

`TRequest`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### createProductInstance()

> **createProductInstance**(`userId`, `body`): `Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### body

[`UserCreateProductInstanceDto`](reference/interfaces/UserCreateProductInstanceDto.md)

#### Returns

`Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

***

### createTimedTrigger()

> **createTimedTrigger**(`userId`, `body`): `Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### body

[`CreateTimedTriggerDto`](reference/interfaces/CreateTimedTriggerDto.md)

#### Returns

`Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

***

### deactivateProductInstance()

> **deactivateProductInstance**(`userId`, `productInstanceId`): `Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

***

### deactivateTimedTrigger()

> **deactivateTimedTrigger**(`userId`, `timedTriggerId`): `Promise`<`Record`<`string`, `any`> | [`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### timedTriggerId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | [`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

***

### delete()

> **delete**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<`void`>

***

### deleteApiToken()

> **deleteApiToken**(`userId`, `apiTokenId`): `Promise`<`void`>

#### Parameters

##### userId

`string` | `number`

##### apiTokenId

`string` | `number`

#### Returns

`Promise`<`void`>

***

### deleteProductInstance()

> **deleteProductInstance**(`userId`, `productInstanceId`): `Promise`<`void`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<`void`>

***

### deleteTimedTrigger()

> **deleteTimedTrigger**(`userId`, `timedTriggerId`): `Promise`<`void`>

#### Parameters

##### userId

`string` | `number`

##### timedTriggerId

`string` | `number`

#### Returns

`Promise`<`void`>

***

### findApiTokens()

> **findApiTokens**(`userId`, `query`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ApiToken`](reference/interfaces/ApiToken.md)> | `undefined`>

#### Parameters

##### userId

`string`

##### query

[`QueryApiTokenDto`](reference/interfaces/QueryApiTokenDto.md)

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ApiToken`](reference/interfaces/ApiToken.md)> | `undefined`>

***

### findProductInstances()

> **findProductInstances**(`userId`, `query`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ProductInstance`](reference/interfaces/ProductInstance.md)> | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### query

[`QueryProductInstanceDto`](reference/interfaces/QueryProductInstanceDto.md)

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ProductInstance`](reference/interfaces/ProductInstance.md)> | `undefined`>

***

### findTimedTriggers()

> **findTimedTriggers**(`userId`, `query`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)> | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### query

[`QueryTimedTriggerDto`](reference/interfaces/QueryTimedTriggerDto.md)

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)> | `undefined`>

***

### get()

> **get**(`id`): `Promise`<[`User`](reference/interfaces/User.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

#### Returns

`Promise`<[`User`](reference/interfaces/User.md) | `undefined`>

***

### getAllApiTokens()

> **getAllApiTokens**(`userId`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ApiToken`](reference/interfaces/ApiToken.md)> | `undefined`>

#### Parameters

##### userId

`string`

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ApiToken`](reference/interfaces/ApiToken.md)> | `undefined`>

***

### getAllProductInstances()

> **getAllProductInstances**(`userId`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ProductInstance`](reference/interfaces/ProductInstance.md)> | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`ProductInstance`](reference/interfaces/ProductInstance.md)> | `undefined`>

***

### getAllTimedTriggers()

> **getAllTimedTriggers**(`userId`, `pagination?`): `Promise`<[`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)> | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### pagination?

[`IPagination`](reference/interfaces/IPagination.md)

#### Returns

`Promise`<[`PaginationResponse`](PaginationResponse.md)<[`TimedTrigger`](reference/interfaces/TimedTrigger.md)> | `undefined`>

***

### getApiToken()

> **getApiToken**(`userId`, `apiTokenId`): `Promise`<[`ApiToken`](reference/interfaces/ApiToken.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### apiTokenId

`string` | `number`

#### Returns

`Promise`<[`ApiToken`](reference/interfaces/ApiToken.md) | `undefined`>

***

### getProductInstance()

> **getProductInstance**(`userId`, `productInstanceId`): `Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

***

### getProductInstanceConfiguration()

> **getProductInstanceConfiguration**(`userId`, `productInstanceId`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### getTimedTrigger()

> **getTimedTrigger**(`userId`, `timedTriggerId`): `Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### timedTriggerId

`string` | `number`

#### Returns

`Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

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

***

### update()

> **update**(`id`, `body`): `Promise`<[`User`](reference/interfaces/User.md) | `undefined`>

#### Parameters

##### id

`string` | `number`

##### body

[`UpdateUserDto`](reference/interfaces/UpdateUserDto.md)

#### Returns

`Promise`<[`User`](reference/interfaces/User.md) | `undefined`>

***

### updateProductInstance()

> **updateProductInstance**(`userId`, `productInstanceId`, `body`): `Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

##### body

[`UserUpdateProductInstanceDto`](reference/interfaces/UserUpdateProductInstanceDto.md)

#### Returns

`Promise`<[`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

***

### updateTimedTrigger()

> **updateTimedTrigger**(`userId`, `timedTriggerId`, `body`): `Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### timedTriggerId

`string` | `number`

##### body

[`UpdateTimedTriggerDto`](reference/interfaces/UpdateTimedTriggerDto.md)

#### Returns

`Promise`<[`TimedTrigger`](reference/interfaces/TimedTrigger.md) | `undefined`>

***

### upgradeProductInstance()

> **upgradeProductInstance**(`userId`, `productInstanceId`): `Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

##### productInstanceId

`string` | `number`

#### Returns

`Promise`<`Record`<`string`, `any`> | [`ProductInstance`](reference/interfaces/ProductInstance.md) | `undefined`>
