# MethodExtension<TComponent, K, R>

## Type Parameters

### TComponent

`TComponent`

### K

`K`

### R

`R` = `any`

## Constructors

### Constructor

> **new MethodExtension**<`TComponent`, `K`, `R`>(`methodName`, `action`): `MethodExtension`<`TComponent`, `K`, `R`>

#### Parameters

##### methodName

`string`

##### action

(`args`) => `Promise`<`R`>

#### Returns

`MethodExtension`<`TComponent`, `K`, `R`>

## Properties

### action()

> `protected` `readonly` **action**: (`args`) => `Promise`<`R`>

#### Parameters

##### args

`K`

#### Returns

`Promise`<`R`>

***

### methodName

> `readonly` **methodName**: `string`

## Methods

### execute()

> **execute**(`data`): `Promise`<`R`>

#### Parameters

##### data

`K`

#### Returns

`Promise`<`R`>

***

### registerMethodExtensionHandler()

> **registerMethodExtensionHandler**(`func`): `void`

#### Parameters

##### func

(`args`) => `Promise`<`K`>

#### Returns

`void`
