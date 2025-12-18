# CleanAction

## Extends

- `SingleAction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)>

## Constructors

### Constructor

> **new CleanAction**(): `CleanAction`

#### Returns

`CleanAction`

#### Overrides

`SingleAction<ActionArgs>.constructor`

## Properties

### actionName

> **actionName**: `string`

#### Inherited from

`SingleAction.actionName`

***

### errorHandler

> `protected` **errorHandler**: `TUselessActionErrorHandler`

#### Inherited from

`SingleAction.errorHandler`

***

### execution?

> **execution**?: `IUselessActionExecution`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`>

#### Inherited from

`SingleAction.execution`

***

### options

> **options**: `ISingleActionExecutionOptions`

#### Inherited from

`SingleAction.options`

***

### parent?

> `protected` **parent**?: `UselessAction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`, `IUselessActionReporter`<[`ActionArgs`](../interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>>, `IUselessActionExecution`<[`ActionArgs`](../interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`>>

#### Inherited from

`SingleAction.parent`

***

### reporters

> `protected` **reporters**: `IUselessActionReporter`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>>[]

#### Inherited from

`SingleAction.reporters`

## Methods

### cancel()

> **cancel**(`cancelParent?`): `void`

#### Parameters

##### cancelParent?

`boolean`

#### Returns

`void`

#### Inherited from

`SingleAction.cancel`

***

### createExecution()

> `protected` **createExecution**(`data`, `options?`): `IUselessActionExecution`

#### Parameters

##### data

[`ActionArgs`](reference/interfaces/ActionArgs.md)

##### options?

`ISingleActionExecutionOptions`

#### Returns

`IUselessActionExecution`

#### Inherited from

`SingleAction.createExecution`

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | [`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)> | `undefined`>

#### Parameters

##### data

[`ActionArgs`](reference/interfaces/ActionArgs.md)

##### options?

`ISingleActionExecutionOptions`

#### Returns

`Promise`<`void` | [`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)> | `undefined`>

#### Inherited from

`SingleAction.execute`

***

### executeAction()

> `protected` **executeAction**(`data`, `options?`): `Promise`<`void` | [`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)> | `undefined`>

#### Parameters

##### data

[`ActionArgs`](reference/interfaces/ActionArgs.md)

##### options?

`ISingleActionExecutionOptions`

#### Returns

`Promise`<`void` | [`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)> | `undefined`>

#### Inherited from

`SingleAction.executeAction`

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

#### Inherited from

`SingleAction.getCompletion`

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

#### Inherited from

`SingleAction.handleError`

***

### registerActionListener()

> **registerActionListener**(`func`): `this`

#### Parameters

##### func

`TUselessActionListenerFunction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>>

#### Returns

`this`

#### Inherited from

`SingleAction.registerActionListener`

***

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`>

#### Returns

`this`

#### Inherited from

`SingleAction.registerPostActionHandler`

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`>

#### Returns

`this`

#### Inherited from

`SingleAction.registerPreActionHandler`

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

`IUselessActionReporter`

#### Returns

`this`

#### Inherited from

`SingleAction.registerReporter`

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

`SingleAction.report`

***

### setAction()

> **setAction**(`action?`): `void`

#### Parameters

##### action?

`TUselessActionFunction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`, `SingleAction`<[`ActionArgs`](../interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>>>

#### Returns

`void`

#### Inherited from

`SingleAction.setAction`

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `this`

#### Parameters

##### errorHandler

`TUselessActionErrorHandler`

#### Returns

`this`

#### Inherited from

`SingleAction.setErrorHandler`

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

`UselessAction`<[`ActionArgs`](reference/interfaces/ActionArgs.md)<[`Configuration`](../interfaces/Configuration.md), [`ActionState`](../interfaces/ActionState.md)>, `ISingleActionExecutionOptions`>

#### Returns

`void`

#### Inherited from

`SingleAction.setParent`

***

### track()

> `protected` **track**(`name`, `input`): `void`

#### Parameters

##### name

`string`

##### input

[`ActionArgs`](reference/interfaces/ActionArgs.md)

#### Returns

`void`

#### Inherited from

`SingleAction.track`
