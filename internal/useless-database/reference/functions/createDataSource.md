# createDataSource

> **createDataSource**<`TOptions`, `TDataSourceType`>(`options`): [`IDataSourceMap`](reference/interfaces/IDataSourceMap.md)[`TDataSourceType`]

## Type Parameters

### TOptions

`TOptions` *extends* [`UselessDataSourceOptions`](reference/interfaces/UselessDataSourceOptions.md) = [`UselessDataSourceOptions`](../interfaces/UselessDataSourceOptions.md)

### TDataSourceType

`TDataSourceType` *extends* keyof [`IDataSourceMap`](reference/interfaces/IDataSourceMap.md) = `Exclude`<`TOptions`[`"type"`], `undefined`>

## Parameters

### options

`TOptions`

## Returns

[`IDataSourceMap`](reference/interfaces/IDataSourceMap.md)[`TDataSourceType`]
