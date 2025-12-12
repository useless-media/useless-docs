# IDelegatingLoadableFeatureContainer<TFeature, TArgs>

## Extends

- [`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md)<`TFeature`, `TArgs`>

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

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`connectFeature`](ILoadableFeatureContainer.md#connectfeature)

***

### constructFeature()

> **constructFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`constructFeature`](ILoadableFeatureContainer.md#constructfeature)

***

### featureConnected

> **featureConnected**: `boolean`

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`featureConnected`](ILoadableFeatureContainer.md#featureconnected)

***

### FeatureConstructor?

> **FeatureConstructor**?: [`ILoadableFeatureConstructor`](reference/interfaces/ILoadableFeatureConstructor.md)<`TFeature`, `TArgs`>

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`FeatureConstructor`](ILoadableFeatureContainer.md#featureconstructor)

***

### featureInstance?

> **featureInstance**?: `TFeature`

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`featureInstance`](ILoadableFeatureContainer.md#featureinstance)

***

### featureManifest?

> **featureManifest**?: [`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md)

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`featureManifest`](ILoadableFeatureContainer.md#featuremanifest)

***

### installFeature()

> **installFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`installFeature`](ILoadableFeatureContainer.md#installfeature)

***

### loadFeature()

> **loadFeature**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`loadFeature`](ILoadableFeatureContainer.md#loadfeature)

***

### onFeatureConnected()

> **onFeatureConnected**: (`handler`) => `void`

#### Parameters

##### handler

() => `Promise`<`void`>

#### Returns

`void`

***

### onFeatureConstructed()

> **onFeatureConstructed**: (`handler`) => `void`

#### Parameters

##### handler

(`feature`) => `Promise`<`void`>

#### Returns

`void`

***

### onFeatureManifest()

> **onFeatureManifest**: (`handler`) => `void`

#### Parameters

##### handler

(`manifest`) => `Promise`<`void`>

#### Returns

`void`

***

### setFeatureArgs()

> **setFeatureArgs**: (`args`) => `void`

#### Parameters

##### args

`TArgs`

#### Returns

`void`

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`setFeatureArgs`](ILoadableFeatureContainer.md#setfeatureargs)

***

### setFeatureManifest()

> **setFeatureManifest**: (`manifest`) => `void`

#### Parameters

##### manifest

[`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md)

#### Returns

`void`

#### Inherited from

[`ILoadableFeatureContainer`](reference/interfaces/ILoadableFeatureContainer.md).[`setFeatureManifest`](ILoadableFeatureContainer.md#setfeaturemanifest)
