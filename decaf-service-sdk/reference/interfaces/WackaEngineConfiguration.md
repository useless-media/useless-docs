# WackaEngineConfiguration

## Properties

### buffering?

> **buffering**?: `Buffering`

***

### drm?

> **drm**?: `Partial`<[`DrmManagerConfiguration`](reference/interfaces/DrmManagerConfiguration.md)>

***

### language?

> **language**?: `Language`

***

### metrics?

> **metrics**?: `Partial`<[`MetricManagerConfiguration`](reference/interfaces/MetricManagerConfiguration.md)>

***

### recovery?

> **recovery**?: `Partial`<[`RecoveryManagerConfiguration`](reference/interfaces/RecoveryManagerConfiguration.md)>

***

### tracks?

> **tracks**?: `object`

#### accessibilityRoles?

> **accessibilityRoles**?: [`Roles`](reference/enumerations/Roles.md)[]

#### disableSameLanguageText?

> **disableSameLanguageText**?: `boolean`

#### matchConfiguration?

> **matchConfiguration**?: `object`

##### matchConfiguration.matchScoreThreshold?

> **matchScoreThreshold**?: `number`

##### matchConfiguration.maxMatchScore?

> **maxMatchScore**?: `number`

##### matchConfiguration.preferredAudioMatchScoreThreshold?

> **preferredAudioMatchScoreThreshold**?: `number`

##### matchConfiguration.preferredTextMatchScoreThreshold?

> **preferredTextMatchScoreThreshold**?: `number`

##### matchConfiguration.priorityDegradationFactor?

> **priorityDegradationFactor**?: `number`

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

> **selectedTrackMatchScoreThreshold**?: `number`

#### noAccessibilityTracks?

> **noAccessibilityTracks**?: `boolean`
