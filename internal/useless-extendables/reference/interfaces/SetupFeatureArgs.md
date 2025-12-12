# SetupFeatureArgs<TFeatureDelegate, TApplicationBridge>

## Type Parameters

### TFeatureDelegate

`TFeatureDelegate` *extends* [`IExtendableFeatureDelegate`](reference/interfaces/IExtendableFeatureDelegate.md) = [`IExtendableFeatureDelegate`](IExtendableFeatureDelegate.md)

### TApplicationBridge

`TApplicationBridge` *extends* `Record`<`string`, `any`> | `void` = `void`

## Properties

### applicationBridge?

> **applicationBridge**?: `TApplicationBridge`

***

### configuration?

> **configuration**?: `Record`<`string`, `any`>

***

### delegate?

> **delegate**?: `TFeatureDelegate`

***

### featureManager

> **featureManager**: [`FeatureManager`](reference/classes/FeatureManager.md)<`TApplicationBridge`>

***

### featureManagerDelegate

> **featureManagerDelegate**: [`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)<`any`>

***

### logger

> **logger**: `ILogger`
