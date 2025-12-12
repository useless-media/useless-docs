# UselessConsoleInterceptor

## Extends

- [`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md)

## Constructors

### Constructor

> **new UselessConsoleInterceptor**(`args?`): `UselessConsoleInterceptor`

#### Parameters

##### args?

[`UselessConsoleInterceptorArgs`](reference/interfaces/UselessConsoleInterceptorArgs.md)

#### Returns

`UselessConsoleInterceptor`

#### Overrides

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`constructor`](MessagingConsoleInterceptor.md#constructor)

## Properties

### configuration

> `protected` **configuration**: [`IUselessConsoleInterceptorConfiguration`](reference/interfaces/IUselessConsoleInterceptorConfiguration.md)

#### Overrides

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`configuration`](MessagingConsoleInterceptor.md#configuration)

***

### consoleInterceptor

> `protected` **consoleInterceptor**: `ConsoleInterceptor`

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`consoleInterceptor`](MessagingConsoleInterceptor.md#consoleinterceptor)

***

### exclude

> `protected` **exclude**: `string`[]

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`exclude`](MessagingConsoleInterceptor.md#exclude)

## Methods

### blockAll()

> **blockAll**(): `this`

#### Returns

`this`

***

### canHandleMessage()

> **canHandleMessage**(`message`): `boolean`

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`boolean`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`IUselessConsoleInterceptorConfiguration`](reference/interfaces/IUselessConsoleInterceptorConfiguration.md)>

#### Returns

`this`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`destroy`](MessagingConsoleInterceptor.md#destroy)

***

### handleConfigureConsoleInterceptorMessage()

> **handleConfigureConsoleInterceptorMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`ConfigureConsoleInterceptorMessage`](reference/classes/ConfigureConsoleInterceptorMessage.md)

#### Returns

`Promise`<`void`>

***

### intercept()

> **intercept**(): `this`

#### Returns

`this`

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`intercept`](MessagingConsoleInterceptor.md#intercept)

***

### receiveMessage()

> **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`Promise`<`void`>

#### Overrides

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`receiveMessage`](MessagingConsoleInterceptor.md#receivemessage)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`reset`](MessagingConsoleInterceptor.md#reset)

***

### restore()

> **restore**(): `void`

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`ConsoleInterceptorMessage`](reference/classes/ConsoleInterceptorMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`sendMessage`](MessagingConsoleInterceptor.md#sendmessage)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<[`ConsoleInterceptorMessage`](reference/classes/ConsoleInterceptorMessage.md)>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingConsoleInterceptor`](reference/classes/MessagingConsoleInterceptor.md).[`setSendMessage`](MessagingConsoleInterceptor.md#setsendmessage)
