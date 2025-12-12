# CouchDataSource

## Implements

- [`IDataSource`](reference/interfaces/IDataSource.md)<[`ICouchEntity`](../interfaces/ICouchEntity.md)>

## Constructors

### Constructor

> **new CouchDataSource**(`options`): `CouchDataSource`

#### Parameters

##### options

[`CouchConnectionOptions`](reference/interfaces/CouchConnectionOptions.md)

#### Returns

`CouchDataSource`

## Properties

### client

> **client**: `any`

***

### options

> `readonly` **options**: [`CouchConnectionOptions`](reference/interfaces/CouchConnectionOptions.md)

#### Implementation of

[`IDataSource`](reference/interfaces/IDataSource.md).[`options`](../interfaces/IDataSource.md#options)

## Accessors

### isCouchDataSource

#### Get Signature

> **get** **isCouchDataSource**(): `boolean`

##### Returns

`boolean`

***

### isInitialized

#### Get Signature

> **get** **isInitialized**(): `boolean`

##### Returns

`boolean`

#### Implementation of

[`IDataSource`](reference/interfaces/IDataSource.md).[`isInitialized`](../interfaces/IDataSource.md#isinitialized)

## Methods

### createDatabaseIfNotExists()

> **createDatabaseIfNotExists**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### createDesignDocumentIfNotExists()

> **createDesignDocumentIfNotExists**(`design`, `addDefaultViews`): `Promise`<`void`>

#### Parameters

##### design

[`CouchDesignDocument`](reference/interfaces/CouchDesignDocument.md) | [`CouchDesignDocumentSpec`](../interfaces/CouchDesignDocumentSpec.md)

##### addDefaultViews

`boolean` = `true`

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IDataSource`](reference/interfaces/IDataSource.md).[`destroy`](../interfaces/IDataSource.md#destroy)

***

### getRepository()

> **getRepository**<`TEntity`>(`target`): [`CouchRepository`](reference/classes/CouchRepository.md)<`TEntity`>

#### Type Parameters

##### TEntity

`TEntity` *extends* [`ICouchEntity`](reference/interfaces/ICouchEntity.md)

#### Parameters

##### target

`EntityTarget`<`TEntity`>

#### Returns

[`CouchRepository`](reference/classes/CouchRepository.md)<`TEntity`>

#### Implementation of

[`IDataSource`](reference/interfaces/IDataSource.md).[`getRepository`](../interfaces/IDataSource.md#getrepository)

***

### initialize()

> **initialize**(): `Promise`<`CouchDataSource`>

#### Returns

`Promise`<`CouchDataSource`>

#### Implementation of

[`IDataSource`](reference/interfaces/IDataSource.md).[`initialize`](../interfaces/IDataSource.md#initialize)
