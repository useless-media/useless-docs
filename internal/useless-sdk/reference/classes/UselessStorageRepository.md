# UselessStorageRepository<TItem, TPartialItem>

## Extended by

- [`InMemoryStorageRepository`](reference/classes/InMemoryStorageRepository.md)
- [`LocalStorageRepository`](reference/classes/LocalStorageRepository.md)
- [`SessionStorageRepository`](reference/classes/SessionStorageRepository.md)

## Type Parameters

### TItem

`TItem` *extends* [`OptionallyNamedIdentifiableItem`](reference/interfaces/OptionallyNamedIdentifiableItem.md)

### TPartialItem

`TPartialItem` *extends* `Partial`<`TItem`> = `Partial`<`TItem`>

## Constructors

### Constructor

> **new UselessStorageRepository**<`TItem`, `TPartialItem`>(`name`, `createUselessStorage`, `isItemGuard`, `namespace`): `UselessStorageRepository`<`TItem`, `TPartialItem`>

#### Parameters

##### name

`string`

##### createUselessStorage

(`namespace`) => [`UselessStorage`](reference/interfaces/UselessStorage.md)

##### isItemGuard

[`IIsItem`](reference/interfaces/IIsItem.md) = `isItem`

##### namespace

`string` = `'Useless.Repositories'`

#### Returns

`UselessStorageRepository`<`TItem`, `TPartialItem`>

## Properties

### index

> `protected` **index**: [`RepositoryIndex`](reference/interfaces/RepositoryIndex.md)

***

### isItem

> `protected` `readonly` **isItem**: [`IIsItem`](reference/interfaces/IIsItem.md)

***

### items

> `protected` **items**: `Record`<`string`, `TItem`>

***

### name

> `protected` `readonly` **name**: `string`

***

### storage

> `protected` `readonly` **storage**: [`UselessStorage`](reference/interfaces/UselessStorage.md)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### deleteItem()

> **deleteItem**(`item`): `void`

#### Parameters

##### item

`TItem`

#### Returns

`void`

***

### deleteItemById()

> **deleteItemById**(`id`): `void`

#### Parameters

##### id

`string` | `number`

#### Returns

`void`

***

### deleteItemByPredicate()

> **deleteItemByPredicate**(`predicate`): `void`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`void`

***

### export()

> **export**(`itemId?`): `TItem` | [`RepositoryDataStorage`](reference/interfaces/RepositoryDataStorage.md)<`TItem`>

#### Parameters

##### itemId?

`string`

#### Returns

`TItem` | [`RepositoryDataStorage`](reference/interfaces/RepositoryDataStorage.md)<`TItem`>

***

### getActive()

> **getActive**(): `TItem` | `undefined`

#### Returns

`TItem` | `undefined`

***

### getItem()

> **getItem**(`idOrPredicate`): `TItem` | `undefined`

#### Parameters

##### idOrPredicate

`string` | `number` | (`value`) => `boolean`

#### Returns

`TItem` | `undefined`

***

### getItemById()

> **getItemById**(`id`): `TItem` | `undefined`

#### Parameters

##### id

`string` | `number`

#### Returns

`TItem` | `undefined`

***

### getItemByName()

> **getItemByName**(`name`): `TItem` | `undefined`

#### Parameters

##### name

`string`

#### Returns

`TItem` | `undefined`

***

### getItemByPredicate()

> **getItemByPredicate**(`predicate`): `TItem` | `undefined`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`TItem` | `undefined`

***

### getItemIds()

> **getItemIds**(): (`string` | `number`)[]

#### Returns

(`string` | `number`)[]

***

### getItems()

> **getItems**(): `TItem`[]

#### Returns

`TItem`[]

***

### getItemsByPredicate()

> **getItemsByPredicate**(`predicate`): `TItem`[]

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`TItem`[]

***

### getSortedItems()

> **getSortedItems**(`descending`): `TItem`[]

#### Parameters

##### descending

`boolean` = `false`

#### Returns

`TItem`[]

***

### hasItem()

> **hasItem**(`predicate`): `boolean`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`boolean`

***

### hasItems()

> **hasItems**(): `boolean`

#### Returns

`boolean`

***

### hasItemWithName()

> **hasItemWithName**(`name`): `boolean`

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### import()

> **import**(`itemDataStorageOrItem`, `regenerateIds`): `void`

#### Parameters

##### itemDataStorageOrItem

`TItem` | [`RepositoryDataStorage`](reference/interfaces/RepositoryDataStorage.md)<`TItem`>

##### regenerateIds

`boolean` = `true`

#### Returns

`void`

***

### setActive()

> **setActive**(`item?`): `void`

#### Parameters

##### item?

`TItem`

#### Returns

`void`

***

### setActiveById()

> **setActiveById**(`id`): `void`

#### Parameters

##### id

`string` | `number`

#### Returns

`void`

***

### store()

> `protected` **store**(): `void`

#### Returns

`void`

***

### storeIndexInStorage()

> `protected` **storeIndexInStorage**(): `void`

#### Returns

`void`

***

### storeItem()

> **storeItem**(`partialItem`, `setActive`): `TItem`

#### Parameters

##### partialItem

`TPartialItem`

##### setActive

`boolean` = `true`

#### Returns

`TItem`

***

### storeItems()

> **storeItems**(`partialItems`): `void`

#### Parameters

##### partialItems

`TPartialItem`[]

#### Returns

`void`

***

### storeItemsInStorage()

> `protected` **storeItemsInStorage**(): `void`

#### Returns

`void`
