# DeCafClient

Interface of a DeCafClient.

## Constructors

### new DeCafClient(container, deCaf, state)

> **`protected`** **new DeCafClient**(`container`, `deCaf`, `state`): [`DeCafClient`](reference/classes/DeCafClient.md)

#### Parameters

• **container**: `HTMLDivElement`

• **deCaf**: [`DeCafProxy`](reference/classes/DeCafProxy.md)

• **state**: [`IPlaybackSessionState`](reference/interfaces/IPlaybackSessionState.md)

#### Returns

[`DeCafClient`](reference/classes/DeCafClient.md)

## Methods

### `abstract` handleCustomMessage()

> **`abstract`** **handleCustomMessage**(`message`): `Promise`<`void`>

Handles a custom message.

#### Parameters

• **message**: [`RawFirmwareMessage`](reference/interfaces/RawFirmwareMessage.md)

The RawFirmwareMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleEditAudioTracks()

> **handleEditAudioTracks**(`message`): `Promise`<`void`>

Handles an edit audio tracks request.

#### Parameters

• **message**: [`EditAudioTracksMessage`](reference/interfaces/EditAudioTracksMessage.md)

The EditAudioTracksMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleEditTracks()

> **handleEditTracks**(`message`): `Promise`<`void`>

Handles an edit tracks request.

#### Parameters

• **message**: [`EditTracksInfoMessage`](reference/interfaces/EditTracksInfoMessage.md)

The EditTracksMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleFocusState()

> **handleFocusState**(`message`): `Promise`<`void`>

Handles a focus state request.

#### Parameters

• **message**: [`FocusStateMessage`](reference/interfaces/FocusStateMessage.md)

The FocusStateMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleGetStatus()

> **handleGetStatus**(`message`): `Promise`<`void`>

Handles a get status request.

#### Parameters

• **message**: [`GetStatusMessage`](reference/interfaces/GetStatusMessage.md)

The GetStatusMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### `abstract` handleLoad()

> **`abstract`** **handleLoad**(`message`): `Promise`<`void` | [`LoadMessage`](reference/interfaces/LoadMessage.md)>

Handles a load request.

#### Parameters

• **message**: [`LoadMessage`](reference/interfaces/LoadMessage.md)

The LoadMessage to be processed.

#### Returns

`Promise`<`void` | [`LoadMessage`](reference/interfaces/LoadMessage.md)>

A Promise that resolves with a LoadMessage or void when the request is handled.

***

### handlePause()

> **handlePause**(): `Promise`<`void`>

Handles a pause request.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handlePlay()

> **handlePlay**(): `Promise`<`void`>

Handles a play request.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleSeek()

> **handleSeek**(`message`): `Promise`<`void`>

Handles a seek request.

#### Parameters

• **message**: [`SeekMessage`](reference/interfaces/SeekMessage.md)

The SeekMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleSenderConnected()

> **handleSenderConnected**(`message`): `Promise`<`void`>

Handles a sender connected message.

#### Parameters

• **message**: [`SenderConnectedMessage`](reference/interfaces/SenderConnectedMessage.md)

The SenderConnectedMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleSenderDisconnected()

> **handleSenderDisconnected**(`message`): `Promise`<`void`>

Handles a sender disconnected message.

#### Parameters

• **message**: [`SenderDisconnectedMessage`](reference/interfaces/SenderDisconnectedMessage.md)

The SenderDisconnectedMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleSetVolume()

> **handleSetVolume**(`message`): `Promise`<`void`>

Handles a set volume request.

#### Parameters

• **message**: [`SetVolumeMessage`](reference/interfaces/SetVolumeMessage.md)

The SetVolumeMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleShowMediaControls()

> **handleShowMediaControls**(`message`): `Promise`<`void`>

Handles a show media controls request.

#### Parameters

• **message**: [`ShowMediaControlsMessage`](reference/interfaces/ShowMediaControlsMessage.md)

The ShowMediaControlsMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleSkipAd()

> **handleSkipAd**(`message`): `Promise`<`void`>

Handles a skip ad request.

#### Parameters

• **message**: [`SkipAdMessage`](reference/interfaces/SkipAdMessage.md)

The SkipAdMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleStandbyChanged()

> **handleStandbyChanged**(`message`): `Promise`<`void`>

Handles a standby changed message.

#### Parameters

• **message**: [`StandbyChangedMessage`](reference/interfaces/StandbyChangedMessage.md)

The StandbyChangedMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleStop()

> **handleStop**(`message`): `Promise`<`void`>

Handles a stop request.

#### Parameters

• **message**: [`StopMessage`](reference/interfaces/StopMessage.md)

The StopMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the request is handled.

***

### handleTerminate()

> **handleTerminate**(`message`): `Promise`<`void`>

Handles a terminate message.

#### Parameters

• **message**: [`TerminateMessage`](reference/interfaces/TerminateMessage.md)

The TerminateMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleVisibilityChanged()

> **handleVisibilityChanged**(`message`): `Promise`<`void`>

Handles a change in visibility message.

#### Parameters

• **message**: [`VisibilityChangedMessage`](reference/interfaces/VisibilityChangedMessage.md)

The VisibilityChangedMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.

***

### handleVolumeChanged()

> **handleVolumeChanged**(`message`): `Promise`<`void`>

Handles a change in volume message.

#### Parameters

• **message**: [`VolumeChangedMessage`](reference/interfaces/VolumeChangedMessage.md)

The VolumeChangedMessage to be processed.

#### Returns

`Promise`<`void`>

A Promise that resolves when the message is handled.
