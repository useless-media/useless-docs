# Useless JS Engine (Android)

A modular Android library that provides JavaScript execution capabilities through multiple QuickJS implementations, enabling seamless native-to-JavaScript bridging with support for extensions, polyfills, and streaming.

## Overview

The `useless-js-engine-android` project is a multi-module Android library designed to execute JavaScript code within Android applications. It abstracts away the complexity of JavaScript engine integration by providing a unified API that supports multiple QuickJS implementations under the hood.

### Key Features

- **Multiple QuickJS Implementations**: Choose between different QuickJS backends (Oasis JsBridge, QuickJS-kt, QuickJS Wrapper)
- **Extension System**: Easily bridge native Kotlin code to JavaScript with the BaseExtension framework
- **Built-in Polyfills**: Ready-to-use implementations for `fetch`, `console`, `setTimeout`, and `window`
- **Streaming Support**: First-class support for Server-Sent Events (SSE) and streaming HTTP responses
- **Type-Safe Bridging**: Leverage Kotlin's type system when defining JavaScript interfaces

---

## Project Structure

```
useless-js-engine-android/
├── useless-js-engine/          # Core JS engine library
├── useless-debug/              # Remote debugging module
├── useless-hls-proxy/          # HLS video proxy module
├── useless-playground/         # Examples and experimentation
├── *-reference-application/    # Demo apps for each module
└── docs/                       # Documentation
```

### Modules

| Module | Description |
|--------|-------------|
| `useless-js-engine` | Core library providing JavaScript execution contexts and extension framework |
| `useless-debug` | WebSocket-based remote debugging capabilities for inspecting JS contexts |
| `useless-hls-proxy` | Netty-based reverse proxy for HLS video stream manipulation |
| `useless-playground` | Experimental module with example implementations and usage patterns |

---

## Getting Started

### Prerequisites

- Android SDK 24+ (minSdk)
- Android SDK 35 (compileSdk)
- Java 11
- Kotlin 2.1.10+

### Configuration

1. Create a `local.properties` file in the project root:

```properties
# GitHub Maven repository configuration
github.baseUrl=https://maven.pkg.github.com
github.user=YOUR_GITHUB_USERNAME
github.token=YOUR_GITHUB_TOKEN
github.privateOwner=YOUR_ORG
github.privateRepository=YOUR_PRIVATE_REPO
github.publicOwner=YOUR_ORG
github.publicRepository=YOUR_PUBLIC_REPO

# Optional: Include local project dependencies
build.includeLocalUselessProjectDependencies=false
```

2. Add the dependency to your module's `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.useless.jsengine:jsengine:0.0.1")
}
```

---

## Core Concepts

### UselessJsEngine

The main entry point for creating JavaScript contexts:

```kotlin
val engine = UselessJsEngine(applicationContext)

// Create an OasisContext (recommended)
val context = engine.createContext()

// Execute JavaScript
context.jsContext.evaluateUnsync("console.log('Hello from JS!')")

// Clean up
engine.destroy()
```

### JavaScript Contexts

Three context implementations are available:

| Context | Implementation | Use Case |
|---------|---------------|----------|
| `OasisContext` | Oasis JsBridge | Recommended for most use cases. Full-featured with polyfills |
| `QuickJsKtContext` | QuickJS-kt | Pure Kotlin QuickJS binding |
| `QuickJsWrapperContext` | QuickJS Wrapper | Alternative QuickJS implementation |

```kotlin
// OasisContext (default, recommended)
val oasisContext = engine.createContext()

// QuickJS-kt context
val quickJsKtContext = engine.createQuickJsKtContext()

// QuickJS Wrapper context
val quickJsWrapperContext = engine.createQuickJsWrapperContext()
```

### Extensions

Extensions bridge native Kotlin functionality to JavaScript. They are automatically exposed to the JavaScript runtime.

#### Creating a Custom Extension

```kotlin
class MyExtension(
    appContext: Context,
    context: OasisContext,
    auxiliaryData: Map<String, Any?>
) : BaseExtension(appContext, context, auxiliaryData) {

    // This method is callable from JavaScript
    fun greet(name: String): String {
        return "Hello, $name!"
    }

    // Async methods are also supported
    suspend fun fetchData(): Map<String, Any?> {
        // Perform async operations
        return mapOf("status" to "success")
    }
}
```

#### Installing an Extension

```kotlin
BaseExtension.install(
    appContext = applicationContext,
    context = oasisContext,
    clazz = MyExtension::class,
    auxiliaryData = mapOf("config" to myConfig),
    installAs = InstallAs.Class,
    installOn = "UselessJsEngineExtensions"
)
```

**Installation Modes:**

| Mode | Description |
|------|-------------|
| `InstallAs.Class` | Creates a JavaScript class with an async `initialize()` method |
| `InstallAs.ClassLikeFunction` | Creates a function-based constructor pattern |
| `InstallAs.Factory` | Exposes a factory object with a `create()` method |

#### Using Extensions in JavaScript

```javascript
// Using Class installation mode
const ext = new UselessJsEngineExtensions.MyExtension();
const instance = await ext.initialize();
const greeting = instance.greet("World");
```

---

## Built-in Polyfills

The `OasisContext` automatically loads polyfills for common browser APIs:

### fetch

Full implementation of the Fetch API with streaming support:

```javascript
// Standard fetch
const response = await fetch('https://api.example.com/data');
const json = await response.json();

// Streaming (SSE support)
const stream = await fetch('https://api.example.com/events');
const reader = stream.body.getReader();
while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    console.log(new TextDecoder().decode(value));
}
```

### console

Standard console logging:

```javascript
console.log('Info message');
console.warn('Warning message');
console.error('Error message');
```

### setTimeout / setInterval

Timer functions:

```javascript
setTimeout(() => {
    console.log('Delayed execution');
}, 1000);

const intervalId = setInterval(() => {
    console.log('Repeated execution');
}, 500);

clearInterval(intervalId);
```

---

## Module: useless-debug

Remote debugging module that connects to a WebSocket server for inspecting and controlling JavaScript contexts.

### Usage

```kotlin
val debug = UselessDebug(applicationContext)

// Connect to debug server
debug.initialize("ws://10.0.2.2:9091/")

// Register debuggable controllers
debug.registerDebuggableController("MyController", myController)

// Register debuggable objects
debug.registerDebuggableObject("state", mapOf("key" to "value"))

// Listen for title changes
debug.setTitleUpdatedHandler {
    println("Title: ${debug.title}")
}
```

---

## Module: useless-hls-proxy

A Netty-based reverse proxy for HLS (HTTP Live Streaming) video manipulation.

### Setup

Add to your app's `build.gradle.kts`:

```kotlin
android {
    packaging {
        resources.excludes.add("META-INF/INDEX.LIST")
        resources.excludes.add("META-INF/io.netty.versions.properties")
    }
}
```

### Usage

```kotlin
val proxy = UselessHlsProxy(applicationContext)

proxy.initialize(object : IJsHlsProxyConfiguration {
    override val proxy = ProxyExtensionConfiguration(port = 9060)
})

proxy.start()

// Later...
proxy.destroy()
```

### Debugging

Expose the proxy API to localhost for debugging:

```bash
adb -s [EmulatorSessionId] forward tcp:9060 tcp:9060
```

---

## Dependencies

The project relies on several key dependencies:

| Dependency | Version | Purpose |
|------------|---------|---------|
| [Oasis JsBridge](https://github.com/nicholasquoc/nicholasquoc-oasis-jsbridge-android) | 0.24.0 | Primary QuickJS implementation |
| [QuickJS-kt](https://github.com/nicholasquoc/nicholasquoc-oasis-jsbridge-android) | 1.0.0-alpha13 | Pure Kotlin QuickJS binding |
| [QuickJS Wrapper](https://github.com/nicholasquoc/nicholasquoc-oasis-jsbridge-android) | 2.4.4 | Alternative QuickJS implementation |
| [Ktor Client](https://ktor.io/) | 3.1.1 | HTTP client for fetch polyfill |
| [Ktor Server/Netty](https://ktor.io/) | 3.1.1 | Proxy server for HLS module |

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Android Application                   │
├─────────────────────────────────────────────────────────┤
│                    UselessJsEngine                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │OasisContext │  │QuickJsKt   │  │QuickJsWrapper   │  │
│  │             │  │Context      │  │Context          │  │
│  └──────┬──────┘  └──────┬──────┘  └───────┬─────────┘  │
│         │                │                  │            │
│  ┌──────▼──────────────────────────────────▼──────────┐  │
│  │                  Extension System                   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │  │
│  │  │BaseExt   │  │Custom    │  │MessagingExt      │  │  │
│  │  └──────────┘  │Extensions│  └──────────────────┘  │  │
│  │                └──────────┘                         │  │
│  └─────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                     Polyfills                        │  │
│  │   fetch  │  console  │  setTimeout  │  window       │  │
│  └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Publishing

The modules can be published to Maven repositories:

```bash
./gradlew :useless-js-engine:publish
```

Publication targets are configured via `local.properties` and include both private and public Maven repositories.

---

## License

[Add license information here]

---

## Contributing

[Add contribution guidelines here]

