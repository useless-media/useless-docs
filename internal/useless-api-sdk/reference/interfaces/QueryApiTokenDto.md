# QueryApiTokenDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: [`FilterApiTokenDto`](reference/interfaces/FilterApiTokenDto.md)

Supported formats:
  ?filter={"type":"UselessLicense"}
  ?filter[type]=UselessLicense

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

> **sort**?: [`SortApiTokenDto`](reference/interfaces/SortApiTokenDto.md)[]

Supported formats:
  ?sort=[{"orderBy":"type","order":"asc"},{"orderBy":"name","order":"desc"}]
  ?sort[0][orderBy]=type&sort[0][order]=Desc
  ?sort={"orderBy":"type","order":"asc"},{"orderBy":"name","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
