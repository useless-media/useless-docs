# StreamControllerRestrictions

## Constructors

### Constructor

> **new StreamControllerRestrictions**(`args`): `StreamControllerRestrictions`

#### Parameters

##### args

[`StreamControllerRestrictionsArgs`](reference/interfaces/StreamControllerRestrictionsArgs.md)

#### Returns

`StreamControllerRestrictions`

## Properties

### abandonedStreamIds

> **abandonedStreamIds**: `string`[] = `[]`

***

### advertisementTypes

> **advertisementTypes**: `string`[] = `[]`

***

### cipherModeTypes

> **cipherModeTypes**: `CipherModeTypes`[] = `[]`

***

### containerTypes

> **containerTypes**: `StreamContainerTypes`[] = `[]`

***

### playbackEnginesByStream

> **playbackEnginesByStream**: `Record`<`string`, (`PlaybackEngineTypes` | `string`)[]> = `{}`

***

### technologies

> **technologies**: [`StreamTechnology`](reference/interfaces/StreamTechnology.md)[] = `[]`

## Methods

### checkPlaybackEngineForStream()

> **checkPlaybackEngineForStream**(`stream`, `playbackEngine`): `boolean`

#### Parameters

##### stream

`Stream`

##### playbackEngine

`string`

#### Returns

`boolean`

***

### checkStream()

> **checkStream**(`stream`): `boolean`

#### Parameters

##### stream

`Stream`

#### Returns

`boolean`

***

### restrictAdvertisementTypesFromStream()

> **restrictAdvertisementTypesFromStream**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

***

### restrictAllAdvertisement()

> **restrictAllAdvertisement**(): `void`

#### Returns

`void`

***

### restrictCipherModeTypesFromStream()

> **restrictCipherModeTypesFromStream**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

***

### restrictCurrentStream()

> **restrictCurrentStream**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

***

### restrictCurrentStreamTechnology()

> **restrictCurrentStreamTechnology**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

***

### restrictPlaybackEngineForStream()

> **restrictPlaybackEngineForStream**(`stream`, `playbackEngine`): `void`

#### Parameters

##### stream

`Stream`

##### playbackEngine

`PlaybackEngineTypes`

#### Returns

`void`

***

### restrictStreamContainerTypes()

> **restrictStreamContainerTypes**(`containerType`): `void`

#### Parameters

##### containerType

`StreamContainerTypes`

#### Returns

`void`

***

### restrictStreamContainerTypesFromStream()

> **restrictStreamContainerTypesFromStream**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`
