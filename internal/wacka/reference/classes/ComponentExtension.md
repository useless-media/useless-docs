# ComponentExtension<TIComponent>

## Extended by

- [`ShakaPlaybackEngineExtension`](reference/classes/ShakaPlaybackEngineExtension.md)
- [`MediaTrackManagerExtension`](reference/classes/MediaTrackManagerExtension.md)

## Type Parameters

### TIComponent

`TIComponent` *extends* [`IComponentExtension`](reference/interfaces/IComponentExtension.md)<`TIComponent`>

## Constructors

### Constructor

> `protected` **new ComponentExtension**<`TIComponent`>(`extensionName`, `logger`, `component`): `ComponentExtension`<`TIComponent`>

#### Parameters

##### extensionName

`string`

##### logger

`ILogger`

##### component

`TIComponent`

#### Returns

`ComponentExtension`<`TIComponent`>

## Properties

### component

> `protected` `readonly` **component**: `TIComponent`

***

### extensionName

> `readonly` **extensionName**: `string`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

***

### methodExtensions

> `protected` `readonly` **methodExtensions**: `Record`<`string`, [`MethodExtension`](reference/classes/MethodExtension.md)<`any`, `any`>>

## Methods

### expose()

> **expose**<`T`>(`func`): `void`

#### Type Parameters

##### T

`T` *extends* (...`args`) => `Promise`<`any`>

#### Parameters

##### func

`T`

#### Returns

`void`

***

### registerImplementation()

> **registerImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`IExtensionDescriptor`](reference/interfaces/IExtensionDescriptor.md)<`TIComponent`>

#### Returns

`void`
