# InMemoryStorageRepository<TItem, TPartialItem>

## Extends

- [`UselessStorageRepository`](reference/classes/UselessStorageRepository.md)<`TItem`, `TPartialItem`>

## Type Parameters

### TItem

`TItem` *extends* [`OptionallyNamedIdentifiableItem`](reference/interfaces/OptionallyNamedIdentifiableItem.md)

### TPartialItem

`TPartialItem` *extends* `Partial`<`TItem`> = `Partial`<`TItem`>

## Constructors

### Constructor

> **new InMemoryStorageRepository**<`TItem`, `TPartialItem`>(`name`, `isItemGuard?`, `namespace?`): `InMemoryStorageRepository`<`TItem`, `TPartialItem`>

#### Parameters

##### name

`string`

##### isItemGuard?

[`IIsItem`](reference/interfaces/IIsItem.md)

##### namespace?

`string`

#### Returns

`InMemoryStorageRepository`<`TItem`, `TPartialItem`>

#### Overrides

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`constructor`](UselessStorageRepository.md#constructor)

## Properties

### index

> `protected` **index**: [`RepositoryIndex`](reference/interfaces/RepositoryIndex.md)

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`index`](UselessStorageRepository.md#index)

***

### isItem

> `protected` `readonly` **isItem**: [`IIsItem`](reference/interfaces/IIsItem.md)

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`isItem`](UselessStorageRepository.md#isitem)

***

### items

> `protected` **items**: `Record`<`string`, `TItem`>

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`items`](UselessStorageRepository.md#items)

***

### name

> `protected` `readonly` **name**: `string`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`name`](UselessStorageRepository.md#name)

***

### storage

> `protected` `readonly` **storage**: [`UselessStorage`](reference/interfaces/UselessStorage.md)

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`storage`](UselessStorageRepository.md#storage)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`clear`](UselessStorageRepository.md#clear)

***

### deleteItem()

> **deleteItem**(`item`): `void`

#### Parameters

##### item

`TItem`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`deleteItem`](UselessStorageRepository.md#deleteitem)

***

### deleteItemById()

> **deleteItemById**(`id`): `void`

#### Parameters

##### id

`string` | `number`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`deleteItemById`](UselessStorageRepository.md#deleteitembyid)

***

### deleteItemByPredicate()

> **deleteItemByPredicate**(`predicate`): `void`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`deleteItemByPredicate`](UselessStorageRepository.md#deleteitembypredicate)

***

### export()

> **export**(`itemId?`): `TItem` | [`RepositoryDataStorage`](reference/interfaces/RepositoryDataStorage.md)<`TItem`>

#### Parameters

##### itemId?

`string`

#### Returns

`TItem` | [`RepositoryDataStorage`](reference/interfaces/RepositoryDataStorage.md)<`TItem`>

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`export`](UselessStorageRepository.md#export)

***

### getActive()

> **getActive**(): `TItem` | `undefined`

#### Returns

`TItem` | `undefined`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getActive`](UselessStorageRepository.md#getactive)

***

### getItem()

> **getItem**(`idOrPredicate`): `TItem` | `undefined`

#### Parameters

##### idOrPredicate

`string` | `number` | (`value`) => `boolean`

#### Returns

`TItem` | `undefined`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItem`](UselessStorageRepository.md#getitem)

***

### getItemById()

> **getItemById**(`id`): `TItem` | `undefined`

#### Parameters

##### id

`string` | `number`

#### Returns

`TItem` | `undefined`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItemById`](UselessStorageRepository.md#getitembyid)

***

### getItemByName()

> **getItemByName**(`name`): `TItem` | `undefined`

#### Parameters

##### name

`string`

#### Returns

`TItem` | `undefined`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItemByName`](UselessStorageRepository.md#getitembyname)

***

### getItemByPredicate()

> **getItemByPredicate**(`predicate`): `TItem` | `undefined`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`TItem` | `undefined`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItemByPredicate`](UselessStorageRepository.md#getitembypredicate)

***

### getItemIds()

> **getItemIds**(): (`string` | `number`)[]

#### Returns

(`string` | `number`)[]

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItemIds`](UselessStorageRepository.md#getitemids)

***

### getItems()

> **getItems**(): `TItem`[]

#### Returns

`TItem`[]

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItems`](UselessStorageRepository.md#getitems)

***

### getItemsByPredicate()

> **getItemsByPredicate**(`predicate`): `TItem`[]

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`TItem`[]

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getItemsByPredicate`](UselessStorageRepository.md#getitemsbypredicate)

***

### getSortedItems()

> **getSortedItems**(`descending`): `TItem`[]

#### Parameters

##### descending

`boolean` = `false`

#### Returns

`TItem`[]

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`getSortedItems`](UselessStorageRepository.md#getsorteditems)

***

### hasItem()

> **hasItem**(`predicate`): `boolean`

#### Parameters

##### predicate

(`value`) => `boolean`

#### Returns

`boolean`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`hasItem`](UselessStorageRepository.md#hasitem)

***

### hasItems()

> **hasItems**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`hasItems`](UselessStorageRepository.md#hasitems)

***

### hasItemWithName()

> **hasItemWithName**(`name`): `boolean`

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`hasItemWithName`](UselessStorageRepository.md#hasitemwithname)

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

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`import`](UselessStorageRepository.md#import)

***

### setActive()

> **setActive**(`item?`): `void`

#### Parameters

##### item?

`TItem`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`setActive`](UselessStorageRepository.md#setactive)

***

### setActiveById()

> **setActiveById**(`id`): `void`

#### Parameters

##### id

`string` | `number`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`setActiveById`](UselessStorageRepository.md#setactivebyid)

***

### store()

> `protected` **store**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`store`](UselessStorageRepository.md#store)

***

### storeIndexInStorage()

> `protected` **storeIndexInStorage**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`storeIndexInStorage`](UselessStorageRepository.md#storeindexinstorage)

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

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`storeItem`](UselessStorageRepository.md#storeitem)

***

### storeItems()

> **storeItems**(`partialItems`): `void`

#### Parameters

##### partialItems

`TPartialItem`[]

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`storeItems`](UselessStorageRepository.md#storeitems)

***

### storeItemsInStorage()

> `protected` **storeItemsInStorage**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessStorageRepository`](reference/classes/UselessStorageRepository.md).[`storeItemsInStorage`](UselessStorageRepository.md#storeitemsinstorage)
