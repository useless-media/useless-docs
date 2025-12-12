# SenderManager

## Extends

- `Listener`

## Constructors

### Constructor

> **new SenderManager**(`args`): `SenderManager`

#### Parameters

##### args

[`SenderManagerArgs`](reference/interfaces/SenderManagerArgs.md)

#### Returns

`SenderManager`

#### Overrides

`Listener.constructor`

## Properties

### defaultListenerCollection?

> `protected` **defaultListenerCollection**?: `Record`<`string`, `TListener`>

#### Inherited from

`Listener.defaultListenerCollection`

***

### defaultTarget?

> `protected` **defaultTarget**?: `TTargetEmitter`

#### Inherited from

`Listener.defaultTarget`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Listener.destroyed`

***

### senders

> **senders**: [`IControllerSender`](reference/interfaces/IControllerSender.md)[] = `[]`

## Methods

### broadcastAnyMessage()

> **broadcastAnyMessage**(`message`, `namespace`): `Promise`<`void`>

#### Parameters

##### message

`AnyMessage`

##### namespace

`string`

#### Returns

`Promise`<`void`>

***

### broadcastMessage()

> **broadcastMessage**(`message`, `namespace`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

##### namespace

`string`

#### Returns

`Promise`<`void`>

***

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

`Partial`<[`SenderManagerConfiguration`](reference/classes/SenderManagerConfiguration.md)>

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`Listener.destroy`

***

### getSender()

> **getSender**(`id?`): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

#### Parameters

##### id?

`string`

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

***

### getSenders()

> **getSenders**(): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

***

### hasActiveSenders()

> **hasActiveSenders**(): `boolean`

#### Returns

`boolean`

***

### hasSenders()

> **hasSenders**(): `boolean`

#### Returns

`boolean`

***

### isIdentified()

> **isIdentified**(`id`): `boolean`

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### listen()

> `protected` **listen**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`Listener.listen`

***

### listenOnce()

> `protected` **listenOnce**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`Listener.listenOnce`

***

### registerCommunicationModel()

> **registerCommunicationModel**(`type`, `name`, `version`, `factory`, `isDefault`): `void`

#### Parameters

##### type

[`CommunicationModelTypes`](reference/enumerations/CommunicationModelTypes.md)

##### name

`string`

##### version

`string`

##### factory

`CommunicationModelFactory`

##### isDefault

`boolean` = `false`

#### Returns

`void`

***

### registerDefaultSenderCommunicationChannel()

> **registerDefaultSenderCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`any`>

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### senderConnected()

> **senderConnected**(`senderId`, `userAgent`): `Promise`<`void`>

#### Parameters

##### senderId

`string`

##### userAgent

`string`

#### Returns

`Promise`<`void`>

***

### senderDisconnected()

> **senderDisconnected**(`senderId`, `reason?`): `Promise`<`void`>

#### Parameters

##### senderId

`string`

##### reason?

`string`

#### Returns

`Promise`<`void`>

***

### setDefaultSenderCommunicationModelInformation()

> **setDefaultSenderCommunicationModelInformation**(`senderClientInformation`): `void`

#### Parameters

##### senderClientInformation

[`SenderCommunicationModelInformation`](reference/interfaces/SenderCommunicationModelInformation.md)

#### Returns

`void`

***

### trackSenderInteraction()

> **trackSenderInteraction**(`senderId?`): `void`

#### Parameters

##### senderId?

`string`

#### Returns

`void`

***

### unlisten()

> `protected` **unlisten**(`target?`, `listenerCollection?`, `event?`): `void`

#### Parameters

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

##### event?

`string`

#### Returns

`void`

#### Inherited from

`Listener.unlisten`
