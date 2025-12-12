# ExampleFeature

Note: ExtendableFeatureBase merely holds the interaction points between an Extendable Feature and the FeatureManager,
      to let ExtendableFeature focus on its functionality.

## Extends

- [`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`any`>

## Indexable

[`key`: `symbol`]: `true`

## Constructors

### Constructor

> **new ExampleFeature**(`args?`): `ExampleFeature`

#### Parameters

##### args?

`ExampleFeatureArgs`

#### Returns

`ExampleFeature`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`constructor`](ExtendableFeature.md#constructor)

## Properties

### applicationBridge?

> `protected` **applicationBridge**?: `void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`applicationBridge`](ExtendableFeature.md#applicationbridge)

***

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`configuration`](ExtendableFeature.md#configuration)

***

### constructorArgument

> **constructorArgument**: `string` = `''`

***

### delegate?

> `protected` **delegate**?: [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md)

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`delegate`](ExtendableFeature.md#delegate)

***

### featureManager?

> `protected` **featureManager**?: [`FeatureManager`](reference/classes/FeatureManager.md)<`void`, `IMulticastDelegate`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`featureManager`](ExtendableFeature.md#featuremanager)

***

### featureManagerDelegate?

> `protected` **featureManagerDelegate**?: [`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)<`IMulticastDelegate`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`featureManagerDelegate`](ExtendableFeature.md#featuremanagerdelegate)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`logger`](ExtendableFeature.md#logger)

***

### state

> `protected` **state**: `any`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`state`](ExtendableFeature.md#state)

***

### type

> **type**: `string` = `'ExampleFeature'`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`type`](ExtendableFeature.md#type)

## Accessors

### activeExtensions

#### Get Signature

> **get** `protected` **activeExtensions**(): [`INamedExtension`](reference/interfaces/INamedExtension.md)<`TExtension`, `TExtensionDelegate`>[]

##### Returns

[`INamedExtension`](reference/interfaces/INamedExtension.md)<`TExtension`, `TExtensionDelegate`>[]

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`activeExtensions`](ExtendableFeature.md#activeextensions)

***

### extension

#### Get Signature

> **get** `protected` **extension**(): `TExtension` | `undefined`

##### Returns

`TExtension` | `undefined`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`extension`](ExtendableFeature.md#extension)

## Methods

### checkManifestCriteria()

> **checkManifestCriteria**(`extensionManifest`): `boolean`

#### Parameters

##### extensionManifest

[`ExtensionManifest`](reference/interfaces/ExtensionManifest.md)

#### Returns

`boolean`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`checkManifestCriteria`](ExtendableFeature.md#checkmanifestcriteria)

***

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`configure`](ExtendableFeature.md#configure)

***

### configureExtension()

> **configureExtension**(`extension`): `void`

Per session (reset/initialize) configuration

#### Parameters

##### extension

`any`

#### Returns

`void`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`configureExtension`](ExtendableFeature.md#configureextension)

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`destroy`](ExtendableFeature.md#destroy)

***

### exampleFunction()

> **exampleFunction**(): `void`

#### Returns

`void`

***

### execute()

> `protected` **execute**<`TResult`>(`selection`, `type`, `func`, ...`args`): `Promise`<`TResult`>

#### Type Parameters

##### TResult

`TResult` *extends* `Record`<`string`, `any`>

#### Parameters

##### selection

[`ExecutionSelection`](reference/enumerations/ExecutionSelection.md)

##### type

[`ExecutionTypes`](reference/enumerations/ExecutionTypes.md)

##### func

`string` | `number` | `symbol`

##### args

...`any`[]

#### Returns

`Promise`<`TResult`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`execute`](ExtendableFeature.md#execute)

***

### featureDestroy()

> **featureDestroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`featureDestroy`](ExtendableFeature.md#featuredestroy)

***

### featureReset()

> **featureReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`featureReset`](ExtendableFeature.md#featurereset)

***

### getExtensionDelegate()

> **getExtensionDelegate**(): `void`

Per session (reset/initialize) (optionally) providing a new instance of the TExtensionDelegate

#### Returns

`void`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`getExtensionDelegate`](ExtendableFeature.md#getextensiondelegate)

***

### getPublicDelegateMock()

> **getPublicDelegateMock**(): `Required`<`any`>

#### Returns

`Required`<`any`>

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`getPublicDelegateMock`](ExtendableFeature.md#getpublicdelegatemock)

***

### getState()

> **getState**(): `any`

#### Returns

`any`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`getState`](ExtendableFeature.md#getstate)

***

### initialize()

> **initialize**(...`args`): `Promise`<`void`>

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`initialize`](ExtendableFeature.md#initialize)

***

### log()

> **log**(): `void`

#### Returns

`void`

***

### register()

> **register**(`featureManager`, `delegate`): `void`

#### Parameters

##### featureManager

[`FeatureManager`](reference/classes/FeatureManager.md)<`void`>

##### delegate

[`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`register`](ExtendableFeature.md#register)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`reset`](ExtendableFeature.md#reset)

***

### selectExtensions()

> `protected` **selectExtensions**(): `void`

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`selectExtensions`](ExtendableFeature.md#selectextensions)

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`void`

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`setApplicationBridge`](ExtendableFeature.md#setapplicationbridge)

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md)

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`setDelegate`](ExtendableFeature.md#setdelegate)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`setLogger`](ExtendableFeature.md#setlogger)

***

### setupExtension()

> **setupExtension**(`extension`): `void`

One-time setup, when extension is instantiated

#### Parameters

##### extension

`any`

#### Returns

`void`

#### Overrides

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`setupExtension`](ExtendableFeature.md#setupextension)

***

### setupFeature()

> **setupFeature**(`setup`): `void`

#### Parameters

##### setup

[`SetupFeatureArgs`](reference/interfaces/SetupFeatureArgs.md)<[`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md), `void`>

#### Returns

`void`

#### Inherited from

[`ExtendableFeature`](reference/classes/ExtendableFeature.md).[`setupFeature`](ExtendableFeature.md#setupfeature)
