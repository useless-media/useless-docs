# MediaTrackManagerExtension

## Extends

- [`ComponentExtension`](reference/classes/ComponentExtension.md)<`MediaTrackManager`>

## Constructors

### Constructor

> **new MediaTrackManagerExtension**(`logger`, `mediaTrackManager`): `MediaTrackManagerExtension`

#### Parameters

##### logger

`ILogger`

##### mediaTrackManager

`MediaTrackManager`

#### Returns

`MediaTrackManagerExtension`

#### Overrides

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`constructor`](ComponentExtension.md#constructor)

## Properties

### component

> `protected` `readonly` **component**: `MediaTrackManager`

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

[`IExtensionDescriptor`](reference/interfaces/IExtensionDescriptor.md)<`MediaTrackManager`>

#### Returns

`void`

#### Inherited from

[`ComponentExtension`](reference/classes/ComponentExtension.md).[`registerImplementation`](ComponentExtension.md#registerimplementation)
