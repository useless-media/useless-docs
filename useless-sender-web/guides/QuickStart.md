# Quick Start

```ts
import { UselessSender, Load, UselessSenderEvents, UselessSessionEvents } from '@useless-media/useless-sender-web';

const sender = UselessSender.getInstance();
await sender.initialize({
  applicationId: 'DEADBEEF',
  useEmulator: false
});

let session;
sender.on(UselessSenderEvents.SessionStarted, e => {
  session = e.session;

  session.on(UselessSessionEvents.PlaybackSessionStateChanged, e => {
    console.log('PlaybackSessionStateChanged, events:', e.events);
    
    // Update application state
  });
});
sender.on(UselessSenderEvents.SessionEnded, e => {
  // console.log('Exit state:', e.playbackSessionState);

  // Other cleanup

  session = undefined;
});

await sender.connect();

const loadRequest = Load({
  content: Content({
    id: 'SomeId',
    ...rest
  }),
  ...rest
});
await sender.cast(loadRequest);
```