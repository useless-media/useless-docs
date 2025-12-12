# MessagingRemoteObjectDescriber

## Extends

- [`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md)

## Extended by

- [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

## Constructors

### Constructor

> `protected` **new MessagingRemoteObjectDescriber**(`args?`): `MessagingRemoteObjectDescriber`

#### Parameters

##### args?

[`MessagingRemoteObjectDescriberArgs`](reference/interfaces/MessagingRemoteObjectDescriberArgs.md)

#### Returns

`MessagingRemoteObjectDescriber`

#### Overrides

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`constructor`](RemoteObjectDescriber.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`MessagingRemoteObjectDescriberConfiguration`](reference/interfaces/MessagingRemoteObjectDescriberConfiguration.md)>

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`logger`](RemoteObjectDescriber.md#logger)

***

### objectDescriber

> `protected` `readonly` **objectDescriber**: `ObjectDescriber`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`objectDescriber`](RemoteObjectDescriber.md#objectdescriber)

***

### rootContext?

> `protected` `readonly` **rootContext**?: `ContextContainer`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`rootContext`](RemoteObjectDescriber.md#rootcontext)

## Methods

### describe()

> **describe**(`name`, `object`, `options?`, `context?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### name

`string`

##### object

`Record`<`string`, `any`>

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

##### context?

`string`

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`describe`](RemoteObjectDescriber.md#describe)

***

### describeAll()

> **describeAll**(`describeObjects`, `options?`): `Promise`<`DescribedObjectWithContextContainer`[] | `undefined`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObjectWithContextContainer`[] | `undefined`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`describeAll`](RemoteObjectDescriber.md#describeall)

***

### describeAllContexts()

> **describeAllContexts**(`options?`): `Promise`<`DescribedObject`[] | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject`[] | `undefined`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`describeAllContexts`](RemoteObjectDescriber.md#describeallcontexts)

***

### describeContext()

> **describeContext**(`name`, `options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### name

`string`

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`describeContext`](RemoteObjectDescriber.md#describecontext)

***

### describeRootContext()

> **describeRootContext**(`options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`describeRootContext`](RemoteObjectDescriber.md#describerootcontext)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`destroy`](RemoteObjectDescriber.md#destroy)

***

### getAllContexts()

> **getAllContexts**(): `Record`<`string`, `ContextContainer`>

#### Returns

`Record`<`string`, `ContextContainer`>

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`getAllContexts`](RemoteObjectDescriber.md#getallcontexts)

***

### getContext()

> **getContext**(`contextPath`): `ContextContainer` | `undefined`

#### Parameters

##### contextPath

`string`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`getContext`](RemoteObjectDescriber.md#getcontext)

***

### getEnsuredContext()

> **getEnsuredContext**(`contextPath?`, `rootContext?`): `ContextContainer`

#### Parameters

##### contextPath?

`string`

##### rootContext?

`Record`<`string`, `any`>

#### Returns

`ContextContainer`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`getEnsuredContext`](RemoteObjectDescriber.md#getensuredcontext)

***

### getExclude()

> **getExclude**(): `string`[]

#### Returns

`string`[]

***

### getRootContext()

> **getRootContext**(): `ContextContainer` | `undefined`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`getRootContext`](RemoteObjectDescriber.md#getrootcontext)

***

### handleDescribeMessage()

> **handleDescribeMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`DescribeMessage`](reference/classes/DescribeMessage.md)

#### Returns

`Promise`<`void`>

***

### hasContext()

> **hasContext**(`contextPath`): `boolean`

#### Parameters

##### contextPath

`string`

#### Returns

`boolean`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`hasContext`](RemoteObjectDescriber.md#hascontext)

***

### receive()

> **receive**(`describeObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

#### Overrides

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`receive`](RemoteObjectDescriber.md#receive)

***

### receiveMessage()

> `abstract` **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

***

### registerContext()

> **registerContext**(`name`, `context`, `describe`): `void`

#### Parameters

##### name

`string`

##### context

`Record`<`string`, `any`>

##### describe

`boolean` = `true`

#### Returns

`void`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`registerContext`](RemoteObjectDescriber.md#registercontext)

***

### registerResolvedContextsSubscriber()

> **registerResolvedContextsSubscriber**(`subscriber`): `void`

#### Parameters

##### subscriber

`ResolvedContextsSubscriber`

#### Returns

`void`

#### Inherited from

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`registerResolvedContextsSubscriber`](RemoteObjectDescriber.md#registerresolvedcontextssubscriber)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`reset`](RemoteObjectDescriber.md#reset)

***

### send()

> **send**(`describedObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describedObjects

`DescribedObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

#### Overrides

[`RemoteObjectDescriber`](reference/classes/RemoteObjectDescriber.md).[`send`](RemoteObjectDescriber.md#send)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

#### Returns

`Promise`<`void`>
