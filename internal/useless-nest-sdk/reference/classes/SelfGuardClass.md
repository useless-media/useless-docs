# SelfGuardClass

## Implements

- `CanActivate`

## Constructors

### Constructor

> **new SelfGuardClass**(`userIdParamName`): `SelfGuardClass`

#### Parameters

##### userIdParamName

`string` = `'userId'`

#### Returns

`SelfGuardClass`

## Methods

### canActivate()

> **canActivate**(`context`): `boolean`

#### Parameters

##### context

`ExecutionContext`

Current execution context. Provides access to details about
the current request pipeline.

#### Returns

`boolean`

Value indicating whether or not the current request is allowed to
proceed.

#### Implementation of

`CanActivate.canActivate`
