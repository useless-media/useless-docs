# createDataSourceConnection

> **createDataSourceConnection**<`TOptions`, `TDataSourceType`>(`options`): [`IDataSourceMap`](reference/interfaces/IDataSourceMap.md)[`TDataSourceType`]

## Type Parameters

### TOptions

`TOptions` *extends* `Optional`<[`UselessDataSourceOptions`](reference/interfaces/UselessDataSourceOptions.md), `"database"` | `"entities"`> = `Optional`<[`UselessDataSourceOptions`](../interfaces/UselessDataSourceOptions.md), `"database"` | `"entities"`>

### TDataSourceType

`TDataSourceType` *extends* keyof [`IDataSourceMap`](reference/interfaces/IDataSourceMap.md) = `Exclude`<`TOptions`[`"type"`], `undefined`>

## Parameters

### options

`TOptions`

## Returns

[`IDataSourceMap`](reference/interfaces/IDataSourceMap.md)[`TDataSourceType`]
