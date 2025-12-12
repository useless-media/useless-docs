# createMulticastDelegate

> **createMulticastDelegate**<`TDelegate`>(`delegateOrDelegateClassRef`, `configuration?`): `TDelegate` & [`MulticastDelegate`](reference/interfaces/MulticastDelegate.md)<`TDelegate`>

## Type Parameters

### TDelegate

`TDelegate` *extends* [`IMulticastDelegate`](reference/interfaces/IMulticastDelegate.md)

## Parameters

### delegateOrDelegateClassRef

`Required`<`ExtractFunctionProperties`<`TDelegate`>> | () => `Required`<`ExtractFunctionProperties`<`TDelegate`>>

### configuration?

`Partial`<[`MulticastDelegateConfiguration`](reference/classes/MulticastDelegateConfiguration.md)>

## Returns

`TDelegate` & [`MulticastDelegate`](reference/interfaces/MulticastDelegate.md)<`TDelegate`>
