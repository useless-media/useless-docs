# UselessDebugControllerConnection

## Extends

- `UselessControllerWebSocketConnection`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

## Constructors

### Constructor

> **new UselessDebugControllerConnection**(`args`): `UselessDebugControllerConnection`

#### Parameters

##### args

`UselessWebSocketMessagingConnectionArgs`

#### Returns

`UselessDebugControllerConnection`

#### Overrides

`UselessControllerWebSocketConnection<UselessDebugControllerConnectionEventList>.constructor`

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessDebugController`](reference/classes/UselessDebugController.md).[`destroyed`](UselessDebugController.md#destroyed)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`UselessControllerWebSocketConnection.isConnected`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.addEventListener`

***

### configureConsoleInterceptor()

> **configureConsoleInterceptor**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessControllerWebSocketConnection.connected`

***

### describe()

> **describe**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`UselessControllerWebSocketConnection.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.emitAsync`

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

`UselessControllerWebSocketConnection.ensureNotDestroyed`

***

### eval()

> **eval**(`code`, `context?`): `Promise`<`void`>

#### Parameters

##### code

`string`

##### context?

`string`

#### Returns

`Promise`<`void`>

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md)>

#### Inherited from

`UselessControllerWebSocketConnection.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessControllerWebSocketConnection.sendAnyMessage`

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessControllerWebSocketConnection.sendMessage`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`UselessControllerWebSocketConnection.setDebug`
