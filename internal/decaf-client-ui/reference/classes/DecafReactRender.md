# DecafReactRender

## Extends

- [`DecafBaseRender`](reference/classes/DecafBaseRender.md)

## Extended by

- [`StandardClientUI`](reference/classes/StandardClientUI.md)

## Constructors

### Constructor

> **new DecafReactRender**(): `DecafReactRender`

#### Returns

`DecafReactRender`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`constructor`](DecafBaseRender.md#constructor)

## Properties

### clientState

> **clientState**: [`ClientState`](reference/classes/ClientState.md)

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`clientState`](DecafBaseRender.md#clientstate)

***

### i18n

> `protected` **i18n**: `I18n`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`i18n`](DecafBaseRender.md#i18n)

***

### metadata

> **metadata**: [`MetadataState`](reference/classes/MetadataState.md)

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`metadata`](DecafBaseRender.md#metadata)

***

### progressState

> **progressState**: [`ProgressState`](reference/classes/ProgressState.md)

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`progressState`](DecafBaseRender.md#progressstate)

***

### rootElement

> `protected` **rootElement**: `HTMLElement`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`rootElement`](DecafBaseRender.md#rootelement)

***

### visibilityState

> **visibilityState**: [`VisibilityState`](reference/classes/VisibilityState.md)

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`visibilityState`](DecafBaseRender.md#visibilitystate)

## Methods

### assignStates()

> **assignStates**(`state`): `void`

#### Parameters

##### state

[`DecafBaseRenderStated`](reference/interfaces/DecafBaseRenderStated.md)

#### Returns

`void`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`assignStates`](DecafBaseRender.md#assignstates)

***

### clearView()

> `protected` **clearView**(): `void`

#### Returns

`void`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`clearView`](DecafBaseRender.md#clearview)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`destroy`](DecafBaseRender.md#destroy)

***

### initialize()

> `protected` **initialize**(`rootElement`): `void`

#### Parameters

##### rootElement

`HTMLElement`

#### Returns

`void`

#### Overrides

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`initialize`](DecafBaseRender.md#initialize)

***

### internalRender()

> `protected` **internalRender**(): `ReactNode`

#### Returns

`ReactNode`

***

### render()

> `abstract` `protected` **render**(): `ReactNode`

#### Returns

`ReactNode`

***

### setContainer()

> **setContainer**(`container`): `void`

#### Parameters

##### container

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`setContainer`](DecafBaseRender.md#setcontainer)

***

### setI18n()

> **setI18n**(`i18n`): `void`

#### Parameters

##### i18n

`I18n`

#### Returns

`void`

#### Inherited from

[`DecafBaseRender`](reference/classes/DecafBaseRender.md).[`setI18n`](DecafBaseRender.md#seti18n)
