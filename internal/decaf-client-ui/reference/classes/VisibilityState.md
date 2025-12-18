# VisibilityState

## Extends

- [`BaseState`](reference/classes/BaseState.md)<`VisibilityStateDelegate`>

## Constructors

### Constructor

> **new VisibilityState**(`args`): `VisibilityState`

#### Parameters

##### args

[`VisibilityStateArgs`](reference/interfaces/VisibilityStateArgs.md)

#### Returns

`VisibilityState`

#### Overrides

[`BaseState`](reference/classes/BaseState.md).[`constructor`](BaseState.md#constructor)

## Properties

### autoHideTimeInSec

> **autoHideTimeInSec**: `number` = `5`

***

### delegate

> **delegate**: `MulticastDelegate`<`VisibilityStateDelegate`>

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`delegate`](BaseState.md#delegate)

***

### freeze

> **freeze**: `boolean` = `false`

***

### inactivityHideTimeInSec

> **inactivityHideTimeInSec**: `number` = `5`

***

### inactivityTimer

> **inactivityTimer**: `any`

***

### state

> **state**: [`IVisibilityState`](reference/interfaces/IVisibilityState.md)

***

### userHideTimer

> **userHideTimer**: `any`

## Methods

### clearAllTimers()

> **clearAllTimers**(): `void`

#### Returns

`void`

***

### clearHideTimer()

> **clearHideTimer**(): `void`

#### Returns

`void`

***

### hideControls()

> **hideControls**(`mouseEvent`): `void`

#### Parameters

##### mouseEvent

`boolean` = `false`

#### Returns

`void`

***

### hideLoader()

> **hideLoader**(): `void`

#### Returns

`void`

***

### hideNextContent()

> **hideNextContent**(): `void`

#### Returns

`void`

***

### onVisibilityStateChanged()

> **onVisibilityStateChanged**(`state`): `void`

#### Parameters

##### state

[`IVisibilityState`](reference/interfaces/IVisibilityState.md)

#### Returns

`void`

***

### registerDelegate()

> **registerDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`VisibilityStateDelegate`

#### Returns

`void`

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`registerDelegate`](BaseState.md#registerdelegate)

***

### removeDelegateById()

> **removeDelegateById**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`removeDelegateById`](BaseState.md#removedelegatebyid)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

[`BaseState`](reference/classes/BaseState.md).[`reset`](BaseState.md#reset)

***

### returnToDefault()

> **returnToDefault**(`mouseEvent`): `void`

#### Parameters

##### mouseEvent

`boolean` = `false`

#### Returns

`void`

***

### setVisibilityState()

> **setVisibilityState**(`visibilityState`): `void`

#### Parameters

##### visibilityState

[`IVisibilityState`](reference/interfaces/IVisibilityState.md)

#### Returns

`void`

***

### showControls()

> **showControls**(`mouseEvent`, `persistent`): `void`

#### Parameters

##### mouseEvent

`boolean` = `false`

##### persistent

`boolean` = `false`

#### Returns

`void`

***

### showError()

> **showError**(): `void`

#### Returns

`void`

***

### showIdle()

> **showIdle**(): `void`

#### Returns

`void`

***

### showLoader()

> **showLoader**(): `void`

#### Returns

`void`

***

### showLoading()

> **showLoading**(): `void`

#### Returns

`void`

***

### showNextContent()

> **showNextContent**(): `void`

#### Returns

`void`

***

### updateVisibilityState()

> **updateVisibilityState**(`visibilityState`): `void`

#### Parameters

##### visibilityState

`Partial`<[`IVisibilityState`](reference/interfaces/IVisibilityState.md)>

#### Returns

`void`
