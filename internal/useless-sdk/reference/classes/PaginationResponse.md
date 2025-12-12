# PaginationResponse<TDto>

## Type Parameters

### TDto

`TDto` *extends* [`IDto`](reference/interfaces/IDto.md)

## Implements

- [`IPaginationResponse`](reference/interfaces/IPaginationResponse.md)<`TDto`>

## Constructors

### Constructor

> **new PaginationResponse**<`TDto`>(`pagination`, `data`, `totalOrLastPage`): `PaginationResponse`<`TDto`>

#### Parameters

##### pagination

[`IPagination`](reference/interfaces/IPagination.md)

##### data

`TDto`[]

##### totalOrLastPage

`number` | `boolean`

#### Returns

`PaginationResponse`<`TDto`>

## Properties

### data

> **data**: `TDto`[]

***

### lastPage

> **lastPage**: `boolean`

***

### limit

> **limit**: `number`

***

### page

> **page**: `number`

***

### total?

> **total**?: `number`
