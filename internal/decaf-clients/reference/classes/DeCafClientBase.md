# DeCafClientBase<TConfiguration>

Note: Intentionally implementing instead of extending so we can use type-only imports from decaf for better treeshaking

## Extended by

- [`CommercialDeCafClient`](reference/classes/CommercialDeCafClient.md)

## Type Parameters

### TConfiguration

`TConfiguration` *extends* [`DeCafClientBaseConfiguration`](reference/interfaces/DeCafClientBaseConfiguration.md) = [`DeCafClientBaseConfiguration`](../interfaces/DeCafClientBaseConfiguration.md)

## Implements

- `DeCafClient`

## Constructors

### Constructor

> `protected` **new DeCafClientBase**<`TConfiguration`>(`deCaf`, `configuration`): `DeCafClientBase`<`TConfiguration`>

#### Parameters

##### deCaf

`DeCaf`

##### configuration

`TConfiguration`

#### Returns

`DeCafClientBase`<`TConfiguration`>

## Properties

### communicationChannel

> `protected` `readonly` **communicationChannel**: `ICommunicationChannel`<[`DeCafClientCommunicationChannelEventList`](reference/interfaces/DeCafClientCommunicationChannelEventList.md)>

***

### configuration

> `protected` **configuration**: `TConfiguration`

***

### container

> `protected` `readonly` **container**: `HTMLDivElement`

***

### deCaf

> `protected` `readonly` **deCaf**: `DeCaf`

***

### errorManager

> `readonly` **errorManager**: `ErrorManager`

***

### mediaElement

> `protected` `readonly` **mediaElement**: `HTMLMediaElement`

***

### playbackSession?

> **playbackSession**?: `PlaybackSession`

## Methods

### getClientInformation()

> `abstract` **getClientInformation**(): [`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

#### Returns

[`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

***

### handleConfigure()

> **handleConfigure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`DeepPartial`<`TConfiguration`>

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleConfigure`

***

### handleDeCafLoad()

> `abstract` **handleDeCafLoad**(`load`, `playbackSession`): `Promise`<`void`>

#### Parameters

##### load

`Load`

##### playbackSession

`PlaybackSession`

#### Returns

`Promise`<`void`>

***

### handleDismissStillWatching()

> `abstract` **handleDismissStillWatching**(): `Promise`<`void`>

Additional Client commands

#### Returns

`Promise`<`void`>

***

### handleLoad()

> **handleLoad**(`load`, `playbackSession`): `Promise`<`void`>

#### Parameters

##### load

`Load`

##### playbackSession

`PlaybackSession`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleLoad`

***

### handleNextLoad()

> `abstract` **handleNextLoad**(`load?`): `Promise`<`void`>

#### Parameters

##### load?

`Load`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleNextLoad`

***

### handlePause()

> `abstract` **handlePause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handlePause`

***

### handlePlay()

> `abstract` **handlePlay**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handlePlay`

***

### handleReset()

> `abstract` **handleReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleReset`

***

### handleSeek()

> `abstract` **handleSeek**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SeekCommand`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleSeek`

***

### handleSenderConnected()

> `abstract` **handleSenderConnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleSenderConnected`

***

### handleSenderDisconnected()

> `abstract` **handleSenderDisconnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleSenderDisconnected`

***

### handleSetAudioTrack()

> `abstract` **handleSetAudioTrack**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetAudioTrackCommand`

#### Returns

`Promise`<`void`>

***

### handleSetMuted()

> `abstract` **handleSetMuted**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetMutedCommand`

#### Returns

`Promise`<`void`>

***

### handleSetTextTrack()

> `abstract` **handleSetTextTrack**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SetTextTrackCommand`

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

#### Implementation of

`DeCafClient.handleSetTracks`

***

### handleSetVolume()

> `abstract` **handleSetVolume**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetVolumeCommand`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleSetVolume`

***

### handleSkipSection()

> `abstract` **handleSkipSection**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SkipSectionCommand`

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

#### Implementation of

`DeCafClient.handleStop`

***

### handleTerminate()

> `abstract` **handleTerminate**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`TerminateCommand`

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.handleTerminate`

***

### initialize()

> **initialize**(): `Promise`<`void`>

DeCaf Client

#### Returns

`Promise`<`void`>

#### Implementation of

`DeCafClient.initialize`
