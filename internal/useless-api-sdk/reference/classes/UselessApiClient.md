# UselessApiClient

## Extends

- `ApiClient`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md), [`UselessApiClientApiInterface`](../interfaces/UselessApiClientApiInterface.md)>

## Constructors

### Constructor

> **new UselessApiClient**(`configuration`): `UselessApiClient`

#### Parameters

##### configuration

[`UselessApiClientConfiguration`](reference/interfaces/UselessApiClientConfiguration.md)

#### Returns

`UselessApiClient`

#### Overrides

`ApiClient<UselessApiClientUser, UselessApiClientApiInterface>.constructor`

## Properties

### action

> **action**: [`ActionApi`](reference/interfaces/ActionApi.md)

***

### admin

> **admin**: [`AdminApi`](reference/interfaces/AdminApi.md)

***

### api

> **api**: [`UselessApiClientApiInterface`](reference/interfaces/UselessApiClientApiInterface.md)

#### Inherited from

`ApiClient.api`

***

### apiTokens

> **apiTokens**: [`ApiTokenController`](reference/classes/ApiTokenController.md)

***

### authentication

> **authentication**: [`AuthenticationController`](reference/classes/AuthenticationController.md)

***

### configuration

> **configuration**: [`EnsuredUselessApiClientConfiguration`](reference/interfaces/EnsuredUselessApiClientConfiguration.md)

#### Overrides

`ApiClient.configuration`

***

### errorHandler?

> `protected` **errorHandler**?: `UselessErrorHandler`

#### Inherited from

`ApiClient.errorHandler`

***

### executions

> **executions**: [`ExecutionCollection`](reference/classes/ExecutionCollection.md)

***

### id

> `protected` `readonly` **id**: `string`

#### Inherited from

`ApiClient.id`

***

### initialized

> **initialized**: `Promise`<`void`>

#### Inherited from

`ApiClient.initialized`

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

`ApiClient.logger`

***

### name

> **name**: `string`

#### Inherited from

`ApiClient.name`

***

### notifications

> **notifications**: [`NotificationsController`](reference/classes/NotificationsController.md)

***

### productInstances

> **productInstances**: [`ProductInstanceCollection`](reference/classes/ProductInstanceCollection.md)

***

### products

> **products**: [`ProductCollection`](reference/classes/ProductCollection.md)

***

### requestFactory

> `protected` **requestFactory**: `RequestFactory`

#### Inherited from

`ApiClient.requestFactory`

***

### storage

> `protected` **storage**: `UselessStorage`

#### Inherited from

`ApiClient.storage`

***

### users

> **users**: [`UserController`](reference/classes/UserController.md)

***

### version

> **version**: `string`

## Methods

### authenticate()

> **authenticate**(`credentials`): `Promise`<[`AuthenticateResponse`](reference/interfaces/AuthenticateResponse.md) | `undefined`>

#### Parameters

##### credentials

`Credentials`

#### Returns

`Promise`<[`AuthenticateResponse`](reference/interfaces/AuthenticateResponse.md) | `undefined`>

#### Overrides

`ApiClient.authenticate`

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clear`

***

### clearAuthentication()

> **clearAuthentication**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearAuthentication`

***

### clearAuthenticationStorage()

> **clearAuthenticationStorage**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearAuthenticationStorage`

***

### clearCredentials()

> **clearCredentials**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearCredentials`

***

### clearCredentialStorage()

> **clearCredentialStorage**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearCredentialStorage`

***

### clearParentAuthentication()

> **clearParentAuthentication**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearParentAuthentication`

***

### clearParentAuthenticationStorage()

> **clearParentAuthenticationStorage**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearParentAuthenticationStorage`

***

### clearStorage()

> **clearStorage**(): `void`

#### Returns

`void`

#### Inherited from

`ApiClient.clearStorage`

***

### configureController()

> **configureController**(`controller`): `void`

#### Parameters

##### controller

`ApiController`

#### Returns

`void`

#### Inherited from

`ApiClient.configureController`

***

### deAuthenticate()

> **deAuthenticate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`ApiClient.deAuthenticate`

***

### destroy()

> **destroy**(`deAuthenticate?`): `Promise`<`void`>

#### Parameters

##### deAuthenticate?

`boolean`

#### Returns

`Promise`<`void`>

#### Inherited from

`ApiClient.destroy`

***

### getAuthentication()

> **getAuthentication**(): `ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)> | `undefined`

#### Returns

`ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)> | `undefined`

#### Inherited from

`ApiClient.getAuthentication`

***

### getCredentials()

> **getCredentials**(): `any`

#### Returns

`any`

#### Inherited from

`ApiClient.getCredentials`

***

### getLogLevel()

> **getLogLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

`ApiClient.getLogLevel`

***

### getParentAuthentication()

> **getParentAuthentication**(): `ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)> | `undefined`

#### Returns

`ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)> | `undefined`

#### Inherited from

`ApiClient.getParentAuthentication`

***

### getParentUser()

> **getParentUser**(): [`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md) | `undefined`

#### Returns

[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md) | `undefined`

#### Inherited from

`ApiClient.getParentUser`

***

### getStorage()

> **getStorage**(): `object`

#### Returns

`object`

##### authentication?

> **authentication**?: `ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)>

##### credentials?

> **credentials**?: `any`

##### parentAuthentication?

> **parentAuthentication**?: `ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)>

#### Inherited from

`ApiClient.getStorage`

***

### getUser()

> **getUser**(): [`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md) | `undefined`

#### Returns

[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md) | `undefined`

#### Inherited from

`ApiClient.getUser`

***

### impersonate()

> **impersonate**(`userId`): `Promise`<[`AuthenticationLoginResponseDto`](reference/interfaces/AuthenticationLoginResponseDto.md) | `undefined`>

#### Parameters

##### userId

`string` | `number`

#### Returns

`Promise`<[`AuthenticationLoginResponseDto`](reference/interfaces/AuthenticationLoginResponseDto.md) | `undefined`>

***

### invalidateAuthentication()

> **invalidateAuthentication**(`clearCredentials?`): `Promise`<`void`>

#### Parameters

##### clearCredentials?

`boolean`

#### Returns

`Promise`<`void`>

#### Inherited from

`ApiClient.invalidateAuthentication`

***

### isImpersonating()

> **isImpersonating**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`ApiClient.isImpersonating`

***

### onError()

> **onError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`UselessError`

#### Returns

`Promise`<`void`>

#### Overrides

`ApiClient.onError`

***

### reAuthenticate()

> **reAuthenticate**(): `Promise`<`unknown`>

#### Returns

`Promise`<`unknown`>

#### Inherited from

`ApiClient.reAuthenticate`

***

### refreshAuthentication()

> **refreshAuthentication**(`refreshToken`): `Promise`<`void`>

#### Parameters

##### refreshToken

`string` | `undefined`

#### Returns

`Promise`<`void`>

#### Overrides

`ApiClient.refreshAuthentication`

***

### registerController()

> **registerController**<`K`>(`controller`, `path?`): [`UselessApiClientApiInterface`](reference/interfaces/UselessApiClientApiInterface.md)[`K`]

#### Type Parameters

##### K

`K` *extends* keyof [`UselessApiClientApiInterface`](reference/interfaces/UselessApiClientApiInterface.md)

#### Parameters

##### controller

[`UselessApiClientApiInterface`](reference/interfaces/UselessApiClientApiInterface.md)[`K`]

##### path?

`string`

#### Returns

[`UselessApiClientApiInterface`](reference/interfaces/UselessApiClientApiInterface.md)[`K`]

#### Inherited from

`ApiClient.registerController`

***

### registerRequestInterceptor()

> **registerRequestInterceptor**<`TRequest`, `TResponse`>(`interceptor`, `origin?`): `void`

#### Type Parameters

##### TRequest

`TRequest` = `any`

##### TResponse

`TResponse` = `any`

#### Parameters

##### interceptor

`IRequestInterceptor`<`TRequest`, `TResponse`>

##### origin?

`string`

#### Returns

`void`

#### Inherited from

`ApiClient.registerRequestInterceptor`

***

### registerResponseInterceptor()

> **registerResponseInterceptor**<`TResponse`>(`interceptor`, `origin?`): `void`

#### Type Parameters

##### TResponse

`TResponse` = `any`

#### Parameters

##### interceptor

`IResponseInterceptor`<`TResponse`>

##### origin?

`string`

#### Returns

`void`

#### Inherited from

`ApiClient.registerResponseInterceptor`

***

### reset()

> **reset**(`deAuthenticate?`): `Promise`<`void`>

#### Parameters

##### deAuthenticate?

`boolean`

#### Returns

`Promise`<`void`>

#### Inherited from

`ApiClient.reset`

***

### setAuthentication()

> **setAuthentication**(`authentication`, `persist?`, `impersonated?`, `autoRefresh?`): `Promise`<`void`>

#### Parameters

##### authentication

`ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)>

##### persist?

`boolean`

##### impersonated?

`boolean`

##### autoRefresh?

`boolean`

#### Returns

`Promise`<`void`>

#### Inherited from

`ApiClient.setAuthentication`

***

### setCredentials()

> **setCredentials**(`credentials`, `persist?`): `void`

#### Parameters

##### credentials

`any`

##### persist?

`boolean`

#### Returns

`void`

#### Inherited from

`ApiClient.setCredentials`

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `void`

#### Parameters

##### errorHandler

`UselessErrorHandler`

#### Returns

`void`

#### Inherited from

`ApiClient.setErrorHandler`

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Inherited from

`ApiClient.setLogLevel`

***

### setParentAuthentication()

> **setParentAuthentication**(`parentAuthentication?`, `persist?`): `void`

#### Parameters

##### parentAuthentication?

`ApiClientAuthentication`<[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)>

##### persist?

`boolean`

#### Returns

`void`

#### Inherited from

`ApiClient.setParentAuthentication`

***

### setParentUser()

> **setParentUser**(`user?`): `void`

#### Parameters

##### user?

[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)

#### Returns

`void`

#### Inherited from

`ApiClient.setParentUser`

***

### setUser()

> **setUser**(`user?`): `void`

#### Parameters

##### user?

[`UselessApiClientUser`](reference/interfaces/UselessApiClientUser.md)

#### Returns

`void`

#### Inherited from

`ApiClient.setUser`

***

### updateUser()

> **updateUser**(`user?`): `Promise`<`void`>

#### Parameters

##### user?

`MinimalUser`

#### Returns

`Promise`<`void`>
