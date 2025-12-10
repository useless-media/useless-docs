# DeCafClient

Interface of a DeCafClient.

## Constructors

### Constructor

> `protected` **new DeCafClient**(`deCaf`, `configuration`): `DeCafClient`

#### Parameters

##### deCaf

`DeCaf`

##### configuration

`Record`<`string`, `any`>

#### Returns

`DeCafClient`

## Methods

### handleConfigure()

> `abstract` **handleConfigure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`Record`<`string`, `any`>

#### Returns

`Promise`<`void`>

***

### handleLoad()

> `abstract` **handleLoad**(`load`, `playbackSession`): `Promise`<`void`>

#### Parameters

##### load

[`Load`](reference/interfaces/Load.md)

##### playbackSession

[`PlaybackSession`](reference/interfaces/PlaybackSession.md)

#### Returns

`Promise`<`void`>

***

### handleNextLoad()

> `abstract` **handleNextLoad**(`nextLoad?`): `Promise`<`void`>

#### Parameters

##### nextLoad?

[`Load`](reference/interfaces/Load.md)

#### Returns

`Promise`<`void`>

***

### handlePause()

> `abstract` **handlePause**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`PauseCommand`

#### Returns

`Promise`<`void`>

***

### handlePlay()

> `abstract` **handlePlay**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`PlayCommand`

#### Returns

`Promise`<`void`>

***

### handleReset()

> `abstract` **handleReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### handleSeek()

> `abstract` **handleSeek**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SeekCommand`

#### Returns

`Promise`<`void`>

***

### handleSenderConnected()

> `abstract` **handleSenderConnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

***

### handleSenderDisconnected()

> `abstract` **handleSenderDisconnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

***

### handleSetTracks()

> `abstract` **handleSetTracks**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetTracks`

#### Returns

`Promise`<`void`>

***

### handleSetVolume()

> `abstract` **handleSetVolume**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetVolumeCommand`

#### Returns

`Promise`<`void`>

***

### handleStop()

> `abstract` **handleStop**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`StopCommand`

#### Returns

`Promise`<`void`>

***

### handleTerminate()

> `abstract` **handleTerminate**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`TerminateCommand`

#### Returns

`Promise`<`void`>

***

### initialize()

> `abstract` **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
