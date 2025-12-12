# FeatureManifest<TExtension, TExtensionDelegate, TArgs>

## Type Parameters

### TExtension

`TExtension` *extends* [`FeatureExtension`](reference/classes/FeatureExtension.md)<`TExtensionDelegate`> = `any`

### TExtensionDelegate

`TExtensionDelegate` *extends* [`IFeatureExtensionDelegate`](reference/interfaces/IFeatureExtensionDelegate.md) | `void` = `any`

### TArgs

`TArgs` *extends* `Record`<`string`, `any`> = `any`

## Properties

### args?

> **args**?: `TArgs`

***

### classConstructor

> **classConstructor**: [`ExtendableFeatureConstructor`](reference/interfaces/ExtendableFeatureConstructor.md)<`TExtension`, `TExtensionDelegate`, `TArgs`>

***

### configuration?

> **configuration**?: `Record`<`string`, `any`>

***

### followsApplicationLifecycle?

> **followsApplicationLifecycle**?: `boolean`

***

### type

> **type**: `string`
