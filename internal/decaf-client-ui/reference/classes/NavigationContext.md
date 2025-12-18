# NavigationContext

## Extends

- [`BaseNavigationContext`](reference/classes/BaseNavigationContext.md)

## Constructors

### Constructor

> **new NavigationContext**(`name`, `navigationItemGrid`, `options`): `NavigationContext`

#### Parameters

##### name

`string`

##### navigationItemGrid

`InlineNavigationItem`[][]

##### options

###### bottomBoundaryNavigationRoute?

`string`

###### isRoot?

`boolean`

###### leftBoundaryNavigationRoute?

`string`

###### rightBoundaryNavigationRoute?

`string`

###### topBoundaryNavigationRoute?

`string`

###### transpose?

`boolean`

#### Returns

`NavigationContext`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`constructor`](BaseNavigationContext.md#constructor)

## Properties

### isActive

> **isActive**: `boolean` = `false`

***

### isRoot

> **isRoot**: `boolean`

***

### itemGrid

> **itemGrid**: [`NavigationItem`](reference/interfaces/NavigationItem.md)[][]

***

### name

> **name**: `string`

***

### selectedItem

> **selectedItem**: [`NavigationItem`](reference/interfaces/NavigationItem.md)

## Accessors

### engaged

#### Get Signature

> **get** **engaged**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **engaged**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### accessible()

> **accessible**(): `boolean`

#### Returns

`boolean`

***

### addDelegate()

> **addDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`NavigationContextDelegate`](reference/interfaces/NavigationContextDelegate.md)

#### Returns

`void`

***

### down()

> **down**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`down`](BaseNavigationContext.md#down)

***

### enter()

> **enter**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`enter`](BaseNavigationContext.md#enter)

***

### exit()

> **exit**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`exit`](BaseNavigationContext.md#exit)

***

### getNavigationItem()

> **getNavigationItem**<`T`>(`name`): `T` | `undefined`

#### Type Parameters

##### T

`T` *extends* `Optional`<[`NavigationItem`](reference/interfaces/NavigationItem.md), `"navigationIndex"`>

#### Parameters

##### name

`string`

#### Returns

`T` | `undefined`

***

### left()

> **left**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`left`](BaseNavigationContext.md#left)

***

### requestContextChange()

> **requestContextChange**(`contextName`, `engage`): `boolean`

#### Parameters

##### contextName

`string`

##### engage

`boolean` = `true`

#### Returns

`boolean`

***

### requestExit()

> **requestExit**(): `boolean`

#### Returns

`boolean`

***

### resetSelected()

> **resetSelected**(): `void`

#### Returns

`void`

***

### right()

> **right**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`right`](BaseNavigationContext.md#right)

***

### setActive()

> **setActive**(`active`, `navigationTo`, `engage`): `void`

This is called only by the Manager

#### Parameters

##### active

`boolean`

##### navigationTo

`string`

##### engage

`boolean`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`NavigationContextDelegate`](reference/interfaces/NavigationContextDelegate.md)

#### Returns

`void`

***

### setInternalDelegate()

> **setInternalDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`NavigationContextInternalDelegate`](reference/interfaces/NavigationContextInternalDelegate.md)

#### Returns

`void`

***

### setNavigationItems()

> **setNavigationItems**(`items`): `void`

#### Parameters

##### items

`InlineNavigationItem`[][]

#### Returns

`void`

***

### setNestedContexts()

> **setNestedContexts**(`contextNames`): `void`

#### Parameters

##### contextNames

`NavigationContext`[]

#### Returns

`void`

***

### up()

> **up**(): `void`

#### Returns

`void`

#### Overrides

[`BaseNavigationContext`](reference/classes/BaseNavigationContext.md).[`up`](BaseNavigationContext.md#up)
