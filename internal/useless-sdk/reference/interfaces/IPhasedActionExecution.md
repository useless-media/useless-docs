# IPhasedActionExecution<T, TOptions>

## Extends

- [`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md)<`T`, `TOptions`>

## Type Parameters

### T

`T` *extends* [`IDto`](reference/interfaces/IDto.md) | `void` = `void`

### TOptions

`TOptions` *extends* [`IPhasedActionExecutionOptions`](reference/interfaces/IPhasedActionExecutionOptions.md) = [`IPhasedActionExecutionOptions`](IPhasedActionExecutionOptions.md)

## Properties

### cancelled

> **cancelled**: `boolean`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`cancelled`](IUselessActionExecution.md#cancelled)

***

### completion

> **completion**: `number`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`completion`](IUselessActionExecution.md#completion)

***

### history

> **history**: `string`[]

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`history`](IUselessActionExecution.md#history)

***

### input?

> **input**?: `T`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`input`](IUselessActionExecution.md#input)

***

### intermediate?

> **intermediate**?: `T`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`intermediate`](IUselessActionExecution.md#intermediate)

***

### options

> **options**: `TOptions`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`options`](IUselessActionExecution.md#options)

***

### output?

> **output**?: `T`

#### Inherited from

[`IUselessActionExecution`](reference/interfaces/IUselessActionExecution.md).[`output`](IUselessActionExecution.md#output)

***

### phases

> **phases**: `object`

#### active

> **active**: `number`

#### completed

> **completed**: `number`

#### total

> **total**: `number`
