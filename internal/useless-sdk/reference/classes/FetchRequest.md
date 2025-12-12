# FetchRequest<TRequest, TResponse>

## Extends

- [`BaseRequest`](reference/classes/BaseRequest.md)<`TRequest`, `TResponse`>

## Type Parameters

### TRequest

`TRequest`

### TResponse

`TResponse`

## Constructors

### Constructor

> **new FetchRequest**<`TRequest`, `TResponse`>(`origin`, `request`): `FetchRequest`<`TRequest`, `TResponse`>

#### Parameters

##### origin

[`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

##### request

[`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Returns

`FetchRequest`<`TRequest`, `TResponse`>

#### Overrides

[`BaseRequest`](reference/classes/BaseRequest.md).[`constructor`](BaseRequest.md#constructor)

## Properties

### origin

> `readonly` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

#### Overrides

[`BaseRequest`](reference/classes/BaseRequest.md).[`origin`](BaseRequest.md#origin)

***

### request

> `readonly` **request**: [`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

#### Overrides

[`BaseRequest`](reference/classes/BaseRequest.md).[`request`](BaseRequest.md#request)

## Methods

### execute()

> **execute**(): `Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Returns

`Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Overrides

[`BaseRequest`](reference/classes/BaseRequest.md).[`execute`](BaseRequest.md#execute)
