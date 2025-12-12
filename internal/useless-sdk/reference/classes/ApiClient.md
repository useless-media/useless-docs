# ApiClient<TUser, TApiInterface>

## Type Parameters

### TUser

`TUser` *extends* [`ApiClientUser`](reference/interfaces/ApiClientUser.md) = [`ApiClientUser`](../interfaces/ApiClientUser.md)

### TApiInterface

`TApiInterface` *extends* [`ApiClientApiInterface`](reference/interfaces/ApiClientApiInterface.md) = [`ApiClientApiInterface`](../interfaces/ApiClientApiInterface.md)

## Constructors

### Constructor

> `protected` **new ApiClient**<`TUser`, `TApiInterface`>(`configuration`): `ApiClient`<`TUser`, `TApiInterface`>

#### Parameters

##### configuration

[`ApiClientConfiguration`](reference/interfaces/ApiClientConfiguration.md)

#### Returns

`ApiClient`<`TUser`, `TApiInterface`>

## Properties

### api

> **api**: `TApiInterface`

***

### configuration

> `protected` **configuration**: [`EnsuredApiClientConfiguration`](reference/interfaces/EnsuredApiClientConfiguration.md)

***

### errorHandler?

> `protected` **errorHandler**?: [`UselessErrorHandler`](reference/interfaces/UselessErrorHandler.md)

***

### id

> `protected` `readonly` **id**: `string`

***

### initialized

> **initialized**: `Promise`<`void`>

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

***

### name

> **name**: `string`

***

### requestFactory

> `protected` **requestFactory**: [`RequestFactory`](reference/classes/RequestFactory.md)

***

### storage

> `protected` **storage**: [`UselessStorage`](reference/interfaces/UselessStorage.md)

## Methods

### authenticate()

> `abstract` **authenticate**(`credentials`): `Promise`<`unknown`>

#### Parameters

##### credentials

[`ApiClientBasicCredentials`](reference/interfaces/ApiClientBasicCredentials.md)

#### Returns

`Promise`<`unknown`>

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### clearAuthentication()

> **clearAuthentication**(): `void`

#### Returns

`void`

***

### clearAuthenticationStorage()

> **clearAuthenticationStorage**(): `void`

#### Returns

`void`

***

### clearCredentials()

> **clearCredentials**(): `void`

#### Returns

`void`

***

### clearCredentialStorage()

> **clearCredentialStorage**(): `void`

#### Returns

`void`

***

### clearParentAuthentication()

> **clearParentAuthentication**(): `void`

#### Returns

`void`

***

### clearParentAuthenticationStorage()

> **clearParentAuthenticationStorage**(): `void`

#### Returns

`void`

***

### clearStorage()

> **clearStorage**(): `void`

#### Returns

`void`

***

### configureController()

> **configureController**(`controller`): `void`

#### Parameters

##### controller

[`ApiController`](reference/classes/ApiController.md)

#### Returns

`void`

***

### deAuthenticate()

> `abstract` **deAuthenticate**(): `Promise`<`unknown`>

#### Returns

`Promise`<`unknown`>

***

### destroy()

> **destroy**(`deAuthenticate`): `Promise`<`void`>

#### Parameters

##### deAuthenticate

`boolean` = `false`

#### Returns

`Promise`<`void`>

***

### getAuthentication()

> **getAuthentication**(): [`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`> | `undefined`

#### Returns

[`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`> | `undefined`

***

### getCredentials()

> **getCredentials**(): `any`

#### Returns

`any`

***

### getLogLevel()

> **getLogLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

***

### getParentAuthentication()

> **getParentAuthentication**(): [`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`> | `undefined`

#### Returns

[`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`> | `undefined`

***

### getParentUser()

> **getParentUser**(): `TUser` | `undefined`

#### Returns

`TUser` | `undefined`

***

### getStorage()

> **getStorage**(): `object`

#### Returns

`object`

##### authentication?

> **authentication**?: [`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`>

##### credentials?

> **credentials**?: `any`

##### parentAuthentication?

> **parentAuthentication**?: [`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`>

***

### getUser()

> **getUser**(): `TUser` | `undefined`

#### Returns

`TUser` | `undefined`

***

### invalidateAuthentication()

> **invalidateAuthentication**(`clearCredentials`): `Promise`<`void`>

#### Parameters

##### clearCredentials

`boolean` = `true`

#### Returns

`Promise`<`void`>

***

### isImpersonating()

> **isImpersonating**(): `boolean`

#### Returns

`boolean`

***

### onError()

> `abstract` **onError**(`error`): `Promise`<`void`>

#### Parameters

##### error

[`UselessError`](reference/classes/UselessError.md)

#### Returns

`Promise`<`void`>

***

### reAuthenticate()

> **reAuthenticate**(): `Promise`<`unknown`>

#### Returns

`Promise`<`unknown`>

***

### refreshAuthentication()

> `abstract` **refreshAuthentication**(`refreshToken?`): `Promise`<`unknown`>

#### Parameters

##### refreshToken?

`string`

#### Returns

`Promise`<`unknown`>

***

### registerController()

> **registerController**<`K`>(`controller`, `path?`): `TApiInterface`[`K`]

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### controller

`TApiInterface`[`K`]

##### path?

`string`

#### Returns

`TApiInterface`[`K`]

***

### registerRequestInterceptor()

> **registerRequestInterceptor**<`TRequest`, `TResponse`>(`interceptor`, `origin`): `void`

#### Type Parameters

##### TRequest

`TRequest` = `any`

##### TResponse

`TResponse` = `any`

#### Parameters

##### interceptor

[`IRequestInterceptor`](reference/interfaces/IRequestInterceptor.md)<`TRequest`, `TResponse`>

##### origin

`string` = `'*'`

#### Returns

`void`

***

### registerResponseInterceptor()

> **registerResponseInterceptor**<`TResponse`>(`interceptor`, `origin`): `void`

#### Type Parameters

##### TResponse

`TResponse` = `any`

#### Parameters

##### interceptor

[`IResponseInterceptor`](reference/interfaces/IResponseInterceptor.md)<`TResponse`>

##### origin

`string` = `'*'`

#### Returns

`void`

***

### reset()

> **reset**(`deAuthenticate`): `Promise`<`void`>

#### Parameters

##### deAuthenticate

`boolean` = `false`

#### Returns

`Promise`<`void`>

***

### setAuthentication()

> **setAuthentication**(`authentication`, `persist`, `impersonated`, `autoRefresh`): `Promise`<`void`>

#### Parameters

##### authentication

[`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`>

##### persist

`boolean` = `true`

##### impersonated

`boolean` = `false`

##### autoRefresh

`boolean` = `true`

#### Returns

`Promise`<`void`>

***

### setCredentials()

> **setCredentials**(`credentials`, `persist`): `void`

#### Parameters

##### credentials

`any`

##### persist

`boolean` = `true`

#### Returns

`void`

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `void`

#### Parameters

##### errorHandler

[`UselessErrorHandler`](reference/interfaces/UselessErrorHandler.md)

#### Returns

`void`

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

***

### setParentAuthentication()

> **setParentAuthentication**(`parentAuthentication?`, `persist?`): `void`

#### Parameters

##### parentAuthentication?

[`ApiClientAuthentication`](reference/interfaces/ApiClientAuthentication.md)<`TUser`>

##### persist?

`boolean` = `true`

#### Returns

`void`

***

### setParentUser()

> **setParentUser**(`user?`): `void`

#### Parameters

##### user?

`TUser`

#### Returns

`void`

***

### setUser()

> **setUser**(`user?`): `void`

#### Parameters

##### user?

`TUser`

#### Returns

`void`
