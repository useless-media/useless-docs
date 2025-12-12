# UselessConnectionSender<TEventList, TConnectionEventList, TConnectionArgs, TConnection>

## Extends

- [`UselessSender`](reference/classes/UselessSender.md)<`TEventList`>

## Extended by

- [`UselessWebSocketSender`](reference/classes/UselessWebSocketSender.md)

## Type Parameters

### TEventList

`TEventList` *extends* [`UselessConnectionSenderEventList`](reference/interfaces/UselessConnectionSenderEventList.md) = [`UselessConnectionSenderEventList`](../interfaces/UselessConnectionSenderEventList.md)

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md) = [`UselessMessagingConnectionEventList`](../interfaces/UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](../interfaces/UselessMessagingConnectionArgs.md)

### TConnection

`TConnection` *extends* [`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`> = [`UselessMessagingNoOpConnection`](UselessMessagingNoOpConnection.md)<`TConnectionEventList`, `TConnectionArgs`>

## Constructors

### Constructor

> **new UselessConnectionSender**<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>(`args?`, `emitterArgs?`): `UselessConnectionSender`<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>

#### Parameters

##### args?

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md)<`TConnectionEventList`, `TConnectionArgs`, `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`UselessConnectionSender`<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>

#### Overrides

[`UselessSender`](reference/classes/UselessSender.md).[`constructor`](UselessSender.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

#### Overrides

[`UselessSender`](reference/classes/UselessSender.md).[`configuration`](UselessSender.md#configuration)

***

### connection?

> `protected` **connection**?: `TConnection`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`destroyed`](UselessSender.md#destroyed)

***

### isConnected

> **isConnected**: `boolean` = `false`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`isConnected`](UselessSender.md#isconnected)

***

### isIdentified

> **isIdentified**: `boolean` = `false`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`isIdentified`](UselessSender.md#isidentified)

***

### senderInformation

> `protected` **senderInformation**: `Optional`<[`SenderInformation`](reference/interfaces/SenderInformation.md), `"id"`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`senderInformation`](UselessSender.md#senderinformation)

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` | `undefined`

##### Returns

`string` | `undefined`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`id`](UselessSender.md#id)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`addEventListener`](UselessSender.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`configure`](UselessSender.md#configure)

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md)<`TConnectionEventList`, `TConnectionArgs`, `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`connected`](UselessSender.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`destroy`](UselessSender.md#destroy)

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`emit`](UselessSender.md#emit)

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`emitAsync`](UselessSender.md#emitasync)

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

[`UselessSender`](reference/classes/UselessSender.md).[`ensureNotDestroyed`](UselessSender.md#ensurenotdestroyed)

***

### handleConnected()

> **handleConnected**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IMessagingSendMessage`](reference/interfaces/IMessagingSendMessage.md)<[`UselessMessage`](UselessMessage.md)>

##### sendAnyMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](UselessMessage.md)>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`handleConnected`](UselessSender.md#handleconnected)

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`handleDisconnected`](UselessSender.md#handledisconnected)

***

### identified()

> **identified**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`identified`](UselessSender.md#identified)

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`off`](UselessSender.md#off)

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`on`](UselessSender.md#on)

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`once`](UselessSender.md#once)

***

### receiveMessage()

> **receiveMessage**<`K`>(`message`): `Promise`<`void`>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

##### message

[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)[`K`]

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`receiveMessage`](UselessSender.md#receivemessage)

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`removeEventListener`](UselessSender.md#removeeventlistener)

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`sendAnyMessage`](UselessSender.md#sendanymessage)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`sendMessage`](UselessSender.md#sendmessage)

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

`TConnection`

#### Returns

`void`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`setDebug`](UselessSender.md#setdebug)

***

### setSenderInformation()

> **setSenderInformation**(`senderInformation`): `void`

#### Parameters

##### senderInformation

[`SenderInformation`](reference/interfaces/SenderInformation.md)

#### Returns

`void`

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`setSenderInformation`](UselessSender.md#setsenderinformation)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IMessagingSendMessage`](reference/interfaces/IMessagingSendMessage.md)<[`UselessMessage`](UselessMessage.md)>

##### sendAnyMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](UselessMessage.md)>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessSender`](reference/classes/UselessSender.md).[`setSendMessage`](UselessSender.md#setsendmessage)
