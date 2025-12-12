# MulticastDelegateInterceptorMethod<TDelegate, TMethod>

## Type Parameters

### TDelegate

`TDelegate` *extends* [`IMulticastDelegate`](reference/interfaces/IMulticastDelegate.md)

### TMethod

`TMethod` *extends* keyof `TDelegate`

> **MulticastDelegateInterceptorMethod**(`args`): `Promise`<[`Interrupt`](reference/interfaces/Interrupt.md) | `Parameters`<`TDelegate`[`TMethod`]>[`0`]>

## Parameters

### args

`Parameters`<`TDelegate`[`TMethod`]>[`0`]

## Returns

`Promise`<[`Interrupt`](reference/interfaces/Interrupt.md) | `Parameters`<`TDelegate`[`TMethod`]>[`0`]>
