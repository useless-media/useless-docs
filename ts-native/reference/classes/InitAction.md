# InitAction

## Extends

- `PhasedAction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

## Constructors

### Constructor

> **new InitAction**(): `InitAction`

#### Returns

`InitAction`

#### Overrides

`PhasedAction<InitActionArgs>.constructor`

## Properties

### actionName

> **actionName**: `string`

#### Inherited from

`PhasedAction.actionName`

***

### errorHandler

> `protected` **errorHandler**: `TUselessActionErrorHandler`

#### Inherited from

`PhasedAction.errorHandler`

***

### execution?

> **execution**?: `IPhasedActionExecution`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Inherited from

`PhasedAction.execution`

***

### options

> **options**: `IPhasedActionExecutionOptions`

#### Inherited from

`PhasedAction.options`

***

### parent?

> `protected` **parent**?: `UselessAction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`, `IUselessActionReporter`<[`InitActionArgs`](../interfaces/InitActionArgs.md)>, `IUselessActionExecution`<[`InitActionArgs`](../interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>>

#### Inherited from

`PhasedAction.parent`

***

### reporters

> `protected` **reporters**: `IPhasedActionReporter`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>[]

#### Inherited from

`PhasedAction.reporters`

## Methods

### cancel()

> **cancel**(`cancelParent?`): `void`

#### Parameters

##### cancelParent?

`boolean`

#### Returns

`void`

#### Inherited from

`PhasedAction.cancel`

***

### createExecution()

> `protected` **createExecution**(`data`, `options?`): `IPhasedActionExecution`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Parameters

##### data

[`InitActionArgs`](reference/interfaces/InitActionArgs.md)

##### options?

`IPhasedActionExecutionOptions`

#### Returns

`IPhasedActionExecution`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Inherited from

`PhasedAction.createExecution`

***

### disablePhase()

> **disablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

`PhasedAction.disablePhase`

***

### enablePhase()

> **enablePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

`PhasedAction.enablePhase`

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | [`InitActionArgs`](reference/interfaces/InitActionArgs.md) | `undefined`>

#### Parameters

##### data

[`InitActionArgs`](reference/interfaces/InitActionArgs.md)

##### options?

`IPhasedActionExecutionOptions`

#### Returns

`Promise`<`void` | [`InitActionArgs`](reference/interfaces/InitActionArgs.md) | `undefined`>

#### Inherited from

`PhasedAction.execute`

***

### executeAction()

> `protected` **executeAction**(`data`, `options?`): `Promise`<`void` | [`InitActionArgs`](reference/interfaces/InitActionArgs.md) | `undefined`>

#### Parameters

##### data

[`InitActionArgs`](reference/interfaces/InitActionArgs.md)

##### options?

`IPhasedActionExecutionOptions`

#### Returns

`Promise`<`void` | [`InitActionArgs`](reference/interfaces/InitActionArgs.md) | `undefined`>

#### Inherited from

`PhasedAction.executeAction`

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

#### Inherited from

`PhasedAction.getCompletion`

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

#### Inherited from

`PhasedAction.handleError`

***

### registerActionListener()

> **registerActionListener**(`func`): `this`

#### Parameters

##### func

`TUselessActionListenerFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerActionListener`

***

### registerPhase()

> **registerPhase**(`name`, `action`, `displayName?`): `this`

#### Parameters

##### name

`string`

##### action

`TPhaseFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)> | `UselessAction`<[`InitActionArgs`](../interfaces/InitActionArgs.md), `IUselessActionExecutionOptions`, `IUselessActionReporter`<[`InitActionArgs`](../interfaces/InitActionArgs.md)>, `IUselessActionExecution`<[`InitActionArgs`](../interfaces/InitActionArgs.md), `IUselessActionExecutionOptions`>>

##### displayName?

`string`

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPhase`

***

### registerPhaseListener()

> **registerPhaseListener**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseListenerFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPhaseListener`

***

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPostActionHandler`

***

### registerPostPhaseHandler()

> **registerPostPhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPostPhaseHandler`

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPreActionHandler`

***

### registerPrePhaseHandler()

> **registerPrePhaseHandler**(`name`, `func`): `this`

#### Parameters

##### name

`string`

##### func

`TPhaseFunction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerPrePhaseHandler`

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

`IPhasedActionReporter`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md)>

#### Returns

`this`

#### Inherited from

`PhasedAction.registerReporter`

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

`PhasedAction.report`

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `this`

#### Parameters

##### errorHandler

`TUselessActionErrorHandler`

#### Returns

`this`

#### Inherited from

`PhasedAction.setErrorHandler`

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

`UselessAction`<[`InitActionArgs`](reference/interfaces/InitActionArgs.md), `IPhasedActionExecutionOptions`>

#### Returns

`void`

#### Inherited from

`PhasedAction.setParent`

***

### togglePhase()

> **togglePhase**(`name`): `this`

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

`PhasedAction.togglePhase`

***

### track()

> `protected` **track**(`name`, `input`): `void`

#### Parameters

##### name

`string`

##### input

[`InitActionArgs`](reference/interfaces/InitActionArgs.md)

#### Returns

`void`

#### Inherited from

`PhasedAction.track`
