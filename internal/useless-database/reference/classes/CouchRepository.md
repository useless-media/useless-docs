# CouchRepository<TEntity>

## Type Parameters

### TEntity

`TEntity` *extends* [`ICouchEntity`](reference/interfaces/ICouchEntity.md)

## Implements

- [`IRepository`](reference/interfaces/IRepository.md)<`TEntity`>

## Constructors

### Constructor

> **new CouchRepository**<`TEntity`>(`options`, `client`, `EntityClass`): `CouchRepository`<`TEntity`>

#### Parameters

##### options

[`CouchConnectionOptions`](reference/interfaces/CouchConnectionOptions.md)

##### client

`any`

##### EntityClass

[`ICouchEntityConstructor`](reference/interfaces/ICouchEntityConstructor.md)<`TEntity`>

#### Returns

`CouchRepository`<`TEntity`>

## Properties

### options

> `readonly` **options**: [`CouchConnectionOptions`](reference/interfaces/CouchConnectionOptions.md)

## Accessors

### isCouchRepository

#### Get Signature

> **get** **isCouchRepository**(): `boolean`

##### Returns

`boolean`

## Methods

### count()

> **count**(): `Promise`<`number`>

#### Returns

`Promise`<`number`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`count`](../interfaces/IRepository.md#count)

***

### create()

> **create**(`entityLike`): `TEntity` | `TEntity`[]

#### Parameters

##### entityLike

`DeepPartial`<`TEntity`> | `DeepPartial`<`TEntity`>[]

#### Returns

`TEntity` | `TEntity`[]

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`create`](../interfaces/IRepository.md#create)

***

### delete()

> **delete**(`criteria`): `Promise`<`DeleteResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`DeleteResult`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`delete`](../interfaces/IRepository.md#delete)

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### find()

> **find**(`options?`): `Promise`<`TEntity`[]>

#### Parameters

##### options?

`FindManyOptions`<`TEntity`>

#### Returns

`Promise`<`TEntity`[]>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`find`](../interfaces/IRepository.md#find)

***

### findOne()

> **findOne**(`options`): `Promise`<`TEntity` | `null`>

#### Parameters

##### options

`FindOneOptions`<`TEntity`>

#### Returns

`Promise`<`TEntity` | `null`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`findOne`](../interfaces/IRepository.md#findone)

***

### save()

> **save**<`TPartial`>(`entity`): `Promise`<`TPartial` & `TEntity`>

#### Type Parameters

##### TPartial

`TPartial` *extends* `object`

#### Parameters

##### entity

`TPartial`

#### Returns

`Promise`<`TPartial` & `TEntity`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`save`](../interfaces/IRepository.md#save)

***

### setDesignDocumentId()

> **setDesignDocumentId**(`designDocumentId`): `void`

#### Parameters

##### designDocumentId

`string`

#### Returns

`void`

***

### softDelete()

> **softDelete**(`criteria`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`UpdateResult`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`softDelete`](../interfaces/IRepository.md#softdelete)

***

### update()

> **update**(`criteria`, `partialEntity`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

##### partialEntity

`DeepPartial`<`TEntity`>

#### Returns

`Promise`<`UpdateResult`>

#### Implementation of

[`IRepository`](reference/interfaces/IRepository.md).[`update`](../interfaces/IRepository.md#update)
