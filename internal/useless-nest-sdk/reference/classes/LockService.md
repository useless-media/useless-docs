# LockService

## Implements

- `OnModuleInit`

## Constructors

### Constructor

> **new LockService**(`logger`, `redis`): `LockService`

#### Parameters

##### logger

`Logger`

##### redis

`Redis`

#### Returns

`LockService`

## Methods

### acquireLock()

> **acquireLock**(`key`, `lockDuration`, `withSpreadDelay`): `Promise`<`boolean`>

#### Parameters

##### key

`string`

##### lockDuration

`number` = `10`

##### withSpreadDelay

`boolean` = `true`

#### Returns

`Promise`<`boolean`>

***

### isLocked()

> **isLocked**(`key`): `Promise`<`boolean`>

#### Parameters

##### key

`string`

#### Returns

`Promise`<`boolean`>

***

### onModuleInit()

> **onModuleInit**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

`OnModuleInit.onModuleInit`

***

### releaseAllLocks()

> **releaseAllLocks**(`pattern`): `Promise`<`boolean`>

#### Parameters

##### pattern

`string`

#### Returns

`Promise`<`boolean`>

***

### releaseBootLock()

> **releaseBootLock**(`key`): `Promise`<`boolean`>

#### Parameters

##### key

`string`

#### Returns

`Promise`<`boolean`>

***

### releaseLock()

> **releaseLock**(`key`): `Promise`<`boolean`>

#### Parameters

##### key

`string`

#### Returns

`Promise`<`boolean`>
