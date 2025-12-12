# ExtendableFeatureConstructor<TExtension, TExtensionDelegate, TArgs>

## Type Parameters

### TExtension

`TExtension` *extends* [`FeatureExtension`](reference/classes/FeatureExtension.md)<`TExtensionDelegate`>

### TExtensionDelegate

`TExtensionDelegate` *extends* [`IFeatureExtensionDelegate`](reference/interfaces/IFeatureExtensionDelegate.md) | `void` = `void`

### TArgs

`TArgs` *extends* `Record`<`string`, `any`> = `any`

## Constructors

### Constructor

> **new ExtendableFeatureConstructor**(`args`): [`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`TExtension`, `TExtensionDelegate`>

#### Parameters

##### args

`TArgs`

#### Returns

[`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`TExtension`, `TExtensionDelegate`>
