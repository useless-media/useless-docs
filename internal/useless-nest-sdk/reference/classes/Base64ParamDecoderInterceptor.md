# Base64ParamDecoderInterceptor

## Implements

- `NestInterceptor`

## Constructors

### Constructor

> **new Base64ParamDecoderInterceptor**(`param`, `clazz`): `Base64ParamDecoderInterceptor`

#### Parameters

##### param

`string`

##### clazz

`ClassConstructor`<`unknown`>

#### Returns

`Base64ParamDecoderInterceptor`

## Methods

### intercept()

> **intercept**(`context`, `next`): `Promise`<`Observable`<`unknown`>>

Method to implement a custom interceptor.

#### Parameters

##### context

`ExecutionContext`

an `ExecutionContext` object providing methods to access the
route handler and class about to be invoked.

##### next

`CallHandler`

a reference to the `CallHandler`, which provides access to an
`Observable` representing the response stream from the route handler.

#### Returns

`Promise`<`Observable`<`unknown`>>

#### Implementation of

`NestInterceptor.intercept`
