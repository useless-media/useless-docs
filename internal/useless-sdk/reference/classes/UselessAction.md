# UselessAction<T, TOptions, TReporter, TExecution>

## Extended by

- [`PhasedAction`](reference/classes/PhasedAction.md)
- [`SingleAction`](reference/classes/SingleAction.md)

## Type Parameters

### T

`T` *extends* [`IDto`](reference/interfaces/IDto.md) | `void` = `void`

### TOptions

`TOptions` *extends* [`IUselessActionExecutionOptions`](reference/interfaces/IUselessActionExecutionOptions.md) = [`IUselessActionExecutionOptions`](../interfaces/IUselessActionExecutionOptions.md)

### TReporter

`TReporter` *extends* [`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md)<`T`> = [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<`T`>

### TExecution

`TExecution` *extends* [`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md)<`T`, `TOptions`> = [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<`T`, `TOptions`>

## Implements

- [`IAction`](reference/interfaces/IAction.md)<`T`, `TOptions`>

## Constructors

### Constructor

> `protected` **new UselessAction**<`T`, `TOptions`, `TReporter`, `TExecution`>(`actionName`, `options?`): `UselessAction`<`T`, `TOptions`, `TReporter`, `TExecution`>

#### Parameters

##### actionName

`string`

##### options?

`Partial`<[`IUselessActionExecutionOptions`](reference/interfaces/IUselessActionExecutionOptions.md)>

#### Returns

`UselessAction`<`T`, `TOptions`, `TReporter`, `TExecution`>

## Properties

### actionName

> **actionName**: `string`

***

### errorHandler

> `protected` **errorHandler**: `TUselessActionErrorHandler`

***

### execution?

> **execution**?: `TExecution`

***

### options

> **options**: `TOptions`

***

### parent?

> `protected` **parent**?: `UselessAction`<`T`, `TOptions`, [`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md)<`T`>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<`T`, `TOptions`>>

***

### reporters

> `protected` **reporters**: `TReporter`[] = `[]`

## Methods

### cancel()

> **cancel**(`cancelParent?`): `void`

#### Parameters

##### cancelParent?

`boolean`

#### Returns

`void`

***

### createExecution()

> `protected` **createExecution**(`data`, `options?`): `TExecution`

#### Parameters

##### data

`T`

##### options?

`TOptions`

#### Returns

`TExecution`

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | `T` | `undefined`>

#### Parameters

##### data

`T`

##### options?

`TOptions`

#### Returns

`Promise`<`void` | `T` | `undefined`>

#### Implementation of

[`IAction`](reference/interfaces/IAction.md).[`execute`](../interfaces/IAction.md#execute)

***

### executeAction()

> `abstract` `protected` **executeAction**(`data`, `options?`): `Promise`<`void` | `T` | `undefined`>

#### Parameters

##### data

`T`

##### options?

`TOptions`

#### Returns

`Promise`<`void` | `T` | `undefined`>

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

***

### registerActionListener()

> **registerActionListener**(`func`): `this`

#### Parameters

##### func

`TUselessActionListenerFunction`<`T`>

#### Returns

`this`

***

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, `TOptions`>

#### Returns

`this`

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, `TOptions`>

#### Returns

`this`

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

`TReporter`

#### Returns

`this`

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

***

### setErrorHandler()

> **setErrorHandler**(`errorHandler`): `this`

#### Parameters

##### errorHandler

`TUselessActionErrorHandler`

#### Returns

`this`

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

`UselessAction`<`T`, `TOptions`>

#### Returns

`void`

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
