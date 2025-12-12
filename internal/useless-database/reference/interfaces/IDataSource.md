# IDataSource<TIEntity>

## Extended by

- [`ITypeOrmDataSource`](reference/interfaces/ITypeOrmDataSource.md)

## Type Parameters

### TIEntity

`TIEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md) = [`IEntity`](IEntity.md)

## Properties

### destroy()

> **destroy**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getRepository()

> **getRepository**: <`TEntity`>(`target`) => [`IRepository`](reference/interfaces/IRepository.md)<`TEntity`>

#### Type Parameters

##### TEntity

`TEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md)

#### Parameters

##### target

`EntityTarget`<`TEntity`>

#### Returns

[`IRepository`](reference/interfaces/IRepository.md)<`TEntity`>

***

### initialize()

> **initialize**: () => `Promise`<`IDataSource`<`TIEntity`>>

#### Returns

`Promise`<`IDataSource`<`TIEntity`>>

***

### isInitialized

> `readonly` **isInitialized**: `boolean`

***

### options

> `readonly` **options**: [`CouchConnectionOptions`](reference/interfaces/CouchConnectionOptions.md) | `DataSourceOptions`
