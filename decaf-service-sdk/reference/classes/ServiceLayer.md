# ServiceLayer

## Extends

- `ExtendableFeature`<`any`>

## Implements

- [`IServiceLayer`](reference/interfaces/IServiceLayer.md)
- `IFeature`<`ServiceLayer`>

## Indexable

[`key`: `symbol`]: `true`

## Constructors

### Constructor

> `protected` **new ServiceLayer**(`args`): `ServiceLayer`

#### Parameters

##### args

[`ServiceLayerArgs`](reference/interfaces/ServiceLayerArgs.md)

#### Returns

`ServiceLayer`

#### Overrides

`ExtendableFeature<any>.constructor`

## Properties

### applicationBridge?

> `protected` **applicationBridge**?: `void`

#### Inherited from

`ExtendableFeature.applicationBridge`

***

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

#### Inherited from

`ExtendableFeature.configuration`

***

### delegate?

> `protected` **delegate**?: `IExtendableFeaturePublicDelegate`

#### Inherited from

`ExtendableFeature.delegate`

***

### featureManager?

> `protected` **featureManager**?: `FeatureManager`<`void`, `IMulticastDelegate`>

#### Inherited from

`ExtendableFeature.featureManager`

***

### featureManagerDelegate?

> `protected` **featureManagerDelegate**?: `FeatureManagerFeatureDelegate`<`IMulticastDelegate`>

#### Inherited from

`ExtendableFeature.featureManagerDelegate`

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

#### Inherited from

`ExtendableFeature.logger`

***

### state

> `protected` **state**: `any`

#### Inherited from

`ExtendableFeature.state`

***

### type

> **type**: `string`

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`type`](../interfaces/IServiceLayer.md#type)

#### Overrides

`ExtendableFeature.type`

## Accessors

### activeExtensions

#### Get Signature

> **get** `protected` **activeExtensions**(): `INamedExtension`<`TExtension`, `TExtensionDelegate`>[]

##### Returns

`INamedExtension`<`TExtension`, `TExtensionDelegate`>[]

#### Inherited from

`ExtendableFeature.activeExtensions`

***

### extension

#### Get Signature

> **get** `protected` **extension**(): `TExtension` | `undefined`

##### Returns

`TExtension` | `undefined`

#### Inherited from

`ExtendableFeature.extension`

## Methods

### checkManifestCriteria()

> **checkManifestCriteria**(`extensionManifest`): `boolean`

#### Parameters

##### extensionManifest

`ExtensionManifest`

#### Returns

`boolean`

#### Overrides

`ExtendableFeature.checkManifestCriteria`

***

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

#### Inherited from

`ExtendableFeature.configure`

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

`ExtendableFeature.configureExtension`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`destroy`](../interfaces/IServiceLayer.md#destroy)

#### Inherited from

`ExtendableFeature.destroy`

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

`ExtendableFeature.execute`

***

### featureDestroy()

> **featureDestroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`ExtendableFeature.featureDestroy`

***

### featureReset()

> **featureReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`ExtendableFeature.featureReset`

***

### getExtensionDelegate()

> **getExtensionDelegate**(): `void`

Per session (reset/initialize) (optionally) providing a new instance of the TExtensionDelegate

#### Returns

`void`

#### Overrides

`ExtendableFeature.getExtensionDelegate`

***

### getPublicDelegateMock()

> **getPublicDelegateMock**(): `Required`<`any`>

#### Returns

`Required`<`any`>

#### Overrides

`ExtendableFeature.getPublicDelegateMock`

***

### getServiceLayerInformation()

> `abstract` **getServiceLayerInformation**(): [`ServiceLayerInformation`](reference/interfaces/ServiceLayerInformation.md)

#### Returns

[`ServiceLayerInformation`](reference/interfaces/ServiceLayerInformation.md)

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`getServiceLayerInformation`](../interfaces/IServiceLayer.md#getservicelayerinformation)

***

### getState()

> **getState**(): `any`

#### Returns

`any`

#### Inherited from

`ExtendableFeature.getState`

***

### handleConfigure()

> `abstract` **handleConfigure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`Record`<`string`, `any`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`handleConfigure`](../interfaces/IServiceLayer.md#handleconfigure)

***

### handleLoad()

> `abstract` **handleLoad**(`load`): `Promise`<[`Load`](reference/interfaces/Load.md)>

#### Parameters

##### load

[`Load`](reference/interfaces/Load.md)

#### Returns

`Promise`<[`Load`](reference/interfaces/Load.md)>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`handleLoad`](../interfaces/IServiceLayer.md#handleload)

***

### handleReset()

> `abstract` **handleReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`handleReset`](../interfaces/IServiceLayer.md#handlereset)

***

### handleTerminate()

> `abstract` **handleTerminate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`handleTerminate`](../interfaces/IServiceLayer.md#handleterminate)

***

### initialize()

> `abstract` **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`initialize`](../interfaces/IServiceLayer.md#initialize)

#### Overrides

`ExtendableFeature.initialize`

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

`ExtendableFeature.register`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IServiceLayer`](reference/interfaces/IServiceLayer.md).[`reset`](../interfaces/IServiceLayer.md#reset)

#### Inherited from

`ExtendableFeature.reset`

***

### selectExtensions()

> `protected` **selectExtensions**(): `void`

#### Returns

`void`

#### Inherited from

`ExtendableFeature.selectExtensions`

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`void`

#### Returns

`void`

#### Inherited from

`ExtendableFeature.setApplicationBridge`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`IExtendableFeaturePublicDelegate`

#### Returns

`void`

#### Inherited from

`ExtendableFeature.setDelegate`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

#### Inherited from

`ExtendableFeature.setLogger`

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

`ExtendableFeature.setupExtension`

***

### setupFeature()

> **setupFeature**(`setup`): `void`

#### Parameters

##### setup

`SetupFeatureArgs`<`IExtendableFeaturePublicDelegate`, `void`>

#### Returns

`void`

#### Inherited from

`ExtendableFeature.setupFeature`
