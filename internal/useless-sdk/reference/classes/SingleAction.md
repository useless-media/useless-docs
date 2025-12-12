# SingleAction<T>

## Extends

- [`UselessAction`](UselessAction.md)<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)>

## Type Parameters

### T

`T` *extends* [`IDto`](reference/interfaces/IDto.md) | `void` = `void`

## Constructors

### Constructor

> **new SingleAction**<`T`>(`actionName`, `action?`, `options?`): `SingleAction`<`T`>

#### Parameters

##### actionName

`string`

##### action?

`TUselessActionFunction`<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md), `SingleAction`<`T`>>

##### options?

[`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)

#### Returns

`SingleAction`<`T`>

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

> **execution**?: [`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md)<`T`, [`ISingleActionExecutionOptions`](../interfaces/ISingleActionExecutionOptions.md)>

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`execution`](UselessAction.md#execution)

***

### options

> **options**: [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`options`](UselessAction.md#options)

***

### parent?

> `protected` **parent**?: [`UselessAction`](UselessAction.md)<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md), [`IUselessActionReporter`](../interfaces/IUselessActionReporter.md)<`T`>, [`IUselessActionExecution`](../interfaces/IUselessActionExecution.md)<`T`, [`ISingleActionExecutionOptions`](../interfaces/ISingleActionExecutionOptions.md)>>

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`parent`](UselessAction.md#parent)

***

### reporters

> `protected` **reporters**: [`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md)<`T`>[] = `[]`

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

> `protected` **createExecution**(`data`, `options?`): [`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md)

#### Parameters

##### data

`T`

##### options?

[`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)

#### Returns

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md)

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`createExecution`](UselessAction.md#createexecution)

***

### execute()

> **execute**(`data`, `options?`): `Promise`<`void` | `T` | `undefined`>

#### Parameters

##### data

`T`

##### options?

[`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)

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

[`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)

#### Returns

`Promise`<`void` | `T` | `undefined`>

#### Overrides

[`UselessAction`](reference/classes/UselessAction.md).[`executeAction`](UselessAction.md#executeaction)

***

### getCompletion()

> **getCompletion**(): `number`

#### Returns

`number`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`getCompletion`](UselessAction.md#getcompletion)

***

### handleError()

> `protected` **handleError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`unknown`

#### Returns

`Promise`<`void`>

#### Inherited from

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

### registerPostActionHandler()

> **registerPostActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`registerPostActionHandler`](UselessAction.md#registerpostactionhandler)

***

### registerPreActionHandler()

> **registerPreActionHandler**(`func`): `this`

#### Parameters

##### func

`TUselessActionFunction`<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)>

#### Returns

`this`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`registerPreActionHandler`](UselessAction.md#registerpreactionhandler)

***

### registerReporter()

> **registerReporter**(`reporter`): `this`

#### Parameters

##### reporter

[`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md)

#### Returns

`this`

#### Inherited from

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

### setAction()

> **setAction**(`action?`): `void`

#### Parameters

##### action?

`TUselessActionFunction`<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md), `SingleAction`<`T`>>

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

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`setErrorHandler`](UselessAction.md#seterrorhandler)

***

### setParent()

> **setParent**(`parent`): `void`

#### Parameters

##### parent

[`UselessAction`](UselessAction.md)<`T`, [`ISingleActionExecutionOptions`](reference/interfaces/ISingleActionExecutionOptions.md)>

#### Returns

`void`

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`setParent`](UselessAction.md#setparent)

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

#### Inherited from

[`UselessAction`](reference/classes/UselessAction.md).[`track`](UselessAction.md#track)
