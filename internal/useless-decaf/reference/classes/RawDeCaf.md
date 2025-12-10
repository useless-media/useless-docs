# RawDeCaf

## Constructors

### Constructor

> **new RawDeCaf**(`args`): `RawDeCaf`

#### Parameters

##### args

[`RawDeCafArgs`](reference/interfaces/RawDeCafArgs.md)

#### Returns

`RawDeCaf`

## Properties

### core

> `protected` `readonly` **core**: [`DeCafCore`](reference/classes/DeCafCore.md)

## Accessors

### mediaStatus

#### Get Signature

> **get** **mediaStatus**(): [`MediaStatus`](reference/interfaces/MediaStatus.md)

##### Returns

[`MediaStatus`](reference/interfaces/MediaStatus.md)

## Methods

### getMediaStatusState()

> **getMediaStatusState**(): `IMediaStatusState`

#### Returns

`IMediaStatusState`

***

### registerNamespace()

> **registerNamespace**(`namespace`, `handler`): `void`

#### Parameters

##### namespace

`string`

##### handler

`TCustomMessageHandler`

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`namespace`, `message`, `senderId?`): `void`

#### Parameters

##### namespace

`string`

##### message

`Record`<`string`, `any`>

##### senderId?

`string`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`Partial`<`DeCafCoreDelegate`>

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
