# DeCafClientFactory

Interface for the factory responsible for creating DeCafClient instances.

## Properties

### create()

> **create**: (`deCaf`, `configuration`) => [`DeCafClient`](reference/classes/DeCafClient.md)

Creates a new instance of DeCafClient.

#### Parameters

##### deCaf

[`DeCaf`](reference/classes/DeCaf.md)

The DeCaf instance.

##### configuration

`Record`<`string`, `any`>

The client configuration.

#### Returns

[`DeCafClient`](reference/classes/DeCafClient.md)

A new DeCafClient instance.
