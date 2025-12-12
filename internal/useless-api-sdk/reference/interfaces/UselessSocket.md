# UselessSocket<TSubscription>

## Extends

- `Socket`

## Type Parameters

### TSubscription

`TSubscription` *extends* `NotificationsSubscribeMessage` | `ActionsSubscribeMessage` = `NotificationsSubscribeMessage`

## Properties

### authenticated

> **authenticated**: `Deferred`

***

### subscribe()

> **subscribe**: (`subscription`) => `Promise`<`void`>

#### Parameters

##### subscription

`TSubscription`

#### Returns

`Promise`<`void`>
