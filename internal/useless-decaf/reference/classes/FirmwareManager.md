# FirmwareManager

## Constructors

### Constructor

> **new FirmwareManager**(`args`): `FirmwareManager`

#### Parameters

##### args

[`FirmwareManagerArgs`](reference/interfaces/FirmwareManagerArgs.md)

#### Returns

`FirmwareManager`

## Properties

### hasDebugConnection

> **hasDebugConnection**: `boolean` = `false`

***

### isEmulator

> **isEmulator**: `boolean`

## Accessors

### hasFirmwareChannel

#### Get Signature

> **get** **hasFirmwareChannel**(): `boolean`

##### Returns

`boolean`

## Methods

### registerNamespace()

> **registerNamespace**(`namespace`, `handler?`): `void`

#### Parameters

##### namespace

`string`

##### handler?

[`TCustomMessageHandler`](reference/type-aliases/TCustomMessageHandler.md)

#### Returns

`void`

***

### send()

> **send**(`firmwareMessage`): `void`

#### Parameters

##### firmwareMessage

[`FirmwareMessageOutBound`](reference/classes/FirmwareMessageOutBound.md)

#### Returns

`void`

***

### setCustomMessageHandler()

> **setCustomMessageHandler**(`handler`): `void`

#### Parameters

##### handler

[`TCustomMessageHandler`](reference/type-aliases/TCustomMessageHandler.md)

#### Returns

`void`

***

### setGoogleMessageHandler()

> **setGoogleMessageHandler**(`handler`): `void`

#### Parameters

##### handler

`TFirmwareMessageHandler`

#### Returns

`void`

***

### start()

> **start**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
