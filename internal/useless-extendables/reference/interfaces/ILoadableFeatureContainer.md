# ILoadableFeatureContainer<TFeature, TArgs>

## Extended by

- [`IDelegatingLoadableFeatureContainer`](reference/interfaces/IDelegatingLoadableFeatureContainer.md)

## Type Parameters

### TFeature

`TFeature` *extends* [`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`any`, `any`>

### TArgs

`TArgs` *extends* `Record`<`string`, `any`> | `void` = `void`

## Properties

### connectFeature()

> **connectFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### constructFeature()

> **constructFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### featureConnected

> **featureConnected**: `boolean`

***

### FeatureConstructor?

> **FeatureConstructor**?: [`ILoadableFeatureConstructor`](reference/interfaces/ILoadableFeatureConstructor.md)<`TFeature`, `TArgs`>

***

### featureInstance?

> **featureInstance**?: `TFeature`

***

### featureManifest?

> **featureManifest**?: [`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md)

***

### installFeature()

> **installFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### loadFeature()

> **loadFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setFeatureArgs()

> **setFeatureArgs**: (`args`) => `void`

#### Parameters

##### args

`TArgs`

#### Returns

`void`

***

### setFeatureManifest()

> **setFeatureManifest**: (`manifest`) => `void`

#### Parameters

##### manifest

[`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md)

#### Returns

`void`
