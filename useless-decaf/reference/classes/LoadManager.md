# LoadManager

## Constructors

### Constructor

> **new LoadManager**(`configuration`): `LoadManager`

#### Parameters

##### configuration

[`LoadManagerConfiguration`](reference/interfaces/LoadManagerConfiguration.md)

#### Returns

`LoadManager`

## Methods

### clearActiveLoadRequest()

> **clearActiveLoadRequest**(): `void`

#### Returns

`void`

***

### clearQueue()

> **clearQueue**(): `void`

#### Returns

`void`

***

### getNextLoad()

> **getNextLoad**(): `Load` | `undefined`

#### Returns

`Load` | `undefined`

***

### haltRequestFlow()

> **haltRequestFlow**(): `void`

#### Returns

`void`

***

### handleFirmwareLoadRequest()

> **handleFirmwareLoadRequest**(`request`, `queue`): `void`

#### Parameters

##### request

[`LoadRequestData`](reference/interfaces/LoadRequestData.md)

##### queue

`boolean` = `false`

#### Returns

`void`

***

### hasQueuedLoad()

> **hasQueuedLoad**(): `boolean`

#### Returns

`boolean`

***

### load()

> **load**(`request`): `void`

#### Parameters

##### request

`Load`

#### Returns

`void`

***

### next()

> **next**(): `void`

#### Returns

`void`

***

### releaseRequestFlow()

> **releaseRequestFlow**(`goToNext`): `void`

#### Parameters

##### goToNext

`boolean` = `true`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`LoadManagerDelegate`](reference/interfaces/LoadManagerDelegate.md)

#### Returns

`void`

***

### setTransformationDelegate()

> **setTransformationDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`LoadManagerLoadTransformationDelegate`](reference/interfaces/LoadManagerLoadTransformationDelegate.md)

#### Returns

`void`
