# Decaf Client UI

A modular UI framework for building Chromecast receiver applications, designed to work with the Useless Media SDK ecosystem.

## Overview

`@useless-media/decaf-client-ui` provides a complete UI layer for Chromecast receiver applications. It handles playback controls, progress tracking, metadata display, loading states, error handling, and remote control navigation — all out of the box.

The library is split into two main layers:

1. **SDK Layer** — A framework-agnostic foundation for building custom UIs
2. **Standard Layer** — A ready-to-use React implementation

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Your Application                            │
├─────────────────────────────────────────────────────────────────┤
│                    StandardClientUI (React)                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌───────────┐  │
│  │ ControlsView│ │  IdleView   │ │ LoadingView │ │ ErrorView │  │
│  │ ProgressBar │ │             │ │             │ │           │  │
│  │ PlaybackCtrl│ │             │ │             │ │           │  │
│  └─────────────┘ └─────────────┘ └─────────────┘ └───────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                         Decaf SDK                               │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐  │
│  │ DecafUIController│  │ State Managers   │  │  Navigation   │  │
│  │ (orchestrates)   │  │ - ClientState    │  │  Controller   │  │
│  │                  │  │ - ProgressState  │  │  (arrow keys) │  │
│  │                  │  │ - MetadataState  │  │               │  │
│  │                  │  │ - VisibilityState│  │               │  │
│  └──────────────────┘  └──────────────────┘  └───────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│               @useless-media/useless-chromecast-sdk             │
├─────────────────────────────────────────────────────────────────┤
│                             DeCaf                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Core Concepts

### DecafUIController

The central orchestrator that bridges the Chromecast SDK with the UI layer. It:

- Receives playback events from the Chromecast SDK
- Updates internal state managers
- Controls UI visibility based on playback state
- Manages remote control navigation contexts

```typescript
// Initialized automatically when using StandardClientUI
// Accessible via DecafUIControllerAccess for advanced use cases
const controller = DecafUIControllerAccess.getDecafUIController();
```

### State Management

Four state managers handle different aspects of the UI:

| State Manager | Purpose |
|---------------|---------|
| `ClientState` | Playback state, stream info, tracks, timeline items, errors |
| `ProgressState` | Current position, seekable range, timeline boundaries |
| `MetadataState` | Current content metadata (title, subtitle, images) |
| `VisibilityState` | Which UI components are visible (controls, loader, idle, etc.) |

Each state is exposed via React Context for easy consumption in components:

```typescript
const { playbackState, audioTracks, textTracks } = useClientContext();
const { position, seekable, timelineEnd } = useProgressContext();
const { title, subtitle, images } = useMetadataContext();
const { controls, loading, idleView } = useVisibilityContext();
```

### Arrow Navigation System

Chromecast remotes use D-pad navigation. The `ArrowNavigationController` handles:

- **Navigation Contexts** — Isolated navigation zones (controls, progress bar, tracks menu)
- **Directional Actions** — Up/down/left/right/enter handlers per focusable item
- **Context Stacking** — Nested navigation with automatic boundary handling

```
┌──────────────────────────────────────┐
│           Tracks Context             │  ← Up exits to Progress
│  [Audio] [Subtitles] [Off]           │
├──────────────────────────────────────┤
│          Progress Context            │  ← Up exits to Controls
│  ●────────────────○──────────────    │
├──────────────────────────────────────┤
│          Controls Context            │  ← Up exits to Idle
│  [⏮] [⏪] [⏯] [⏩] [⏭] [CC]     │
├──────────────────────────────────────┤
│           Idle Context               │  ← Root context
│        (Enter = play/pause)          │
└──────────────────────────────────────┘
```

---

## StandardClientUI

The ready-to-use implementation provides:

| View | Description |
|------|-------------|
| `NowPlayingView` | Background artwork and metadata overlay |
| `ControlsView` | Progress bar + playback buttons |
| `LoadingView` | Spinner during buffering |
| `IdleView` | Shown when no content is loaded |
| `ErrorView` | Error messages with codes |
| `NextContentView` | "Up Next" overlay during credits |
| `TracksView` | Audio/subtitle track selection |

### Usage

```typescript
import { StandardClientUI, DecafUIController } from '@useless-media/decaf-client-ui';

const ui = new StandardClientUI({
  idleImage: '/assets/background.png',
  idleLogo: '/assets/logo.png',
  colors: {
    loaderColor: '#00ff00',
    navigationFocusColor: 'rgba(0, 255, 0, 0.5)',
    progressBar: {
      scrubberBarColor: '#333333',
      progressColor: '#00ff00',
      bufferColor: 'rgba(0, 255, 0, 0.3)',
      thumbColor: '#00ff00',
      markerColor: '#ffff00'
    }
  },
  remoteSupport: true
});

const controller = new DecafUIController(ui);
controller.initialize(document.getElementById('receiver'), i18n);
controller.setDelegate(chromecastDelegate);
```

---

## Customization

### Color Theming

Pass colors via the `StandardClientUIOptions`:

```typescript
interface StandardClientUIColors {
  loaderColor?: string;
  navigationFocusColor?: string;
  progressBar?: {
    scrubberBarColor?: string;      // Track background
    progressColor?: string;         // Played portion
    bufferColor?: string;           // Buffered portion
    thumbColor?: string;            // Draggable handle
    markerColor?: string;           // Chapter/ad markers
    advertisementBreakMarkerColor?: string;
  };
}
```

### Custom Renders

Extend `DecafReactRender` to build entirely custom UIs while keeping the state management:

```typescript
import { DecafReactRender } from '@useless-media/decaf-client-ui';

class CustomUI extends DecafReactRender {
  protected render(): React.ReactNode {
    return (
      <MyCustomControlsComponent />
    );
  }
}
```

The base class wraps your render in all necessary context providers automatically.

---

## Build & Development

```bash
# Development build with watch
npm run start:dev

# Production build
npm run build:release

# Check for circular dependencies
npm run find:circular
```

Output is generated in both ESM and CJS formats under `dist/`.

---

## Dependencies

- `@useless-media/useless-chromecast-sdk` — Chromecast receiver integration
- `@useless-media/useless-media-sdk` — Media types and utilities
- `@useless-media/useless-sdk` — Common utilities (I18n, etc.)
- `react` / `react-dom` — UI rendering
- `@emotion/styled` — CSS-in-JS styling