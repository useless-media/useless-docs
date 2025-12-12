# UselessStorage

## Properties

### clearData()

> **clearData**: (`storageKey`, `key`) => `void`

#### Parameters

##### storageKey

`string`

##### key

`string`

#### Returns

`void`

***

### clearDataStorage()

> **clearDataStorage**: (`storageKey`) => `void`

#### Parameters

##### storageKey

`string`

#### Returns

`void`

***

### clearDeviceData()

> **clearDeviceData**: (`deviceId`, `key`) => `void`

#### Parameters

##### deviceId

`string`

##### key

`string`

#### Returns

`void`

***

### clearDeviceDataStorage()

> **clearDeviceDataStorage**: (`deviceId`) => `void`

#### Parameters

##### deviceId

`string`

#### Returns

`void`

***

### getData()

> **getData**: <`T`>(`storageKey`, `key`) => `T` | `null`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### storageKey

`string`

##### key

`string`

#### Returns

`T` | `null`

***

### getDataStorage()

> **getDataStorage**: <`T`>(`storageKey`) => `T` | `null`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### storageKey

`string`

#### Returns

`T` | `null`

***

### getDeviceData()

> **getDeviceData**: <`T`>(`deviceId`, `key`) => `T` | `null`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### deviceId

`string`

##### key

`string`

#### Returns

`T` | `null`

***

### getDeviceDataStorage()

> **getDeviceDataStorage**: <`T`>(`deviceId`) => `T` | `null`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### deviceId

`string`

#### Returns

`T` | `null`

***

### storeData()

> **storeData**: <`T`>(`storageKey`, `key`, `data`) => `void`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### storageKey

`string`

##### key

`string`

##### data

`T` | `null`

#### Returns

`void`

***

### storeDataWithExpiration()

> **storeDataWithExpiration**: <`T`>(`storageKey`, `key`, `data`, `expiration?`) => `void`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### storageKey

`string`

##### key

`string`

##### data

`T` | `null`

##### expiration?

`number` | `Date`

#### Returns

`void`

***

### storeDeviceData()

> **storeDeviceData**: <`T`>(`deviceId`, `key`, `data`) => `void`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### deviceId

`string`

##### key

`string`

##### data

`T` | `null`

#### Returns

`void`

***

### storeDeviceDataWithExpiration()

> **storeDeviceDataWithExpiration**: <`T`>(`deviceId`, `key`, `data`, `expiration?`) => `void`

#### Type Parameters

##### T

`T` *extends* `UselessStorageDataType` = `Record`<`string`, `any`>

#### Parameters

##### deviceId

`string`

##### key

`string`

##### data

`T` | `null`

##### expiration?

`number` | `Date`

#### Returns

`void`
