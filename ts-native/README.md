# Useless TsNative

## Overview

**Useless TsNative** is a build tooling CLI for creating cross-platform JavaScript Engine modules. It takes TypeScript code and transpiles it into native Kotlin (Android) and Swift (iOS/macOS) packages, enabling you to write business logic once and deploy it across multiple platforms.

The tool is part of the [Useless Media](https://useless.media) ecosystem and works in conjunction with:
- `@useless-media/useless-transpiler` — the core transpilation engine
- `@useless-media/useless-sdk` — shared utilities and action framework
- Various JS Engine extensions (Cast, Messaging, etc.)

---

## How It Works

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TypeScript Module                            │
│                     (your business logic)                           │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      useless-ts-native CLI                          │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  1. Validate Configuration                                   │   │
│  │  2. Prepare Build Directory                                  │   │
│  │  3. Compile JavaScript (via esbuild/rollup)                  │   │
│  │  4. Extract Dependent Types                                  │   │
│  │  5. Transpile to Kotlin/Swift (via useless-transpiler)       │   │
│  │  6. Generate Native Project Structure                        │   │
│  │  7. Build Native Packages                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
┌─────────────────────────────┐   ┌─────────────────────────────┐
│     Kotlin Package          │   │      Swift Package          │
│   (Android Library)         │   │   (iOS/macOS Framework)     │
└─────────────────────────────┘   └─────────────────────────────┘
```

### Build Pipeline Phases

The build process is organized into distinct phases:

| Phase | Description |
|-------|-------------|
| `validate` | Ensures configuration is complete and valid |
| `prepare` | Sets up the build directory structure |
| `probe` | Analyzes the source files (disabled by default) |
| `copyInput` | Copies source files to build directory (disabled by default) |
| `compileJs` | Compiles TypeScript to JavaScript using esbuild |
| `extractDependentTypes` | Extracts type information for transpilation |
| `transpile:kotlin` | Generates Kotlin code from the compiled JS |
| `transpile:swift` | Generates Swift code from the compiled JS |

Each target (Kotlin/Swift) then goes through additional sub-phases:
- `checkTranspilePrerequisites` — validates target-specific requirements
- `transpile` — performs the actual code transpilation
- `writeNativeCode` — writes generated code to disk
- `generateNativeProjectIfNeeded` — scaffolds native project from templates
- `buildKotlin` / `buildSwift` — compiles native code
- `copyKotlinOutput` / `copySwiftOutput` — moves artifacts to output location

---

## System Requirements

### General
- **Node.js**: `^20.19.0 || ^22.12.0 || >=23`

### For Kotlin Target (Android)
- Android SDK installed
- Environment variable `ANDROID_HOME` set, **OR**
- A `local.properties` file in the project root with `sdk.dir` pointing to the Android SDK location

> ⚠️ The `local.properties` file should **not** be committed to version control.

### For Swift Target (iOS/macOS)
- Xcode with Swift toolchain installed
- macOS operating system

---

## Installation

```bash
npm install @useless-media/useless-ts-native
```

Or run directly with npx:

```bash
npx @useless-media/useless-ts-native --help
```

---

## CLI Commands

### `init` — Initialize Configuration

Creates a `.useless-ts-native.ts` configuration file in your project root.

```bash
npx @useless-media/useless-ts-native init [options]
```

**Options:**
| Option | Alias | Description |
|--------|-------|-------------|
| `--targets` | `-t` | Target platforms (`kotlin`, `swift`) |

**Interactive Prompts:**
- Module name
- Module entry file path
- Target platforms (if not specified via CLI)
- Kotlin package name & namespace (if targeting Kotlin)
- Android SDK location (if not already configured)
- Swift package name (if targeting Swift)

The command also updates `.gitignore` to exclude build artifacts and `local.properties`.

---

### `build` — Build the Module

Compiles your TypeScript module and generates native packages.

```bash
npx @useless-media/useless-ts-native build [moduleEntry] [options]
```

**Arguments:**
| Argument | Description |
|----------|-------------|
| `moduleEntry` | Path to the module entry `.ts` file (optional, uses config default) |

**Options:**
| Option | Description |
|--------|-------------|
| `--targets`, `-t` | Target platforms to build for |
| `--cleanBuild` | Clean the JS build directory before building |
| `--cleanNative` | Clean the native build directories before building |
| `--clean` | Clean both JS and native build directories |
| `--debug` | Enable debug mode (verbose logging, no progress bar) |
| `--configuration`, `-c` | Path to configuration file |
| `--rootPath`, `--cwd` | Project root path |

**Example:**
```bash
# Build for all configured targets
npx @useless-media/useless-ts-native build

# Build only for Kotlin with clean build
npx @useless-media/useless-ts-native build --targets kotlin --cleanBuild

# Build specific entry file
npx @useless-media/useless-ts-native build src/ts/MyModule.ts
```

---

### `clean` — Clean Build Artifacts

Removes generated files from the build directory.

```bash
npx @useless-media/useless-ts-native clean [options]
```

This command respects the `cleanBuildDirectory` and `cleanNativeBuildDirectory` configuration options.

---

## Configuration

Configuration is stored in `.useless-ts-native.ts` at your project root.

### Configuration Schema

```typescript
interface TsNativeConfiguration {
  // Build settings
  buildDirectory?: string;        // Default: '.ts-native-build/'
  cleanBuildDirectory?: boolean;  // Clean JS build on each run
  cleanNativeBuildDirectory?: boolean; // Clean native build on each run
  debug?: boolean;                // Enable verbose logging
  rootPath?: string;              // Project root (usually auto-detected)

  // Module settings
  moduleEntry: string;            // Path to entry TypeScript file
  moduleName: string;             // Name of the module

  // Package information
  packageInformation: {
    version: string;
    packages: {
      kotlin?: {
        name: string;           // e.g., 'com.example:my-module'
        namespace: string;      // e.g., 'com.example.mymodule'
        imports?: string[];     // Additional Kotlin imports
      };
      swift?: {
        name: string;           // e.g., 'MyModule'
        gitPath?: string;       // Git URL for Swift package
        imports?: string[];     // Additional Swift imports
        products?: string[];    // Swift package products
      };
    };
  };

  // Dependencies & targets
  dependencies?: string[];        // JS dependencies to include
  targets: ('kotlin' | 'swift')[]; // Target platforms

  // Extensions
  customExtensions?: ExtensionInformation[]; // Custom JS Engine extensions
}
```

### Example Configuration

```typescript
import type { TsNativeConfiguration } from '@useless-media/useless-ts-native';

export default {
  targets: ['kotlin', 'swift'],
  moduleName: 'MyBusinessLogic',
  moduleEntry: 'src/ts/MyBusinessLogic.ts',
  packageInformation: {
    version: '1.0.0',
    packages: {
      kotlin: {
        name: 'com.mycompany:my-business-logic',
        namespace: 'com.mycompany.mybusinesslogic'
      },
      swift: {
        name: 'MyBusinessLogic',
        gitPath: 'https://github.com/mycompany/my-business-logic-swift'
      }
    }
  },
  dependencies: [
    '@useless-media/useless-js-engine-extension-messaging'
  ]
} as TsNativeConfiguration;
```

---

## Build Output Structure

After a successful build, the output is organized as follows:

```
.ts-native-build/
├── js/
│   ├── compiled.js          # Bundled JavaScript
│   └── types/               # Extracted type definitions
├── native/
│   ├── kotlin/
│   │   └── [gradle project] # Android library project
│   └── swift/
│       └── [swift package]  # Swift package structure
└── status.json              # Build state tracking
```

---

## Extensions

The tool supports JS Engine extensions that provide native functionality. Built-in extensions include:

- **CastExtension** — Google Cast integration
- **MessagingExtension** — Cross-platform messaging

Extensions are automatically detected from your `package.json` dependencies if they follow the naming convention `@useless-media/useless-js-engine-extension-*`.

### Custom Extensions

You can define custom extensions in your configuration:

```typescript
{
  customExtensions: [
    {
      name: 'MyExtension',
      version: '1.0.0',
      excludeDeclarations: ['IMyExtension'],
      packages: {
        js: { name: '@mycompany/my-extension' },
        kotlin: {
          name: 'com.mycompany:my-extension',
          namespace: 'com.mycompany.myextension',
          imports: ['import com.mycompany.myextension.MyExtension']
        },
        swift: {
          name: 'MyExtension',
          gitPath: 'https://github.com/mycompany/my-extension-swift',
          imports: ['import MyExtension'],
          products: ['MyExtension']
        }
      }
    }
  ]
}
```

---

## Project Templates

The tool includes project templates for scaffolding native projects:

- `kotlin-buildable-0.0.2.zip` — Android Gradle project template
- `swift-buildable-0.0.2.zip` — Swift package template

These are automatically extracted and configured when building for the first time.

---

## Troubleshooting

### Common Issues

**"No configuration file found"**
Run `npx @useless-media/useless-ts-native init` to create the configuration file.

**"ANDROID_HOME not set"**
Either:
- Set the `ANDROID_HOME` environment variable
- Create a `local.properties` file with `sdk.dir=/path/to/android/sdk`

**"moduleEntry does not exist"**
Verify the `moduleEntry` path in your configuration points to an existing TypeScript file.

**Build changes not reflected**
Try running with `--clean` flag to force a fresh build:
```bash
npx @useless-media/useless-ts-native build --clean
```

### Debug Mode

Enable debug mode for verbose output:
```bash
npx @useless-media/useless-ts-native build --debug
```

This disables the progress bar and logs each phase execution with timing information.

---

## Development Scripts

For contributors working on useless-ts-native itself:

| Script | Description |
|--------|-------------|
| `npm run build:dev` | Build for development |
| `npm run build:release` | Build for production |
| `npm run watch:dev` | Watch mode for development |
| `npm run test` | Run tests with Vitest |
| `npm run find:circular` | Check for circular dependencies |

---

## License

Part of the Useless Media ecosystem. See the repository for license details.

For more information, visit [https://useless.media](https://useless.media)

