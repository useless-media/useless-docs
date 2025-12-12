# UselessExceptionFilter

## Implements

- `ExceptionFilter`

## Constructors

### Constructor

> **new UselessExceptionFilter**(): `UselessExceptionFilter`

#### Returns

`UselessExceptionFilter`

## Methods

### catch()

> **catch**(`exception`, `host`): `void`

Method to implement a custom exception filter.

#### Parameters

##### exception

`HttpException`

the class of the exception being handled

##### host

`ArgumentsHost`

used to access an array of arguments for
the in-flight request

#### Returns

`void`

#### Implementation of

`ExceptionFilter.catch`
