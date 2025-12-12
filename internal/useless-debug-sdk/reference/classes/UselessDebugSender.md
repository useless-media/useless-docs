# UselessDebugSender

## Extends

- `UselessConnectionSender`<`UselessConnectionSenderEventList`, [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](../interfaces/UselessDebugSenderConnectionEventList.md)>>

## Constructors

### Constructor

> **new UselessDebugSender**(`args?`): `UselessDebugSender`

#### Parameters

##### args?

`UselessConnectionSenderArgs`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](../interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessage`>>

#### Returns

`UselessDebugSender`

#### Overrides

`UselessConnectionSender<UselessConnectionSenderEventList, UselessDebugSenderConnectionEventList, UselessMessagingConnectionArgs, UselessMessagingConnection<UselessDebugSenderConnectionEventList>>.constructor`

## Properties

### configuration

> `protected` **configuration**: `Required`<`UselessSenderConfiguration`>

#### Inherited from

`UselessConnectionSender.configuration`

***

### connection?

> `protected` **connection**?: `UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessage`>

#### Inherited from

`UselessConnectionSender.connection`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessDebugController`](reference/classes/UselessDebugController.md).[`destroyed`](UselessDebugController.md#destroyed)

***

### isConnected

> **isConnected**: `boolean`

#### Inherited from

`UselessConnectionSender.isConnected`

***

### isIdentified

> **isIdentified**: `boolean`

#### Inherited from

`UselessConnectionSender.isIdentified`

***

### senderInformation

> `protected` **senderInformation**: `Optional`<`SenderInformation`, `"id"`>

#### Inherited from

`UselessConnectionSender.senderInformation`

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` | `undefined`

##### Returns

`string` | `undefined`

#### Inherited from

`UselessConnectionSender.id`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.addEventListener`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<`UselessSenderConfiguration`>

#### Returns

`this`

#### Inherited from

`UselessConnectionSender.configure`

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

`UselessConnectionSenderArgs`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](../interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessage`>>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

#### Inherited from

`UselessConnectionSender.connect`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.connected`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`UselessConnectionSender.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`UselessConnectionSenderEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`UselessConnectionSenderEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.emitAsync`

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

##### subscriber

`TSubscriber`

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Inherited from

`UselessConnectionSender.ensureNotDestroyed`

***

### handleConnected()

> **handleConnected**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

##### sendAnyMessage?

`IAnyMessageMessagingSendMessage`<`string` | `UselessMessage` | `AnyMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.handleConnected`

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.handleDisconnected`

***

### identified()

> **identified**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.identified`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.once`

***

### receiveMessage()

> **receiveMessage**<`K`>(`message`): `Promise`<`void`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessSenderEventList`

#### Parameters

##### message

`UselessSenderEventList`[`K`]

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.receiveMessage`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`UselessConnectionSenderEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessConnectionSenderEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`UselessConnectionSenderEventList`>

#### Inherited from

`UselessConnectionSender.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.sendAnyMessage`

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.sendMessage`

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

`UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessage`>

#### Returns

`void`

#### Inherited from

`UselessConnectionSender.setConnection`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`UselessConnectionSender.setDebug`

***

### setSenderInformation()

> **setSenderInformation**(`senderInformation`): `void`

#### Parameters

##### senderInformation

`SenderInformation`

#### Returns

`void`

#### Inherited from

`UselessConnectionSender.setSenderInformation`

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

##### sendAnyMessage?

`IAnyMessageMessagingSendMessage`<`string` | `UselessMessage` | `AnyMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessConnectionSender.setSendMessage`
