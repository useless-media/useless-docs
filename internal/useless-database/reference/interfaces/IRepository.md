# IRepository<TEntity>

## Extended by

- [`ITypeOrmRepository`](reference/interfaces/ITypeOrmRepository.md)

## Type Parameters

### TEntity

`TEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md)

## Methods

### count()

> **count**(): `Promise`<`number`>

#### Returns

`Promise`<`number`>

***

### create()

> **create**(`entityLike`): `TEntity` | `TEntity`[]

#### Parameters

##### entityLike

`DeepPartial`<`TEntity`> | `DeepPartial`<`TEntity`>[]

#### Returns

`TEntity` | `TEntity`[]

***

### delete()

> **delete**(`criteria`): `Promise`<`DeleteResult`>

#### Parameters

##### criteria

`any`

#### Returns

`Promise`<`DeleteResult`>

***

### find()

> **find**(`options?`): `Promise`<`TEntity`[]>

#### Parameters

##### options?

`any`

#### Returns

`Promise`<`TEntity`[]>

***

### findOne()

> **findOne**(`options`): `Promise`<`TEntity` | `null`>

#### Parameters

##### options

`any`

#### Returns

`Promise`<`TEntity` | `null`>

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

***

### softDelete()

> **softDelete**(`criteria`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`any`

#### Returns

`Promise`<`UpdateResult`>

***

### update()

> **update**(`criteria`, `partialEntity`): `Promise`<`UpdateResult`>

#### Parameters

##### criteria

`any`

##### partialEntity

`any`

#### Returns

`Promise`<`UpdateResult`>
