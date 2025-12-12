# QueryTimedTriggerDto

## Implements

- [`IQuery`](reference/interfaces/IQuery.md)

## Properties

### filter?

> **filter**?: [`FilterTimedTriggerDto`](reference/interfaces/FilterTimedTriggerDto.md)

Supported formats:
  ?filter={"name":"SomeTrigger"}
  ?filter[name]=SomeTrigger

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
  ?sort=[{"orderBy":"id","order":"asc"},{"orderBy":"name","order":"desc"}]
  ?sort[0][orderBy]=type&sort[0][order]=Desc
  ?sort={"orderBy":"id","order":"asc"},{"orderBy":"name","order":"desc"} // Technically not valid, but supported anyway

#### Implementation of

`IQuery.sort`
