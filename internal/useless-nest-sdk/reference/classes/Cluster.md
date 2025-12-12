# Cluster

## Extends

- `Emitter`<[`ClusterEventPayloads`](reference/interfaces/ClusterEventPayloads.md)>

## Constructors

### Constructor

> **new Cluster**(`configuration?`): `Cluster`

#### Parameters

##### configuration?

[`ClusterConfiguration`](reference/interfaces/ClusterConfiguration.md)

#### Returns

`Cluster`

#### Overrides

`Emitter<ClusterEventPayloads>.constructor`

## Methods

### sendMessageToWorkers()

> **sendMessageToWorkers**(`message`): `void`

#### Parameters

##### message

`Record`<`string`, `any`>

#### Returns

`void`

***

### start()

> **start**(`bootstrap`): `Promise`<`void`>

#### Parameters

##### bootstrap

() => `Promise`<`void`>

#### Returns

`Promise`<`void`>
