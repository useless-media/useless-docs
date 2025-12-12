# UselessDataSourceOptions

## Extends

- [`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).`Omit`<`TypeOrmDataSourceOptions`, `"database"` | `"entities"` | `"type"`>

## Indexable

[`key`: `string`]: `any`

## Properties

### database

> **database**: `string`

Database

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`database`](UselessDataSourceConnectionOptions.md#database)

***

### entities

> **entities**: (`Function` | [`CouchEntitySpec`](reference/interfaces/CouchEntitySpec.md))[]

***

### host?

> **host**?: `string`

Base url to where your database is hosted

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`host`](UselessDataSourceConnectionOptions.md#host)

***

### password?

> **password**?: `string`

Password

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`password`](UselessDataSourceConnectionOptions.md#password)

***

### port?

> **port**?: `number`

Post number

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`port`](UselessDataSourceConnectionOptions.md#port)

***

### schema?

> **schema**?: `string`

schema is optional

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`schema`](UselessDataSourceConnectionOptions.md#schema)

***

### type?

> **type**?: [`UselessDataSourceTypes`](reference/enumerations/UselessDataSourceTypes.md)

Database type current options are
['postgres', 'mongodb', 'couchdb']

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`type`](UselessDataSourceConnectionOptions.md#type)

***

### username?

> **username**?: `string`

User name

#### Inherited from

[`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md).[`username`](UselessDataSourceConnectionOptions.md#username)
