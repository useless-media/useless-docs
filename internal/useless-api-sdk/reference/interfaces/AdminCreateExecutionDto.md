# AdminCreateExecutionDto

## Properties

### action

> **action**: `string`

***

### actionId?

> **actionId**?: `string`

***

### configuration?

> **configuration**?: `Record`<`string`, `any`> = `{}`

***

### correlationId?

> **correlationId**?: `string`

***

### data

> **data**: `Record`<`string`, `any`>

***

### dataLocation?

> **dataLocation**?: [`DataLocation`](reference/interfaces/DataLocation.md)

***

### identifiers?

> **identifiers**?: `Record`<`string`, `any`> = `{}`

Note: Below properties are only used when triggering non-product-instance executions

***

### productInstanceId?

> **productInstanceId**?: `number`

***

### status

> **status**: [`ExecutionStatusEnum`](reference/enumerations/ExecutionStatusEnum.md) = `ExecutionStatusEnum.Pending`

***

### userConfiguration?

> **userConfiguration**?: `Record`<`string`, `any`> = `{}`

***

### userId?

> **userId**?: `number`
