# BaseRequest<TRequest, TResponse>

## Extended by

- [`DeferredRequest`](reference/classes/DeferredRequest.md)
- [`FetchRequest`](reference/classes/FetchRequest.md)

## Type Parameters

### TRequest

`TRequest`

### TResponse

`TResponse`

## Constructors

### Constructor

> **new BaseRequest**<`TRequest`, `TResponse`>(): `BaseRequest`<`TRequest`, `TResponse`>

#### Returns

`BaseRequest`<`TRequest`, `TResponse`>

## Properties

### origin

> `abstract` **origin**: [`IRequestOrigin`](reference/interfaces/IRequestOrigin.md)

***

### request

> `abstract` **request**: [`UselessRequest`](reference/interfaces/UselessRequest.md)<`TRequest`>

## Methods

### execute()

> `abstract` **execute**(): `Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>

#### Returns

`Promise`<[`UselessResponse`](reference/classes/UselessResponse.md)<`TResponse`>>
