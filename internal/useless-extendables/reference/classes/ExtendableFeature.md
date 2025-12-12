# ExtendableFeature<TExtension, TExtensionDelegate, TFeaturePublicDelegate, TFeatureDelegate, TApplicationDelegate, TApplicationBridge, TState>

Note: ExtendableFeatureBase merely holds the interaction points between an Extendable Feature and the FeatureManager,
      to let ExtendableFeature focus on its functionality.

## Extends

- [`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md)<`TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>

## Extended by

- [`ExampleFeature`](reference/classes/ExampleFeature.md)

## Type Parameters

### TExtension

`TExtension` *extends* [`FeatureExtension`](reference/classes/FeatureExtension.md)<`TExtensionDelegate`>

### TExtensionDelegate

`TExtensionDelegate` *extends* [`IFeatureExtensionDelegate`](reference/interfaces/IFeatureExtensionDelegate.md) | `void` = `void`

### TFeaturePublicDelegate

`TFeaturePublicDelegate` *extends* [`IExtendableFeaturePublicDelegate`](reference/interfaces/IExtendableFeaturePublicDelegate.md) = [`IExtendableFeaturePublicDelegate`](../interfaces/IExtendableFeaturePublicDelegate.md)

### TFeatureDelegate

`TFeatureDelegate` *extends* `TFeaturePublicDelegate` | [`IExtendableFeatureDelegate`](reference/interfaces/IExtendableFeatureDelegate.md) = `TFeaturePublicDelegate`

### TApplicationDelegate

`TApplicationDelegate` *extends* `IMulticastDelegate` = `IMulticastDelegate`

### TApplicationBridge

`TApplicationBridge` *extends* `Record`<`string`, `any`> | `void` = `void`

### TState

`TState` *extends* `Record`<`string`, `any`> | `void` = `any`

## Indexable

[`key`: `symbol`]: `true`

## Constructors

### Constructor

> **new ExtendableFeature**<`TExtension`, `TExtensionDelegate`, `TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>(`args?`): `ExtendableFeature`<`TExtension`, `TExtensionDelegate`, `TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>

#### Parameters

##### args?

`Record`<`string`, `any`>

#### Returns

`ExtendableFeature`<`TExtension`, `TExtensionDelegate`, `TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`constructor`](ExtendableFeatureBase.md#constructor)

## Properties

### applicationBridge?

> `protected` **applicationBridge**?: `TApplicationBridge`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`applicationBridge`](ExtendableFeatureBase.md#applicationbridge)

***

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`configuration`](ExtendableFeatureBase.md#configuration)

***

### delegate?

> `protected` **delegate**?: `TFeatureDelegate`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`delegate`](ExtendableFeatureBase.md#delegate)

***

### featureManager?

> `protected` **featureManager**?: [`FeatureManager`](reference/classes/FeatureManager.md)<`TApplicationBridge`, `IMulticastDelegate`>

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`featureManager`](ExtendableFeatureBase.md#featuremanager)

***

### featureManagerDelegate?

> `protected` **featureManagerDelegate**?: [`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)<`TApplicationDelegate`>

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`featureManagerDelegate`](ExtendableFeatureBase.md#featuremanagerdelegate)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`logger`](ExtendableFeatureBase.md#logger)

***

### state

> `protected` **state**: `TState`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`state`](ExtendableFeatureBase.md#state)

***

### type

> `abstract` **type**: `string`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`type`](ExtendableFeatureBase.md#type)

## Accessors

### activeExtensions

#### Get Signature

> **get** `protected` **activeExtensions**(): [`INamedExtension`](reference/interfaces/INamedExtension.md)<`TExtension`, `TExtensionDelegate`>[]

##### Returns

[`INamedExtension`](reference/interfaces/INamedExtension.md)<`TExtension`, `TExtensionDelegate`>[]

***

### extension

#### Get Signature

> **get** `protected` **extension**(): `TExtension` | `undefined`

##### Returns

`TExtension` | `undefined`

## Methods

### checkManifestCriteria()

> `abstract` **checkManifestCriteria**(`extensionManifest`): `boolean`

#### Parameters

##### extensionManifest

[`ExtensionManifest`](reference/interfaces/ExtensionManifest.md)

#### Returns

`boolean`

***

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`configure`](ExtendableFeatureBase.md#configure)

***

### configureExtension()

> `abstract` **configureExtension**(`extension`): `void`

Per session (reset/initialize) configuration

#### Parameters

##### extension

`TExtension`

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

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

keyof `TExtension`

##### args

...`any`[]

#### Returns

`Promise`<`TResult`>

***

### featureDestroy()

> `abstract` **featureDestroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### featureReset()

> `abstract` **featureReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getExtensionDelegate()

> `abstract` **getExtensionDelegate**(): `TExtensionDelegate`

Per session (reset/initialize) (optionally) providing a new instance of the TExtensionDelegate

#### Returns

`TExtensionDelegate`

***

### getPublicDelegateMock()

> `abstract` **getPublicDelegateMock**(): `Required`<`TFeaturePublicDelegate`>

#### Returns

`Required`<`TFeaturePublicDelegate`>

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`getPublicDelegateMock`](ExtendableFeatureBase.md#getpublicdelegatemock)

***

### getState()

> **getState**(): `TState`

#### Returns

`TState`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`getState`](ExtendableFeatureBase.md#getstate)

***

### initialize()

> **initialize**(...`args`): `Promise`<`void`>

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`initialize`](ExtendableFeatureBase.md#initialize)

***

### register()

> **register**(`featureManager`, `delegate`): `void`

#### Parameters

##### featureManager

[`FeatureManager`](reference/classes/FeatureManager.md)<`TApplicationBridge`>

##### delegate

[`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`register`](ExtendableFeatureBase.md#register)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### selectExtensions()

> `protected` **selectExtensions**(): `void`

#### Returns

`void`

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`TApplicationBridge`

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`setApplicationBridge`](ExtendableFeatureBase.md#setapplicationbridge)

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`TFeatureDelegate`

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`setDelegate`](ExtendableFeatureBase.md#setdelegate)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`setLogger`](ExtendableFeatureBase.md#setlogger)

***

### setupExtension()

> `abstract` **setupExtension**(`extension`): `void`

One-time setup, when extension is instantiated

#### Parameters

##### extension

`TExtension`

#### Returns

`void`

***

### setupFeature()

> **setupFeature**(`setup`): `void`

#### Parameters

##### setup

[`SetupFeatureArgs`](reference/interfaces/SetupFeatureArgs.md)<`TFeatureDelegate`, `TApplicationBridge`>

#### Returns

`void`

#### Inherited from

[`ExtendableFeatureBase`](reference/classes/ExtendableFeatureBase.md).[`setupFeature`](ExtendableFeatureBase.md#setupfeature)
