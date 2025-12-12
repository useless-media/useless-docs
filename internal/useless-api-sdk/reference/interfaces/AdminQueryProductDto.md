# AdminQueryProductDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: [`FilterProductDto`](reference/interfaces/FilterProductDto.md)

Supported formats:
  ?filter={"name":"SomePartOfName"}
  ?filter[name]=SomePartOfName

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

> **sort**?: [`SortProductDto`](reference/interfaces/SortProductDto.md)[]

Supported formats:
  ?sort=[{"orderBy":"price.price","order":"asc"},{"orderBy":"name","order":"desc"}]
  ?sort[0][orderBy]=price.price&sort[0][order]=Desc
  ?sort={"orderBy":"price.price","order":"asc"},{"orderBy":"name","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
