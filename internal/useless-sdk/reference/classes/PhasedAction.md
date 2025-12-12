# PhasedAction<T>

## Extends

- [`UselessAction`](UselessAction.md)<`T`, [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md), [`IPhasedActionReporter`](../interfaces/IPhasedActionReporter.md)<`T`>, [`IPhasedActionExecution`](../interfaces/IPhasedActionExecution.md)<`T`, [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>>

## Extended by

- [`ExampleLoadAction`](reference/classes/ExampleLoadAction.md)

## Type Parameters

### T

`T` *extends* [`IDto`](reference/interfaces/IDto.md) | `void` = `void`

## Constructors

### Constructor

> **new PhasedAction**<`T`>(`actionName`, `options?`): `PhasedAction`<`T`>

#### Parameters

##### actionName

`string`

##### options?

`Partial`<[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`PhasedAction`<`T`>

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`constructor`](UselessAction.md#constructor)

## Properties

### actionName

> **actionName**: `string`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`actionName`](UselessAction.md#actionname)

***

### errorHandler

> `protected` **errorHandler**: `TUselessActionErrorHandler`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`errorHandler`](UselessAction.md#errorhandler)

***

### execution?

> **execution**?: [`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<`T`, [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`execution`](UselessAction.md#execution)

***

### options

> **options**: [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`options`](UselessAction.md#options)

***

### parent?

> `protected` **parent**?: [`UselessAction`](UselessAction.md)<`T`, [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md), [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<`T`>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<`T`, [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>>

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`parent`](UselessAction.md#parent)

***

### reporters

> `protected` **reporters**: [`IPhasedActionReporter`](reference/interfaces/IPhasedActionReporter.md)<`T`>[] = `[]`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`reporters`](UselessAction.md#reporters)

## Methods

### cancel()

> **cancel**(`cancelParent?`): `void`

#### Parameters

##### cancelParent?

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`cancel`](UselessAction.md#cancel)

***

### createExecution()

> `protected` **createExecution**(`data`, `options?`): [`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<`T`, [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Parameters

##### data

`T`

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

[`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<`T`, [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`createExecution`](UselessAction.md#createexecution)

***

### disablePhase()

> **disablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

***

### enablePhase()

> **enablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | `T` | `undefined`>

#### Parameters

##### data

`T`

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

`Promise`<`void` | `T` | `undefined`>

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`execute`](UselessAction.md#execute)

***

### executeAction()

> `protected` **executeAction**(`data`, `options?`): `Promise`<`void` | `T` | `undefined`>

#### Parameters

##### data

`T`

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

`Promise`<`void` | `T` | `undefined`>

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`executeAction`](UselessAction.md#executeaction)

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`getCompletion`](UselessAction.md#getcompletion)

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`handleError`](UselessAction.md#handleerror)

***

### registerActionListener()

> **registerActionListener**(`func`): `this`

#### Parameters

##### func

`TUselessActionListenerFunction`<`T`>

#### Returns

`this`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`registerActionListener`](UselessAction.md#registeractionlistener)

***

### registerPhase()

> **registerPhase**(`name`, `action`, `displayName?`): `this`

#### Parameters

##### name

`string`

##### action

`TPhaseFunction`<`T`> | [`UselessAction`](UselessAction.md)<`T`, [`IUselessActionExecutionOptions`](reference/interfaces/IUselessActionExecutionOptions.md), [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<`T`>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<`T`, [`IUselessActionExecutionOptions`](../interfaces/IUselessActionExecutionOptions.md)>>

##### displayName?

`string`

#### Returns

`this`

***

### registerPhaseListener()

> **registerPhaseListener**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseListenerFunction`<`T`>

#### Returns

`this`

***

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`registerPostActionHandler`](UselessAction.md#registerpostactionhandler)

***

### registerPostPhaseHandler()

> **registerPostPhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<`T`>

#### Returns

`this`

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`registerPreActionHandler`](UselessAction.md#registerpreactionhandler)

***

### registerPrePhaseHandler()

> **registerPrePhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<`T`>

#### Returns

`this`

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

[`IPhasedActionReporter`](reference/interfaces/IPhasedActionReporter.md)<`T`>

#### Returns

`this`

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`registerReporter`](UselessAction.md#registerreporter)

***

### report()

> `protected` **report**(`func`, ...`args`): `void`

#### Parameters

##### func

`string`

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`report`](UselessAction.md#report)

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `this`

#### Parameters

##### errorHandler

`TUselessActionErrorHandler`

#### Returns

`this`

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`setErrorHandler`](UselessAction.md#seterrorhandler)

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

[`UselessAction`](UselessAction.md)<`T`, [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`void`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`setParent`](UselessAction.md#setparent)

***

### togglePhase()

> **togglePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

***

### track()

> `protected` **track**(`name`, `input`): `void`

#### Parameters

##### name

`string`

##### input

`T`

#### Returns

`void`

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`track`](UselessAction.md#track)
