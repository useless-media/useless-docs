# MessagingConsoleInterceptor

## Extended by

- [`UselessConsoleInterceptor`](reference/classes/UselessConsoleInterceptor.md)

## Constructors

### Constructor

> `protected` **new MessagingConsoleInterceptor**(`args?`): `MessagingConsoleInterceptor`

#### Parameters

##### args?

[`MessagingConsoleInterceptorArgs`](reference/interfaces/MessagingConsoleInterceptorArgs.md)

#### Returns

`MessagingConsoleInterceptor`

## Properties

### configuration

> `protected` **configuration**: `Required`<[`MessagingConsoleInterceptorConfiguration`](reference/interfaces/MessagingConsoleInterceptorConfiguration.md)>

***

### consoleInterceptor

> `protected` **consoleInterceptor**: `ConsoleInterceptor`

***

### exclude

> `protected` **exclude**: `string`[]

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### intercept()

> **intercept**(): `this`

#### Returns

`this`

***

### receiveMessage()

> `abstract` **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

***

### reset()

> **reset**(): `void`

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

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<[`ConsoleInterceptorMessage`](reference/classes/ConsoleInterceptorMessage.md)>

#### Returns

`Promise`<`void`>
