# StripNullInterceptor

## Implements

- `NestInterceptor`

## Constructors

### Constructor

> **new StripNullInterceptor**(): `StripNullInterceptor`

#### Returns

`StripNullInterceptor`

## Methods

### intercept()

> **intercept**(`context`, `next`): `Observable`<`any`>

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

`Observable`<`any`>

#### Implementation of

`NestInterceptor.intercept`
