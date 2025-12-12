# CommandNameSpace

## Constructors

### Constructor

> **new CommandNameSpace**(`nameSpace`): `CommandNameSpace`

#### Parameters

##### nameSpace

`string`

#### Returns

`CommandNameSpace`

## Properties

### nameSpace

> `readonly` **nameSpace**: `string`

## Methods

### getCommandTree()

> **getCommandTree**(): `Record`<`string`, `Record`<`string`, `DescribedCompletion`>>

#### Returns

`Record`<`string`, `Record`<`string`, `DescribedCompletion`>>

***

### registerMethod()

> `protected` **registerMethod**(`name`, `description`, `args`, `fn`): `void`

#### Parameters

##### name

`string`

##### description

`string`

##### args

`Record`<`string`, `ParamTypes`>

##### fn

(...`args`) => `void`

#### Returns

`void`
