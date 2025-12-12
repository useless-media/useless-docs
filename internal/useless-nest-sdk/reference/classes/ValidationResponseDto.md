# ValidationResponseDto

## Extends

- [`HttpExceptionResponseDto`](reference/classes/HttpExceptionResponseDto.md)

## Constructors

### Constructor

> **new ValidationResponseDto**(): `ValidationResponseDto`

#### Returns

`ValidationResponseDto`

#### Inherited from

[`HttpExceptionResponseDto`](reference/classes/HttpExceptionResponseDto.md).[`constructor`](HttpExceptionResponseDto.md#constructor)

## Properties

### error?

> **error**?: `string`

#### Inherited from

[`HttpExceptionResponseDto`](reference/classes/HttpExceptionResponseDto.md).[`error`](HttpExceptionResponseDto.md#error)

***

### errors

> **errors**: `Record`<`string`, `any`>

***

### status

> **status**: `number` = `HttpStatus.UNPROCESSABLE_ENTITY`

#### Overrides

[`HttpExceptionResponseDto`](reference/classes/HttpExceptionResponseDto.md).[`status`](HttpExceptionResponseDto.md#status)
