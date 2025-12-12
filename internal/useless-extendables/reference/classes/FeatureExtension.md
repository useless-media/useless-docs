# FeatureExtension<TExtensionDelegate>

## Type Parameters

### TExtensionDelegate

`TExtensionDelegate` *extends* [`IFeatureExtensionDelegate`](reference/interfaces/IFeatureExtensionDelegate.md) | `void` = `void`

## Constructors

### Constructor

> **new FeatureExtension**<`TExtensionDelegate`>(): `FeatureExtension`<`TExtensionDelegate`>

#### Returns

`FeatureExtension`<`TExtensionDelegate`>

## Properties

### configuration?

> `protected` **configuration**?: `Record`<`string`, `any`>

***

### delegate?

> `protected` **delegate**?: `TExtensionDelegate`

***

### logger

> `protected` **logger**: `ILogger`

***

### type

> `abstract` **type**: `string`

## Methods

### canHandle()

> **canHandle**(...`args`): `Promise`<`boolean`>

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`<`boolean`>

***

### configure()

> **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`Record`<`string`, `any`>

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### extensionDestroy()

> `abstract` **extensionDestroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### extensionReset()

> `abstract` **extensionReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### initialize()

> `abstract` **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setExtensionDelegate()

> **setExtensionDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`TExtensionDelegate`

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
