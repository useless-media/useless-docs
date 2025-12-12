# WackaEngineConfiguration

## Extended by

- [`EnsuredWackaEngineConfiguration`](reference/interfaces/EnsuredWackaEngineConfiguration.md)

## Properties

### buffering?

> **buffering**?: [`Buffering`](reference/interfaces/Buffering.md)

***

### drm?

> **drm**?: `Partial`<[`DrmManagerConfiguration`](reference/classes/DrmManagerConfiguration.md)>

***

### language?

> **language**?: [`Language`](reference/interfaces/Language.md)

***

### metrics?

> **metrics**?: `Partial`<[`MetricManagerConfiguration`](reference/classes/MetricManagerConfiguration.md)>

***

### recovery?

> **recovery**?: `Partial`<[`RecoveryManagerConfiguration`](reference/classes/RecoveryManagerConfiguration.md)>

***

### tracks?

> **tracks**?: `object`

#### accessibilityRoles?

> **accessibilityRoles**?: `Roles`[]

#### disableSameLanguageText?

> **disableSameLanguageText**?: `boolean` = `true`

#### matchConfiguration?

> **matchConfiguration**?: `object`

##### matchConfiguration.matchScoreThreshold?

> **matchScoreThreshold**?: `number` = `15`

##### matchConfiguration.maxMatchScore?

> **maxMatchScore**?: `number` = `50`

##### matchConfiguration.preferredAudioMatchScoreThreshold?

> **preferredAudioMatchScoreThreshold**?: `number` = `0`

##### matchConfiguration.preferredTextMatchScoreThreshold?

> **preferredTextMatchScoreThreshold**?: `number` = `30`

##### matchConfiguration.priorityDegradationFactor?

> **priorityDegradationFactor**?: `number` = `5`

##### matchConfiguration.roleMatchValue?

> **roleMatchValue**?: `object`

##### matchConfiguration.roleMatchValue.alternate?

> **alternate**?: `number`

##### matchConfiguration.roleMatchValue.caption?

> **caption**?: `number`

##### matchConfiguration.roleMatchValue.commentary?

> **commentary**?: `number`

##### matchConfiguration.roleMatchValue.description?

> **description**?: `number`

##### matchConfiguration.roleMatchValue.dub?

> **dub**?: `number`

##### matchConfiguration.roleMatchValue.easyreader?

> **easyreader**?: `number`

##### matchConfiguration.roleMatchValue.emergency?

> **emergency**?: `number`

##### matchConfiguration.roleMatchValue.enhanced-audio-intelligibility?

> **enhanced-audio-intelligibility**?: `number`

##### matchConfiguration.roleMatchValue.forced-subtitle?

> **forced-subtitle**?: `number`

##### matchConfiguration.roleMatchValue.main?

> **main**?: `number`

##### matchConfiguration.roleMatchValue.metadata?

> **metadata**?: `number`

##### matchConfiguration.roleMatchValue.sign?

> **sign**?: `number`

##### matchConfiguration.roleMatchValue.subtitle?

> **subtitle**?: `number`

##### matchConfiguration.roleMatchValue.supplementary?

> **supplementary**?: `number`

##### matchConfiguration.selectedTrackMatchScoreThreshold?

> **selectedTrackMatchScoreThreshold**?: `number` = `50`

#### noAccessibilityTracks?

> **noAccessibilityTracks**?: `boolean` = `false`
