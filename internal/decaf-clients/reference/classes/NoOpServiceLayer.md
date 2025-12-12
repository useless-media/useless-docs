# NoOpServiceLayer

## Extends

- [`ServiceLayer`](reference/classes/ServiceLayer.md)

## Indexable

[`key`: `symbol`]: `true`

## Constructors

### Constructor

> **new NoOpServiceLayer**(`args`): `NoOpServiceLayer`

#### Parameters

##### args

[`ServiceLayerArgs`](reference/interfaces/ServiceLayerArgs.md)

#### Returns

`NoOpServiceLayer`

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`constructor`](ServiceLayer.md#constructor)

## Properties

### applicationBridge?

> `protected` **applicationBridge**?: `void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`applicationBridge`](ServiceLayer.md#applicationbridge)

***

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`configuration`](ServiceLayer.md#configuration)

***

### delegate?

> `protected` **delegate**?: `IExtendableFeaturePublicDelegate`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`delegate`](ServiceLayer.md#delegate)

***

### featureManager?

> `protected` **featureManager**?: `FeatureManager`<`void`, `IMulticastDelegate`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`featureManager`](ServiceLayer.md#featuremanager)

***

### featureManagerDelegate?

> `protected` **featureManagerDelegate**?: `FeatureManagerFeatureDelegate`<`IMulticastDelegate`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`featureManagerDelegate`](ServiceLayer.md#featuremanagerdelegate)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`logger`](ServiceLayer.md#logger)

***

### state

> `protected` **state**: `any`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`state`](ServiceLayer.md#state)

***

### type

> **type**: `string` = `'ServiceLayer'`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`type`](ServiceLayer.md#type)

## Accessors

### activeExtensions

#### Get Signature

> **get** `protected` **activeExtensions**(): `INamedExtension`<`TExtension`, `TExtensionDelegate`>[]

##### Returns

`INamedExtension`<`TExtension`, `TExtensionDelegate`>[]

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`activeExtensions`](ServiceLayer.md#activeextensions)

***

### extension

#### Get Signature

> **get** `protected` **extension**(): `TExtension` | `undefined`

##### Returns

`TExtension` | `undefined`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`extension`](ServiceLayer.md#extension)

## Methods

### checkManifestCriteria()

> **checkManifestCriteria**(`extensionManifest`): `boolean`

#### Parameters

##### extensionManifest

`ExtensionManifest`

#### Returns

`boolean`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`checkManifestCriteria`](ServiceLayer.md#checkmanifestcriteria)

***

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`configure`](ServiceLayer.md#configure)

***

### configureExtension()

> **configureExtension**(`extension`): `void`

Per session (reset/initialize) configuration

#### Parameters

##### extension

`any`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`configureExtension`](ServiceLayer.md#configureextension)

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`destroy`](ServiceLayer.md#destroy)

***

### execute()

> `protected` **execute**<`TResult`>(`selection`, `type`, `func`, ...`args`): `Promise`<`TResult`>

#### Type Parameters

##### TResult

`TResult` *extends* `Record`<`string`, `any`>

#### Parameters

##### selection

`ExecutionSelection`

##### type

`ExecutionTypes`

##### func

`string` | `number` | `symbol`

##### args

...`any`[]

#### Returns

`Promise`<`TResult`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`execute`](ServiceLayer.md#execute)

***

### featureDestroy()

> **featureDestroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`featureDestroy`](ServiceLayer.md#featuredestroy)

***

### featureReset()

> **featureReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`featureReset`](ServiceLayer.md#featurereset)

***

### getExtensionDelegate()

> **getExtensionDelegate**(): `void`

Per session (reset/initialize) (optionally) providing a new instance of the TExtensionDelegate

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`getExtensionDelegate`](ServiceLayer.md#getextensiondelegate)

***

### getPublicDelegateMock()

> **getPublicDelegateMock**(): `Required`<`any`>

#### Returns

`Required`<`any`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`getPublicDelegateMock`](ServiceLayer.md#getpublicdelegatemock)

***

### getServiceLayerInformation()

> **getServiceLayerInformation**(): [`ServiceLayerInformation`](reference/interfaces/ServiceLayerInformation.md)

#### Returns

[`ServiceLayerInformation`](reference/interfaces/ServiceLayerInformation.md)

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`getServiceLayerInformation`](ServiceLayer.md#getservicelayerinformation)

***

### getState()

> **getState**(): `any`

#### Returns

`any`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`getState`](ServiceLayer.md#getstate)

***

### handleConfigure()

> **handleConfigure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`Record`<`string`, `any`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`handleConfigure`](ServiceLayer.md#handleconfigure)

***

### handleLoad()

> **handleLoad**(`load`): `Promise`<`Load`>

#### Parameters

##### load

`Load`

#### Returns

`Promise`<`Load`>

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`handleLoad`](ServiceLayer.md#handleload)

***

### handleReset()

> **handleReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`handleReset`](ServiceLayer.md#handlereset)

***

### handleTerminate()

> **handleTerminate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`handleTerminate`](ServiceLayer.md#handleterminate)

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`initialize`](ServiceLayer.md#initialize)

***

### register()

> **register**(`featureManager`, `delegate`): `void`

#### Parameters

##### featureManager

`FeatureManager`<`void`>

##### delegate

`FeatureManagerFeatureDelegate`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`register`](ServiceLayer.md#register)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`reset`](ServiceLayer.md#reset)

***

### selectExtensions()

> `protected` **selectExtensions**(): `void`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`selectExtensions`](ServiceLayer.md#selectextensions)

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`void`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`setApplicationBridge`](ServiceLayer.md#setapplicationbridge)

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`IExtendableFeaturePublicDelegate`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`setDelegate`](ServiceLayer.md#setdelegate)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`setLogger`](ServiceLayer.md#setlogger)

***

### setupExtension()

> **setupExtension**(`extension`): `void`

One-time setup, when extension is instantiated

#### Parameters

##### extension

`any`

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`setupExtension`](ServiceLayer.md#setupextension)

***

### setupFeature()

> **setupFeature**(`setup`): `void`

#### Parameters

##### setup

`SetupFeatureArgs`<`IExtendableFeaturePublicDelegate`, `void`>

#### Returns

`void`

#### Inherited from

[`ServiceLayer`](reference/classes/ServiceLayer.md).[`setupFeature`](ServiceLayer.md#setupfeature)
