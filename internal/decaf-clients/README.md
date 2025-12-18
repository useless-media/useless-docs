# @useless-media/decaf-clients

A TypeScript SDK for building media playback clients on Chromecast and similar receiver platforms. This package provides the client infrastructure that sits on top of the `@useless-media/useless-decaf` framework.

---

## Overview

The **DeCaf Clients** library provides ready-to-use media playback client implementations designed for commercial streaming applications. It handles:

- **Media Playback** — Full playback lifecycle management including play, pause, seek, stop, and track selection
- **Timeline Management** — Support for complex timelines with advertisements, metadata sections, credits detection, and skippable content
- **DRM Support** — Built-in support for Widevine and PlayReady protection systems
- **Service Layer Architecture** — Extensible service layer for integrating with custom backends
- **Activity Monitoring** — Session inactivity detection with automatic shutdown
- **Tracking & Analytics** — Pluggable tracker system for analytics and event reporting

---

## Package Structure

The package exposes three main entry points:

| Entry Point | Description |
|-------------|-------------|
| `@useless-media/decaf-clients` | Main exports including base client and commercial client |
| `@useless-media/decaf-clients/commercial` | Commercial client specifically |

---

## Core Components

### `CommercialDeCafClient`

The main client implementation for commercial media applications. It extends `DeCafClientBase` and integrates:

- **WackaPlayer** — The underlying playback engine supporting HLS, Shaka, and Native playback engines
- **TimelineManager** — Manages content timeline including advertisement breaks, metadata, and sections
- **TrackerCollection** — Collection of analytics trackers
- **ActivityMonitor** — Monitors user activity and handles inactivity shutdowns
- **ServiceLayer** — Extensible layer for custom business logic

```typescript
import { CommercialDeCafClient } from '@useless-media/decaf-clients/commercial';

const client = new CommercialDeCafClient(deCaf, {
  components: {
    activityMonitor: { /* ... */ },
    timeline: { /* ... */ },
    wacka: {
      engine: { /* ... */ },
      player: { /* ... */ }
    }
  },
  serviceLayer: { /* custom config */ }
});
```

### `DeCafClientBase`

Abstract base class that all DeCaf clients extend. Provides:

- Communication channel setup for Chromecast messaging
- Media element creation and management
- Standard playback command handlers (play, pause, seek, stop, etc.)
- Error management integration

### `ServiceLayer`

An extensible abstraction for integrating custom business logic:

- Content loading and transformation
- Custom configuration handling
- Session lifecycle hooks
- Can be loaded dynamically via URL or provided as a class/factory

### `TimelineManager`

Manages the playback timeline including:

- Advertisement breaks and cue points
- Content metadata sections
- Skippable sections (intros, credits)
- Timeline events and behaviors
- Position tracking

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `@useless-media/useless-decaf` | Core DeCaf framework |
| `@useless-media/useless-wacka-engine` | Multi-format playback engine |
| `@useless-media/useless-chromecast-sdk` | Chromecast protocol and messaging |
| `@useless-media/useless-media-sdk` | Media types and utilities |
| `@useless-media/useless-sdk` | Core utilities and types |
| `@useless-media/useless-extendables` | Feature extension system |

---

## Configuration

The `CommercialDeCafClientConfiguration` allows customizing:

```typescript
interface CommercialDeCafClientConfiguration {
  components: {
    activityMonitor: Partial<ActivityMonitorConfiguration>;
    timeline: TimelineManagerConfiguration;
    wacka?: {
      engine?: Partial<WackaEngineConfiguration>;
      player?: Partial<WackaPlayerConfiguration>;
      playerArgs?: Partial<WackaPlayerArgs>;
    };
  };
  serviceLayerUrl?: string;           // URL to dynamically load service layer
  serviceLayerClass?: ServiceLayerClass;  // Or provide class directly
  serviceLayerFactory?: ServiceLayerFactory;  // Or use a factory
  serviceLayer: Record<string, any>;  // Service layer config
}
```

---

## DRM Capabilities

The client automatically probes DRM capabilities on initialization:

- Widevine (primary for Chromecast)
- PlayReady (Chromecast variant)

Robustness levels are detected and used for license requests.

---

## Playback Features

### Supported Commands

- Play / Pause / Stop
- Seek (absolute and relative)
- Set audio track (by ID, language, or descriptor)
- Set text track (subtitles/captions)
- Set volume / mute
- Skip section (intros, credits, ads)

### Timeline Sections

The client recognizes and handles various timeline section types:

- **Advertisement Breaks** — Pre-roll, mid-roll, post-roll ads
- **Opening Credits** — Skippable intro sequences
- **Recap** — Skippable recap sequences
- **Closing Credits** — With next content suggestions
- **Custom Sections** — Application-defined sections