# ExampleLoadAction

## Extends

- [`PhasedAction`](reference/classes/PhasedAction.md)<[`ExampleLoadDto`](ExampleLoadDto.md)>

## Constructors

### Constructor

> **new ExampleLoadAction**(`log`): `ExampleLoadAction`

#### Parameters

##### log

`boolean` = `false`

#### Returns

`ExampleLoadAction`

#### Overrides

[`PhasedAction`](reference/classes/PhasedAction.md).[`constructor`](PhasedAction.md#constructor)

## Properties

### actionName

> **actionName**: `string`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`actionName`](PhasedAction.md#actionname)

***

### errorHandler

> `protected` **errorHandler**: `TUselessActionErrorHandler`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`errorHandler`](PhasedAction.md#errorhandler)

***

### execution?

> **execution**?: [`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`execution`](PhasedAction.md#execution)

***

### options

> **options**: [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`options`](PhasedAction.md#options)

***

### parent?

> `protected` **parent**?: [`UselessAction`](UselessAction.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md), [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<[`ExampleLoadDto`](ExampleLoadDto.md)>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`parent`](PhasedAction.md#parent)

***

### reporters

> `protected` **reporters**: [`IPhasedActionReporter`](reference/interfaces/IPhasedActionReporter.md)<[`ExampleLoadDto`](ExampleLoadDto.md)>[] = `[]`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`reporters`](PhasedAction.md#reporters)

## Methods

### cancel()

> **cancel**(`cancelParent?`): `void`

#### Parameters

##### cancelParent?

`boolean`

#### Returns

`void`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`cancel`](PhasedAction.md#cancel)

***

### createExecution()

> `protected` **createExecution**(`data`, `options?`): [`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Parameters

##### data

[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

[`IPhasedActionExecution`](reference/interfaces/IPhasedActionExecution.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](../interfaces/IPhasedActionExecutionOptions.md)>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`createExecution`](PhasedAction.md#createexecution)

***

### disablePhase()

> **disablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`disablePhase`](PhasedAction.md#disablephase)

***

### enablePhase()

> **enablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`enablePhase`](PhasedAction.md#enablephase)

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | [`ExampleLoadDto`](reference/classes/ExampleLoadDto.md) | `undefined`>

#### Parameters

##### data

[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

`Promise`<`void` | [`ExampleLoadDto`](reference/classes/ExampleLoadDto.md) | `undefined`>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`execute`](PhasedAction.md#execute)

***

### executeAction()

> `protected` **executeAction**(`data`, `options?`): `Promise`<`void` | [`ExampleLoadDto`](reference/classes/ExampleLoadDto.md) | `undefined`>

#### Parameters

##### data

[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)

##### options?

[`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)

#### Returns

`Promise`<`void` | [`ExampleLoadDto`](reference/classes/ExampleLoadDto.md) | `undefined`>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`executeAction`](PhasedAction.md#executeaction)

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`getCompletion`](PhasedAction.md#getcompletion)

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`handleError`](PhasedAction.md#handleerror)

***

### registerActionListener()

> **registerActionListener**(`func`): `this`

#### Parameters

##### func

`TUselessActionListenerFunction`<[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerActionListener`](PhasedAction.md#registeractionlistener)

***

### registerPhase()

> **registerPhase**(`name`, `action`, `displayName?`): `this`

#### Parameters

##### name

`string`

##### action

`TPhaseFunction`<[`ExampleLoadDto`](ExampleLoadDto.md)> | [`UselessAction`](UselessAction.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IUselessActionExecutionOptions`](reference/interfaces/IUselessActionExecutionOptions.md), [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<[`ExampleLoadDto`](ExampleLoadDto.md)>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IUselessActionExecutionOptions`](../interfaces/IUselessActionExecutionOptions.md)>>

##### displayName?

`string`

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPhase`](PhasedAction.md#registerphase)

***

### registerPhaseListener()

> **registerPhaseListener**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseListenerFunction`<[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPhaseListener`](PhasedAction.md#registerphaselistener)

***

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPostActionHandler`](PhasedAction.md#registerpostactionhandler)

***

### registerPostPhaseHandler()

> **registerPostPhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPostPhaseHandler`](PhasedAction.md#registerpostphasehandler)

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPreActionHandler`](PhasedAction.md#registerpreactionhandler)

***

### registerPrePhaseHandler()

> **registerPrePhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerPrePhaseHandler`](PhasedAction.md#registerprephasehandler)

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

[`IPhasedActionReporter`](reference/interfaces/IPhasedActionReporter.md)<[`ExampleLoadDto`](ExampleLoadDto.md)>

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`registerReporter`](PhasedAction.md#registerreporter)

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

[`PhasedAction`](reference/classes/PhasedAction.md).[`report`](PhasedAction.md#report)

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `this`

#### Parameters

##### errorHandler

`TUselessActionErrorHandler`

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`setErrorHandler`](PhasedAction.md#seterrorhandler)

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

[`UselessAction`](UselessAction.md)<[`ExampleLoadDto`](ExampleLoadDto.md), [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md)>

#### Returns

`void`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`setParent`](PhasedAction.md#setparent)

***

### togglePhase()

> **togglePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`togglePhase`](PhasedAction.md#togglephase)

***

### track()

> `protected` **track**(`name`, `input`): `void`

#### Parameters

##### name

`string`

##### input

[`ExampleLoadDto`](reference/classes/ExampleLoadDto.md)

#### Returns

`void`

#### Inherited from

[`PhasedAction`](reference/classes/PhasedAction.md).[`track`](PhasedAction.md#track)
