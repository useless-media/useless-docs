# UselessDebugMessage

## Extends

- `UselessMessage`

## Extended by

- [`ConfigureConsoleInterceptorMessage`](reference/classes/ConfigureConsoleInterceptorMessage.md)
- [`ConsoleInterceptorMessage`](reference/classes/ConsoleInterceptorMessage.md)
- [`DebuggerBreakMessage`](reference/classes/DebuggerBreakMessage.md)
- [`DebuggerReleaseBreakMessage`](reference/classes/DebuggerReleaseBreakMessage.md)
- [`DescribeMessage`](reference/classes/DescribeMessage.md)
- [`DescribeResponseMessage`](reference/classes/DescribeResponseMessage.md)
- [`EvalMessage`](reference/classes/EvalMessage.md)
- [`EvalResponseMessage`](reference/classes/EvalResponseMessage.md)
- [`ReloadMessage`](reference/classes/ReloadMessage.md)
- [`TerminateMessage`](reference/classes/TerminateMessage.md)

## Constructors

### Constructor

> `protected` **new UselessDebugMessage**(`correlationId?`, `applicationId?`): `UselessDebugMessage`

#### Parameters

##### correlationId?

`string`

##### applicationId?

`string`

#### Returns

`UselessDebugMessage`

#### Overrides

`UselessMessage.constructor`

## Properties

### applicationId?

> **applicationId**?: `string`

***

### correlationId?

> `readonly` **correlationId**?: `string`

#### Inherited from

`UselessMessage.correlationId`

***

### data

> `abstract` `readonly` **data**: `AnyMessage`

#### Inherited from

`UselessMessage.data`

***

### id

> `readonly` **id**: `string`

#### Inherited from

`UselessMessage.id`

***

### namespace?

> **namespace**?: `string`

#### Inherited from

`UselessMessage.namespace`

***

### receiverId?

> **receiverId**?: `string`

#### Inherited from

`UselessMessage.receiverId`

***

### senderId?

> **senderId**?: `string`

#### Inherited from

`UselessMessage.senderId`

***

### sessionId?

> **sessionId**?: `string`

#### Inherited from

`UselessMessage.sessionId`

***

### type

> `abstract` `readonly` **type**: `string`

#### Inherited from

`UselessMessage.type`

***

### version

> `abstract` `readonly` **version**: `number`

#### Inherited from

`UselessMessage.version`
