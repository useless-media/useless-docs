# QueryUserDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: `FilterUserDto`

Supported formats:
  ?filter={"roles":["SomeRole"]}
  ?filter[roles]=SomeRole

#### Implementation of

`IQuery.filter`

***

### limit?

> **limit**?: `number`

#### Implementation of

`IQuery.limit`

***

### page?

> **page**?: `number`

#### Implementation of

`IQuery.page`

***

### sort?

> **sort**?: `SortUserDto`[]

Supported formats:
  ?sort=[{"orderBy":"firstName","order":"asc"},{"orderBy":"lastName","order":"desc"}]
  ?sort[0][orderBy]=firstName&sort[0][order]=Desc
  ?sort={"orderBy":"firstName","order":"asc"},{"orderBy":"lastName","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
