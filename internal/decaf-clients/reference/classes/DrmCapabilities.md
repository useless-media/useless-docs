# DrmCapabilities

## Constructors

### Constructor

> **new DrmCapabilities**(): `DrmCapabilities`

#### Returns

`DrmCapabilities`

## Methods

### getRobustnessLevel()

> **getRobustnessLevel**(): `Promise`<[`RobustnessLevelResult`](reference/interfaces/RobustnessLevelResult.md)>

#### Returns

`Promise`<[`RobustnessLevelResult`](reference/interfaces/RobustnessLevelResult.md)>

***

### getSupportedHDCPVersion()

> **getSupportedHDCPVersion**(): `Promise`<[`HDCPResult`](reference/interfaces/HDCPResult.md)>

#### Returns

`Promise`<[`HDCPResult`](reference/interfaces/HDCPResult.md)>

***

### Default()

> `static` **Default**(): [`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md)

#### Returns

[`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md)

***

### Probe()

> `static` **Probe**(`tasks`): `Promise`<[`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md)>

#### Parameters

##### tasks

[`ProbingTasks`](reference/enumerations/ProbingTasks.md)[] = `...`

#### Returns

`Promise`<[`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md)>
