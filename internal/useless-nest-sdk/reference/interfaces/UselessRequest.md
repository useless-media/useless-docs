# UselessRequest<TUser>

## Extends

- `Request`

## Type Parameters

### TUser

`TUser` *extends* [`RequestUser`](reference/interfaces/RequestUser.md) | `"NotVerified"` = [`RequestUser`](RequestUser.md)

## Properties

### authorization?

> **authorization**?: `string`

***

### excludeFromUselessApiAuthenticationVerification?

> **excludeFromUselessApiAuthenticationVerification**?: `boolean`

***

### getBaseUrl()

> **getBaseUrl**: () => `string`

#### Returns

`string`

***

### getClientIp()

> **getClientIp**: () => `string`

#### Returns

`string`

***

### getHost()

> **getHost**: () => `string`

#### Returns

`string`

***

### getOriginalUrl()

> **getOriginalUrl**: () => `string`

#### Returns

`string`

***

### user?

> **user**?: `TUser`

#### Overrides

`Request.user`
