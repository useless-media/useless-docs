# DeCafClientFactory

Interface for the factory responsible for creating DeCafClient instances.

## Properties

### create

> **create**: (`container`, `deCaf`, `state`) => [`DeCafClient`](reference/classes/DeCafClient.md)

Creates a new instance of DeCafClient.

#### Parameters

• **container**: `HTMLDivElement`

The HTMLDivElement where the DeCafClient will be embedded.

• **deCaf**: [`DeCafProxy`](reference/classes/DeCafProxy.md)

The DeCafProxy instance associated with the DeCafClient.

• **state**: [`IPlaybackSessionState`](reference/interfaces/IPlaybackSessionState.md)

The initial playback session state for the DeCafClient.

#### Returns

[`DeCafClient`](reference/classes/DeCafClient.md)

A new DeCafClient instance.
