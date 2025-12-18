# DecafBaseRender

## Extends

- [`BaseRender`](reference/classes/BaseRender.md)

## Extended by

- [`DecafReactRender`](reference/classes/DecafReactRender.md)

## Constructors

### Constructor

> **new DecafBaseRender**(): `DecafBaseRender`

#### Returns

`DecafBaseRender`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`constructor`](BaseRender.md#constructor)

## Properties

### clientState

> `protected` **clientState**: [`ClientState`](reference/classes/ClientState.md)

***

### i18n

> `protected` **i18n**: `I18n`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`i18n`](BaseRender.md#i18n)

***

### metadata

> `protected` **metadata**: [`MetadataState`](reference/classes/MetadataState.md)

***

### progressState

> `protected` **progressState**: [`ProgressState`](reference/classes/ProgressState.md)

***

### rootElement

> `protected` **rootElement**: `HTMLElement`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`rootElement`](BaseRender.md#rootelement)

***

### visibilityState

> `protected` **visibilityState**: [`VisibilityState`](reference/classes/VisibilityState.md)

## Methods

### assignStates()

> **assignStates**(`state`): `void`

#### Parameters

##### state

[`DecafBaseRenderStated`](reference/interfaces/DecafBaseRenderStated.md)

#### Returns

`void`

***

### clearView()

> `protected` **clearView**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`clearView`](BaseRender.md#clearview)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`destroy`](BaseRender.md#destroy)

***

### initialize()

> `abstract` `protected` **initialize**(`rootElement`): `void`

#### Parameters

##### rootElement

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`initialize`](BaseRender.md#initialize)

***

### setContainer()

> **setContainer**(`container`): `void`

#### Parameters

##### container

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`setContainer`](BaseRender.md#setcontainer)

***

### setI18n()

> **setI18n**(`i18n`): `void`

#### Parameters

##### i18n

`I18n`

#### Returns

`void`

#### Inherited from

[`BaseRender`](reference/classes/BaseRender.md).[`setI18n`](BaseRender.md#seti18n)
