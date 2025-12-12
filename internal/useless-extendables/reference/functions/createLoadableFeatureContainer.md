# createLoadableFeatureContainer

> **createLoadableFeatureContainer**<`TFeature`, `TArgs`>(`placeHolder`, `configuration?`): `LoadableFeatureContainerConstructor`<`TFeature`, `TArgs`>

## Type Parameters

### TFeature

`TFeature` *extends* [`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

### TArgs

`TArgs` *extends* `void` | `Record`<`string`, `any`> = `void`

## Parameters

### placeHolder

[`PlaceHolderFeatureConstructor`](reference/type-aliases/PlaceHolderFeatureConstructor.md)<`TFeature`, `TArgs`>

### configuration?

[`LoadableFeatureContainerConfiguration`](reference/classes/LoadableFeatureContainerConfiguration.md)

## Returns

`LoadableFeatureContainerConstructor`<`TFeature`, `TArgs`>
