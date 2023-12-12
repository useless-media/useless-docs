# DeCaf

## Constructors

### new DeCaf(args)

> **new DeCaf**(`args`): [`DeCaf`](reference/classes/DeCaf.md)

#### Parameters

• **args**: [`DeCafArgs`](reference/interfaces/DeCafArgs.md)

#### Returns

[`DeCaf`](reference/classes/DeCaf.md)

## Methods

### registerNamespace()

> **registerNamespace**(`namespace`): `void`

#### Parameters

• **namespace**: `string`

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`namespace`, `message`, `senderId`?): `void`

#### Parameters

• **namespace**: `string`

• **message**: `Record`<`string`, `any`>

• **senderId?**: `string`

#### Returns

`void`

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
