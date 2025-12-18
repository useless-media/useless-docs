# Useless Pawner Documentation

**Useless Pawner** is a project template packaging and spawning tool. It allows you to create reusable project templates with dynamic placeholders that can be replaced when spawning new projects.

## Overview

The tool provides three core functionalities:

1. **Manifest Generation** — Scans a project template directory and automatically detects placeholders (tokens wrapped in `__double_underscores__`), generating a `manifest.json` file.
2. **Pack** — Packages a project template directory into a `.zip` archive, ready for distribution.
3. **Unpack/Spawn** — Extracts a packaged template and interactively replaces all placeholders with user-provided values.

---

## How It Works

### Placeholder System

Useless Pawner uses a placeholder syntax with double underscores: `__placeholderName__`

These placeholders can appear in:
- File contents
- File names
- Directory names

When unpacking a template, the tool prompts the user for replacement values and substitutes all occurrences throughout the project.

**Example:**
```
// In a source file
package __namespace__.feature

class __projectName__Module {
    // ...
}
```

When unpacking, if the user provides:
- `__namespace__` → `com.example`
- `__projectName__` → `MyAwesome`

The result becomes:
```
package com.example.feature

class MyAwesomeModule {
    // ...
}
```

### The Manifest File

The `manifest.json` file is the heart of a template. It defines all the replaceable placeholders:

```json
{
  "replacers": {
    "projectName": {
      "replacer": "__projectName__",
      "description": "Replace 'projectName' with: "
    },
    "namespace": {
      "replacer": "__namespace__",
      "description": "Replace 'namespace' with: "
    }
  }
}
```

Each replacer entry contains:
- **Key**: A human-readable identifier
- **replacer**: The actual placeholder pattern to find and replace
- **description**: The prompt shown to users when unpacking

---

## Installation

```bash
npm install @useless-media/useless-pawner
```

Or use directly via npx:

```bash
npx @useless-media/useless-pawner [options]
```

---

## CLI Usage

### Generate a Manifest

Scan a template directory and generate a `manifest.json` with detected placeholders:

```bash
npx @useless-media/useless-pawner --createManifest -i ./my-template
```

**Options:**
- `-c, --createManifest` — Enable manifest generation mode
- `-i, --sourceDir` — Path to the template directory

### Pack a Template

Package a template directory into a distributable `.zip` file:

```bash
npx @useless-media/useless-pawner -i ./my-template -o ./my-template.zip
```

**Options:**
- `-i, --sourceDir` — Path to the template directory (must contain a `manifest.json`)
- `-o, --outputPath` — Output path for the `.zip` file
- `-f, --addToFolder` — Preserve full folder paths in the archive

### Unpack a Template

Extract and spawn a new project from a template, with interactive placeholder replacement:

```bash
npx @useless-media/useless-pawner -p ./my-template.zip -o ./new-project
```

**Options:**
- `-p, --packagePath` — Path to the packed template `.zip` file
- `-o, --outputPath` — Destination directory for the new project

---

## Programmatic API

You can also use Useless Pawner as a library in your Node.js projects:

```typescript
import { generateManifest, packDir, unpack, spawnProject } from '@useless-media/useless-pawner';

// Generate manifest for a template
await generateManifest('./my-template');

// Pack a template directory
await packDir('./my-template', './my-template.zip');

// Unpack with interactive prompts
await unpack('./my-template.zip', './output');

// Spawn programmatically with pre-defined replacements
await spawnProject(
  './my-template.zip',
  {
    '__projectName__': 'MyProject',
    '__namespace__': 'com.example'
  },
  './output'
);
```

### API Reference

#### `generateManifest(sourceDir: string): Promise<void>`
Scans the source directory for placeholder patterns and generates a `manifest.json` file.

#### `packDir(sourceDir: string, outputPackage: string, addToFolder?: boolean): Promise<void>`
Packs the source directory into a `.zip` file. Requires a valid `manifest.json` in the source directory.

#### `unpack(packageFile: string, outputDir: string): Promise<void>`
Extracts a packed template and prompts the user interactively for placeholder values.

#### `spawnProject(packageFile: string, replacers: Record<string, string>, outputDir: string, debug?: boolean): Promise<void>`
Extracts a packed template with pre-defined replacement values (no interactive prompts). Useful for automation and CI/CD pipelines.

---

## Creating a Template

### Step 1: Create Your Project Structure

Set up your template project with placeholder values:

```
my-template/
├── __projectName__/
│   ├── src/
│   │   └── index.ts
│   └── package.json
```

In `package.json`:
```json
{
  "name": "__projectName__",
  "version": "__version__"
}
```

### Step 2: Generate the Manifest

```bash
npx @useless-media/useless-pawner --createManifest -i ./my-template
```

This creates `manifest.json` with auto-detected placeholders.

### Step 3: Review and Customize the Manifest

Edit the generated `manifest.json` to improve descriptions:

```json
{
  "replacers": {
    "projectName": {
      "replacer": "__projectName__",
      "description": "Enter your project name: "
    },
    "version": {
      "replacer": "__version__",
      "description": "Initial version (e.g., 1.0.0): "
    }
  }
}
```

### Step 4: Pack the Template

```bash
npx @useless-media/useless-pawner -i ./my-template -o ./my-template.zip
```

---

## File Handling

### Supported Files

The tool processes all files by default, with special handling for:
- `.jar` files — Binary handling (not read as UTF-8)

### Hidden Files

By default, hidden files (starting with `.`) are ignored, **except** for common configuration files:
- `.env`, `.env.example`
- `.gitignore`
- `.npmignore`, `.npmrc`
- `.madgerc`
- `.useless-linker`, `.useless-linker-local`
- `.useless-ts-native`

### Ignored Replacers

The `VERSION` placeholder is ignored by default during manifest generation.

---

## Example: Kotlin Android Module Template

The repository includes a Kotlin Android module template as an example:

```
project-templates/kotlin/
├── manifest.json
├── build.gradle.kts
├── module/
│   └── build.gradle.kts
└── gradle/
    └── ...
```

**Manifest:**
```json
{
  "replacers": {
    "namespace": {
      "replacer": "__namespace__",
      "description": "Replace 'namespace' with: "
    },
    "groupId": {
      "replacer": "__groupId__",
      "description": "Replace 'groupId' with: "
    },
    "artifactId": {
      "replacer": "__artifactId__",
      "description": "Replace 'artifactId' with: "
    },
    "projectName": {
      "replacer": "__projectName__",
      "description": "Replace 'projectName' with: "
    }
  }
}
```

**Build and pack:**
```bash
npm run build:kotlin
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Template Directory                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │ Source Files│  │ manifest.json│  │ __placeholder__ tokens │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         packDir()                                │
│                    Creates .zip archive                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Template Package                            │
│                      (my-template.zip)                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   unpack() / spawnProject()                      │
│   1. Read manifest.json                                          │
│   2. Prompt for replacer values (or use provided values)         │
│   3. Extract files with replacements applied                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Output Project                             │
│             (All placeholders replaced with values)              │
└─────────────────────────────────────────────────────────────────┘
```

---

## License

See the root `package.json` for license information.

