# AdminQueryProductInstanceDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: [`AdminFilterProductInstanceDto`](reference/interfaces/AdminFilterProductInstanceDto.md)

Supported formats:
  ?filter={"active":true}
  ?filter[active]=true
  ?filter={"productIds":1}
  ?filter={"productIds":[1, 2]}
  ?filter[productIds]=1&filters[productIds]=2
  ?filter={"userIds":1}
  ?filter={"userIds":[1, 2]}
  ?filter[userIds]=1&filters[userIds]=2

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

> **sort**?: [`SortProductInstanceDto`](reference/interfaces/SortProductInstanceDto.md)[]

Supported formats:
  ?sort=[{"orderBy":"payment.price","order":"asc"},{"orderBy":"name","order":"desc"}]
  ?sort[0][orderBy]=payment.price&sort[0][order]=Desc
  ?sort={"orderBy":"payment.price","order":"asc"},{"orderBy":"name","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
