# ITypeOrmRepository<TEntity>

## Extends

- [`IRepository`](reference/interfaces/IRepository.md)<`TEntity`>.`Repository`<`TEntity`>

## Type Parameters

### TEntity

`TEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md)

## Methods

### count()

> **count**(): `Promise`<`number`>

#### Returns

`Promise`<`number`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`count`](IRepository.md#count)

***

### create()

#### Call Signature

> **create**(): `TEntity`

##### Returns

`TEntity`

##### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`create`](IRepository.md#create)

#### Call Signature

> **create**(`entityLikeArray`): `TEntity`[]

##### Parameters

###### entityLikeArray

`DeepPartial`<`TEntity`>[]

##### Returns

`TEntity`[]

##### Overrides

`IRepository.create`

#### Call Signature

> **create**(`entityLike`): `TEntity`

##### Parameters

###### entityLike

`DeepPartial`<`TEntity`>

##### Returns

`TEntity`

##### Overrides

`IRepository.create`

#### Call Signature

> **create**(`entity?`): `TEntity` | `TEntity`[]

##### Parameters

###### entity?

`DeepPartial`<`TEntity`> | `DeepPartial`<`TEntity`>[]

##### Returns

`TEntity` | `TEntity`[]

##### Overrides

`IRepository.create`

***

### delete()

> **delete**(`criteria`): `Promise`<`DeleteResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`DeleteResult`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`delete`](IRepository.md#delete)

***

### find()

> **find**(`options?`): `Promise`<`TEntity`[]>

#### Parameters

##### options?

`FindManyOptions`<`TEntity`>

#### Returns

`Promise`<`TEntity`[]>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`find`](IRepository.md#find)

***

### findOne()

> **findOne**(`options`): `Promise`<`TEntity` | `null`>

#### Parameters

##### options

`FindOneOptions`<`TEntity`>

#### Returns

`Promise`<`TEntity` | `null`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`findOne`](IRepository.md#findone)

***

### save()

> **save**<`TPartial`>(`entity`): `Promise`<`TPartial` & `TEntity`>

#### Type Parameters

##### TPartial

`TPartial` *extends* (string | number | bigint | boolean | symbol | RegExp | Date | ((...args: any[]) => unknown) | (new (...args: any[]) => unknown) | null | undefined) & IEntity | `any`[] | readonly `any`[] | `Set`<{ }> | `ReadonlySet`<{ }> | `Map`<{ }, { }> | `ReadonlyMap`<{ }, { }> | {[`key`: `string`]: `any`; `_id?`: `string` | `number` | { }; `id?`: `string` | `number` | { }; }

#### Parameters

##### entity

`TPartial`

#### Returns

`Promise`<`TPartial` & `TEntity`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`save`](IRepository.md#save)

***

### softDelete()

> **softDelete**(`criteria`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`UpdateResult`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`softDelete`](IRepository.md#softdelete)

***

### update()

> **update**(`criteria`, `partialEntity`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`string` | `number` | `ObjectId` | `Date` | `string`[] | `number`[] | `Date`[] | `ObjectId`[] | `FindOptionsWhere`<`TEntity`>

##### partialEntity

`QueryDeepPartialEntity`<`TEntity`>

#### Returns

`Promise`<`UpdateResult`>

#### Overrides

[`IRepository`](reference/interfaces/IRepository.md).[`update`](IRepository.md#update)
