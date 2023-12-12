# DeCafCoreDelegate

## Constructors

### new DeCafCoreDelegate()

> **new DeCafCoreDelegate**(): [`DeCafCoreDelegate`](reference/classes/DeCafCoreDelegate.md)

#### Returns

[`DeCafCoreDelegate`](reference/classes/DeCafCoreDelegate.md)

## Methods

### handleConfigure()

> **handleConfigure**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`ConfigureMessage`](reference/interfaces/ConfigureMessage.md)<`Object`>

#### Returns

`Promise`<`void`>

***

### handleEditAudioTracks()

> **handleEditAudioTracks**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`EditAudioTracksMessage`](reference/interfaces/EditAudioTracksMessage.md)

#### Returns

`Promise`<`void`>

***

### handleEditTracks()

> **handleEditTracks**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`EditTracksInfoMessage`](reference/interfaces/EditTracksInfoMessage.md)

#### Returns

`Promise`<`void`>

***

### handleFocusState()

> **handleFocusState**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`FocusStateMessage`](reference/interfaces/FocusStateMessage.md)

#### Returns

`Promise`<`void`>

***

### handleGetStatus()

> **handleGetStatus**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`GetStatusMessage`](reference/interfaces/GetStatusMessage.md)

#### Returns

`Promise`<`void`>

***

### handleLoad()

> **handleLoad**(`message`): `Promise`<`void` | [`LoadMessage`](reference/interfaces/LoadMessage.md)>

#### Parameters

• **message**: [`LoadMessage`](reference/interfaces/LoadMessage.md)

#### Returns

`Promise`<`void` | [`LoadMessage`](reference/interfaces/LoadMessage.md)>

***

### handlePause()

> **handlePause**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`PauseMessage`](reference/interfaces/PauseMessage.md)

#### Returns

`Promise`<`void`>

***

### handlePlay()

> **handlePlay**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`PlayMessage`](reference/interfaces/PlayMessage.md)

#### Returns

`Promise`<`void`>

***

### handleReady()

> **handleReady**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`ReadyMessage`](reference/interfaces/ReadyMessage.md)

#### Returns

`Promise`<`void`>

***

### handleSeek()

> **handleSeek**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`SeekMessage`](reference/interfaces/SeekMessage.md)

#### Returns

`Promise`<`void`>

***

### handleSenderConnected()

> **handleSenderConnected**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`SenderConnectedMessage`](reference/interfaces/SenderConnectedMessage.md)

#### Returns

`Promise`<`void`>

***

### handleSenderDisconnected()

> **handleSenderDisconnected**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`SenderDisconnectedMessage`](reference/interfaces/SenderDisconnectedMessage.md)

#### Returns

`Promise`<`void`>

***

### handleSetVolume()

> **handleSetVolume**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`SetVolumeMessage`](reference/interfaces/SetVolumeMessage.md)

#### Returns

`Promise`<`void`>

***

### handleShowMediaControls()

> **handleShowMediaControls**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`ShowMediaControlsMessage`](reference/interfaces/ShowMediaControlsMessage.md)

#### Returns

`Promise`<`void`>

***

### handleSkipAd()

> **handleSkipAd**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`SkipAdMessage`](reference/interfaces/SkipAdMessage.md)

#### Returns

`Promise`<`void`>

***

### handleStandbyChanged()

> **handleStandbyChanged**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`StandbyChangedMessage`](reference/interfaces/StandbyChangedMessage.md)

#### Returns

`Promise`<`void`>

***

### handleStop()

> **handleStop**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`StopMessage`](reference/interfaces/StopMessage.md)

#### Returns

`Promise`<`void`>

***

### handleTerminate()

> **handleTerminate**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`TerminateMessage`](reference/interfaces/TerminateMessage.md)

#### Returns

`Promise`<`void`>

***

### handleVisibilityChanged()

> **handleVisibilityChanged**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`VisibilityChangedMessage`](reference/interfaces/VisibilityChangedMessage.md)

#### Returns

`Promise`<`void`>

***

### handleVolumeChanged()

> **handleVolumeChanged**(`message`): `Promise`<`void`>

#### Parameters

• **message**: [`VolumeChangedMessage`](reference/interfaces/VolumeChangedMessage.md)

#### Returns

`Promise`<`void`>
