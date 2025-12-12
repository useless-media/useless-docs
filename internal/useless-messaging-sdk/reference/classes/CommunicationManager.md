# CommunicationManager

## Constructors

### Constructor

> **new CommunicationManager**(`args`): `CommunicationManager`

#### Parameters

##### args

[`CommunicationManagerArgs`](reference/interfaces/CommunicationManagerArgs.md)

#### Returns

`CommunicationManager`

## Properties

### isConnected

> **isConnected**: `boolean` = `false`

## Methods

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

[`CommunicationManagerConfiguration`](reference/classes/CommunicationManagerConfiguration.md)

#### Returns

`void`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getCommunicationChannel()

#### Call Signature

> **getCommunicationChannel**(`type`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

##### Parameters

###### type

[`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

##### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

#### Call Signature

> **getCommunicationChannel**(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

##### Parameters

###### namespace

`string`

##### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

***

### getCommunicationChannels()

> **getCommunicationChannels**(): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`>[]

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`>[]

***

### getCustomCommunicationChannel()

> **getCustomCommunicationChannel**(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

#### Parameters

##### namespace

`string`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

***

### getDefaultCommunicationChannel()

> **getDefaultCommunicationChannel**(): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

***

### getReservedCommunicationChannel()

> **getReservedCommunicationChannel**(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

#### Parameters

##### namespace

`string`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### receiveMessage()

> **receiveMessage**(`message`, `namespace?`): `void`

#### Parameters

##### message

`AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)

##### namespace?

`string`

#### Returns

`void`

***

### registerCommunicationChannel()

> **registerCommunicationChannel**<`T`>(`namespace`, `communicationChannel`): `void`

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### namespace

`string`

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

#### Returns

`void`

***

### registerCommunicationChannelRegisteredHandler()

> **registerCommunicationChannelRegisteredHandler**<`T`>(`ownerId`, `handler`): `void`

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### ownerId

`string`

##### handler

(`communicationChannel`) => `void`

#### Returns

`void`

***

### registerMessageInterceptor()

> **registerMessageInterceptor**<`T`>(`messageInterceptor`, `namespace?`): `void`

#### Type Parameters

##### T

`T` *extends* `EmitterEventList` = `EmitterEventList`

#### Parameters

##### messageInterceptor

`MessageInterceptor`<`T`>

##### namespace?

`string`

#### Returns

`void`

***

### registerNamespace()

> **registerNamespace**<`T`>(`namespace`, `type`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### namespace

`string`

##### type

[`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md) = `CommunicationChannelTypes.Custom`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

***

### unregisterCommunicationChannelRegisteredHandler()

> **unregisterCommunicationChannelRegisteredHandler**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`
