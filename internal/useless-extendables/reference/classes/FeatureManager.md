# FeatureManager<TApplicationBridge, TApplicationDelegate>

## Type Parameters

### TApplicationBridge

`TApplicationBridge` *extends* `Record`<`string`, `any`> | `void` = `void`

### TApplicationDelegate

`TApplicationDelegate` *extends* `IMulticastDelegate` = `IMulticastDelegate`

## Constructors

### Constructor

> **new FeatureManager**<`TApplicationBridge`, `TApplicationDelegate`>(`args`): `FeatureManager`<`TApplicationBridge`, `TApplicationDelegate`>

#### Parameters

##### args

[`FeatureManagerArgs`](reference/interfaces/FeatureManagerArgs.md)<`TApplicationDelegate`>

#### Returns

`FeatureManager`<`TApplicationBridge`, `TApplicationDelegate`>

## Methods

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getExtensionManifests()

> **getExtensionManifests**<`TExtensionDelegate`>(`type`): [`ExtensionManifest`](reference/interfaces/ExtensionManifest.md)<`TExtensionDelegate`>[]

#### Type Parameters

##### TExtensionDelegate

`TExtensionDelegate` *extends* `void` | [`IFeatureExtensionDelegate`](reference/interfaces/IFeatureExtensionDelegate.md) = `void`

#### Parameters

##### type

`string`

#### Returns

[`ExtensionManifest`](reference/interfaces/ExtensionManifest.md)<`TExtensionDelegate`>[]

***

### getFeature()

> **getFeature**<`TFeature`>(`type`): `TFeature`

#### Type Parameters

##### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`> = [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

#### Parameters

##### type

`string`

#### Returns

`TFeature`

***

### registerExtension()

#### Call Signature

> **registerExtension**(`manifest`): `void`

##### Parameters

###### manifest

[`ExtensionManifest`](reference/interfaces/ExtensionManifest.md)

##### Returns

`void`

#### Call Signature

> **registerExtension**(`manifest`): `Promise`<`void`>

##### Parameters

###### manifest

[`LoadableExtensionManifest`](reference/interfaces/LoadableExtensionManifest.md) | { `configuration?`: {[`key`: `string`]: `any`; }; `criteria?`: {[`key`: `string`]: `any`; }; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `name?`: `string`; `type?`: `string`; }

##### Returns

`Promise`<`void`>

***

### registerFeature()

#### Call Signature

> **registerFeature**<`TFeature`>(`feature`): `TFeature`

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

##### Parameters

###### feature

`TFeature`

##### Returns

`TFeature`

#### Call Signature

> **registerFeature**<`TFeature`, `TManifest`>(`manifest`): `TFeature`

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

###### TManifest

`TManifest` *extends* [`FeatureManifest`](reference/interfaces/FeatureManifest.md)<`any`, `any`, `any`> = [`FeatureManifest`](../interfaces/FeatureManifest.md)<`any`, `any`, `any`>

##### Parameters

###### manifest

`TManifest`

##### Returns

`TFeature`

#### Call Signature

> **registerFeature**<`TFeature`, `TManifest`>(`manifest`): `Promise`<`TFeature` | `undefined`>

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

###### TManifest

`TManifest` *extends* [`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md) | { `args?`: `any`; `configuration?`: {[`key`: `string`]: `any`; }; `followsApplicationLifecycle?`: `boolean`; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `type?`: `string`; } = [`LoadableFeatureManifest`](../interfaces/LoadableFeatureManifest.md) | { `args?`: `any`; `configuration?`: {[`key`: `string`]: `any`; }; `followsApplicationLifecycle?`: `boolean`; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `type?`: `string`; }

##### Parameters

###### manifest

`TManifest`

##### Returns

`Promise`<`TFeature` | `undefined`>

***

### registerFeatureDelegate()

> **registerFeatureDelegate**<`TFeatureDelegate`>(`type`, `delegate`): `void`

#### Type Parameters

##### TFeatureDelegate

`TFeatureDelegate` *extends* [`IExtendableFeatureDelegate`](reference/interfaces/IExtendableFeatureDelegate.md) = [`IExtendableFeatureDelegate`](../interfaces/IExtendableFeatureDelegate.md)

#### Parameters

##### type

`string`

##### delegate

`Partial`<`TFeatureDelegate`>

#### Returns

`void`

***

### registerLazyFeature()

#### Call Signature

> **registerLazyFeature**<`TFeature`, `TLazyFeature`>(`lazyFeature`, `install?`): `Promise`<`TFeature` | `undefined`>

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

###### TLazyFeature

`TLazyFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`> & [`ILoadableFeatureContainer`](../interfaces/ILoadableFeatureContainer.md)<`TFeature`, `any`> = `ILazyFeature`<`TFeature`, `any`>

##### Parameters

###### lazyFeature

`TLazyFeature`

###### install?

`true`

##### Returns

`Promise`<`TFeature` | `undefined`>

#### Call Signature

> **registerLazyFeature**<`TFeature`, `TLazyFeature`>(`lazyFeature`, `install?`): `TLazyFeature`

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

###### TLazyFeature

`TLazyFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`> & [`ILoadableFeatureContainer`](../interfaces/ILoadableFeatureContainer.md)<`TFeature`, `any`> = `ILazyFeature`<`TFeature`, `any`>

##### Parameters

###### lazyFeature

`TLazyFeature`

###### install?

`false`

##### Returns

`TLazyFeature`

***

### registerLoadableExtension()

> **registerLoadableExtension**(`manifest`): `Promise`<`void`>

#### Parameters

##### manifest

[`LoadableExtensionManifest`](reference/interfaces/LoadableExtensionManifest.md) | { `configuration?`: {[`key`: `string`]: `any`; }; `criteria?`: {[`key`: `string`]: `any`; }; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `name?`: `string`; `type?`: `string`; }

#### Returns

`Promise`<`void`>

***

### registerLoadableFeature()

#### Call Signature

> **registerLoadableFeature**<`TFeature`>(`manifest`): `Promise`<`TFeature` | `undefined`>

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`> = [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

##### Parameters

###### manifest

[`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md) | { `args?`: `any`; `configuration?`: {[`key`: `string`]: `any`; }; `followsApplicationLifecycle?`: `boolean`; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `type?`: `string`; }

##### Returns

`Promise`<`TFeature` | `undefined`>

#### Call Signature

> **registerLoadableFeature**<`TFeature`, `TArgs`, `TLoadableFeature`>(`loadableFeature`): `Promise`<`TLoadableFeature` | `undefined`>

##### Type Parameters

###### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

###### TArgs

`TArgs` *extends* `void` | `Record`<`string`, `any`> = `any`

###### TLoadableFeature

`TLoadableFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`> & [`ILoadableFeatureContainer`](../interfaces/ILoadableFeatureContainer.md)<`TFeature`, `TArgs`> = `ILoadableFeature`<`TFeature`, `TArgs`>

##### Parameters

###### loadableFeature

`TLoadableFeature`

##### Returns

`Promise`<`TLoadableFeature` | `undefined`>

***

### registerLoadableFeatureContainer()

> **registerLoadableFeatureContainer**<`TFeature`, `TArgs`, `TLoadableFeatureContainerConstructor`>(`LoadableFeatureContainerConstructor`, `manifest`, `args?`): `Promise`<`ILoadableFeature`<`TFeature`, `TArgs`> | `undefined`>

#### Type Parameters

##### TFeature

`TFeature` *extends* [`ExtendableFeature`](ExtendableFeature.md)<`any`, `any`, [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md), [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `IMulticastDelegate`, `void`, `any`>

##### TArgs

`TArgs` *extends* `void` | `Record`<`string`, `any`> = `any`

##### TLoadableFeatureContainerConstructor

`TLoadableFeatureContainerConstructor` *extends* `LoadableFeatureContainerConstructor`<`TFeature`, `TArgs`> = `LoadableFeatureContainerConstructor`<`TFeature`, `TArgs`>

#### Parameters

##### LoadableFeatureContainerConstructor

`TLoadableFeatureContainerConstructor`

##### manifest

[`LoadableFeatureManifest`](reference/interfaces/LoadableFeatureManifest.md)

##### args?

`TArgs`

#### Returns

`Promise`<`ILoadableFeature`<`TFeature`, `TArgs`> | `undefined`>

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`TApplicationBridge`

#### Returns

`void`

***

### setApplicationDelegate()

> **setApplicationDelegate**(`applicationDelegate`): `void`

#### Parameters

##### applicationDelegate

`MulticastDelegate`<`TApplicationDelegate`>

#### Returns

`void`

***

### setApplicationMainDelegate()

> **setApplicationMainDelegate**<`TSetApplicationDelegate`>(`applicationMainDelegate`): `void`

#### Type Parameters

##### TSetApplicationDelegate

`TSetApplicationDelegate` *extends* `IMulticastDelegate` = `TApplicationDelegate`

#### Parameters

##### applicationMainDelegate

`Partial`<`TSetApplicationDelegate`>

#### Returns

`void`
