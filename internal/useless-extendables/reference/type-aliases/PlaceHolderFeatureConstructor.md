# PlaceHolderFeatureConstructor<TFeature, TArgs>

> **PlaceHolderFeatureConstructor**<`TFeature`, `TArgs`> = `MockFeatureConstructor`<`TFeature`, `TArgs`>

Note: PlaceHolderFeatureConstructor is just an alias for MockFeatureConstructor, but it is used here to signify
      that what you give into createLoadableFeatureContainer can be more than just a mock implementation.

## Type Parameters

### TFeature

`TFeature` *extends* [`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`any`, `any`>

### TArgs

`TArgs` *extends* `Record`<`string`, `any`> | `void` = `void`
