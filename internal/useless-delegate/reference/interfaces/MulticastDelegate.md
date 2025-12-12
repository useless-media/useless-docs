# MulticastDelegate<TDelegate>

## Type Parameters

### TDelegate

`TDelegate` *extends* [`IMulticastDelegate`](reference/interfaces/IMulticastDelegate.md)

## Indexable

[`key`: `string`]: `any`

## Methods

### augment()

> **augment**<`TAugmentingDelegate`>(`delegateOrDelegateClassRef`, `configuration?`): `void`

#### Type Parameters

##### TAugmentingDelegate

`TAugmentingDelegate` *extends* [`IMulticastDelegate`](reference/interfaces/IMulticastDelegate.md)

#### Parameters

##### delegateOrDelegateClassRef

`Required`<`ExtractFunctionProperties`<`TAugmentingDelegate`>> | () => `Required`<`ExtractFunctionProperties`<`TAugmentingDelegate`>>

##### configuration?

`Partial`<[`MulticastDelegateConfiguration`](reference/classes/MulticastDelegateConfiguration.md)>

#### Returns

`void`

***

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

`Partial`<[`MulticastDelegateConfiguration`](reference/classes/MulticastDelegateConfiguration.md)>

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getMainDelegate()

> **getMainDelegate**(): `Partial`<`TDelegate`> | `undefined`

#### Returns

`Partial`<`TDelegate`> | `undefined`

***

### onError()

> **onError**(`errorType`, `id`, `error`): `void`

#### Parameters

##### errorType

[`MulticastDelegateErrorTypes`](reference/enumerations/MulticastDelegateErrorTypes.md)

##### id

`string`

##### error

`any`

#### Returns

`void`

***

### registerDelegate()

> **registerDelegate**(`delegate`, `prefix?`): [`MulticastDelegateContext`](reference/interfaces/MulticastDelegateContext.md)

#### Parameters

##### delegate

`Partial`<`TDelegate`> & [`IMutable`](reference/interfaces/IMutable.md)

##### prefix?

`string`

#### Returns

[`MulticastDelegateContext`](reference/interfaces/MulticastDelegateContext.md)

***

### registerDelegateInterceptor()

> **registerDelegateInterceptor**(`delegate`, `prefix?`): [`MulticastDelegateContext`](reference/interfaces/MulticastDelegateContext.md)

#### Parameters

##### delegate

`Partial`<`MulticastDelegateInterceptor`<`TDelegate`>>

##### prefix?

`string`

#### Returns

[`MulticastDelegateContext`](reference/interfaces/MulticastDelegateContext.md)

***

### removeDelegateById()

> **removeDelegateById**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

***

### removeInterceptorById()

> **removeInterceptorById**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### setMainDelegate()

> **setMainDelegate**(`delegate`, `id?`): `void`

#### Parameters

##### delegate

`Partial`<`TDelegate`>

##### id?

`string`

#### Returns

`void`
