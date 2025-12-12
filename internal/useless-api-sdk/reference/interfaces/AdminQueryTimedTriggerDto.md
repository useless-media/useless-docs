# AdminQueryTimedTriggerDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: [`AdminFilterTimedTriggerDto`](reference/interfaces/AdminFilterTimedTriggerDto.md)

Supported formats:
  ?filter={"active":true}
  ?filter[active]=true
  ?filter={"productInstanceIds":1}
  ?filter={"productInstanceIds":[1, 2]}
  ?filter[productInstanceIds]=1&filters[productInstanceIds]=2
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

> **sort**?: [`SortTimedTriggerDto`](reference/interfaces/SortTimedTriggerDto.md)[]

Supported formats:
  ?sort=[{"orderBy":"status","order":"asc"},{"orderBy":"action","order":"desc"}]
  ?sort[0][orderBy]=status&sort[0][order]=Desc
  ?sort={"orderBy":"status","order":"asc"},{"orderBy":"action","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
