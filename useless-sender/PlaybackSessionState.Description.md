The PlaybackSession State is maintained on the receiver and all mutations to the state originate there. When using any
of the commands on the UselessSession, a request to make a change will be sent to the Receiver which may or may not
result in a mutation of the state.

Mutations to the state on the Receiver are recorded and sent as a change-set to the senders who then apply the changes
to their own copy of the state and invoke the UselessSession `handlePlaybackSessionStateChanged` delegate.