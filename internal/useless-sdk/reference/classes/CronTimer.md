# CronTimer

## Constructors

### Constructor

> **new CronTimer**(`config`): `CronTimer`

#### Parameters

##### config

###### completionTimeOffset?

`number`

###### debug?

`boolean`

###### fuzzFactor?

`number`

###### timescale?

`number`

#### Returns

`CronTimer`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### schedule()

> **schedule**(`date`, `completionHandler`): `void`

#### Parameters

##### date

`Date`

##### completionHandler

() => `void`

#### Returns

`void`

***

### scheduleByEpoch()

> **scheduleByEpoch**(`epochSec`, `completionHandler`): `void`

*scheduleByEpoch*

#### Parameters

##### epochSec

`number`

epoch time in seconds

##### completionHandler

() => `void`

#### Returns

`void`

***

### timeRemaining()

> **timeRemaining**(): `number`

#### Returns

`number`
