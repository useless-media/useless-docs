# CrudRepository<TEntity, TDataSource>

## Type Parameters

### TEntity

`TEntity` *extends* [`IEntity`](reference/interfaces/IEntity.md)

### TDataSource

`TDataSource` *extends* [`IDataSource`](reference/interfaces/IDataSource.md)<`TEntity`> = [`IDataSource`](../interfaces/IDataSource.md)<`TEntity`>

## Constructors

### Constructor

> **new CrudRepository**<`TEntity`, `TDataSource`>(): `CrudRepository`<`TEntity`, `TDataSource`>

#### Returns

`CrudRepository`<`TEntity`, `TDataSource`>

## Properties

### dataSource?

> **dataSource**?: `TDataSource`

***

### mongoRepository?

> **mongoRepository**?: `MongoRepository`<`TEntity`>

***

### repository?

> **repository**?: `ReturnType`<`TDataSource`[`"getRepository"`]>

## Accessors

### repo

#### Get Signature

> **get** **repo**(): `ReturnType`<`TDataSource`[`"getRepository"`]> | `MongoRepository`<`TEntity`> | `undefined`

##### Returns

`ReturnType`<`TDataSource`[`"getRepository"`]> | `MongoRepository`<`TEntity`> | `undefined`

## Methods

### count()

> **count**(): `Promise`<`number`>

#### Returns

`Promise`<`number`>

***

### create()

> **create**(`data`): `Promise`<`TEntity` | `undefined`>

#### Parameters

##### data

`DeepPartial`<`TEntity`>

#### Returns

`Promise`<`TEntity` | `undefined`>

***

### delete()

> **delete**(`id`, `hard`): `Promise`<`boolean`>

#### Parameters

##### id

`string` | `number` | `ObjectId`

##### hard

`boolean` = `false`

#### Returns

`Promise`<`boolean`>

***

### find()

> **find**(`where`): `Promise`<`TEntity`[]>

#### Parameters

##### where

`FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`TEntity`[]>

***

### getAll()

> **getAll**(): `Promise`<`TEntity`[]>

#### Returns

`Promise`<`TEntity`[]>

***

### getBy()

> **getBy**(`where`): `Promise`<`TEntity` | `undefined`>

#### Parameters

##### where

`FindOptionsWhere`<`TEntity`>

#### Returns

`Promise`<`TEntity` | `undefined`>

***

### getById()

> **getById**(`id`): `Promise`<`TEntity` | `undefined`>

#### Parameters

##### id

`string` | `number` | `ObjectId`

#### Returns

`Promise`<`TEntity` | `undefined`>

***

### initialize()

> **initialize**(`options`, `entity`, `dataSource?`): `Promise`<`void`>

#### Parameters

##### options

[`UselessDataSourceOptions`](reference/interfaces/UselessDataSourceOptions.md)

##### entity

`EntityTarget`<`TEntity`>

##### dataSource?

`TDataSource`

#### Returns

`Promise`<`void`>

***

### setDataSource()

> **setDataSource**(`dataSource`, `entity`): `void`

#### Parameters

##### dataSource

[`IDataSource`](reference/interfaces/IDataSource.md)<`any`>

##### entity

`EntityTarget`<`TEntity`>

#### Returns

`void`

***

### update()

> **update**(`id`, `data`): `Promise`<`TEntity` | `undefined`>

#### Parameters

##### id

`string` | `number` | `ObjectId`

##### data

`Partial`<`TEntity`>

#### Returns

`Promise`<`TEntity` | `undefined`>
