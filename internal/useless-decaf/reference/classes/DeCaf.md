# DeCaf

## Constructors

### Constructor

> **new DeCaf**(`args`): `DeCaf`

#### Parameters

##### args

[`DeCafArgs`](reference/interfaces/DeCafArgs.md)

#### Returns

`DeCaf`

## Properties

### configuration

> **configuration**: [`IDeCafConfiguration`](reference/interfaces/IDeCafConfiguration.md)

***

### container

> `readonly` **container**: `HTMLDivElement`

***

### deviceInfo

> **deviceInfo**: [`DeCafDeviceInfo`](reference/interfaces/DeCafDeviceInfo.md)

***

### errorManager

> `readonly` **errorManager**: `ErrorManager`

***

### errorView

> `readonly` **errorView**: [`ErrorView`](reference/classes/ErrorView.md)

***

### i18n

> `readonly` **i18n**: `I18n`

***

### loadManager

> `readonly` **loadManager**: [`LoadManager`](reference/classes/LoadManager.md)

***

### playbackSession?

> **playbackSession**?: [`PlaybackSession`](reference/classes/PlaybackSession.md)

## Accessors

### client

#### Get Signature

> **get** **client**(): [`DeCafClient`](reference/classes/DeCafClient.md) | `undefined`

##### Returns

[`DeCafClient`](reference/classes/DeCafClient.md) | `undefined`

***

### environment

#### Get Signature

> **get** **environment**(): [`Environments`](reference/enumerations/Environments.md)

##### Returns

[`Environments`](reference/enumerations/Environments.md)

## Methods

### ensureValidLicense()

> **ensureValidLicense**(`component`): `void`

#### Parameters

##### component

`string`

#### Returns

`void`

***

### getCommunicationChannel()

> **getCommunicationChannel**(`namespace`): `ICommunicationChannel`<`EmitterEventList`> | `undefined`

#### Parameters

##### namespace

`string`

#### Returns

`ICommunicationChannel`<`EmitterEventList`> | `undefined`

***

### getMediaStatusState()

> **getMediaStatusState**(): [`IMediaStatusState`](reference/interfaces/IMediaStatusState.md)

#### Returns

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md)

***

### getRemainingLicenseValidity()

> **getRemainingLicenseValidity**(`key?`): `number`

#### Parameters

##### key?

`string`

#### Returns

`number`

***

### getSender()

> **getSender**<`T`>(`id?`): `UselessControllerSender`<`T`> | `undefined`

#### Type Parameters

##### T

`T` *extends* `EmitterEventList` = `EmitterEventList`

#### Parameters

##### id?

`string`

#### Returns

`UselessControllerSender`<`T`> | `undefined`

***

### getSenders()

> **getSenders**<`T`>(): `UselessControllerSender`<`T`>[]

#### Type Parameters

##### T

`T` *extends* `EmitterEventList` = `EmitterEventList`

#### Returns

`UselessControllerSender`<`T`>[]

***

### handleLoaded()

> **handleLoaded**(): `void`

#### Returns

`void`

***

### handleStopped()

> **handleStopped**(): `void`

#### Returns

`void`

***

### load()

> **load**(`load`): `void`

#### Parameters

##### load

`Load`

#### Returns

`void`

***

### loadNext()

> **loadNext**(): `void`

#### Returns

`void`

***

### registerDebugContext()

> **registerDebugContext**(`name`, `context`): `void`

#### Parameters

##### name

`string`

##### context

`Record`<`string`, `any`>

#### Returns

`void`

***

### registerNamespace()

> **registerNamespace**<`T`>(`namespace`): `ICommunicationChannel`<`T`>

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### namespace

`string`

#### Returns

`ICommunicationChannel`<`T`>

***

### reset()

> **reset**(`resetClient`): `Promise`<`void`>

#### Parameters

##### resetClient

`boolean` = `false`

#### Returns

`Promise`<`void`>

***

### sendDebugMessage()

> **sendDebugMessage**(`message`, `receiverId?`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

***

### sendMessage()

> **sendMessage**(`message`, `namespace?`, `receiverId?`): `Promise`<`void`>

#### Parameters

##### message

`Record`<`string`, `any`>

##### namespace?

`string`

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

***

### setDeviceMuted()

> **setDeviceMuted**(`muted`): `void`

#### Parameters

##### muted

`boolean`

#### Returns

`void`

***

### setDeviceVolume()

> **setDeviceVolume**(`volume`): `void`

#### Parameters

##### volume

`number`

#### Returns

`void`

***

### setErrorHandler()

> **setErrorHandler**(`delegate`): `void`

#### Parameters

##### delegate

`WithRequired`<`ErrorManagerDelegate`, `"handleError"`>

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

### shutdown()

> **shutdown**(`reason?`): `Promise`<`void`>

#### Parameters

##### reason?

`ShutdownReasons`

#### Returns

`Promise`<`void`>

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
