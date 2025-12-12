# AdminUpdateProductInstanceDto

## Extends

- `Partial`<`Omit`<[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md), `"productId"` | `"userId"`>>

## Properties

### active?

> **active**?: `boolean`

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`active`](AdminCreateProductInstanceDto.md#active)

***

### configuration?

> **configuration**?: `Partial`<[`IProductConfiguration`](reference/interfaces/IProductConfiguration.md)> = `{}`

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`configuration`](AdminCreateProductInstanceDto.md#configuration)

***

### expiresAt?

> **expiresAt**?: `Date`

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`expiresAt`](AdminCreateProductInstanceDto.md#expiresat)

***

### keyId?

> **keyId**?: `number`

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`keyId`](AdminCreateProductInstanceDto.md#keyid)

***

### name

> **name**: `string`

#### Overrides

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`name`](AdminCreateProductInstanceDto.md#name)

***

### payment?

> **payment**?: [`Payment`](reference/interfaces/Payment.md)

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`payment`](AdminCreateProductInstanceDto.md#payment)

***

### productId

> **productId**: `number`

***

### status?

> **status**?: [`ProductInstanceStatusEnum`](reference/enumerations/ProductInstanceStatusEnum.md)

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`status`](AdminCreateProductInstanceDto.md#status)

***

### userConfiguration?

> **userConfiguration**?: `Record`<`string`, `any`>

#### Inherited from

[`AdminCreateProductInstanceDto`](reference/interfaces/AdminCreateProductInstanceDto.md).[`userConfiguration`](AdminCreateProductInstanceDto.md#userconfiguration)

***

### userId

> **userId**: `number`
