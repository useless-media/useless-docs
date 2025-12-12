# UselessResponse<TResponse>

## Type Parameters

### TResponse

`TResponse` = `void`

## Constructors

### Constructor

> **new UselessResponse**<`TResponse`>(`args`): `UselessResponse`<`TResponse`>

#### Parameters

##### args

`UselessResponseArgs`<`TResponse`>

#### Returns

`UselessResponse`<`TResponse`>

## Properties

### body?

> **body**?: `TResponse`

***

### error?

> **error**?: [`UselessError`](reference/classes/UselessError.md)<{ }>

***

### headers?

> **headers**?: `Record`<`string`, `any`>

***

### message?

> **message**?: `string`

***

### method

> **method**: [`RequestMethods`](reference/enumerations/RequestMethods.md)

***

### ok

> **ok**: `boolean` = `false`

***

### status

> **status**: `number`

***

### url

> **url**: `string`

## Methods

### data()

> **data**(): `TResponse` | `undefined`

#### Returns

`TResponse` | `undefined`
