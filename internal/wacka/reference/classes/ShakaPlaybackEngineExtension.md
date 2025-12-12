# ShakaPlaybackEngineExtension

## Extends

- [`ComponentExtension`](reference/classes/ComponentExtension.md)<[`ShakaPlaybackEngine`](ShakaPlaybackEngine.md)>

## Constructors

### Constructor

> **new ShakaPlaybackEngineExtension**(`logger`, `shakaPlaybackEngine`): `ShakaPlaybackEngineExtension`

#### Parameters

##### logger

`ILogger`

##### shakaPlaybackEngine

[`ShakaPlaybackEngine`](reference/classes/ShakaPlaybackEngine.md)

#### Returns

`ShakaPlaybackEngineExtension`

#### Overrides

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`constructor`](ComponentExtension.md#constructor)

## Properties

### component

> `protected` `readonly` **component**: [`ShakaPlaybackEngine`](reference/classes/ShakaPlaybackEngine.md)

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`component`](ComponentExtension.md#component)

***

### extensionName

> `readonly` **extensionName**: `string`

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`extensionName`](ComponentExtension.md#extensionname)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`logger`](ComponentExtension.md#logger)

***

### methodExtensions

> `protected` `readonly` **methodExtensions**: `Record`<`string`, [`MethodExtension`](reference/classes/MethodExtension.md)<`any`, `any`>>

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`methodExtensions`](ComponentExtension.md#methodextensions)

***

### stopOrig()

> **stopOrig**: (`reason`) => `Promise`<`void`>

#### Parameters

##### reason

`StoppedReasons`

#### Returns

`Promise`<`void`>

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

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`expose`](ComponentExtension.md#expose)

***

### registerImplementation()

> **registerImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`IExtensionDescriptor`](reference/interfaces/IExtensionDescriptor.md)<[`ShakaPlaybackEngine`](ShakaPlaybackEngine.md)>

#### Returns

`void`

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`registerImplementation`](ComponentExtension.md#registerimplementation)

***

### stop()

> **stop**(`reason`, `stopOrig`): `Promise`<`void`>

#### Parameters

##### reason

`StoppedReasons`

##### stopOrig

(`reason`) => `Promise`<`void`>

#### Returns

`Promise`<`void`>
