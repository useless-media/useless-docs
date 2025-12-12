# ExtendableFeatureBase<TFeaturePublicDelegate, TFeatureDelegate, TApplicationDelegate, TApplicationBridge, TState>

Note: ExtendableFeatureBase merely holds the interaction points between an Extendable Feature and the FeatureManager,
      to let ExtendableFeature focus on its functionality.

## Extended by

- [`ExtendableFeature`](reference/classes/ExtendableFeature.md)

## Type Parameters

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

## Implements

- [`IExtendableFeatureRequirementsIndexer`](reference/interfaces/IExtendableFeatureRequirementsIndexer.md)

## Indexable

[`key`: `symbol`]: `true`

## Constructors

### Constructor

> **new ExtendableFeatureBase**<`TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>(`args?`): `ExtendableFeatureBase`<`TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>

#### Parameters

##### args?

`Record`<`string`, `any`>

#### Returns

`ExtendableFeatureBase`<`TFeaturePublicDelegate`, `TFeatureDelegate`, `TApplicationDelegate`, `TApplicationBridge`, `TState`>

## Properties

### applicationBridge?

> `protected` **applicationBridge**?: `TApplicationBridge`

***

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

***

### delegate?

> `protected` **delegate**?: `TFeatureDelegate`

***

### featureManager?

> `protected` **featureManager**?: [`FeatureManager`](reference/classes/FeatureManager.md)<`TApplicationBridge`, `IMulticastDelegate`>

***

### featureManagerDelegate?

> `protected` **featureManagerDelegate**?: [`FeatureManagerFeatureDelegate`](reference/interfaces/FeatureManagerFeatureDelegate.md)<`TApplicationDelegate`>

***

### logger

> `protected` **logger**: `ILogger`

***

### state

> `protected` **state**: `TState`

***

### type

> `abstract` **type**: `string`

## Methods

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

***

### getPublicDelegateMock()

> `abstract` **getPublicDelegateMock**(): `Required`<`TFeaturePublicDelegate`>

#### Returns

`Required`<`TFeaturePublicDelegate`>

***

### getState()

> **getState**(): `TState`

#### Returns

`TState`

***

### initialize()

> `abstract` **initialize**(...`args`): `Promise`<`void`>

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`<`void`>

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

***

### setApplicationBridge()

> **setApplicationBridge**(`applicationBridge?`): `void`

#### Parameters

##### applicationBridge?

`TApplicationBridge`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`TFeatureDelegate`

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

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
