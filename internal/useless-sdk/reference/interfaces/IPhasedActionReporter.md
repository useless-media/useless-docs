# IPhasedActionReporter<T>

## Extends

- [`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md)<`T`>

## Type Parameters

### T

`T` *extends* [`IDto`](reference/interfaces/IDto.md) | `void` = `void`

## Indexable

[`key`: `string`]: (`actionName`, ...`args`) => `void` | `undefined`

## Properties

### error()?

> **error**?: (`actionName`, `error`) => `void`

#### Parameters

##### actionName

`string`

##### error

[`UselessError`](reference/classes/UselessError.md)<`any`>

#### Returns

`void`

#### Inherited from

[`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md).[`error`](IUselessActionReporter.md#error)

***

### execute()?

> **execute**?: (`actionName`, `name`, `input`) => `void`

#### Parameters

##### actionName

`string`

##### name

`string`

##### input

`T`

#### Returns

`void`

#### Inherited from

[`IUselessActionReporter`](reference/interfaces/IUselessActionReporter.md).[`execute`](IUselessActionReporter.md#execute)
