# ArrowNavigationController

## Implements

- [`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md)

## Constructors

### Constructor

> **new ArrowNavigationController**(): `ArrowNavigationController`

#### Returns

`ArrowNavigationController`

## Properties

### contexts

> **contexts**: `Record`<`string`, [`NavigationContext`](reference/classes/NavigationContext.md)> = `{}`

***

### contextStack

> **contextStack**: [`NavigationContext`](reference/classes/NavigationContext.md)[] = `[]`

***

### enabled

> **enabled**: `boolean` = `true`

## Accessors

### activeContext

#### Get Signature

> **get** **activeContext**(): [`NavigationContext`](reference/classes/NavigationContext.md) | `undefined`

##### Returns

[`NavigationContext`](reference/classes/NavigationContext.md) | `undefined`

***

### activeContextName

#### Get Signature

> **get** **activeContextName**(): `string`

##### Returns

`string`

## Methods

### addContext()

> **addContext**(`context`): `void`

#### Parameters

##### context

[`NavigationContext`](reference/classes/NavigationContext.md)

#### Returns

`void`

***

### addContexts()

> **addContexts**(`contexts`): `void`

#### Parameters

##### contexts

[`NavigationContext`](reference/classes/NavigationContext.md)[]

#### Returns

`void`

***

### addDelegate()

> **addDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`NavigationControllerDelegate`](reference/interfaces/NavigationControllerDelegate.md)

#### Returns

`void`

***

### changeContext()

> **changeContext**(`contextName`, `engage`): `boolean`

#### Parameters

##### contextName

`string`

##### engage

`boolean`

#### Returns

`boolean`

***

### disengage()

> **disengage**(): `void`

#### Returns

`void`

***

### down()

> **down**(): `void`

#### Returns

`void`

#### Implementation of

[`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md).[`down`](../interfaces/KeyNavigationDelegate.md#down)

***

### enter()

> **enter**(): `void`

#### Returns

`void`

#### Implementation of

[`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md).[`enter`](../interfaces/KeyNavigationDelegate.md#enter)

***

### exitCurrentContext()

> **exitCurrentContext**(`engage`): `boolean`

#### Parameters

##### engage

`boolean` = `true`

#### Returns

`boolean`

***

### initialise()

> **initialise**(`overrideRootContext?`): `void`

#### Parameters

##### overrideRootContext?

`string`

#### Returns

`void`

***

### left()

> **left**(): `void`

#### Returns

`void`

#### Implementation of

[`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md).[`left`](../interfaces/KeyNavigationDelegate.md#left)

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`

***

### restack()

> **restack**(`contextNames`, `engage`): `void`

#### Parameters

##### contextNames

`string`[]

##### engage

`boolean` = `false`

#### Returns

`void`

***

### right()

> **right**(): `void`

#### Returns

`void`

#### Implementation of

[`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md).[`right`](../interfaces/KeyNavigationDelegate.md#right)

***

### setActiveContext()

> **setActiveContext**(`context`, `engage`): `void`

#### Parameters

##### context

[`NavigationContext`](reference/classes/NavigationContext.md)

##### engage

`boolean`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`NavigationControllerDelegate`](reference/interfaces/NavigationControllerDelegate.md)

#### Returns

`void`

***

### setKeyNavigationIntegration()

> **setKeyNavigationIntegration**(`integrationClass`): `Promise`<`void`>

#### Parameters

##### integrationClass

() => [`BaseKeyNavigationImplementation`](reference/classes/BaseKeyNavigationImplementation.md)

#### Returns

`Promise`<`void`>

***

### up()

> **up**(): `void`

#### Returns

`void`

#### Implementation of

[`KeyNavigationDelegate`](reference/interfaces/KeyNavigationDelegate.md).[`up`](../interfaces/KeyNavigationDelegate.md#up)

***

### getInstance()

> `static` **getInstance**(): `ArrowNavigationController`

#### Returns

`ArrowNavigationController`
