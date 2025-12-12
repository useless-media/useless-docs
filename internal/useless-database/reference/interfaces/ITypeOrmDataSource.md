# ITypeOrmDataSource

## Extends

- [`IDataSource`](reference/interfaces/IDataSource.md).`Omit`<`TypeOrmDataSource`, `"getRepository"` | `"initialize"`>

## Properties

### destroy()

> **destroy**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`IDataSource`](reference/interfaces/IDataSource.md).[`destroy`](IDataSource.md#destroy)

***

### getRepository()

> **getRepository**: <`TEntity`>(`target`) => [`ITypeOrmRepository`](reference/interfaces/ITypeOrmRepository.md)<`TEntity`>

#### Type Parameters

##### TEntity

`TEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md)

#### Parameters

##### target

`EntityTarget`<`TEntity`>

#### Returns

[`ITypeOrmRepository`](reference/interfaces/ITypeOrmRepository.md)<`TEntity`>

#### Overrides

[`IDataSource`](reference/interfaces/IDataSource.md).[`getRepository`](IDataSource.md#getrepository)

***

### initialize()

> **initialize**: () => `Promise`<`ITypeOrmDataSource`>

#### Returns

`Promise`<`ITypeOrmDataSource`>

#### Overrides

[`IDataSource`](reference/interfaces/IDataSource.md).[`initialize`](IDataSource.md#initialize)

***

### isInitialized

> `readonly` **isInitialized**: `boolean`

#### Inherited from

[`IDataSource`](reference/interfaces/IDataSource.md).[`isInitialized`](IDataSource.md#isinitialized)

***

### options

> `readonly` **options**: `DataSourceOptions`

#### Overrides

[`IDataSource`](reference/interfaces/IDataSource.md).[`options`](IDataSource.md#options)
