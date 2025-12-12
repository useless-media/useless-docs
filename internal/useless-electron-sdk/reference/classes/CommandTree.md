# CommandTree

## Constructors

### Constructor

> **new CommandTree**(`delegate`): `CommandTree`

#### Parameters

##### delegate

[`CommandTreeDelegate`](reference/interfaces/CommandTreeDelegate.md)

#### Returns

`CommandTree`

## Methods

### execute()

> **execute**(`command`): `Promise`<`void`>

#### Parameters

##### command

`string`

#### Returns

`Promise`<`void`>

***

### extractArgsFromCommand()

> **extractArgsFromCommand**(`command`, `descriptor`): `Promise`<`any`[]>

#### Parameters

##### command

`string`

##### descriptor

`DescribedCompletion`

#### Returns

`Promise`<`any`[]>

***

### fetchObjectDescriptors()

> **fetchObjectDescriptors**(`path`, `context`): `Promise`<`Record`<`string`, `any`>>

#### Parameters

##### path

`string`

##### context

`string` = `'client'`

#### Returns

`Promise`<`Record`<`string`, `any`>>

***

### getCurrentHints()

> **getCurrentHints**(`commandString`): `Promise`<`Completion`[]>

#### Parameters

##### commandString

`string`

#### Returns

`Promise`<`Completion`[]>

***

### registerCompletions()

> **registerCompletions**(`object`): `void`

#### Parameters

##### object

`DescribedObject`

#### Returns

`void`

***

### registerInternalCompletions()

> **registerInternalCompletions**(`commandTree`): `void`

#### Parameters

##### commandTree

`Record`<`string`, `any`>

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### storeResetPoint()

> **storeResetPoint**(): `void`

#### Returns

`void`
