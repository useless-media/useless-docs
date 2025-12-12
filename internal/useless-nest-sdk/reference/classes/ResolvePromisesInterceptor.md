# ResolvePromisesInterceptor

## Implements

- `NestInterceptor`

## Constructors

### Constructor

> **new ResolvePromisesInterceptor**(): `ResolvePromisesInterceptor`

#### Returns

`ResolvePromisesInterceptor`

## Methods

### intercept()

> **intercept**(`context`, `next`): `Observable`<`unknown`>

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

`Observable`<`unknown`>

#### Implementation of

`NestInterceptor.intercept`
