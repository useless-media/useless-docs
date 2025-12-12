# SessionEventPayloads<TState>

## Extends

- [`EmitterEventList`](reference/interfaces/EmitterEventList.md)

## Type Parameters

### TState

`TState` *extends* [`StateWithId`](reference/interfaces/StateWithId.md)

## Indexable

[`key`: `string`]: [`EmitterEvent`](reference/interfaces/EmitterEvent.md)

## Properties

### SessionEvents.BulkedStateChanges

> **SessionEvents.BulkedStateChanges**: [`SessionStateChangedEvent`](reference/interfaces/SessionStateChangedEvent.md)<`TState`>

***

### SessionEvents.BulkedStateEvents

> **SessionEvents.BulkedStateEvents**: [`SessionStateEventsEvent`](reference/interfaces/SessionStateEventsEvent.md)

***

### SessionEvents.StateChanged

> **SessionEvents.StateChanged**: [`SessionStateChangedEvent`](reference/interfaces/SessionStateChangedEvent.md)<`TState`>

***

### SessionEvents.StateEvents

> **SessionEvents.StateEvents**: [`SessionStateEventsEvent`](reference/interfaces/SessionStateEventsEvent.md)
