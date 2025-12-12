# FeatureManagerFeatureDelegate<TApplicationDelegate>

## Type Parameters

### TApplicationDelegate

`TApplicationDelegate` *extends* `IMulticastDelegate` = `IMulticastDelegate`

## Properties

### handleError()

> **handleError**: (`error`) => `void`

#### Parameters

##### error

`Error` | `Record`<`string`, `any`> | `IError` | `IUselessError`<`any`>

#### Returns

`void`

***

### handleStateUpdated()

> **handleStateUpdated**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### registerDelegate()

> **registerDelegate**: (`delegate`) => `MulticastDelegateContext`

#### Parameters

##### delegate

`Partial`<`TApplicationDelegate`>

#### Returns

`MulticastDelegateContext`

***

### registerDelegateInterceptor()

> **registerDelegateInterceptor**: (`interceptor`) => `MulticastDelegateContext`

#### Parameters

##### interceptor

`Partial`<`MulticastDelegateInterceptor`<`TApplicationDelegate`>>

#### Returns

`MulticastDelegateContext`
