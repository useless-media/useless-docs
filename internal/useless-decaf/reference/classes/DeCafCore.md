# DeCafCore

## Constructors

### Constructor

> **new DeCafCore**(`args?`): `DeCafCore`

#### Parameters

##### args?

`DeCafCoreArgs`

#### Returns

`DeCafCore`

## Accessors

### hasFirmwareChannel

#### Get Signature

> **get** **hasFirmwareChannel**(): `boolean`

##### Returns

`boolean`

***

### mediaStatus

#### Get Signature

> **get** **mediaStatus**(): [`MediaStatus`](reference/interfaces/MediaStatus.md)

##### Returns

[`MediaStatus`](reference/interfaces/MediaStatus.md)

## Methods

### ensureValidLicense()

> **ensureValidLicense**(`component`): `void`

#### Parameters

##### component

`string`

#### Returns

`void`

***

### getMediaStatusState()

> **getMediaStatusState**(): `IMediaStatusState`

#### Returns

`IMediaStatusState`

***

### getRemainingLicenseValidity()

> **getRemainingLicenseValidity**(`key?`): `number`

#### Parameters

##### key?

`string`

#### Returns

`number`

***

### handleLoaded()

> **handleLoaded**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

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

### setLicenseKey()

> **setLicenseKey**(`key`): `void`

#### Parameters

##### key

`string`

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

***

### validateLicenseKey()

> **validateLicenseKey**(`key`, `component?`): `boolean`

#### Parameters

##### key

`string`

##### component?

`string`

#### Returns

`boolean`
