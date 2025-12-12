# UselessSender<T, TSenderInformation>

## Extends

- `Emitter`<`T`>

## Extended by

- [`UselessConnectionSender`](reference/classes/UselessConnectionSender.md)

## Type Parameters

### T

`T` *extends* [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md) = [`UselessSenderEventList`](../interfaces/UselessSenderEventList.md)

### TSenderInformation

`TSenderInformation` *extends* [`SenderInformation`](reference/interfaces/SenderInformation.md) = [`SenderInformation`](../interfaces/SenderInformation.md)

## Constructors

### Constructor

> **new UselessSender**<`T`, `TSenderInformation`>(`args?`, `emitterArgs?`): `UselessSender`<`T`, `TSenderInformation`>

#### Parameters

##### args?

[`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md)<[`SenderInformation`](../interfaces/SenderInformation.md)>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`UselessSender`<`T`, `TSenderInformation`>

#### Overrides

`Emitter<T>.constructor`

## Properties

### configuration

> `protected` **configuration**: `Required`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Emitter.destroyed`

***

### isConnected

> **isConnected**: `boolean` = `false`

***

### isIdentified

> **isIdentified**: `boolean` = `false`

***

### senderInformation

> `protected` **senderInformation**: `Optional`<`TSenderInformation`, `"id"`>

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` | `undefined`

##### Returns

`string` | `undefined`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.addEventListener`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

#### Returns

`this`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`Emitter.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.emitAsync`

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

`Emitter.ensureNotDestroyed`

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

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### identified()

> **identified**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.once`

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

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

#### Returns

`Promise`<`void`>

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`Emitter.setDebug`

***

### setSenderInformation()

> **setSenderInformation**(`senderInformation`): `void`

#### Parameters

##### senderInformation

`TSenderInformation`

#### Returns

`void`

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
