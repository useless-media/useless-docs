# RawDeCaf

## Constructors

### new RawDeCaf(args)

> **new RawDeCaf**(`args`): [`RawDeCaf`](reference/classes/RawDeCaf.md)

#### Parameters

• **args**: [`RawDeCafArgs`](reference/interfaces/RawDeCafArgs.md)

#### Returns

[`RawDeCaf`](reference/classes/RawDeCaf.md)

## Properties

### core

> **`protected`** **`readonly`** **core**: `DeCafCore`

## Accessors

### mediaStatus

> **`get`** **mediaStatus**(): [`MediaStatus`](reference/interfaces/MediaStatus.md)

#### Returns

[`MediaStatus`](reference/interfaces/MediaStatus.md)

## Methods

### getMediaStatusState()

> **getMediaStatusState**(): [`IMediaStatusState`](reference/interfaces/IMediaStatusState.md)

#### Returns

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md)

***

### registerNamespace()

> **registerNamespace**(`namespace`, `handler`): `void`

#### Parameters

• **namespace**: `string`

• **handler**: [`TCustomMessageHandler`](reference/type-aliases/TCustomMessageHandler.md)

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`namespace`, `message`, `senderId`?): `void`

#### Parameters

• **namespace**: `string`

• **message**: `Record`<`string`, `any`>

• **senderId?**: `string`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

• **delegate**: `Partial`<[`DeCafCoreDelegate`](reference/classes/DeCafCoreDelegate.md)>

#### Returns

`void`

***

### start()

> **start**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### stop()

> **stop**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
