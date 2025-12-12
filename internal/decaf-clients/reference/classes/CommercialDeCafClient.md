# CommercialDeCafClient

Note: Intentionally implementing instead of extending so we can use type-only imports from decaf for better treeshaking

## Extends

- [`DeCafClientBase`](DeCafClientBase.md)<[`CommercialDeCafClientConfiguration`](reference/interfaces/CommercialDeCafClientConfiguration.md)>

## Constructors

### Constructor

> **new CommercialDeCafClient**(`deCaf`, `configuration`): `CommercialDeCafClient`

#### Parameters

##### deCaf

`DeCaf`

##### configuration

[`CommercialDeCafClientConfiguration`](reference/interfaces/CommercialDeCafClientConfiguration.md)

#### Returns

`CommercialDeCafClient`

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`constructor`](DeCafClientBase.md#constructor)

## Properties

### activityMonitor

> `readonly` **activityMonitor**: [`ActivityMonitor`](reference/classes/ActivityMonitor.md)

***

### communicationChannel

> `protected` `readonly` **communicationChannel**: `ICommunicationChannel`<[`DeCafClientCommunicationChannelEventList`](reference/interfaces/DeCafClientCommunicationChannelEventList.md)>

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`communicationChannel`](DeCafClientBase.md#communicationchannel)

***

### configuration

> `protected` **configuration**: [`CommercialDeCafClientConfiguration`](reference/interfaces/CommercialDeCafClientConfiguration.md)

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`configuration`](DeCafClientBase.md#configuration)

***

### container

> `protected` `readonly` **container**: `HTMLDivElement`

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`container`](DeCafClientBase.md#container)

***

### deCaf

> `protected` `readonly` **deCaf**: `DeCaf`

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`deCaf`](DeCafClientBase.md#decaf)

***

### drmCapabilities

> **drmCapabilities**: [`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md)

***

### errorManager

> `readonly` **errorManager**: `ErrorManager`

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`errorManager`](DeCafClientBase.md#errormanager)

***

### mediaElement

> `protected` `readonly` **mediaElement**: `HTMLMediaElement`

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`mediaElement`](DeCafClientBase.md#mediaelement)

***

### playbackSession?

> **playbackSession**?: `PlaybackSession`

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`playbackSession`](DeCafClientBase.md#playbacksession)

***

### serviceLayer

> `protected` **serviceLayer**: `ILazyFeature`<[`ServiceLayer`](ServiceLayer.md), [`ServiceLayerArgs`](reference/interfaces/ServiceLayerArgs.md)>

***

### timeline

> `readonly` **timeline**: [`TimelineManager`](reference/classes/TimelineManager.md)

***

### trackerCollection

> `readonly` **trackerCollection**: [`TrackerCollection`](reference/classes/TrackerCollection.md)

***

### uiController?

> **uiController**?: `DecafClientUIController`

***

### wacka

> `readonly` **wacka**: `WackaPlayer`

## Methods

### getClientInformation()

> **getClientInformation**(): [`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

#### Returns

[`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`getClientInformation`](DeCafClientBase.md#getclientinformation)

***

### handleConfigure()

> **handleConfigure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

###### components?

{ `activityMonitor?`: { `enabled?`: `boolean`; `inactivityTimeoutThresholdInMinutes?`: `number`; `probeFrequencyInSeconds?`: `number`; }; `timeline?`: { `liveAdvertisementBreakHistoryLimit?`: `number`; `minimumSeekableRangeDuration?`: `number`; `prepareNextContentDelay?`: `number`; `useEpochTimeForLive?`: `boolean`; }; `wacka?`: { `engine?`: { `buffering?`: { `ahead?`: `number`; `behind?`: `number`; }; `drm?`: { `supportedProtectionSystems?`: ...[]; }; `language?`: { `preferred?`: { `audio?`: ...; `audioRoles?`: ...; `text?`: ...; `textRoles?`: ...; }; }; `metrics?`: { `downloadRatioAggregatorSamples?`: `number`; `downloadTimeAggregatorSamples?`: `number`; `enabled?`: `boolean`; `interval?`: `number`; `liveEdgeOffsetAggregatorSamples?`: `number`; `liveOffsetAggregatorSamples?`: `number`; `maxBufferStalls?`: `number`; `mode?`: `MetricManagerMode`; `networkAggregatorSamples?`: `number`; `timeSeriesLength?`: `number`; }; `recovery?`: { `enabled?`: `boolean`; }; `tracks?`: { `accessibilityRoles?`: ...[]; `disableSameLanguageText?`: `boolean`; `matchConfiguration?`: { `matchScoreThreshold?`: ...; `maxMatchScore?`: ...; `preferredAudioMatchScoreThreshold?`: ...; `preferredTextMatchScoreThreshold?`: ...; `priorityDegradationFactor?`: ...; `roleMatchValue?`: ...; `selectedTrackMatchScoreThreshold?`: ...; }; `noAccessibilityTracks?`: `boolean`; }; }; `player?`: { `advertisement?`: { `controller?`: { `autoSkipBreaks?`: ...; `enforceCsai?`: ...; `keepLiveAdvertisementBreakHistory?`: ...; `liveAdvertisementBreakHistoryLimit?`: ...; }; `handlers?`: {[`key`: ...]: ...; `ima?`: ...; `yospace?`: ...; }; }; }; `playerArgs?`: { `advertisementHandlers?`: {[`key`: `string`]: `AdvertisementHandlerConstructor` | `undefined`; }; `configuration?`: { `advertisement?`: { `controller?`: ...; `handlers?`: ...; }; }; `engineConfiguration?`: { `buffering?`: { `ahead?`: ...; `behind?`: ...; }; `drm?`: { `supportedProtectionSystems?`: ...; }; `language?`: { `preferred?`: ...; }; `metrics?`: { `downloadRatioAggregatorSamples?`: ...; `downloadTimeAggregatorSamples?`: ...; `enabled?`: ...; `interval?`: ...; `liveEdgeOffsetAggregatorSamples?`: ...; `liveOffsetAggregatorSamples?`: ...; `maxBufferStalls?`: ...; `mode?`: ...; `networkAggregatorSamples?`: ...; `timeSeriesLength?`: ...; }; `recovery?`: { `enabled?`: ...; }; `tracks?`: { `accessibilityRoles?`: ...; `disableSameLanguageText?`: ...; `matchConfiguration?`: ...; `noAccessibilityTracks?`: ...; }; }; `hls?`: { `Hls?`: *typeof* `Hls`; }; `logger?`: { `debug?`: (...`data`) => ...; `debugVerbose?`: (...`data`) => ...; `error?`: (...`data`) => ...; `getLevel?`: () => ...; `info?`: (...`data`) => ...; `log?`: (...`data`) => ...; `logAtLevel?`: (`level`, ...`data`) => ...; `setImplementation?`: (`implementation`) => ...; `setLevel?`: (`level`) => ...; `warn?`: (...`data`) => ...; }; `logLevel?`: `LogLevels`; `mediaElement?`: { `accessKey?`: `string`; `accessKeyLabel?`: `string`; `addEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `addTextTrack?`: (`kind`, `label?`, `language?`) => ...; `after?`: (...`nodes`) => ...; `animate?`: (`keyframes`, `options?`) => ...; `append?`: (...`nodes`) => ...; `appendChild?`: <`T`>(`node`) => ...; `ariaActiveDescendantElement?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `ariaAtomic?`: `string` | `null`; `ariaAutoComplete?`: `string` | `null`; `ariaBrailleLabel?`: `string` | `null`; `ariaBrailleRoleDescription?`: `string` | `null`; `ariaBusy?`: `string` | `null`; `ariaChecked?`: `string` | `null`; `ariaColCount?`: `string` | `null`; `ariaColIndex?`: `string` | `null`; `ariaColIndexText?`: `string` | `null`; `ariaColSpan?`: `string` | `null`; `ariaControlsElements?`: readonly ...[] | `null`; `ariaCurrent?`: `string` | `null`; `ariaDescribedByElements?`: readonly ...[] | `null`; `ariaDescription?`: `string` | `null`; `ariaDetailsElements?`: readonly ...[] | `null`; `ariaDisabled?`: `string` | `null`; `ariaErrorMessageElements?`: readonly ...[] | `null`; `ariaExpanded?`: `string` | `null`; `ariaFlowToElements?`: readonly ...[] | `null`; `ariaHasPopup?`: `string` | `null`; `ariaHidden?`: `string` | `null`; `ariaInvalid?`: `string` | `null`; `ariaKeyShortcuts?`: `string` | `null`; `ariaLabel?`: `string` | `null`; `ariaLabelledByElements?`: readonly ...[] | `null`; `ariaLevel?`: `string` | `null`; `ariaLive?`: `string` | `null`; `ariaModal?`: `string` | `null`; `ariaMultiLine?`: `string` | `null`; `ariaMultiSelectable?`: `string` | `null`; `ariaOrientation?`: `string` | `null`; `ariaOwnsElements?`: readonly ...[] | `null`; `ariaPlaceholder?`: `string` | `null`; `ariaPosInSet?`: `string` | `null`; `ariaPressed?`: `string` | `null`; `ariaReadOnly?`: `string` | `null`; `ariaRelevant?`: `string` | `null`; `ariaRequired?`: `string` | `null`; `ariaRoleDescription?`: `string` | `null`; `ariaRowCount?`: `string` | `null`; `ariaRowIndex?`: `string` | `null`; `ariaRowIndexText?`: `string` | `null`; `ariaRowSpan?`: `string` | `null`; `ariaSelected?`: `string` | `null`; `ariaSetSize?`: `string` | `null`; `ariaSort?`: `string` | `null`; `ariaValueMax?`: `string` | `null`; `ariaValueMin?`: `string` | `null`; `ariaValueNow?`: `string` | `null`; `ariaValueText?`: `string` | `null`; `assignedSlot?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assign?`: ...; `assignedElements?`: ...; `assignedNodes?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `name?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `attachInternals?`: () => ...; `attachShadow?`: (`init`) => ...; `ATTRIBUTE_NODE?`: `2`; `attributes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `getNamedItem?`: ...; `getNamedItemNS?`: ...; `item?`: ...; `length?`: ...; `removeNamedItem?`: ...; `removeNamedItemNS?`: ...; `setNamedItem?`: ...; `setNamedItemNS?`: ...; }; `attributeStyleMap?`: `ReadonlyMap`<..., ...>; `autocapitalize?`: `string`; `autocorrect?`: `boolean`; `autofocus?`: `boolean`; `autoplay?`: `boolean`; `baseURI?`: `string`; `before?`: (...`nodes`) => ...; `blur?`: () => ...; `buffered?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `canPlayType?`: (`type`) => ...; `CDATA_SECTION_NODE?`: `4`; `checkVisibility?`: (`options?`) => ...; `childElementCount?`: `number`; `childNodes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `values?`: ...; }; `children?`: {[`key`: ...]: ...; `[iterator]?`: ...; `item?`: ...; `length?`: ...; `namedItem?`: ...; }; `classList?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `className?`: `string`; `click?`: () => ...; `clientHeight?`: `number`; `clientLeft?`: `number`; `clientTop?`: `number`; `clientWidth?`: `number`; `cloneNode?`: (`subtree?`) => ...; `closest?`: {<`K`>(`selector`): ...; <`K`>(`selector`): ...; <`K`>(`selector`): ...; <`E`>(`selectors`): ...; }; `COMMENT_NODE?`: `8`; `compareDocumentPosition?`: (`other`) => ...; `computedStyleMap?`: () => ...; `contains?`: (`other`) => ...; `contentEditable?`: `string`; `controls?`: `boolean`; `crossOrigin?`: `string` | `null`; `currentCSSZoom?`: `number`; `currentSrc?`: `string`; `currentTime?`: `number`; `dataset?`: {[`key`: ...]: ...; }; `defaultMuted?`: `boolean`; `defaultPlaybackRate?`: `number`; `dir?`: `string`; `disableRemotePlayback?`: `boolean`; `dispatchEvent?`: (`event`) => ...; `DOCUMENT_FRAGMENT_NODE?`: `11`; `DOCUMENT_NODE?`: `9`; `DOCUMENT_POSITION_CONTAINED_BY?`: `16`; `DOCUMENT_POSITION_CONTAINS?`: `8`; `DOCUMENT_POSITION_DISCONNECTED?`: `1`; `DOCUMENT_POSITION_FOLLOWING?`: `4`; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: `32`; `DOCUMENT_POSITION_PRECEDING?`: `2`; `DOCUMENT_TYPE_NODE?`: `10`; `draggable?`: `boolean`; `duration?`: `number`; `ELEMENT_NODE?`: `1`; `ended?`: `boolean`; `enterKeyHint?`: `string`; `ENTITY_NODE?`: `6`; `ENTITY_REFERENCE_NODE?`: `5`; `error?`: { `code?`: ...; `MEDIA_ERR_ABORTED?`: ...; `MEDIA_ERR_DECODE?`: ...; `MEDIA_ERR_NETWORK?`: ...; `MEDIA_ERR_SRC_NOT_SUPPORTED?`: ...; `message?`: ...; } | `null`; `fastSeek?`: (`time`) => ...; `firstChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `firstElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `focus?`: (`options?`) => ...; `getAnimations?`: (`options?`) => ...; `getAttribute?`: (`qualifiedName`) => ...; `getAttributeNames?`: () => ...; `getAttributeNode?`: (`qualifiedName`) => ...; `getAttributeNodeNS?`: (`namespace`, `localName`) => ...; `getAttributeNS?`: (`namespace`, `localName`) => ...; `getBoundingClientRect?`: () => ...; `getClientRects?`: () => ...; `getElementsByClassName?`: (`classNames`) => ...; `getElementsByTagName?`: {<`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; (`qualifiedName`): ...; }; `getElementsByTagNameNS?`: {(`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespace`, `localName`): ...; }; `getHTML?`: (`options?`) => ...; `getRootNode?`: (`options?`) => ...; `hasAttribute?`: (`qualifiedName`) => ...; `hasAttributeNS?`: (`namespace`, `localName`) => ...; `hasAttributes?`: () => ...; `hasChildNodes?`: () => ...; `hasPointerCapture?`: (`pointerId`) => ...; `HAVE_CURRENT_DATA?`: `2`; `HAVE_ENOUGH_DATA?`: `4`; `HAVE_FUTURE_DATA?`: `3`; `HAVE_METADATA?`: `1`; `HAVE_NOTHING?`: `0`; `hidden?`: `boolean`; `hidePopover?`: () => ...; `id?`: `string`; `inert?`: `boolean`; `innerHTML?`: `string`; `innerText?`: `string`; `inputMode?`: `string`; `insertAdjacentElement?`: (`where`, `element`) => ...; `insertAdjacentHTML?`: (`position`, `string`) => ...; `insertAdjacentText?`: (`where`, `data`) => ...; `insertBefore?`: <`T`>(`node`, `child`) => ...; `isConnected?`: `boolean`; `isContentEditable?`: `boolean`; `isDefaultNamespace?`: (`namespace`) => ...; `isEqualNode?`: (`otherNode`) => ...; `isSameNode?`: (`otherNode`) => ...; `lang?`: `string`; `lastChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `lastElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `load?`: () => ...; `localName?`: `string`; `lookupNamespaceURI?`: (`prefix`) => ...; `lookupPrefix?`: (`namespace`) => ...; `loop?`: `boolean`; `matches?`: (`selectors`) => ...; `mediaKeys?`: { `createSession?`: ...; `getStatusForPolicy?`: ...; `setServerCertificate?`: ...; } | `null`; `muted?`: `boolean`; `namespaceURI?`: `string` | `null`; `NETWORK_EMPTY?`: `0`; `NETWORK_IDLE?`: `1`; `NETWORK_LOADING?`: `2`; `NETWORK_NO_SOURCE?`: `3`; `networkState?`: `number`; `nextElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `nextSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `nodeName?`: `string`; `nodeType?`: `number`; `nodeValue?`: `string` | `null`; `nonce?`: `string`; `normalize?`: () => ...; `NOTATION_NODE?`: `12`; `offsetHeight?`: `number`; `offsetLeft?`: `number`; `offsetParent?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `offsetTop?`: `number`; `offsetWidth?`: `number`; `onabort?`: (`this`, `ev`) => ... | `null`; `onanimationcancel?`: (`this`, `ev`) => ... | `null`; `onanimationend?`: (`this`, `ev`) => ... | `null`; `onanimationiteration?`: (`this`, `ev`) => ... | `null`; `onanimationstart?`: (`this`, `ev`) => ... | `null`; `onauxclick?`: (`this`, `ev`) => ... | `null`; `onbeforeinput?`: (`this`, `ev`) => ... | `null`; `onbeforematch?`: (`this`, `ev`) => ... | `null`; `onbeforetoggle?`: (`this`, `ev`) => ... | `null`; `onblur?`: (`this`, `ev`) => ... | `null`; `oncancel?`: (`this`, `ev`) => ... | `null`; `oncanplay?`: (`this`, `ev`) => ... | `null`; `oncanplaythrough?`: (`this`, `ev`) => ... | `null`; `onchange?`: (`this`, `ev`) => ... | `null`; `onclick?`: (`this`, `ev`) => ... | `null`; `onclose?`: (`this`, `ev`) => ... | `null`; `oncontextlost?`: (`this`, `ev`) => ... | `null`; `oncontextmenu?`: (`this`, `ev`) => ... | `null`; `oncontextrestored?`: (`this`, `ev`) => ... | `null`; `oncopy?`: (`this`, `ev`) => ... | `null`; `oncuechange?`: (`this`, `ev`) => ... | `null`; `oncut?`: (`this`, `ev`) => ... | `null`; `ondblclick?`: (`this`, `ev`) => ... | `null`; `ondrag?`: (`this`, `ev`) => ... | `null`; `ondragend?`: (`this`, `ev`) => ... | `null`; `ondragenter?`: (`this`, `ev`) => ... | `null`; `ondragleave?`: (`this`, `ev`) => ... | `null`; `ondragover?`: (`this`, `ev`) => ... | `null`; `ondragstart?`: (`this`, `ev`) => ... | `null`; `ondrop?`: (`this`, `ev`) => ... | `null`; `ondurationchange?`: (`this`, `ev`) => ... | `null`; `onemptied?`: (`this`, `ev`) => ... | `null`; `onencrypted?`: (`this`, `ev`) => ... | `null`; `onended?`: (`this`, `ev`) => ... | `null`; `onerror?`: `OnErrorEventHandler`; `onfocus?`: (`this`, `ev`) => ... | `null`; `onformdata?`: (`this`, `ev`) => ... | `null`; `onfullscreenchange?`: (`this`, `ev`) => ... | `null`; `onfullscreenerror?`: (`this`, `ev`) => ... | `null`; `ongotpointercapture?`: (`this`, `ev`) => ... | `null`; `oninput?`: (`this`, `ev`) => ... | `null`; `oninvalid?`: (`this`, `ev`) => ... | `null`; `onkeydown?`: (`this`, `ev`) => ... | `null`; `onkeypress?`: (`this`, `ev`) => ... | `null`; `onkeyup?`: (`this`, `ev`) => ... | `null`; `onload?`: (`this`, `ev`) => ... | `null`; `onloadeddata?`: (`this`, `ev`) => ... | `null`; `onloadedmetadata?`: (`this`, `ev`) => ... | `null`; `onloadstart?`: (`this`, `ev`) => ... | `null`; `onlostpointercapture?`: (`this`, `ev`) => ... | `null`; `onmousedown?`: (`this`, `ev`) => ... | `null`; `onmouseenter?`: (`this`, `ev`) => ... | `null`; `onmouseleave?`: (`this`, `ev`) => ... | `null`; `onmousemove?`: (`this`, `ev`) => ... | `null`; `onmouseout?`: (`this`, `ev`) => ... | `null`; `onmouseover?`: (`this`, `ev`) => ... | `null`; `onmouseup?`: (`this`, `ev`) => ... | `null`; `onpaste?`: (`this`, `ev`) => ... | `null`; `onpause?`: (`this`, `ev`) => ... | `null`; `onplay?`: (`this`, `ev`) => ... | `null`; `onplaying?`: (`this`, `ev`) => ... | `null`; `onpointercancel?`: (`this`, `ev`) => ... | `null`; `onpointerdown?`: (`this`, `ev`) => ... | `null`; `onpointerenter?`: (`this`, `ev`) => ... | `null`; `onpointerleave?`: (`this`, `ev`) => ... | `null`; `onpointermove?`: (`this`, `ev`) => ... | `null`; `onpointerout?`: (`this`, `ev`) => ... | `null`; `onpointerover?`: (`this`, `ev`) => ... | `null`; `onpointerrawupdate?`: (`this`, `ev`) => ... | `null`; `onpointerup?`: (`this`, `ev`) => ... | `null`; `onprogress?`: (`this`, `ev`) => ... | `null`; `onratechange?`: (`this`, `ev`) => ... | `null`; `onreset?`: (`this`, `ev`) => ... | `null`; `onresize?`: (`this`, `ev`) => ... | `null`; `onscroll?`: (`this`, `ev`) => ... | `null`; `onscrollend?`: (`this`, `ev`) => ... | `null`; `onsecuritypolicyviolation?`: (`this`, `ev`) => ... | `null`; `onseeked?`: (`this`, `ev`) => ... | `null`; `onseeking?`: (`this`, `ev`) => ... | `null`; `onselect?`: (`this`, `ev`) => ... | `null`; `onselectionchange?`: (`this`, `ev`) => ... | `null`; `onselectstart?`: (`this`, `ev`) => ... | `null`; `onslotchange?`: (`this`, `ev`) => ... | `null`; `onstalled?`: (`this`, `ev`) => ... | `null`; `onsubmit?`: (`this`, `ev`) => ... | `null`; `onsuspend?`: (`this`, `ev`) => ... | `null`; `ontimeupdate?`: (`this`, `ev`) => ... | `null`; `ontoggle?`: (`this`, `ev`) => ... | `null`; `ontouchcancel?`: (`this`, `ev`) => ... | `null`; `ontouchend?`: (`this`, `ev`) => ... | `null`; `ontouchmove?`: (`this`, `ev`) => ... | `null`; `ontouchstart?`: (`this`, `ev`) => ... | `null`; `ontransitioncancel?`: (`this`, `ev`) => ... | `null`; `ontransitionend?`: (`this`, `ev`) => ... | `null`; `ontransitionrun?`: (`this`, `ev`) => ... | `null`; `ontransitionstart?`: (`this`, `ev`) => ... | `null`; `onvolumechange?`: (`this`, `ev`) => ... | `null`; `onwaiting?`: (`this`, `ev`) => ... | `null`; `onwaitingforkey?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationend?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationiteration?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationstart?`: (`this`, `ev`) => ... | `null`; `onwebkittransitionend?`: (`this`, `ev`) => ... | `null`; `onwheel?`: (`this`, `ev`) => ... | `null`; `outerHTML?`: `string`; `outerText?`: `string`; `ownerDocument?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `adoptNode?`: ...; `alinkColor?`: ...; `all?`: ...; `anchors?`: ...; `append?`: ...; `appendChild?`: ...; `applets?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `bgColor?`: ...; `body?`: ...; `captureEvents?`: ...; `caretPositionFromPoint?`: ...; `caretRangeFromPoint?`: ...; `CDATA_SECTION_NODE?`: ...; `characterSet?`: ...; `charset?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clear?`: ...; `cloneNode?`: ...; `close?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `compatMode?`: ...; `contains?`: ...; `contentType?`: ...; `cookie?`: ...; `createAttribute?`: ...; `createAttributeNS?`: ...; `createCDATASection?`: ...; `createComment?`: ...; `createDocumentFragment?`: ...; `createElement?`: ...; `createElementNS?`: ...; `createEvent?`: ...; `createExpression?`: ...; `createNodeIterator?`: ...; `createNSResolver?`: ...; `createProcessingInstruction?`: ...; `createRange?`: ...; `createTextNode?`: ...; `createTreeWalker?`: ...; `currentScript?`: ...; `defaultView?`: ...; `designMode?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `doctype?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `documentElement?`: ...; `documentURI?`: ...; `domain?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `embeds?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `evaluate?`: ...; `execCommand?`: ...; `exitFullscreen?`: ...; `exitPictureInPicture?`: ...; `exitPointerLock?`: ...; `fgColor?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fonts?`: ...; `forms?`: ...; `fragmentDirective?`: ...; `fullscreen?`: ...; `fullscreenElement?`: ...; `fullscreenEnabled?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getElementsByClassName?`: ...; `getElementsByName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getRootNode?`: ...; `getSelection?`: ...; `hasChildNodes?`: ...; `hasFocus?`: ...; `hasStorageAccess?`: ...; `head?`: ...; `hidden?`: ...; `images?`: ...; `implementation?`: ...; `importNode?`: ...; `inputEncoding?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lastModified?`: ...; `linkColor?`: ...; `links?`: ...; `location?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointerlockchange?`: ...; `onpointerlockerror?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreadystatechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvisibilitychange?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `open?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pictureInPictureEnabled?`: ...; `plugins?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `queryCommandEnabled?`: ...; `queryCommandIndeterm?`: ...; `queryCommandState?`: ...; `queryCommandSupported?`: ...; `queryCommandValue?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `readyState?`: ...; `referrer?`: ...; `releaseEvents?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `requestStorageAccess?`: ...; `rootElement?`: ...; `scripts?`: ...; `scrollingElement?`: ...; `startViewTransition?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `timeline?`: ...; `title?`: ...; `URL?`: ...; `visibilityState?`: ...; `vlinkColor?`: ...; `write?`: ...; `writeln?`: ...; }; `parentElement?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `parentNode?`: { `addEventListener?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `part?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `pause?`: () => ...; `paused?`: `boolean`; `play?`: () => ...; `playbackRate?`: `number`; `played?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `popover?`: `string` | `null`; `prefix?`: `string` | `null`; `preload?`: `""` | `"metadata"` | `"none"` | `"auto"`; `prepend?`: (...`nodes`) => ...; `preservesPitch?`: `boolean`; `previousElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `previousSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `PROCESSING_INSTRUCTION_NODE?`: `7`; `querySelector?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `querySelectorAll?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `readyState?`: `number`; `releasePointerCapture?`: (`pointerId`) => ...; `remote?`: { `addEventListener?`: ...; `cancelWatchAvailability?`: ...; `dispatchEvent?`: ...; `onconnect?`: ...; `onconnecting?`: ...; `ondisconnect?`: ...; `prompt?`: ...; `removeEventListener?`: ...; `state?`: ...; `watchAvailability?`: ...; }; `remove?`: () => ...; `removeAttribute?`: (`qualifiedName`) => ...; `removeAttributeNode?`: (`attr`) => ...; `removeAttributeNS?`: (`namespace`, `localName`) => ...; `removeChild?`: <`T`>(`child`) => ...; `removeEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `replaceChild?`: <`T`>(`node`, `child`) => ...; `replaceChildren?`: (...`nodes`) => ...; `replaceWith?`: (...`nodes`) => ...; `requestFullscreen?`: (`options?`) => ...; `requestPointerLock?`: (`options?`) => ...; `role?`: `string` | `null`; `scroll?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollBy?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollHeight?`: `number`; `scrollIntoView?`: (`arg?`) => ...; `scrollLeft?`: `number`; `scrollTo?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollTop?`: `number`; `scrollWidth?`: `number`; `seekable?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `seeking?`: `boolean`; `setAttribute?`: (`qualifiedName`, `value`) => ...; `setAttributeNode?`: (`attr`) => ...; `setAttributeNodeNS?`: (`attr`) => ...; `setAttributeNS?`: (`namespace`, `qualifiedName`, `value`) => ...; `setHTMLUnsafe?`: (`html`) => ...; `setMediaKeys?`: (`mediaKeys`) => ...; `setPointerCapture?`: (`pointerId`) => ...; `setSinkId?`: (`sinkId`) => ...; `shadowRoot?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clonable?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `delegatesFocus?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fullscreenElement?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `host?`: ...; `innerHTML?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `mode?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onslotchange?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `serializable?`: ...; `setHTMLUnsafe?`: ...; `slotAssignment?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `showPopover?`: () => ...; `sinkId?`: `string`; `slot?`: `string`; `spellcheck?`: `boolean`; `src?`: `string`; `srcObject?`: { `active?`: ...; `addEventListener?`: ...; `addTrack?`: ...; `clone?`: ...; `dispatchEvent?`: ...; `getAudioTracks?`: ...; `getTrackById?`: ...; `getTracks?`: ...; `getVideoTracks?`: ...; `id?`: ...; `onaddtrack?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; `removeTrack?`: ...; } | { `activeSourceBuffers?`: ...; `addEventListener?`: ...; `addSourceBuffer?`: ...; `clearLiveSeekableRange?`: ...; `dispatchEvent?`: ...; `duration?`: ...; `endOfStream?`: ...; `onsourceclose?`: ...; `onsourceended?`: ...; `onsourceopen?`: ...; `readyState?`: ...; `removeEventListener?`: ...; `removeSourceBuffer?`: ...; `setLiveSeekableRange?`: ...; `sourceBuffers?`: ...; } | { `arrayBuffer?`: ...; `bytes?`: ...; `size?`: ...; `slice?`: ...; `stream?`: ...; `text?`: ...; `type?`: ...; } | `null`; `style?`: {[`key`: ...]: ...; `[iterator]?`: ...; `accentColor?`: ...; `alignContent?`: ...; `alignItems?`: ...; `alignmentBaseline?`: ...; `alignSelf?`: ...; `all?`: ...; `animation?`: ...; `animationComposition?`: ...; `animationDelay?`: ...; `animationDirection?`: ...; `animationDuration?`: ...; `animationFillMode?`: ...; `animationIterationCount?`: ...; `animationName?`: ...; `animationPlayState?`: ...; `animationTimingFunction?`: ...; `appearance?`: ...; `aspectRatio?`: ...; `backdropFilter?`: ...; `backfaceVisibility?`: ...; `background?`: ...; `backgroundAttachment?`: ...; `backgroundBlendMode?`: ...; `backgroundClip?`: ...; `backgroundColor?`: ...; `backgroundImage?`: ...; `backgroundOrigin?`: ...; `backgroundPosition?`: ...; `backgroundPositionX?`: ...; `backgroundPositionY?`: ...; `backgroundRepeat?`: ...; `backgroundSize?`: ...; `baselineShift?`: ...; `baselineSource?`: ...; `blockSize?`: ...; `border?`: ...; `borderBlock?`: ...; `borderBlockColor?`: ...; `borderBlockEnd?`: ...; `borderBlockEndColor?`: ...; `borderBlockEndStyle?`: ...; `borderBlockEndWidth?`: ...; `borderBlockStart?`: ...; `borderBlockStartColor?`: ...; `borderBlockStartStyle?`: ...; `borderBlockStartWidth?`: ...; `borderBlockStyle?`: ...; `borderBlockWidth?`: ...; `borderBottom?`: ...; `borderBottomColor?`: ...; `borderBottomLeftRadius?`: ...; `borderBottomRightRadius?`: ...; `borderBottomStyle?`: ...; `borderBottomWidth?`: ...; `borderCollapse?`: ...; `borderColor?`: ...; `borderEndEndRadius?`: ...; `borderEndStartRadius?`: ...; `borderImage?`: ...; `borderImageOutset?`: ...; `borderImageRepeat?`: ...; `borderImageSlice?`: ...; `borderImageSource?`: ...; `borderImageWidth?`: ...; `borderInline?`: ...; `borderInlineColor?`: ...; `borderInlineEnd?`: ...; `borderInlineEndColor?`: ...; `borderInlineEndStyle?`: ...; `borderInlineEndWidth?`: ...; `borderInlineStart?`: ...; `borderInlineStartColor?`: ...; `borderInlineStartStyle?`: ...; `borderInlineStartWidth?`: ...; `borderInlineStyle?`: ...; `borderInlineWidth?`: ...; `borderLeft?`: ...; `borderLeftColor?`: ...; `borderLeftStyle?`: ...; `borderLeftWidth?`: ...; `borderRadius?`: ...; `borderRight?`: ...; `borderRightColor?`: ...; `borderRightStyle?`: ...; `borderRightWidth?`: ...; `borderSpacing?`: ...; `borderStartEndRadius?`: ...; `borderStartStartRadius?`: ...; `borderStyle?`: ...; `borderTop?`: ...; `borderTopColor?`: ...; `borderTopLeftRadius?`: ...; `borderTopRightRadius?`: ...; `borderTopStyle?`: ...; `borderTopWidth?`: ...; `borderWidth?`: ...; `bottom?`: ...; `boxDecorationBreak?`: ...; `boxShadow?`: ...; `boxSizing?`: ...; `breakAfter?`: ...; `breakBefore?`: ...; `breakInside?`: ...; `captionSide?`: ...; `caretColor?`: ...; `clear?`: ...; `clip?`: ...; `clipPath?`: ...; `clipRule?`: ...; `color?`: ...; `colorInterpolation?`: ...; `colorInterpolationFilters?`: ...; `colorScheme?`: ...; `columnCount?`: ...; `columnFill?`: ...; `columnGap?`: ...; `columnRule?`: ...; `columnRuleColor?`: ...; `columnRuleStyle?`: ...; `columnRuleWidth?`: ...; `columns?`: ...; `columnSpan?`: ...; `columnWidth?`: ...; `contain?`: ...; `container?`: ...; `containerName?`: ...; `containerType?`: ...; `containIntrinsicBlockSize?`: ...; `containIntrinsicHeight?`: ...; `containIntrinsicInlineSize?`: ...; `containIntrinsicSize?`: ...; `containIntrinsicWidth?`: ...; `content?`: ...; `contentVisibility?`: ...; `counterIncrement?`: ...; `counterReset?`: ...; `counterSet?`: ...; `cssFloat?`: ...; `cssText?`: ...; `cursor?`: ...; `cx?`: ...; `cy?`: ...; `d?`: ...; `direction?`: ...; `display?`: ...; `dominantBaseline?`: ...; `emptyCells?`: ...; `fill?`: ...; `fillOpacity?`: ...; `fillRule?`: ...; `filter?`: ...; `flex?`: ...; `flexBasis?`: ...; `flexDirection?`: ...; `flexFlow?`: ...; `flexGrow?`: ...; `flexShrink?`: ...; `flexWrap?`: ...; `float?`: ...; `floodColor?`: ...; `floodOpacity?`: ...; `font?`: ...; `fontFamily?`: ...; `fontFeatureSettings?`: ...; `fontKerning?`: ...; `fontOpticalSizing?`: ...; `fontPalette?`: ...; `fontSize?`: ...; `fontSizeAdjust?`: ...; `fontStretch?`: ...; `fontStyle?`: ...; `fontSynthesis?`: ...; `fontSynthesisSmallCaps?`: ...; `fontSynthesisStyle?`: ...; `fontSynthesisWeight?`: ...; `fontVariant?`: ...; `fontVariantAlternates?`: ...; `fontVariantCaps?`: ...; `fontVariantEastAsian?`: ...; `fontVariantLigatures?`: ...; `fontVariantNumeric?`: ...; `fontVariantPosition?`: ...; `fontVariationSettings?`: ...; `fontWeight?`: ...; `forcedColorAdjust?`: ...; `gap?`: ...; `getPropertyPriority?`: ...; `getPropertyValue?`: ...; `grid?`: ...; `gridArea?`: ...; `gridAutoColumns?`: ...; `gridAutoFlow?`: ...; `gridAutoRows?`: ...; `gridColumn?`: ...; `gridColumnEnd?`: ...; `gridColumnGap?`: ...; `gridColumnStart?`: ...; `gridGap?`: ...; `gridRow?`: ...; `gridRowEnd?`: ...; `gridRowGap?`: ...; `gridRowStart?`: ...; `gridTemplate?`: ...; `gridTemplateAreas?`: ...; `gridTemplateColumns?`: ...; `gridTemplateRows?`: ...; `height?`: ...; `hyphenateCharacter?`: ...; `hyphenateLimitChars?`: ...; `hyphens?`: ...; `imageOrientation?`: ...; `imageRendering?`: ...; `inlineSize?`: ...; `inset?`: ...; `insetBlock?`: ...; `insetBlockEnd?`: ...; `insetBlockStart?`: ...; `insetInline?`: ...; `insetInlineEnd?`: ...; `insetInlineStart?`: ...; `isolation?`: ...; `item?`: ...; `justifyContent?`: ...; `justifyItems?`: ...; `justifySelf?`: ...; `left?`: ...; `length?`: ...; `letterSpacing?`: ...; `lightingColor?`: ...; `lineBreak?`: ...; `lineHeight?`: ...; `listStyle?`: ...; `listStyleImage?`: ...; `listStylePosition?`: ...; `listStyleType?`: ...; `margin?`: ...; `marginBlock?`: ...; `marginBlockEnd?`: ...; `marginBlockStart?`: ...; `marginBottom?`: ...; `marginInline?`: ...; `marginInlineEnd?`: ...; `marginInlineStart?`: ...; `marginLeft?`: ...; `marginRight?`: ...; `marginTop?`: ...; `marker?`: ...; `markerEnd?`: ...; `markerMid?`: ...; `markerStart?`: ...; `mask?`: ...; `maskClip?`: ...; `maskComposite?`: ...; `maskImage?`: ...; `maskMode?`: ...; `maskOrigin?`: ...; `maskPosition?`: ...; `maskRepeat?`: ...; `maskSize?`: ...; `maskType?`: ...; `mathDepth?`: ...; `mathStyle?`: ...; `maxBlockSize?`: ...; `maxHeight?`: ...; `maxInlineSize?`: ...; `maxWidth?`: ...; `minBlockSize?`: ...; `minHeight?`: ...; `minInlineSize?`: ...; `minWidth?`: ...; `mixBlendMode?`: ...; `objectFit?`: ...; `objectPosition?`: ...; `offset?`: ...; `offsetAnchor?`: ...; `offsetDistance?`: ...; `offsetPath?`: ...; `offsetPosition?`: ...; `offsetRotate?`: ...; `opacity?`: ...; `order?`: ...; `orphans?`: ...; `outline?`: ...; `outlineColor?`: ...; `outlineOffset?`: ...; `outlineStyle?`: ...; `outlineWidth?`: ...; `overflow?`: ...; `overflowAnchor?`: ...; `overflowBlock?`: ...; `overflowClipMargin?`: ...; `overflowInline?`: ...; `overflowWrap?`: ...; `overflowX?`: ...; `overflowY?`: ...; `overscrollBehavior?`: ...; `overscrollBehaviorBlock?`: ...; `overscrollBehaviorInline?`: ...; `overscrollBehaviorX?`: ...; `overscrollBehaviorY?`: ...; `padding?`: ...; `paddingBlock?`: ...; `paddingBlockEnd?`: ...; `paddingBlockStart?`: ...; `paddingBottom?`: ...; `paddingInline?`: ...; `paddingInlineEnd?`: ...; `paddingInlineStart?`: ...; `paddingLeft?`: ...; `paddingRight?`: ...; `paddingTop?`: ...; `page?`: ...; `pageBreakAfter?`: ...; `pageBreakBefore?`: ...; `pageBreakInside?`: ...; `paintOrder?`: ...; `parentRule?`: ...; `perspective?`: ...; `perspectiveOrigin?`: ...; `placeContent?`: ...; `placeItems?`: ...; `placeSelf?`: ...; `pointerEvents?`: ...; `position?`: ...; `printColorAdjust?`: ...; `quotes?`: ...; `r?`: ...; `removeProperty?`: ...; `resize?`: ...; `right?`: ...; `rotate?`: ...; `rowGap?`: ...; `rubyAlign?`: ...; `rubyPosition?`: ...; `rx?`: ...; `ry?`: ...; `scale?`: ...; `scrollbarColor?`: ...; `scrollbarGutter?`: ...; `scrollbarWidth?`: ...; `scrollBehavior?`: ...; `scrollMargin?`: ...; `scrollMarginBlock?`: ...; `scrollMarginBlockEnd?`: ...; `scrollMarginBlockStart?`: ...; `scrollMarginBottom?`: ...; `scrollMarginInline?`: ...; `scrollMarginInlineEnd?`: ...; `scrollMarginInlineStart?`: ...; `scrollMarginLeft?`: ...; `scrollMarginRight?`: ...; `scrollMarginTop?`: ...; `scrollPadding?`: ...; `scrollPaddingBlock?`: ...; `scrollPaddingBlockEnd?`: ...; `scrollPaddingBlockStart?`: ...; `scrollPaddingBottom?`: ...; `scrollPaddingInline?`: ...; `scrollPaddingInlineEnd?`: ...; `scrollPaddingInlineStart?`: ...; `scrollPaddingLeft?`: ...; `scrollPaddingRight?`: ...; `scrollPaddingTop?`: ...; `scrollSnapAlign?`: ...; `scrollSnapStop?`: ...; `scrollSnapType?`: ...; `setProperty?`: ...; `shapeImageThreshold?`: ...; `shapeMargin?`: ...; `shapeOutside?`: ...; `shapeRendering?`: ...; `stopColor?`: ...; `stopOpacity?`: ...; `stroke?`: ...; `strokeDasharray?`: ...; `strokeDashoffset?`: ...; `strokeLinecap?`: ...; `strokeLinejoin?`: ...; `strokeMiterlimit?`: ...; `strokeOpacity?`: ...; `strokeWidth?`: ...; `tableLayout?`: ...; `tabSize?`: ...; `textAlign?`: ...; `textAlignLast?`: ...; `textAnchor?`: ...; `textBox?`: ...; `textBoxEdge?`: ...; `textBoxTrim?`: ...; `textCombineUpright?`: ...; `textDecoration?`: ...; `textDecorationColor?`: ...; `textDecorationLine?`: ...; `textDecorationSkipInk?`: ...; `textDecorationStyle?`: ...; `textDecorationThickness?`: ...; `textEmphasis?`: ...; `textEmphasisColor?`: ...; `textEmphasisPosition?`: ...; `textEmphasisStyle?`: ...; `textIndent?`: ...; `textOrientation?`: ...; `textOverflow?`: ...; `textRendering?`: ...; `textShadow?`: ...; `textTransform?`: ...; `textUnderlineOffset?`: ...; `textUnderlinePosition?`: ...; `textWrap?`: ...; `textWrapMode?`: ...; `textWrapStyle?`: ...; `top?`: ...; `touchAction?`: ...; `transform?`: ...; `transformBox?`: ...; `transformOrigin?`: ...; `transformStyle?`: ...; `transition?`: ...; `transitionBehavior?`: ...; `transitionDelay?`: ...; `transitionDuration?`: ...; `transitionProperty?`: ...; `transitionTimingFunction?`: ...; `translate?`: ...; `unicodeBidi?`: ...; `userSelect?`: ...; `vectorEffect?`: ...; `verticalAlign?`: ...; `viewTransitionClass?`: ...; `viewTransitionName?`: ...; `visibility?`: ...; `webkitAlignContent?`: ...; `webkitAlignItems?`: ...; `webkitAlignSelf?`: ...; `webkitAnimation?`: ...; `webkitAnimationDelay?`: ...; `webkitAnimationDirection?`: ...; `webkitAnimationDuration?`: ...; `webkitAnimationFillMode?`: ...; `webkitAnimationIterationCount?`: ...; `webkitAnimationName?`: ...; `webkitAnimationPlayState?`: ...; `webkitAnimationTimingFunction?`: ...; `webkitAppearance?`: ...; `webkitBackfaceVisibility?`: ...; `webkitBackgroundClip?`: ...; `webkitBackgroundOrigin?`: ...; `webkitBackgroundSize?`: ...; `webkitBorderBottomLeftRadius?`: ...; `webkitBorderBottomRightRadius?`: ...; `webkitBorderRadius?`: ...; `webkitBorderTopLeftRadius?`: ...; `webkitBorderTopRightRadius?`: ...; `webkitBoxAlign?`: ...; `webkitBoxFlex?`: ...; `webkitBoxOrdinalGroup?`: ...; `webkitBoxOrient?`: ...; `webkitBoxPack?`: ...; `webkitBoxShadow?`: ...; `webkitBoxSizing?`: ...; `webkitFilter?`: ...; `webkitFlex?`: ...; `webkitFlexBasis?`: ...; `webkitFlexDirection?`: ...; `webkitFlexFlow?`: ...; `webkitFlexGrow?`: ...; `webkitFlexShrink?`: ...; `webkitFlexWrap?`: ...; `webkitJustifyContent?`: ...; `webkitLineClamp?`: ...; `webkitMask?`: ...; `webkitMaskBoxImage?`: ...; `webkitMaskBoxImageOutset?`: ...; `webkitMaskBoxImageRepeat?`: ...; `webkitMaskBoxImageSlice?`: ...; `webkitMaskBoxImageSource?`: ...; `webkitMaskBoxImageWidth?`: ...; `webkitMaskClip?`: ...; `webkitMaskComposite?`: ...; `webkitMaskImage?`: ...; `webkitMaskOrigin?`: ...; `webkitMaskPosition?`: ...; `webkitMaskRepeat?`: ...; `webkitMaskSize?`: ...; `webkitOrder?`: ...; `webkitPerspective?`: ...; `webkitPerspectiveOrigin?`: ...; `webkitTextFillColor?`: ...; `webkitTextSizeAdjust?`: ...; `webkitTextStroke?`: ...; `webkitTextStrokeColor?`: ...; `webkitTextStrokeWidth?`: ...; `webkitTransform?`: ...; `webkitTransformOrigin?`: ...; `webkitTransformStyle?`: ...; `webkitTransition?`: ...; `webkitTransitionDelay?`: ...; `webkitTransitionDuration?`: ...; `webkitTransitionProperty?`: ...; `webkitTransitionTimingFunction?`: ...; `webkitUserSelect?`: ...; `whiteSpace?`: ...; `whiteSpaceCollapse?`: ...; `widows?`: ...; `width?`: ...; `willChange?`: ...; `wordBreak?`: ...; `wordSpacing?`: ...; `wordWrap?`: ...; `writingMode?`: ...; `x?`: ...; `y?`: ...; `zIndex?`: ...; `zoom?`: ...; }; `tabIndex?`: `number`; `tagName?`: `string`; `TEXT_NODE?`: `3`; `textContent?`: `string`; `textTracks?`: {[`key`: ...]: ...; `[iterator]?`: ...; `addEventListener?`: ...; `dispatchEvent?`: ...; `getTrackById?`: ...; `length?`: ...; `onaddtrack?`: ...; `onchange?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; }; `title?`: `string`; `toggleAttribute?`: (`qualifiedName`, `force?`) => ...; `togglePopover?`: (`options?`) => ...; `translate?`: `boolean`; `volume?`: `number`; `webkitMatchesSelector?`: (`selectors`) => ...; `writingSuggestions?`: `string`; }; `playbackEngineConfiguration?`: { `lazyLoadPlayers?`: `boolean`; `playbackConfigurations?`: { `hls?`: ...; `native?`: ...; `shaka?`: ...; }; `playerLoader?`: { `debugLibraries?`: ...; `esmImportAsDefault?`: ...; `loadConfigurations?`: ...; `urlSpecs?`: ...; }; `playerVersions?`: {[`key`: ...]: ...; `PlaybackEngineTypes.Dash?`: ...; `PlaybackEngineTypes.Hls?`: ...; `PlaybackEngineTypes.Native?`: ...; `PlaybackEngineTypes.Shaka?`: ...; `PlaybackEngineTypes.Unknown?`: ...; `PlaybackEngineTypes.Useless?`: ...; }; }; `playbackEngineLoader?`: { `configure?`: (`playbackEnginesLoadConfiguration`) => ...; `getConfiguredPlaybackEngineTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlaybackEngine?`: <`TArgs`>(`type`) => ...; `loadConfiguredPlaybackEngines?`: () => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadNativePlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPlaybackEngine?`: <`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `setLogger?`: (`logger`) => ...; }; `playbackEngines?`: {[`key`: `string`]: `IHlsPlaybackEngineConstructor` | `INativePlaybackEngineConstructor` | `IShakaPlaybackEngineConstructor` | `IPlaybackEngineConstructor`<...> | `undefined`; `PlaybackEngineTypes.Hls?`: `IHlsPlaybackEngineConstructor`; `PlaybackEngineTypes.Native?`: `INativePlaybackEngineConstructor`; `PlaybackEngineTypes.Shaka?`: `IShakaPlaybackEngineConstructor`; }; `playbackEngineSelector?`: `IPlaybackEngineSelector`; `playerLoader?`: { `configure?`: (`playerLoaderConfiguration`) => ...; `configureLoadConfigurationsIfNotConfigured?`: (`loadConfigurations`) => ...; `getConfiguredPlayerTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlayer?`: (`type`, `predicate?`) => ...; `loadConfiguredPlayers?`: (`exportPredicates?`) => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadPlayer?`: <`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `registerExportPredicate?`: (`type`, `predicate`) => ...; `setLogger?`: (`logger`) => ...; }; `shaka?`: { `shaka?`: `any`; `shakaPlayerConstructor?`: (`mediaElement?`) => ...; }; }; }; }

###### components.activityMonitor?

{ `enabled?`: `boolean`; `inactivityTimeoutThresholdInMinutes?`: `number`; `probeFrequencyInSeconds?`: `number`; }

###### components.activityMonitor.enabled?

`boolean` = `true`

###### components.activityMonitor.inactivityTimeoutThresholdInMinutes?

`number` = `19`

###### components.activityMonitor.probeFrequencyInSeconds?

`number` = `30`

###### components.timeline?

{ `liveAdvertisementBreakHistoryLimit?`: `number`; `minimumSeekableRangeDuration?`: `number`; `prepareNextContentDelay?`: `number`; `useEpochTimeForLive?`: `boolean`; }

###### components.timeline.liveAdvertisementBreakHistoryLimit?

`number` = `20`

###### components.timeline.minimumSeekableRangeDuration?

`number` = `120`

###### components.timeline.prepareNextContentDelay?

`number` = `10`

###### components.timeline.useEpochTimeForLive?

`boolean` = `true`

###### components.wacka?

{ `engine?`: { `buffering?`: { `ahead?`: `number`; `behind?`: `number`; }; `drm?`: { `supportedProtectionSystems?`: ...[]; }; `language?`: { `preferred?`: { `audio?`: ...; `audioRoles?`: ...; `text?`: ...; `textRoles?`: ...; }; }; `metrics?`: { `downloadRatioAggregatorSamples?`: `number`; `downloadTimeAggregatorSamples?`: `number`; `enabled?`: `boolean`; `interval?`: `number`; `liveEdgeOffsetAggregatorSamples?`: `number`; `liveOffsetAggregatorSamples?`: `number`; `maxBufferStalls?`: `number`; `mode?`: `MetricManagerMode`; `networkAggregatorSamples?`: `number`; `timeSeriesLength?`: `number`; }; `recovery?`: { `enabled?`: `boolean`; }; `tracks?`: { `accessibilityRoles?`: ...[]; `disableSameLanguageText?`: `boolean`; `matchConfiguration?`: { `matchScoreThreshold?`: ...; `maxMatchScore?`: ...; `preferredAudioMatchScoreThreshold?`: ...; `preferredTextMatchScoreThreshold?`: ...; `priorityDegradationFactor?`: ...; `roleMatchValue?`: ...; `selectedTrackMatchScoreThreshold?`: ...; }; `noAccessibilityTracks?`: `boolean`; }; }; `player?`: { `advertisement?`: { `controller?`: { `autoSkipBreaks?`: ...; `enforceCsai?`: ...; `keepLiveAdvertisementBreakHistory?`: ...; `liveAdvertisementBreakHistoryLimit?`: ...; }; `handlers?`: {[`key`: ...]: ...; `ima?`: ...; `yospace?`: ...; }; }; }; `playerArgs?`: { `advertisementHandlers?`: {[`key`: `string`]: `AdvertisementHandlerConstructor` | `undefined`; }; `configuration?`: { `advertisement?`: { `controller?`: ...; `handlers?`: ...; }; }; `engineConfiguration?`: { `buffering?`: { `ahead?`: ...; `behind?`: ...; }; `drm?`: { `supportedProtectionSystems?`: ...; }; `language?`: { `preferred?`: ...; }; `metrics?`: { `downloadRatioAggregatorSamples?`: ...; `downloadTimeAggregatorSamples?`: ...; `enabled?`: ...; `interval?`: ...; `liveEdgeOffsetAggregatorSamples?`: ...; `liveOffsetAggregatorSamples?`: ...; `maxBufferStalls?`: ...; `mode?`: ...; `networkAggregatorSamples?`: ...; `timeSeriesLength?`: ...; }; `recovery?`: { `enabled?`: ...; }; `tracks?`: { `accessibilityRoles?`: ...; `disableSameLanguageText?`: ...; `matchConfiguration?`: ...; `noAccessibilityTracks?`: ...; }; }; `hls?`: { `Hls?`: *typeof* `Hls`; }; `logger?`: { `debug?`: (...`data`) => ...; `debugVerbose?`: (...`data`) => ...; `error?`: (...`data`) => ...; `getLevel?`: () => ...; `info?`: (...`data`) => ...; `log?`: (...`data`) => ...; `logAtLevel?`: (`level`, ...`data`) => ...; `setImplementation?`: (`implementation`) => ...; `setLevel?`: (`level`) => ...; `warn?`: (...`data`) => ...; }; `logLevel?`: `LogLevels`; `mediaElement?`: { `accessKey?`: `string`; `accessKeyLabel?`: `string`; `addEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `addTextTrack?`: (`kind`, `label?`, `language?`) => ...; `after?`: (...`nodes`) => ...; `animate?`: (`keyframes`, `options?`) => ...; `append?`: (...`nodes`) => ...; `appendChild?`: <`T`>(`node`) => ...; `ariaActiveDescendantElement?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `ariaAtomic?`: `string` | `null`; `ariaAutoComplete?`: `string` | `null`; `ariaBrailleLabel?`: `string` | `null`; `ariaBrailleRoleDescription?`: `string` | `null`; `ariaBusy?`: `string` | `null`; `ariaChecked?`: `string` | `null`; `ariaColCount?`: `string` | `null`; `ariaColIndex?`: `string` | `null`; `ariaColIndexText?`: `string` | `null`; `ariaColSpan?`: `string` | `null`; `ariaControlsElements?`: readonly ...[] | `null`; `ariaCurrent?`: `string` | `null`; `ariaDescribedByElements?`: readonly ...[] | `null`; `ariaDescription?`: `string` | `null`; `ariaDetailsElements?`: readonly ...[] | `null`; `ariaDisabled?`: `string` | `null`; `ariaErrorMessageElements?`: readonly ...[] | `null`; `ariaExpanded?`: `string` | `null`; `ariaFlowToElements?`: readonly ...[] | `null`; `ariaHasPopup?`: `string` | `null`; `ariaHidden?`: `string` | `null`; `ariaInvalid?`: `string` | `null`; `ariaKeyShortcuts?`: `string` | `null`; `ariaLabel?`: `string` | `null`; `ariaLabelledByElements?`: readonly ...[] | `null`; `ariaLevel?`: `string` | `null`; `ariaLive?`: `string` | `null`; `ariaModal?`: `string` | `null`; `ariaMultiLine?`: `string` | `null`; `ariaMultiSelectable?`: `string` | `null`; `ariaOrientation?`: `string` | `null`; `ariaOwnsElements?`: readonly ...[] | `null`; `ariaPlaceholder?`: `string` | `null`; `ariaPosInSet?`: `string` | `null`; `ariaPressed?`: `string` | `null`; `ariaReadOnly?`: `string` | `null`; `ariaRelevant?`: `string` | `null`; `ariaRequired?`: `string` | `null`; `ariaRoleDescription?`: `string` | `null`; `ariaRowCount?`: `string` | `null`; `ariaRowIndex?`: `string` | `null`; `ariaRowIndexText?`: `string` | `null`; `ariaRowSpan?`: `string` | `null`; `ariaSelected?`: `string` | `null`; `ariaSetSize?`: `string` | `null`; `ariaSort?`: `string` | `null`; `ariaValueMax?`: `string` | `null`; `ariaValueMin?`: `string` | `null`; `ariaValueNow?`: `string` | `null`; `ariaValueText?`: `string` | `null`; `assignedSlot?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assign?`: ...; `assignedElements?`: ...; `assignedNodes?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `name?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `attachInternals?`: () => ...; `attachShadow?`: (`init`) => ...; `ATTRIBUTE_NODE?`: `2`; `attributes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `getNamedItem?`: ...; `getNamedItemNS?`: ...; `item?`: ...; `length?`: ...; `removeNamedItem?`: ...; `removeNamedItemNS?`: ...; `setNamedItem?`: ...; `setNamedItemNS?`: ...; }; `attributeStyleMap?`: `ReadonlyMap`<..., ...>; `autocapitalize?`: `string`; `autocorrect?`: `boolean`; `autofocus?`: `boolean`; `autoplay?`: `boolean`; `baseURI?`: `string`; `before?`: (...`nodes`) => ...; `blur?`: () => ...; `buffered?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `canPlayType?`: (`type`) => ...; `CDATA_SECTION_NODE?`: `4`; `checkVisibility?`: (`options?`) => ...; `childElementCount?`: `number`; `childNodes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `values?`: ...; }; `children?`: {[`key`: ...]: ...; `[iterator]?`: ...; `item?`: ...; `length?`: ...; `namedItem?`: ...; }; `classList?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `className?`: `string`; `click?`: () => ...; `clientHeight?`: `number`; `clientLeft?`: `number`; `clientTop?`: `number`; `clientWidth?`: `number`; `cloneNode?`: (`subtree?`) => ...; `closest?`: {<`K`>(`selector`): ...; <`K`>(`selector`): ...; <`K`>(`selector`): ...; <`E`>(`selectors`): ...; }; `COMMENT_NODE?`: `8`; `compareDocumentPosition?`: (`other`) => ...; `computedStyleMap?`: () => ...; `contains?`: (`other`) => ...; `contentEditable?`: `string`; `controls?`: `boolean`; `crossOrigin?`: `string` | `null`; `currentCSSZoom?`: `number`; `currentSrc?`: `string`; `currentTime?`: `number`; `dataset?`: {[`key`: ...]: ...; }; `defaultMuted?`: `boolean`; `defaultPlaybackRate?`: `number`; `dir?`: `string`; `disableRemotePlayback?`: `boolean`; `dispatchEvent?`: (`event`) => ...; `DOCUMENT_FRAGMENT_NODE?`: `11`; `DOCUMENT_NODE?`: `9`; `DOCUMENT_POSITION_CONTAINED_BY?`: `16`; `DOCUMENT_POSITION_CONTAINS?`: `8`; `DOCUMENT_POSITION_DISCONNECTED?`: `1`; `DOCUMENT_POSITION_FOLLOWING?`: `4`; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: `32`; `DOCUMENT_POSITION_PRECEDING?`: `2`; `DOCUMENT_TYPE_NODE?`: `10`; `draggable?`: `boolean`; `duration?`: `number`; `ELEMENT_NODE?`: `1`; `ended?`: `boolean`; `enterKeyHint?`: `string`; `ENTITY_NODE?`: `6`; `ENTITY_REFERENCE_NODE?`: `5`; `error?`: { `code?`: ...; `MEDIA_ERR_ABORTED?`: ...; `MEDIA_ERR_DECODE?`: ...; `MEDIA_ERR_NETWORK?`: ...; `MEDIA_ERR_SRC_NOT_SUPPORTED?`: ...; `message?`: ...; } | `null`; `fastSeek?`: (`time`) => ...; `firstChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `firstElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `focus?`: (`options?`) => ...; `getAnimations?`: (`options?`) => ...; `getAttribute?`: (`qualifiedName`) => ...; `getAttributeNames?`: () => ...; `getAttributeNode?`: (`qualifiedName`) => ...; `getAttributeNodeNS?`: (`namespace`, `localName`) => ...; `getAttributeNS?`: (`namespace`, `localName`) => ...; `getBoundingClientRect?`: () => ...; `getClientRects?`: () => ...; `getElementsByClassName?`: (`classNames`) => ...; `getElementsByTagName?`: {<`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; (`qualifiedName`): ...; }; `getElementsByTagNameNS?`: {(`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespace`, `localName`): ...; }; `getHTML?`: (`options?`) => ...; `getRootNode?`: (`options?`) => ...; `hasAttribute?`: (`qualifiedName`) => ...; `hasAttributeNS?`: (`namespace`, `localName`) => ...; `hasAttributes?`: () => ...; `hasChildNodes?`: () => ...; `hasPointerCapture?`: (`pointerId`) => ...; `HAVE_CURRENT_DATA?`: `2`; `HAVE_ENOUGH_DATA?`: `4`; `HAVE_FUTURE_DATA?`: `3`; `HAVE_METADATA?`: `1`; `HAVE_NOTHING?`: `0`; `hidden?`: `boolean`; `hidePopover?`: () => ...; `id?`: `string`; `inert?`: `boolean`; `innerHTML?`: `string`; `innerText?`: `string`; `inputMode?`: `string`; `insertAdjacentElement?`: (`where`, `element`) => ...; `insertAdjacentHTML?`: (`position`, `string`) => ...; `insertAdjacentText?`: (`where`, `data`) => ...; `insertBefore?`: <`T`>(`node`, `child`) => ...; `isConnected?`: `boolean`; `isContentEditable?`: `boolean`; `isDefaultNamespace?`: (`namespace`) => ...; `isEqualNode?`: (`otherNode`) => ...; `isSameNode?`: (`otherNode`) => ...; `lang?`: `string`; `lastChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `lastElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `load?`: () => ...; `localName?`: `string`; `lookupNamespaceURI?`: (`prefix`) => ...; `lookupPrefix?`: (`namespace`) => ...; `loop?`: `boolean`; `matches?`: (`selectors`) => ...; `mediaKeys?`: { `createSession?`: ...; `getStatusForPolicy?`: ...; `setServerCertificate?`: ...; } | `null`; `muted?`: `boolean`; `namespaceURI?`: `string` | `null`; `NETWORK_EMPTY?`: `0`; `NETWORK_IDLE?`: `1`; `NETWORK_LOADING?`: `2`; `NETWORK_NO_SOURCE?`: `3`; `networkState?`: `number`; `nextElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `nextSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `nodeName?`: `string`; `nodeType?`: `number`; `nodeValue?`: `string` | `null`; `nonce?`: `string`; `normalize?`: () => ...; `NOTATION_NODE?`: `12`; `offsetHeight?`: `number`; `offsetLeft?`: `number`; `offsetParent?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `offsetTop?`: `number`; `offsetWidth?`: `number`; `onabort?`: (`this`, `ev`) => ... | `null`; `onanimationcancel?`: (`this`, `ev`) => ... | `null`; `onanimationend?`: (`this`, `ev`) => ... | `null`; `onanimationiteration?`: (`this`, `ev`) => ... | `null`; `onanimationstart?`: (`this`, `ev`) => ... | `null`; `onauxclick?`: (`this`, `ev`) => ... | `null`; `onbeforeinput?`: (`this`, `ev`) => ... | `null`; `onbeforematch?`: (`this`, `ev`) => ... | `null`; `onbeforetoggle?`: (`this`, `ev`) => ... | `null`; `onblur?`: (`this`, `ev`) => ... | `null`; `oncancel?`: (`this`, `ev`) => ... | `null`; `oncanplay?`: (`this`, `ev`) => ... | `null`; `oncanplaythrough?`: (`this`, `ev`) => ... | `null`; `onchange?`: (`this`, `ev`) => ... | `null`; `onclick?`: (`this`, `ev`) => ... | `null`; `onclose?`: (`this`, `ev`) => ... | `null`; `oncontextlost?`: (`this`, `ev`) => ... | `null`; `oncontextmenu?`: (`this`, `ev`) => ... | `null`; `oncontextrestored?`: (`this`, `ev`) => ... | `null`; `oncopy?`: (`this`, `ev`) => ... | `null`; `oncuechange?`: (`this`, `ev`) => ... | `null`; `oncut?`: (`this`, `ev`) => ... | `null`; `ondblclick?`: (`this`, `ev`) => ... | `null`; `ondrag?`: (`this`, `ev`) => ... | `null`; `ondragend?`: (`this`, `ev`) => ... | `null`; `ondragenter?`: (`this`, `ev`) => ... | `null`; `ondragleave?`: (`this`, `ev`) => ... | `null`; `ondragover?`: (`this`, `ev`) => ... | `null`; `ondragstart?`: (`this`, `ev`) => ... | `null`; `ondrop?`: (`this`, `ev`) => ... | `null`; `ondurationchange?`: (`this`, `ev`) => ... | `null`; `onemptied?`: (`this`, `ev`) => ... | `null`; `onencrypted?`: (`this`, `ev`) => ... | `null`; `onended?`: (`this`, `ev`) => ... | `null`; `onerror?`: `OnErrorEventHandler`; `onfocus?`: (`this`, `ev`) => ... | `null`; `onformdata?`: (`this`, `ev`) => ... | `null`; `onfullscreenchange?`: (`this`, `ev`) => ... | `null`; `onfullscreenerror?`: (`this`, `ev`) => ... | `null`; `ongotpointercapture?`: (`this`, `ev`) => ... | `null`; `oninput?`: (`this`, `ev`) => ... | `null`; `oninvalid?`: (`this`, `ev`) => ... | `null`; `onkeydown?`: (`this`, `ev`) => ... | `null`; `onkeypress?`: (`this`, `ev`) => ... | `null`; `onkeyup?`: (`this`, `ev`) => ... | `null`; `onload?`: (`this`, `ev`) => ... | `null`; `onloadeddata?`: (`this`, `ev`) => ... | `null`; `onloadedmetadata?`: (`this`, `ev`) => ... | `null`; `onloadstart?`: (`this`, `ev`) => ... | `null`; `onlostpointercapture?`: (`this`, `ev`) => ... | `null`; `onmousedown?`: (`this`, `ev`) => ... | `null`; `onmouseenter?`: (`this`, `ev`) => ... | `null`; `onmouseleave?`: (`this`, `ev`) => ... | `null`; `onmousemove?`: (`this`, `ev`) => ... | `null`; `onmouseout?`: (`this`, `ev`) => ... | `null`; `onmouseover?`: (`this`, `ev`) => ... | `null`; `onmouseup?`: (`this`, `ev`) => ... | `null`; `onpaste?`: (`this`, `ev`) => ... | `null`; `onpause?`: (`this`, `ev`) => ... | `null`; `onplay?`: (`this`, `ev`) => ... | `null`; `onplaying?`: (`this`, `ev`) => ... | `null`; `onpointercancel?`: (`this`, `ev`) => ... | `null`; `onpointerdown?`: (`this`, `ev`) => ... | `null`; `onpointerenter?`: (`this`, `ev`) => ... | `null`; `onpointerleave?`: (`this`, `ev`) => ... | `null`; `onpointermove?`: (`this`, `ev`) => ... | `null`; `onpointerout?`: (`this`, `ev`) => ... | `null`; `onpointerover?`: (`this`, `ev`) => ... | `null`; `onpointerrawupdate?`: (`this`, `ev`) => ... | `null`; `onpointerup?`: (`this`, `ev`) => ... | `null`; `onprogress?`: (`this`, `ev`) => ... | `null`; `onratechange?`: (`this`, `ev`) => ... | `null`; `onreset?`: (`this`, `ev`) => ... | `null`; `onresize?`: (`this`, `ev`) => ... | `null`; `onscroll?`: (`this`, `ev`) => ... | `null`; `onscrollend?`: (`this`, `ev`) => ... | `null`; `onsecuritypolicyviolation?`: (`this`, `ev`) => ... | `null`; `onseeked?`: (`this`, `ev`) => ... | `null`; `onseeking?`: (`this`, `ev`) => ... | `null`; `onselect?`: (`this`, `ev`) => ... | `null`; `onselectionchange?`: (`this`, `ev`) => ... | `null`; `onselectstart?`: (`this`, `ev`) => ... | `null`; `onslotchange?`: (`this`, `ev`) => ... | `null`; `onstalled?`: (`this`, `ev`) => ... | `null`; `onsubmit?`: (`this`, `ev`) => ... | `null`; `onsuspend?`: (`this`, `ev`) => ... | `null`; `ontimeupdate?`: (`this`, `ev`) => ... | `null`; `ontoggle?`: (`this`, `ev`) => ... | `null`; `ontouchcancel?`: (`this`, `ev`) => ... | `null`; `ontouchend?`: (`this`, `ev`) => ... | `null`; `ontouchmove?`: (`this`, `ev`) => ... | `null`; `ontouchstart?`: (`this`, `ev`) => ... | `null`; `ontransitioncancel?`: (`this`, `ev`) => ... | `null`; `ontransitionend?`: (`this`, `ev`) => ... | `null`; `ontransitionrun?`: (`this`, `ev`) => ... | `null`; `ontransitionstart?`: (`this`, `ev`) => ... | `null`; `onvolumechange?`: (`this`, `ev`) => ... | `null`; `onwaiting?`: (`this`, `ev`) => ... | `null`; `onwaitingforkey?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationend?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationiteration?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationstart?`: (`this`, `ev`) => ... | `null`; `onwebkittransitionend?`: (`this`, `ev`) => ... | `null`; `onwheel?`: (`this`, `ev`) => ... | `null`; `outerHTML?`: `string`; `outerText?`: `string`; `ownerDocument?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `adoptNode?`: ...; `alinkColor?`: ...; `all?`: ...; `anchors?`: ...; `append?`: ...; `appendChild?`: ...; `applets?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `bgColor?`: ...; `body?`: ...; `captureEvents?`: ...; `caretPositionFromPoint?`: ...; `caretRangeFromPoint?`: ...; `CDATA_SECTION_NODE?`: ...; `characterSet?`: ...; `charset?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clear?`: ...; `cloneNode?`: ...; `close?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `compatMode?`: ...; `contains?`: ...; `contentType?`: ...; `cookie?`: ...; `createAttribute?`: ...; `createAttributeNS?`: ...; `createCDATASection?`: ...; `createComment?`: ...; `createDocumentFragment?`: ...; `createElement?`: ...; `createElementNS?`: ...; `createEvent?`: ...; `createExpression?`: ...; `createNodeIterator?`: ...; `createNSResolver?`: ...; `createProcessingInstruction?`: ...; `createRange?`: ...; `createTextNode?`: ...; `createTreeWalker?`: ...; `currentScript?`: ...; `defaultView?`: ...; `designMode?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `doctype?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `documentElement?`: ...; `documentURI?`: ...; `domain?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `embeds?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `evaluate?`: ...; `execCommand?`: ...; `exitFullscreen?`: ...; `exitPictureInPicture?`: ...; `exitPointerLock?`: ...; `fgColor?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fonts?`: ...; `forms?`: ...; `fragmentDirective?`: ...; `fullscreen?`: ...; `fullscreenElement?`: ...; `fullscreenEnabled?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getElementsByClassName?`: ...; `getElementsByName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getRootNode?`: ...; `getSelection?`: ...; `hasChildNodes?`: ...; `hasFocus?`: ...; `hasStorageAccess?`: ...; `head?`: ...; `hidden?`: ...; `images?`: ...; `implementation?`: ...; `importNode?`: ...; `inputEncoding?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lastModified?`: ...; `linkColor?`: ...; `links?`: ...; `location?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointerlockchange?`: ...; `onpointerlockerror?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreadystatechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvisibilitychange?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `open?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pictureInPictureEnabled?`: ...; `plugins?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `queryCommandEnabled?`: ...; `queryCommandIndeterm?`: ...; `queryCommandState?`: ...; `queryCommandSupported?`: ...; `queryCommandValue?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `readyState?`: ...; `referrer?`: ...; `releaseEvents?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `requestStorageAccess?`: ...; `rootElement?`: ...; `scripts?`: ...; `scrollingElement?`: ...; `startViewTransition?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `timeline?`: ...; `title?`: ...; `URL?`: ...; `visibilityState?`: ...; `vlinkColor?`: ...; `write?`: ...; `writeln?`: ...; }; `parentElement?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `parentNode?`: { `addEventListener?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `part?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `pause?`: () => ...; `paused?`: `boolean`; `play?`: () => ...; `playbackRate?`: `number`; `played?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `popover?`: `string` | `null`; `prefix?`: `string` | `null`; `preload?`: `""` | `"metadata"` | `"none"` | `"auto"`; `prepend?`: (...`nodes`) => ...; `preservesPitch?`: `boolean`; `previousElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `previousSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `PROCESSING_INSTRUCTION_NODE?`: `7`; `querySelector?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `querySelectorAll?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `readyState?`: `number`; `releasePointerCapture?`: (`pointerId`) => ...; `remote?`: { `addEventListener?`: ...; `cancelWatchAvailability?`: ...; `dispatchEvent?`: ...; `onconnect?`: ...; `onconnecting?`: ...; `ondisconnect?`: ...; `prompt?`: ...; `removeEventListener?`: ...; `state?`: ...; `watchAvailability?`: ...; }; `remove?`: () => ...; `removeAttribute?`: (`qualifiedName`) => ...; `removeAttributeNode?`: (`attr`) => ...; `removeAttributeNS?`: (`namespace`, `localName`) => ...; `removeChild?`: <`T`>(`child`) => ...; `removeEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `replaceChild?`: <`T`>(`node`, `child`) => ...; `replaceChildren?`: (...`nodes`) => ...; `replaceWith?`: (...`nodes`) => ...; `requestFullscreen?`: (`options?`) => ...; `requestPointerLock?`: (`options?`) => ...; `role?`: `string` | `null`; `scroll?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollBy?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollHeight?`: `number`; `scrollIntoView?`: (`arg?`) => ...; `scrollLeft?`: `number`; `scrollTo?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollTop?`: `number`; `scrollWidth?`: `number`; `seekable?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `seeking?`: `boolean`; `setAttribute?`: (`qualifiedName`, `value`) => ...; `setAttributeNode?`: (`attr`) => ...; `setAttributeNodeNS?`: (`attr`) => ...; `setAttributeNS?`: (`namespace`, `qualifiedName`, `value`) => ...; `setHTMLUnsafe?`: (`html`) => ...; `setMediaKeys?`: (`mediaKeys`) => ...; `setPointerCapture?`: (`pointerId`) => ...; `setSinkId?`: (`sinkId`) => ...; `shadowRoot?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clonable?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `delegatesFocus?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fullscreenElement?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `host?`: ...; `innerHTML?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `mode?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onslotchange?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `serializable?`: ...; `setHTMLUnsafe?`: ...; `slotAssignment?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `showPopover?`: () => ...; `sinkId?`: `string`; `slot?`: `string`; `spellcheck?`: `boolean`; `src?`: `string`; `srcObject?`: { `active?`: ...; `addEventListener?`: ...; `addTrack?`: ...; `clone?`: ...; `dispatchEvent?`: ...; `getAudioTracks?`: ...; `getTrackById?`: ...; `getTracks?`: ...; `getVideoTracks?`: ...; `id?`: ...; `onaddtrack?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; `removeTrack?`: ...; } | { `activeSourceBuffers?`: ...; `addEventListener?`: ...; `addSourceBuffer?`: ...; `clearLiveSeekableRange?`: ...; `dispatchEvent?`: ...; `duration?`: ...; `endOfStream?`: ...; `onsourceclose?`: ...; `onsourceended?`: ...; `onsourceopen?`: ...; `readyState?`: ...; `removeEventListener?`: ...; `removeSourceBuffer?`: ...; `setLiveSeekableRange?`: ...; `sourceBuffers?`: ...; } | { `arrayBuffer?`: ...; `bytes?`: ...; `size?`: ...; `slice?`: ...; `stream?`: ...; `text?`: ...; `type?`: ...; } | `null`; `style?`: {[`key`: ...]: ...; `[iterator]?`: ...; `accentColor?`: ...; `alignContent?`: ...; `alignItems?`: ...; `alignmentBaseline?`: ...; `alignSelf?`: ...; `all?`: ...; `animation?`: ...; `animationComposition?`: ...; `animationDelay?`: ...; `animationDirection?`: ...; `animationDuration?`: ...; `animationFillMode?`: ...; `animationIterationCount?`: ...; `animationName?`: ...; `animationPlayState?`: ...; `animationTimingFunction?`: ...; `appearance?`: ...; `aspectRatio?`: ...; `backdropFilter?`: ...; `backfaceVisibility?`: ...; `background?`: ...; `backgroundAttachment?`: ...; `backgroundBlendMode?`: ...; `backgroundClip?`: ...; `backgroundColor?`: ...; `backgroundImage?`: ...; `backgroundOrigin?`: ...; `backgroundPosition?`: ...; `backgroundPositionX?`: ...; `backgroundPositionY?`: ...; `backgroundRepeat?`: ...; `backgroundSize?`: ...; `baselineShift?`: ...; `baselineSource?`: ...; `blockSize?`: ...; `border?`: ...; `borderBlock?`: ...; `borderBlockColor?`: ...; `borderBlockEnd?`: ...; `borderBlockEndColor?`: ...; `borderBlockEndStyle?`: ...; `borderBlockEndWidth?`: ...; `borderBlockStart?`: ...; `borderBlockStartColor?`: ...; `borderBlockStartStyle?`: ...; `borderBlockStartWidth?`: ...; `borderBlockStyle?`: ...; `borderBlockWidth?`: ...; `borderBottom?`: ...; `borderBottomColor?`: ...; `borderBottomLeftRadius?`: ...; `borderBottomRightRadius?`: ...; `borderBottomStyle?`: ...; `borderBottomWidth?`: ...; `borderCollapse?`: ...; `borderColor?`: ...; `borderEndEndRadius?`: ...; `borderEndStartRadius?`: ...; `borderImage?`: ...; `borderImageOutset?`: ...; `borderImageRepeat?`: ...; `borderImageSlice?`: ...; `borderImageSource?`: ...; `borderImageWidth?`: ...; `borderInline?`: ...; `borderInlineColor?`: ...; `borderInlineEnd?`: ...; `borderInlineEndColor?`: ...; `borderInlineEndStyle?`: ...; `borderInlineEndWidth?`: ...; `borderInlineStart?`: ...; `borderInlineStartColor?`: ...; `borderInlineStartStyle?`: ...; `borderInlineStartWidth?`: ...; `borderInlineStyle?`: ...; `borderInlineWidth?`: ...; `borderLeft?`: ...; `borderLeftColor?`: ...; `borderLeftStyle?`: ...; `borderLeftWidth?`: ...; `borderRadius?`: ...; `borderRight?`: ...; `borderRightColor?`: ...; `borderRightStyle?`: ...; `borderRightWidth?`: ...; `borderSpacing?`: ...; `borderStartEndRadius?`: ...; `borderStartStartRadius?`: ...; `borderStyle?`: ...; `borderTop?`: ...; `borderTopColor?`: ...; `borderTopLeftRadius?`: ...; `borderTopRightRadius?`: ...; `borderTopStyle?`: ...; `borderTopWidth?`: ...; `borderWidth?`: ...; `bottom?`: ...; `boxDecorationBreak?`: ...; `boxShadow?`: ...; `boxSizing?`: ...; `breakAfter?`: ...; `breakBefore?`: ...; `breakInside?`: ...; `captionSide?`: ...; `caretColor?`: ...; `clear?`: ...; `clip?`: ...; `clipPath?`: ...; `clipRule?`: ...; `color?`: ...; `colorInterpolation?`: ...; `colorInterpolationFilters?`: ...; `colorScheme?`: ...; `columnCount?`: ...; `columnFill?`: ...; `columnGap?`: ...; `columnRule?`: ...; `columnRuleColor?`: ...; `columnRuleStyle?`: ...; `columnRuleWidth?`: ...; `columns?`: ...; `columnSpan?`: ...; `columnWidth?`: ...; `contain?`: ...; `container?`: ...; `containerName?`: ...; `containerType?`: ...; `containIntrinsicBlockSize?`: ...; `containIntrinsicHeight?`: ...; `containIntrinsicInlineSize?`: ...; `containIntrinsicSize?`: ...; `containIntrinsicWidth?`: ...; `content?`: ...; `contentVisibility?`: ...; `counterIncrement?`: ...; `counterReset?`: ...; `counterSet?`: ...; `cssFloat?`: ...; `cssText?`: ...; `cursor?`: ...; `cx?`: ...; `cy?`: ...; `d?`: ...; `direction?`: ...; `display?`: ...; `dominantBaseline?`: ...; `emptyCells?`: ...; `fill?`: ...; `fillOpacity?`: ...; `fillRule?`: ...; `filter?`: ...; `flex?`: ...; `flexBasis?`: ...; `flexDirection?`: ...; `flexFlow?`: ...; `flexGrow?`: ...; `flexShrink?`: ...; `flexWrap?`: ...; `float?`: ...; `floodColor?`: ...; `floodOpacity?`: ...; `font?`: ...; `fontFamily?`: ...; `fontFeatureSettings?`: ...; `fontKerning?`: ...; `fontOpticalSizing?`: ...; `fontPalette?`: ...; `fontSize?`: ...; `fontSizeAdjust?`: ...; `fontStretch?`: ...; `fontStyle?`: ...; `fontSynthesis?`: ...; `fontSynthesisSmallCaps?`: ...; `fontSynthesisStyle?`: ...; `fontSynthesisWeight?`: ...; `fontVariant?`: ...; `fontVariantAlternates?`: ...; `fontVariantCaps?`: ...; `fontVariantEastAsian?`: ...; `fontVariantLigatures?`: ...; `fontVariantNumeric?`: ...; `fontVariantPosition?`: ...; `fontVariationSettings?`: ...; `fontWeight?`: ...; `forcedColorAdjust?`: ...; `gap?`: ...; `getPropertyPriority?`: ...; `getPropertyValue?`: ...; `grid?`: ...; `gridArea?`: ...; `gridAutoColumns?`: ...; `gridAutoFlow?`: ...; `gridAutoRows?`: ...; `gridColumn?`: ...; `gridColumnEnd?`: ...; `gridColumnGap?`: ...; `gridColumnStart?`: ...; `gridGap?`: ...; `gridRow?`: ...; `gridRowEnd?`: ...; `gridRowGap?`: ...; `gridRowStart?`: ...; `gridTemplate?`: ...; `gridTemplateAreas?`: ...; `gridTemplateColumns?`: ...; `gridTemplateRows?`: ...; `height?`: ...; `hyphenateCharacter?`: ...; `hyphenateLimitChars?`: ...; `hyphens?`: ...; `imageOrientation?`: ...; `imageRendering?`: ...; `inlineSize?`: ...; `inset?`: ...; `insetBlock?`: ...; `insetBlockEnd?`: ...; `insetBlockStart?`: ...; `insetInline?`: ...; `insetInlineEnd?`: ...; `insetInlineStart?`: ...; `isolation?`: ...; `item?`: ...; `justifyContent?`: ...; `justifyItems?`: ...; `justifySelf?`: ...; `left?`: ...; `length?`: ...; `letterSpacing?`: ...; `lightingColor?`: ...; `lineBreak?`: ...; `lineHeight?`: ...; `listStyle?`: ...; `listStyleImage?`: ...; `listStylePosition?`: ...; `listStyleType?`: ...; `margin?`: ...; `marginBlock?`: ...; `marginBlockEnd?`: ...; `marginBlockStart?`: ...; `marginBottom?`: ...; `marginInline?`: ...; `marginInlineEnd?`: ...; `marginInlineStart?`: ...; `marginLeft?`: ...; `marginRight?`: ...; `marginTop?`: ...; `marker?`: ...; `markerEnd?`: ...; `markerMid?`: ...; `markerStart?`: ...; `mask?`: ...; `maskClip?`: ...; `maskComposite?`: ...; `maskImage?`: ...; `maskMode?`: ...; `maskOrigin?`: ...; `maskPosition?`: ...; `maskRepeat?`: ...; `maskSize?`: ...; `maskType?`: ...; `mathDepth?`: ...; `mathStyle?`: ...; `maxBlockSize?`: ...; `maxHeight?`: ...; `maxInlineSize?`: ...; `maxWidth?`: ...; `minBlockSize?`: ...; `minHeight?`: ...; `minInlineSize?`: ...; `minWidth?`: ...; `mixBlendMode?`: ...; `objectFit?`: ...; `objectPosition?`: ...; `offset?`: ...; `offsetAnchor?`: ...; `offsetDistance?`: ...; `offsetPath?`: ...; `offsetPosition?`: ...; `offsetRotate?`: ...; `opacity?`: ...; `order?`: ...; `orphans?`: ...; `outline?`: ...; `outlineColor?`: ...; `outlineOffset?`: ...; `outlineStyle?`: ...; `outlineWidth?`: ...; `overflow?`: ...; `overflowAnchor?`: ...; `overflowBlock?`: ...; `overflowClipMargin?`: ...; `overflowInline?`: ...; `overflowWrap?`: ...; `overflowX?`: ...; `overflowY?`: ...; `overscrollBehavior?`: ...; `overscrollBehaviorBlock?`: ...; `overscrollBehaviorInline?`: ...; `overscrollBehaviorX?`: ...; `overscrollBehaviorY?`: ...; `padding?`: ...; `paddingBlock?`: ...; `paddingBlockEnd?`: ...; `paddingBlockStart?`: ...; `paddingBottom?`: ...; `paddingInline?`: ...; `paddingInlineEnd?`: ...; `paddingInlineStart?`: ...; `paddingLeft?`: ...; `paddingRight?`: ...; `paddingTop?`: ...; `page?`: ...; `pageBreakAfter?`: ...; `pageBreakBefore?`: ...; `pageBreakInside?`: ...; `paintOrder?`: ...; `parentRule?`: ...; `perspective?`: ...; `perspectiveOrigin?`: ...; `placeContent?`: ...; `placeItems?`: ...; `placeSelf?`: ...; `pointerEvents?`: ...; `position?`: ...; `printColorAdjust?`: ...; `quotes?`: ...; `r?`: ...; `removeProperty?`: ...; `resize?`: ...; `right?`: ...; `rotate?`: ...; `rowGap?`: ...; `rubyAlign?`: ...; `rubyPosition?`: ...; `rx?`: ...; `ry?`: ...; `scale?`: ...; `scrollbarColor?`: ...; `scrollbarGutter?`: ...; `scrollbarWidth?`: ...; `scrollBehavior?`: ...; `scrollMargin?`: ...; `scrollMarginBlock?`: ...; `scrollMarginBlockEnd?`: ...; `scrollMarginBlockStart?`: ...; `scrollMarginBottom?`: ...; `scrollMarginInline?`: ...; `scrollMarginInlineEnd?`: ...; `scrollMarginInlineStart?`: ...; `scrollMarginLeft?`: ...; `scrollMarginRight?`: ...; `scrollMarginTop?`: ...; `scrollPadding?`: ...; `scrollPaddingBlock?`: ...; `scrollPaddingBlockEnd?`: ...; `scrollPaddingBlockStart?`: ...; `scrollPaddingBottom?`: ...; `scrollPaddingInline?`: ...; `scrollPaddingInlineEnd?`: ...; `scrollPaddingInlineStart?`: ...; `scrollPaddingLeft?`: ...; `scrollPaddingRight?`: ...; `scrollPaddingTop?`: ...; `scrollSnapAlign?`: ...; `scrollSnapStop?`: ...; `scrollSnapType?`: ...; `setProperty?`: ...; `shapeImageThreshold?`: ...; `shapeMargin?`: ...; `shapeOutside?`: ...; `shapeRendering?`: ...; `stopColor?`: ...; `stopOpacity?`: ...; `stroke?`: ...; `strokeDasharray?`: ...; `strokeDashoffset?`: ...; `strokeLinecap?`: ...; `strokeLinejoin?`: ...; `strokeMiterlimit?`: ...; `strokeOpacity?`: ...; `strokeWidth?`: ...; `tableLayout?`: ...; `tabSize?`: ...; `textAlign?`: ...; `textAlignLast?`: ...; `textAnchor?`: ...; `textBox?`: ...; `textBoxEdge?`: ...; `textBoxTrim?`: ...; `textCombineUpright?`: ...; `textDecoration?`: ...; `textDecorationColor?`: ...; `textDecorationLine?`: ...; `textDecorationSkipInk?`: ...; `textDecorationStyle?`: ...; `textDecorationThickness?`: ...; `textEmphasis?`: ...; `textEmphasisColor?`: ...; `textEmphasisPosition?`: ...; `textEmphasisStyle?`: ...; `textIndent?`: ...; `textOrientation?`: ...; `textOverflow?`: ...; `textRendering?`: ...; `textShadow?`: ...; `textTransform?`: ...; `textUnderlineOffset?`: ...; `textUnderlinePosition?`: ...; `textWrap?`: ...; `textWrapMode?`: ...; `textWrapStyle?`: ...; `top?`: ...; `touchAction?`: ...; `transform?`: ...; `transformBox?`: ...; `transformOrigin?`: ...; `transformStyle?`: ...; `transition?`: ...; `transitionBehavior?`: ...; `transitionDelay?`: ...; `transitionDuration?`: ...; `transitionProperty?`: ...; `transitionTimingFunction?`: ...; `translate?`: ...; `unicodeBidi?`: ...; `userSelect?`: ...; `vectorEffect?`: ...; `verticalAlign?`: ...; `viewTransitionClass?`: ...; `viewTransitionName?`: ...; `visibility?`: ...; `webkitAlignContent?`: ...; `webkitAlignItems?`: ...; `webkitAlignSelf?`: ...; `webkitAnimation?`: ...; `webkitAnimationDelay?`: ...; `webkitAnimationDirection?`: ...; `webkitAnimationDuration?`: ...; `webkitAnimationFillMode?`: ...; `webkitAnimationIterationCount?`: ...; `webkitAnimationName?`: ...; `webkitAnimationPlayState?`: ...; `webkitAnimationTimingFunction?`: ...; `webkitAppearance?`: ...; `webkitBackfaceVisibility?`: ...; `webkitBackgroundClip?`: ...; `webkitBackgroundOrigin?`: ...; `webkitBackgroundSize?`: ...; `webkitBorderBottomLeftRadius?`: ...; `webkitBorderBottomRightRadius?`: ...; `webkitBorderRadius?`: ...; `webkitBorderTopLeftRadius?`: ...; `webkitBorderTopRightRadius?`: ...; `webkitBoxAlign?`: ...; `webkitBoxFlex?`: ...; `webkitBoxOrdinalGroup?`: ...; `webkitBoxOrient?`: ...; `webkitBoxPack?`: ...; `webkitBoxShadow?`: ...; `webkitBoxSizing?`: ...; `webkitFilter?`: ...; `webkitFlex?`: ...; `webkitFlexBasis?`: ...; `webkitFlexDirection?`: ...; `webkitFlexFlow?`: ...; `webkitFlexGrow?`: ...; `webkitFlexShrink?`: ...; `webkitFlexWrap?`: ...; `webkitJustifyContent?`: ...; `webkitLineClamp?`: ...; `webkitMask?`: ...; `webkitMaskBoxImage?`: ...; `webkitMaskBoxImageOutset?`: ...; `webkitMaskBoxImageRepeat?`: ...; `webkitMaskBoxImageSlice?`: ...; `webkitMaskBoxImageSource?`: ...; `webkitMaskBoxImageWidth?`: ...; `webkitMaskClip?`: ...; `webkitMaskComposite?`: ...; `webkitMaskImage?`: ...; `webkitMaskOrigin?`: ...; `webkitMaskPosition?`: ...; `webkitMaskRepeat?`: ...; `webkitMaskSize?`: ...; `webkitOrder?`: ...; `webkitPerspective?`: ...; `webkitPerspectiveOrigin?`: ...; `webkitTextFillColor?`: ...; `webkitTextSizeAdjust?`: ...; `webkitTextStroke?`: ...; `webkitTextStrokeColor?`: ...; `webkitTextStrokeWidth?`: ...; `webkitTransform?`: ...; `webkitTransformOrigin?`: ...; `webkitTransformStyle?`: ...; `webkitTransition?`: ...; `webkitTransitionDelay?`: ...; `webkitTransitionDuration?`: ...; `webkitTransitionProperty?`: ...; `webkitTransitionTimingFunction?`: ...; `webkitUserSelect?`: ...; `whiteSpace?`: ...; `whiteSpaceCollapse?`: ...; `widows?`: ...; `width?`: ...; `willChange?`: ...; `wordBreak?`: ...; `wordSpacing?`: ...; `wordWrap?`: ...; `writingMode?`: ...; `x?`: ...; `y?`: ...; `zIndex?`: ...; `zoom?`: ...; }; `tabIndex?`: `number`; `tagName?`: `string`; `TEXT_NODE?`: `3`; `textContent?`: `string`; `textTracks?`: {[`key`: ...]: ...; `[iterator]?`: ...; `addEventListener?`: ...; `dispatchEvent?`: ...; `getTrackById?`: ...; `length?`: ...; `onaddtrack?`: ...; `onchange?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; }; `title?`: `string`; `toggleAttribute?`: (`qualifiedName`, `force?`) => ...; `togglePopover?`: (`options?`) => ...; `translate?`: `boolean`; `volume?`: `number`; `webkitMatchesSelector?`: (`selectors`) => ...; `writingSuggestions?`: `string`; }; `playbackEngineConfiguration?`: { `lazyLoadPlayers?`: `boolean`; `playbackConfigurations?`: { `hls?`: ...; `native?`: ...; `shaka?`: ...; }; `playerLoader?`: { `debugLibraries?`: ...; `esmImportAsDefault?`: ...; `loadConfigurations?`: ...; `urlSpecs?`: ...; }; `playerVersions?`: {[`key`: ...]: ...; `PlaybackEngineTypes.Dash?`: ...; `PlaybackEngineTypes.Hls?`: ...; `PlaybackEngineTypes.Native?`: ...; `PlaybackEngineTypes.Shaka?`: ...; `PlaybackEngineTypes.Unknown?`: ...; `PlaybackEngineTypes.Useless?`: ...; }; }; `playbackEngineLoader?`: { `configure?`: (`playbackEnginesLoadConfiguration`) => ...; `getConfiguredPlaybackEngineTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlaybackEngine?`: <`TArgs`>(`type`) => ...; `loadConfiguredPlaybackEngines?`: () => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadNativePlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPlaybackEngine?`: <`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `setLogger?`: (`logger`) => ...; }; `playbackEngines?`: {[`key`: `string`]: `IHlsPlaybackEngineConstructor` | `INativePlaybackEngineConstructor` | `IShakaPlaybackEngineConstructor` | `IPlaybackEngineConstructor`<...> | `undefined`; `PlaybackEngineTypes.Hls?`: `IHlsPlaybackEngineConstructor`; `PlaybackEngineTypes.Native?`: `INativePlaybackEngineConstructor`; `PlaybackEngineTypes.Shaka?`: `IShakaPlaybackEngineConstructor`; }; `playbackEngineSelector?`: `IPlaybackEngineSelector`; `playerLoader?`: { `configure?`: (`playerLoaderConfiguration`) => ...; `configureLoadConfigurationsIfNotConfigured?`: (`loadConfigurations`) => ...; `getConfiguredPlayerTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlayer?`: (`type`, `predicate?`) => ...; `loadConfiguredPlayers?`: (`exportPredicates?`) => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadPlayer?`: <`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `registerExportPredicate?`: (`type`, `predicate`) => ...; `setLogger?`: (`logger`) => ...; }; `shaka?`: { `shaka?`: `any`; `shakaPlayerConstructor?`: (`mediaElement?`) => ...; }; }; }

###### components.wacka.engine?

{ `buffering?`: { `ahead?`: `number`; `behind?`: `number`; }; `drm?`: { `supportedProtectionSystems?`: ...[]; }; `language?`: { `preferred?`: { `audio?`: ...; `audioRoles?`: ...; `text?`: ...; `textRoles?`: ...; }; }; `metrics?`: { `downloadRatioAggregatorSamples?`: `number`; `downloadTimeAggregatorSamples?`: `number`; `enabled?`: `boolean`; `interval?`: `number`; `liveEdgeOffsetAggregatorSamples?`: `number`; `liveOffsetAggregatorSamples?`: `number`; `maxBufferStalls?`: `number`; `mode?`: `MetricManagerMode`; `networkAggregatorSamples?`: `number`; `timeSeriesLength?`: `number`; }; `recovery?`: { `enabled?`: `boolean`; }; `tracks?`: { `accessibilityRoles?`: ...[]; `disableSameLanguageText?`: `boolean`; `matchConfiguration?`: { `matchScoreThreshold?`: ...; `maxMatchScore?`: ...; `preferredAudioMatchScoreThreshold?`: ...; `preferredTextMatchScoreThreshold?`: ...; `priorityDegradationFactor?`: ...; `roleMatchValue?`: ...; `selectedTrackMatchScoreThreshold?`: ...; }; `noAccessibilityTracks?`: `boolean`; }; }

###### components.wacka.engine.buffering?

{ `ahead?`: `number`; `behind?`: `number`; }

###### components.wacka.engine.buffering.ahead?

`number`

###### components.wacka.engine.buffering.behind?

`number`

###### components.wacka.engine.drm?

{ `supportedProtectionSystems?`: ...[]; }

###### components.wacka.engine.drm.supportedProtectionSystems?

...[]

###### components.wacka.engine.language?

{ `preferred?`: { `audio?`: ...; `audioRoles?`: ...; `text?`: ...; `textRoles?`: ...; }; }

###### components.wacka.engine.language.preferred?

{ `audio?`: ...; `audioRoles?`: ...; `text?`: ...; `textRoles?`: ...; }

###### components.wacka.engine.language.preferred.audio?

...

###### components.wacka.engine.language.preferred.audioRoles?

...

###### components.wacka.engine.language.preferred.text?

...

###### components.wacka.engine.language.preferred.textRoles?

...

###### components.wacka.engine.metrics?

{ `downloadRatioAggregatorSamples?`: `number`; `downloadTimeAggregatorSamples?`: `number`; `enabled?`: `boolean`; `interval?`: `number`; `liveEdgeOffsetAggregatorSamples?`: `number`; `liveOffsetAggregatorSamples?`: `number`; `maxBufferStalls?`: `number`; `mode?`: `MetricManagerMode`; `networkAggregatorSamples?`: `number`; `timeSeriesLength?`: `number`; }

###### components.wacka.engine.metrics.downloadRatioAggregatorSamples?

`number`

###### components.wacka.engine.metrics.downloadTimeAggregatorSamples?

`number`

###### components.wacka.engine.metrics.enabled?

`boolean`

###### components.wacka.engine.metrics.interval?

`number`

###### components.wacka.engine.metrics.liveEdgeOffsetAggregatorSamples?

`number`

###### components.wacka.engine.metrics.liveOffsetAggregatorSamples?

`number`

###### components.wacka.engine.metrics.maxBufferStalls?

`number`

###### components.wacka.engine.metrics.mode?

`MetricManagerMode`

###### components.wacka.engine.metrics.networkAggregatorSamples?

`number`

###### components.wacka.engine.metrics.timeSeriesLength?

`number`

###### components.wacka.engine.recovery?

{ `enabled?`: `boolean`; }

###### components.wacka.engine.recovery.enabled?

`boolean`

###### components.wacka.engine.tracks?

{ `accessibilityRoles?`: ...[]; `disableSameLanguageText?`: `boolean`; `matchConfiguration?`: { `matchScoreThreshold?`: ...; `maxMatchScore?`: ...; `preferredAudioMatchScoreThreshold?`: ...; `preferredTextMatchScoreThreshold?`: ...; `priorityDegradationFactor?`: ...; `roleMatchValue?`: ...; `selectedTrackMatchScoreThreshold?`: ...; }; `noAccessibilityTracks?`: `boolean`; }

###### components.wacka.engine.tracks.accessibilityRoles?

...[]

###### components.wacka.engine.tracks.disableSameLanguageText?

`boolean`

###### components.wacka.engine.tracks.matchConfiguration?

{ `matchScoreThreshold?`: ...; `maxMatchScore?`: ...; `preferredAudioMatchScoreThreshold?`: ...; `preferredTextMatchScoreThreshold?`: ...; `priorityDegradationFactor?`: ...; `roleMatchValue?`: ...; `selectedTrackMatchScoreThreshold?`: ...; }

###### components.wacka.engine.tracks.matchConfiguration.matchScoreThreshold?

...

###### components.wacka.engine.tracks.matchConfiguration.maxMatchScore?

...

###### components.wacka.engine.tracks.matchConfiguration.preferredAudioMatchScoreThreshold?

...

###### components.wacka.engine.tracks.matchConfiguration.preferredTextMatchScoreThreshold?

...

###### components.wacka.engine.tracks.matchConfiguration.priorityDegradationFactor?

...

###### components.wacka.engine.tracks.matchConfiguration.roleMatchValue?

...

###### components.wacka.engine.tracks.matchConfiguration.selectedTrackMatchScoreThreshold?

...

###### components.wacka.engine.tracks.noAccessibilityTracks?

`boolean`

###### components.wacka.player?

{ `advertisement?`: { `controller?`: { `autoSkipBreaks?`: ...; `enforceCsai?`: ...; `keepLiveAdvertisementBreakHistory?`: ...; `liveAdvertisementBreakHistoryLimit?`: ...; }; `handlers?`: {[`key`: ...]: ...; `ima?`: ...; `yospace?`: ...; }; }; }

###### components.wacka.player.advertisement?

{ `controller?`: { `autoSkipBreaks?`: ...; `enforceCsai?`: ...; `keepLiveAdvertisementBreakHistory?`: ...; `liveAdvertisementBreakHistoryLimit?`: ...; }; `handlers?`: {[`key`: ...]: ...; `ima?`: ...; `yospace?`: ...; }; }

###### components.wacka.player.advertisement.controller?

{ `autoSkipBreaks?`: ...; `enforceCsai?`: ...; `keepLiveAdvertisementBreakHistory?`: ...; `liveAdvertisementBreakHistoryLimit?`: ...; }

###### components.wacka.player.advertisement.controller.autoSkipBreaks?

...

###### components.wacka.player.advertisement.controller.enforceCsai?

...

###### components.wacka.player.advertisement.controller.keepLiveAdvertisementBreakHistory?

...

###### components.wacka.player.advertisement.controller.liveAdvertisementBreakHistoryLimit?

...

###### components.wacka.player.advertisement.handlers?

{[`key`: ...]: ...; `ima?`: ...; `yospace?`: ...; }

###### components.wacka.player.advertisement.handlers.ima?

...

###### components.wacka.player.advertisement.handlers.yospace?

...

###### components.wacka.playerArgs?

{ `advertisementHandlers?`: {[`key`: `string`]: `AdvertisementHandlerConstructor` | `undefined`; }; `configuration?`: { `advertisement?`: { `controller?`: ...; `handlers?`: ...; }; }; `engineConfiguration?`: { `buffering?`: { `ahead?`: ...; `behind?`: ...; }; `drm?`: { `supportedProtectionSystems?`: ...; }; `language?`: { `preferred?`: ...; }; `metrics?`: { `downloadRatioAggregatorSamples?`: ...; `downloadTimeAggregatorSamples?`: ...; `enabled?`: ...; `interval?`: ...; `liveEdgeOffsetAggregatorSamples?`: ...; `liveOffsetAggregatorSamples?`: ...; `maxBufferStalls?`: ...; `mode?`: ...; `networkAggregatorSamples?`: ...; `timeSeriesLength?`: ...; }; `recovery?`: { `enabled?`: ...; }; `tracks?`: { `accessibilityRoles?`: ...; `disableSameLanguageText?`: ...; `matchConfiguration?`: ...; `noAccessibilityTracks?`: ...; }; }; `hls?`: { `Hls?`: *typeof* `Hls`; }; `logger?`: { `debug?`: (...`data`) => ...; `debugVerbose?`: (...`data`) => ...; `error?`: (...`data`) => ...; `getLevel?`: () => ...; `info?`: (...`data`) => ...; `log?`: (...`data`) => ...; `logAtLevel?`: (`level`, ...`data`) => ...; `setImplementation?`: (`implementation`) => ...; `setLevel?`: (`level`) => ...; `warn?`: (...`data`) => ...; }; `logLevel?`: `LogLevels`; `mediaElement?`: { `accessKey?`: `string`; `accessKeyLabel?`: `string`; `addEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `addTextTrack?`: (`kind`, `label?`, `language?`) => ...; `after?`: (...`nodes`) => ...; `animate?`: (`keyframes`, `options?`) => ...; `append?`: (...`nodes`) => ...; `appendChild?`: <`T`>(`node`) => ...; `ariaActiveDescendantElement?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `ariaAtomic?`: `string` | `null`; `ariaAutoComplete?`: `string` | `null`; `ariaBrailleLabel?`: `string` | `null`; `ariaBrailleRoleDescription?`: `string` | `null`; `ariaBusy?`: `string` | `null`; `ariaChecked?`: `string` | `null`; `ariaColCount?`: `string` | `null`; `ariaColIndex?`: `string` | `null`; `ariaColIndexText?`: `string` | `null`; `ariaColSpan?`: `string` | `null`; `ariaControlsElements?`: readonly ...[] | `null`; `ariaCurrent?`: `string` | `null`; `ariaDescribedByElements?`: readonly ...[] | `null`; `ariaDescription?`: `string` | `null`; `ariaDetailsElements?`: readonly ...[] | `null`; `ariaDisabled?`: `string` | `null`; `ariaErrorMessageElements?`: readonly ...[] | `null`; `ariaExpanded?`: `string` | `null`; `ariaFlowToElements?`: readonly ...[] | `null`; `ariaHasPopup?`: `string` | `null`; `ariaHidden?`: `string` | `null`; `ariaInvalid?`: `string` | `null`; `ariaKeyShortcuts?`: `string` | `null`; `ariaLabel?`: `string` | `null`; `ariaLabelledByElements?`: readonly ...[] | `null`; `ariaLevel?`: `string` | `null`; `ariaLive?`: `string` | `null`; `ariaModal?`: `string` | `null`; `ariaMultiLine?`: `string` | `null`; `ariaMultiSelectable?`: `string` | `null`; `ariaOrientation?`: `string` | `null`; `ariaOwnsElements?`: readonly ...[] | `null`; `ariaPlaceholder?`: `string` | `null`; `ariaPosInSet?`: `string` | `null`; `ariaPressed?`: `string` | `null`; `ariaReadOnly?`: `string` | `null`; `ariaRelevant?`: `string` | `null`; `ariaRequired?`: `string` | `null`; `ariaRoleDescription?`: `string` | `null`; `ariaRowCount?`: `string` | `null`; `ariaRowIndex?`: `string` | `null`; `ariaRowIndexText?`: `string` | `null`; `ariaRowSpan?`: `string` | `null`; `ariaSelected?`: `string` | `null`; `ariaSetSize?`: `string` | `null`; `ariaSort?`: `string` | `null`; `ariaValueMax?`: `string` | `null`; `ariaValueMin?`: `string` | `null`; `ariaValueNow?`: `string` | `null`; `ariaValueText?`: `string` | `null`; `assignedSlot?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assign?`: ...; `assignedElements?`: ...; `assignedNodes?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `name?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `attachInternals?`: () => ...; `attachShadow?`: (`init`) => ...; `ATTRIBUTE_NODE?`: `2`; `attributes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `getNamedItem?`: ...; `getNamedItemNS?`: ...; `item?`: ...; `length?`: ...; `removeNamedItem?`: ...; `removeNamedItemNS?`: ...; `setNamedItem?`: ...; `setNamedItemNS?`: ...; }; `attributeStyleMap?`: `ReadonlyMap`<..., ...>; `autocapitalize?`: `string`; `autocorrect?`: `boolean`; `autofocus?`: `boolean`; `autoplay?`: `boolean`; `baseURI?`: `string`; `before?`: (...`nodes`) => ...; `blur?`: () => ...; `buffered?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `canPlayType?`: (`type`) => ...; `CDATA_SECTION_NODE?`: `4`; `checkVisibility?`: (`options?`) => ...; `childElementCount?`: `number`; `childNodes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `values?`: ...; }; `children?`: {[`key`: ...]: ...; `[iterator]?`: ...; `item?`: ...; `length?`: ...; `namedItem?`: ...; }; `classList?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `className?`: `string`; `click?`: () => ...; `clientHeight?`: `number`; `clientLeft?`: `number`; `clientTop?`: `number`; `clientWidth?`: `number`; `cloneNode?`: (`subtree?`) => ...; `closest?`: {<`K`>(`selector`): ...; <`K`>(`selector`): ...; <`K`>(`selector`): ...; <`E`>(`selectors`): ...; }; `COMMENT_NODE?`: `8`; `compareDocumentPosition?`: (`other`) => ...; `computedStyleMap?`: () => ...; `contains?`: (`other`) => ...; `contentEditable?`: `string`; `controls?`: `boolean`; `crossOrigin?`: `string` | `null`; `currentCSSZoom?`: `number`; `currentSrc?`: `string`; `currentTime?`: `number`; `dataset?`: {[`key`: ...]: ...; }; `defaultMuted?`: `boolean`; `defaultPlaybackRate?`: `number`; `dir?`: `string`; `disableRemotePlayback?`: `boolean`; `dispatchEvent?`: (`event`) => ...; `DOCUMENT_FRAGMENT_NODE?`: `11`; `DOCUMENT_NODE?`: `9`; `DOCUMENT_POSITION_CONTAINED_BY?`: `16`; `DOCUMENT_POSITION_CONTAINS?`: `8`; `DOCUMENT_POSITION_DISCONNECTED?`: `1`; `DOCUMENT_POSITION_FOLLOWING?`: `4`; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: `32`; `DOCUMENT_POSITION_PRECEDING?`: `2`; `DOCUMENT_TYPE_NODE?`: `10`; `draggable?`: `boolean`; `duration?`: `number`; `ELEMENT_NODE?`: `1`; `ended?`: `boolean`; `enterKeyHint?`: `string`; `ENTITY_NODE?`: `6`; `ENTITY_REFERENCE_NODE?`: `5`; `error?`: { `code?`: ...; `MEDIA_ERR_ABORTED?`: ...; `MEDIA_ERR_DECODE?`: ...; `MEDIA_ERR_NETWORK?`: ...; `MEDIA_ERR_SRC_NOT_SUPPORTED?`: ...; `message?`: ...; } | `null`; `fastSeek?`: (`time`) => ...; `firstChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `firstElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `focus?`: (`options?`) => ...; `getAnimations?`: (`options?`) => ...; `getAttribute?`: (`qualifiedName`) => ...; `getAttributeNames?`: () => ...; `getAttributeNode?`: (`qualifiedName`) => ...; `getAttributeNodeNS?`: (`namespace`, `localName`) => ...; `getAttributeNS?`: (`namespace`, `localName`) => ...; `getBoundingClientRect?`: () => ...; `getClientRects?`: () => ...; `getElementsByClassName?`: (`classNames`) => ...; `getElementsByTagName?`: {<`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; (`qualifiedName`): ...; }; `getElementsByTagNameNS?`: {(`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespace`, `localName`): ...; }; `getHTML?`: (`options?`) => ...; `getRootNode?`: (`options?`) => ...; `hasAttribute?`: (`qualifiedName`) => ...; `hasAttributeNS?`: (`namespace`, `localName`) => ...; `hasAttributes?`: () => ...; `hasChildNodes?`: () => ...; `hasPointerCapture?`: (`pointerId`) => ...; `HAVE_CURRENT_DATA?`: `2`; `HAVE_ENOUGH_DATA?`: `4`; `HAVE_FUTURE_DATA?`: `3`; `HAVE_METADATA?`: `1`; `HAVE_NOTHING?`: `0`; `hidden?`: `boolean`; `hidePopover?`: () => ...; `id?`: `string`; `inert?`: `boolean`; `innerHTML?`: `string`; `innerText?`: `string`; `inputMode?`: `string`; `insertAdjacentElement?`: (`where`, `element`) => ...; `insertAdjacentHTML?`: (`position`, `string`) => ...; `insertAdjacentText?`: (`where`, `data`) => ...; `insertBefore?`: <`T`>(`node`, `child`) => ...; `isConnected?`: `boolean`; `isContentEditable?`: `boolean`; `isDefaultNamespace?`: (`namespace`) => ...; `isEqualNode?`: (`otherNode`) => ...; `isSameNode?`: (`otherNode`) => ...; `lang?`: `string`; `lastChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `lastElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `load?`: () => ...; `localName?`: `string`; `lookupNamespaceURI?`: (`prefix`) => ...; `lookupPrefix?`: (`namespace`) => ...; `loop?`: `boolean`; `matches?`: (`selectors`) => ...; `mediaKeys?`: { `createSession?`: ...; `getStatusForPolicy?`: ...; `setServerCertificate?`: ...; } | `null`; `muted?`: `boolean`; `namespaceURI?`: `string` | `null`; `NETWORK_EMPTY?`: `0`; `NETWORK_IDLE?`: `1`; `NETWORK_LOADING?`: `2`; `NETWORK_NO_SOURCE?`: `3`; `networkState?`: `number`; `nextElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `nextSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `nodeName?`: `string`; `nodeType?`: `number`; `nodeValue?`: `string` | `null`; `nonce?`: `string`; `normalize?`: () => ...; `NOTATION_NODE?`: `12`; `offsetHeight?`: `number`; `offsetLeft?`: `number`; `offsetParent?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `offsetTop?`: `number`; `offsetWidth?`: `number`; `onabort?`: (`this`, `ev`) => ... | `null`; `onanimationcancel?`: (`this`, `ev`) => ... | `null`; `onanimationend?`: (`this`, `ev`) => ... | `null`; `onanimationiteration?`: (`this`, `ev`) => ... | `null`; `onanimationstart?`: (`this`, `ev`) => ... | `null`; `onauxclick?`: (`this`, `ev`) => ... | `null`; `onbeforeinput?`: (`this`, `ev`) => ... | `null`; `onbeforematch?`: (`this`, `ev`) => ... | `null`; `onbeforetoggle?`: (`this`, `ev`) => ... | `null`; `onblur?`: (`this`, `ev`) => ... | `null`; `oncancel?`: (`this`, `ev`) => ... | `null`; `oncanplay?`: (`this`, `ev`) => ... | `null`; `oncanplaythrough?`: (`this`, `ev`) => ... | `null`; `onchange?`: (`this`, `ev`) => ... | `null`; `onclick?`: (`this`, `ev`) => ... | `null`; `onclose?`: (`this`, `ev`) => ... | `null`; `oncontextlost?`: (`this`, `ev`) => ... | `null`; `oncontextmenu?`: (`this`, `ev`) => ... | `null`; `oncontextrestored?`: (`this`, `ev`) => ... | `null`; `oncopy?`: (`this`, `ev`) => ... | `null`; `oncuechange?`: (`this`, `ev`) => ... | `null`; `oncut?`: (`this`, `ev`) => ... | `null`; `ondblclick?`: (`this`, `ev`) => ... | `null`; `ondrag?`: (`this`, `ev`) => ... | `null`; `ondragend?`: (`this`, `ev`) => ... | `null`; `ondragenter?`: (`this`, `ev`) => ... | `null`; `ondragleave?`: (`this`, `ev`) => ... | `null`; `ondragover?`: (`this`, `ev`) => ... | `null`; `ondragstart?`: (`this`, `ev`) => ... | `null`; `ondrop?`: (`this`, `ev`) => ... | `null`; `ondurationchange?`: (`this`, `ev`) => ... | `null`; `onemptied?`: (`this`, `ev`) => ... | `null`; `onencrypted?`: (`this`, `ev`) => ... | `null`; `onended?`: (`this`, `ev`) => ... | `null`; `onerror?`: `OnErrorEventHandler`; `onfocus?`: (`this`, `ev`) => ... | `null`; `onformdata?`: (`this`, `ev`) => ... | `null`; `onfullscreenchange?`: (`this`, `ev`) => ... | `null`; `onfullscreenerror?`: (`this`, `ev`) => ... | `null`; `ongotpointercapture?`: (`this`, `ev`) => ... | `null`; `oninput?`: (`this`, `ev`) => ... | `null`; `oninvalid?`: (`this`, `ev`) => ... | `null`; `onkeydown?`: (`this`, `ev`) => ... | `null`; `onkeypress?`: (`this`, `ev`) => ... | `null`; `onkeyup?`: (`this`, `ev`) => ... | `null`; `onload?`: (`this`, `ev`) => ... | `null`; `onloadeddata?`: (`this`, `ev`) => ... | `null`; `onloadedmetadata?`: (`this`, `ev`) => ... | `null`; `onloadstart?`: (`this`, `ev`) => ... | `null`; `onlostpointercapture?`: (`this`, `ev`) => ... | `null`; `onmousedown?`: (`this`, `ev`) => ... | `null`; `onmouseenter?`: (`this`, `ev`) => ... | `null`; `onmouseleave?`: (`this`, `ev`) => ... | `null`; `onmousemove?`: (`this`, `ev`) => ... | `null`; `onmouseout?`: (`this`, `ev`) => ... | `null`; `onmouseover?`: (`this`, `ev`) => ... | `null`; `onmouseup?`: (`this`, `ev`) => ... | `null`; `onpaste?`: (`this`, `ev`) => ... | `null`; `onpause?`: (`this`, `ev`) => ... | `null`; `onplay?`: (`this`, `ev`) => ... | `null`; `onplaying?`: (`this`, `ev`) => ... | `null`; `onpointercancel?`: (`this`, `ev`) => ... | `null`; `onpointerdown?`: (`this`, `ev`) => ... | `null`; `onpointerenter?`: (`this`, `ev`) => ... | `null`; `onpointerleave?`: (`this`, `ev`) => ... | `null`; `onpointermove?`: (`this`, `ev`) => ... | `null`; `onpointerout?`: (`this`, `ev`) => ... | `null`; `onpointerover?`: (`this`, `ev`) => ... | `null`; `onpointerrawupdate?`: (`this`, `ev`) => ... | `null`; `onpointerup?`: (`this`, `ev`) => ... | `null`; `onprogress?`: (`this`, `ev`) => ... | `null`; `onratechange?`: (`this`, `ev`) => ... | `null`; `onreset?`: (`this`, `ev`) => ... | `null`; `onresize?`: (`this`, `ev`) => ... | `null`; `onscroll?`: (`this`, `ev`) => ... | `null`; `onscrollend?`: (`this`, `ev`) => ... | `null`; `onsecuritypolicyviolation?`: (`this`, `ev`) => ... | `null`; `onseeked?`: (`this`, `ev`) => ... | `null`; `onseeking?`: (`this`, `ev`) => ... | `null`; `onselect?`: (`this`, `ev`) => ... | `null`; `onselectionchange?`: (`this`, `ev`) => ... | `null`; `onselectstart?`: (`this`, `ev`) => ... | `null`; `onslotchange?`: (`this`, `ev`) => ... | `null`; `onstalled?`: (`this`, `ev`) => ... | `null`; `onsubmit?`: (`this`, `ev`) => ... | `null`; `onsuspend?`: (`this`, `ev`) => ... | `null`; `ontimeupdate?`: (`this`, `ev`) => ... | `null`; `ontoggle?`: (`this`, `ev`) => ... | `null`; `ontouchcancel?`: (`this`, `ev`) => ... | `null`; `ontouchend?`: (`this`, `ev`) => ... | `null`; `ontouchmove?`: (`this`, `ev`) => ... | `null`; `ontouchstart?`: (`this`, `ev`) => ... | `null`; `ontransitioncancel?`: (`this`, `ev`) => ... | `null`; `ontransitionend?`: (`this`, `ev`) => ... | `null`; `ontransitionrun?`: (`this`, `ev`) => ... | `null`; `ontransitionstart?`: (`this`, `ev`) => ... | `null`; `onvolumechange?`: (`this`, `ev`) => ... | `null`; `onwaiting?`: (`this`, `ev`) => ... | `null`; `onwaitingforkey?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationend?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationiteration?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationstart?`: (`this`, `ev`) => ... | `null`; `onwebkittransitionend?`: (`this`, `ev`) => ... | `null`; `onwheel?`: (`this`, `ev`) => ... | `null`; `outerHTML?`: `string`; `outerText?`: `string`; `ownerDocument?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `adoptNode?`: ...; `alinkColor?`: ...; `all?`: ...; `anchors?`: ...; `append?`: ...; `appendChild?`: ...; `applets?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `bgColor?`: ...; `body?`: ...; `captureEvents?`: ...; `caretPositionFromPoint?`: ...; `caretRangeFromPoint?`: ...; `CDATA_SECTION_NODE?`: ...; `characterSet?`: ...; `charset?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clear?`: ...; `cloneNode?`: ...; `close?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `compatMode?`: ...; `contains?`: ...; `contentType?`: ...; `cookie?`: ...; `createAttribute?`: ...; `createAttributeNS?`: ...; `createCDATASection?`: ...; `createComment?`: ...; `createDocumentFragment?`: ...; `createElement?`: ...; `createElementNS?`: ...; `createEvent?`: ...; `createExpression?`: ...; `createNodeIterator?`: ...; `createNSResolver?`: ...; `createProcessingInstruction?`: ...; `createRange?`: ...; `createTextNode?`: ...; `createTreeWalker?`: ...; `currentScript?`: ...; `defaultView?`: ...; `designMode?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `doctype?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `documentElement?`: ...; `documentURI?`: ...; `domain?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `embeds?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `evaluate?`: ...; `execCommand?`: ...; `exitFullscreen?`: ...; `exitPictureInPicture?`: ...; `exitPointerLock?`: ...; `fgColor?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fonts?`: ...; `forms?`: ...; `fragmentDirective?`: ...; `fullscreen?`: ...; `fullscreenElement?`: ...; `fullscreenEnabled?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getElementsByClassName?`: ...; `getElementsByName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getRootNode?`: ...; `getSelection?`: ...; `hasChildNodes?`: ...; `hasFocus?`: ...; `hasStorageAccess?`: ...; `head?`: ...; `hidden?`: ...; `images?`: ...; `implementation?`: ...; `importNode?`: ...; `inputEncoding?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lastModified?`: ...; `linkColor?`: ...; `links?`: ...; `location?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointerlockchange?`: ...; `onpointerlockerror?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreadystatechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvisibilitychange?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `open?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pictureInPictureEnabled?`: ...; `plugins?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `queryCommandEnabled?`: ...; `queryCommandIndeterm?`: ...; `queryCommandState?`: ...; `queryCommandSupported?`: ...; `queryCommandValue?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `readyState?`: ...; `referrer?`: ...; `releaseEvents?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `requestStorageAccess?`: ...; `rootElement?`: ...; `scripts?`: ...; `scrollingElement?`: ...; `startViewTransition?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `timeline?`: ...; `title?`: ...; `URL?`: ...; `visibilityState?`: ...; `vlinkColor?`: ...; `write?`: ...; `writeln?`: ...; }; `parentElement?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `parentNode?`: { `addEventListener?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `part?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `pause?`: () => ...; `paused?`: `boolean`; `play?`: () => ...; `playbackRate?`: `number`; `played?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `popover?`: `string` | `null`; `prefix?`: `string` | `null`; `preload?`: `""` | `"metadata"` | `"none"` | `"auto"`; `prepend?`: (...`nodes`) => ...; `preservesPitch?`: `boolean`; `previousElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `previousSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `PROCESSING_INSTRUCTION_NODE?`: `7`; `querySelector?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `querySelectorAll?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `readyState?`: `number`; `releasePointerCapture?`: (`pointerId`) => ...; `remote?`: { `addEventListener?`: ...; `cancelWatchAvailability?`: ...; `dispatchEvent?`: ...; `onconnect?`: ...; `onconnecting?`: ...; `ondisconnect?`: ...; `prompt?`: ...; `removeEventListener?`: ...; `state?`: ...; `watchAvailability?`: ...; }; `remove?`: () => ...; `removeAttribute?`: (`qualifiedName`) => ...; `removeAttributeNode?`: (`attr`) => ...; `removeAttributeNS?`: (`namespace`, `localName`) => ...; `removeChild?`: <`T`>(`child`) => ...; `removeEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `replaceChild?`: <`T`>(`node`, `child`) => ...; `replaceChildren?`: (...`nodes`) => ...; `replaceWith?`: (...`nodes`) => ...; `requestFullscreen?`: (`options?`) => ...; `requestPointerLock?`: (`options?`) => ...; `role?`: `string` | `null`; `scroll?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollBy?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollHeight?`: `number`; `scrollIntoView?`: (`arg?`) => ...; `scrollLeft?`: `number`; `scrollTo?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollTop?`: `number`; `scrollWidth?`: `number`; `seekable?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `seeking?`: `boolean`; `setAttribute?`: (`qualifiedName`, `value`) => ...; `setAttributeNode?`: (`attr`) => ...; `setAttributeNodeNS?`: (`attr`) => ...; `setAttributeNS?`: (`namespace`, `qualifiedName`, `value`) => ...; `setHTMLUnsafe?`: (`html`) => ...; `setMediaKeys?`: (`mediaKeys`) => ...; `setPointerCapture?`: (`pointerId`) => ...; `setSinkId?`: (`sinkId`) => ...; `shadowRoot?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clonable?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `delegatesFocus?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fullscreenElement?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `host?`: ...; `innerHTML?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `mode?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onslotchange?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `serializable?`: ...; `setHTMLUnsafe?`: ...; `slotAssignment?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `showPopover?`: () => ...; `sinkId?`: `string`; `slot?`: `string`; `spellcheck?`: `boolean`; `src?`: `string`; `srcObject?`: { `active?`: ...; `addEventListener?`: ...; `addTrack?`: ...; `clone?`: ...; `dispatchEvent?`: ...; `getAudioTracks?`: ...; `getTrackById?`: ...; `getTracks?`: ...; `getVideoTracks?`: ...; `id?`: ...; `onaddtrack?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; `removeTrack?`: ...; } | { `activeSourceBuffers?`: ...; `addEventListener?`: ...; `addSourceBuffer?`: ...; `clearLiveSeekableRange?`: ...; `dispatchEvent?`: ...; `duration?`: ...; `endOfStream?`: ...; `onsourceclose?`: ...; `onsourceended?`: ...; `onsourceopen?`: ...; `readyState?`: ...; `removeEventListener?`: ...; `removeSourceBuffer?`: ...; `setLiveSeekableRange?`: ...; `sourceBuffers?`: ...; } | { `arrayBuffer?`: ...; `bytes?`: ...; `size?`: ...; `slice?`: ...; `stream?`: ...; `text?`: ...; `type?`: ...; } | `null`; `style?`: {[`key`: ...]: ...; `[iterator]?`: ...; `accentColor?`: ...; `alignContent?`: ...; `alignItems?`: ...; `alignmentBaseline?`: ...; `alignSelf?`: ...; `all?`: ...; `animation?`: ...; `animationComposition?`: ...; `animationDelay?`: ...; `animationDirection?`: ...; `animationDuration?`: ...; `animationFillMode?`: ...; `animationIterationCount?`: ...; `animationName?`: ...; `animationPlayState?`: ...; `animationTimingFunction?`: ...; `appearance?`: ...; `aspectRatio?`: ...; `backdropFilter?`: ...; `backfaceVisibility?`: ...; `background?`: ...; `backgroundAttachment?`: ...; `backgroundBlendMode?`: ...; `backgroundClip?`: ...; `backgroundColor?`: ...; `backgroundImage?`: ...; `backgroundOrigin?`: ...; `backgroundPosition?`: ...; `backgroundPositionX?`: ...; `backgroundPositionY?`: ...; `backgroundRepeat?`: ...; `backgroundSize?`: ...; `baselineShift?`: ...; `baselineSource?`: ...; `blockSize?`: ...; `border?`: ...; `borderBlock?`: ...; `borderBlockColor?`: ...; `borderBlockEnd?`: ...; `borderBlockEndColor?`: ...; `borderBlockEndStyle?`: ...; `borderBlockEndWidth?`: ...; `borderBlockStart?`: ...; `borderBlockStartColor?`: ...; `borderBlockStartStyle?`: ...; `borderBlockStartWidth?`: ...; `borderBlockStyle?`: ...; `borderBlockWidth?`: ...; `borderBottom?`: ...; `borderBottomColor?`: ...; `borderBottomLeftRadius?`: ...; `borderBottomRightRadius?`: ...; `borderBottomStyle?`: ...; `borderBottomWidth?`: ...; `borderCollapse?`: ...; `borderColor?`: ...; `borderEndEndRadius?`: ...; `borderEndStartRadius?`: ...; `borderImage?`: ...; `borderImageOutset?`: ...; `borderImageRepeat?`: ...; `borderImageSlice?`: ...; `borderImageSource?`: ...; `borderImageWidth?`: ...; `borderInline?`: ...; `borderInlineColor?`: ...; `borderInlineEnd?`: ...; `borderInlineEndColor?`: ...; `borderInlineEndStyle?`: ...; `borderInlineEndWidth?`: ...; `borderInlineStart?`: ...; `borderInlineStartColor?`: ...; `borderInlineStartStyle?`: ...; `borderInlineStartWidth?`: ...; `borderInlineStyle?`: ...; `borderInlineWidth?`: ...; `borderLeft?`: ...; `borderLeftColor?`: ...; `borderLeftStyle?`: ...; `borderLeftWidth?`: ...; `borderRadius?`: ...; `borderRight?`: ...; `borderRightColor?`: ...; `borderRightStyle?`: ...; `borderRightWidth?`: ...; `borderSpacing?`: ...; `borderStartEndRadius?`: ...; `borderStartStartRadius?`: ...; `borderStyle?`: ...; `borderTop?`: ...; `borderTopColor?`: ...; `borderTopLeftRadius?`: ...; `borderTopRightRadius?`: ...; `borderTopStyle?`: ...; `borderTopWidth?`: ...; `borderWidth?`: ...; `bottom?`: ...; `boxDecorationBreak?`: ...; `boxShadow?`: ...; `boxSizing?`: ...; `breakAfter?`: ...; `breakBefore?`: ...; `breakInside?`: ...; `captionSide?`: ...; `caretColor?`: ...; `clear?`: ...; `clip?`: ...; `clipPath?`: ...; `clipRule?`: ...; `color?`: ...; `colorInterpolation?`: ...; `colorInterpolationFilters?`: ...; `colorScheme?`: ...; `columnCount?`: ...; `columnFill?`: ...; `columnGap?`: ...; `columnRule?`: ...; `columnRuleColor?`: ...; `columnRuleStyle?`: ...; `columnRuleWidth?`: ...; `columns?`: ...; `columnSpan?`: ...; `columnWidth?`: ...; `contain?`: ...; `container?`: ...; `containerName?`: ...; `containerType?`: ...; `containIntrinsicBlockSize?`: ...; `containIntrinsicHeight?`: ...; `containIntrinsicInlineSize?`: ...; `containIntrinsicSize?`: ...; `containIntrinsicWidth?`: ...; `content?`: ...; `contentVisibility?`: ...; `counterIncrement?`: ...; `counterReset?`: ...; `counterSet?`: ...; `cssFloat?`: ...; `cssText?`: ...; `cursor?`: ...; `cx?`: ...; `cy?`: ...; `d?`: ...; `direction?`: ...; `display?`: ...; `dominantBaseline?`: ...; `emptyCells?`: ...; `fill?`: ...; `fillOpacity?`: ...; `fillRule?`: ...; `filter?`: ...; `flex?`: ...; `flexBasis?`: ...; `flexDirection?`: ...; `flexFlow?`: ...; `flexGrow?`: ...; `flexShrink?`: ...; `flexWrap?`: ...; `float?`: ...; `floodColor?`: ...; `floodOpacity?`: ...; `font?`: ...; `fontFamily?`: ...; `fontFeatureSettings?`: ...; `fontKerning?`: ...; `fontOpticalSizing?`: ...; `fontPalette?`: ...; `fontSize?`: ...; `fontSizeAdjust?`: ...; `fontStretch?`: ...; `fontStyle?`: ...; `fontSynthesis?`: ...; `fontSynthesisSmallCaps?`: ...; `fontSynthesisStyle?`: ...; `fontSynthesisWeight?`: ...; `fontVariant?`: ...; `fontVariantAlternates?`: ...; `fontVariantCaps?`: ...; `fontVariantEastAsian?`: ...; `fontVariantLigatures?`: ...; `fontVariantNumeric?`: ...; `fontVariantPosition?`: ...; `fontVariationSettings?`: ...; `fontWeight?`: ...; `forcedColorAdjust?`: ...; `gap?`: ...; `getPropertyPriority?`: ...; `getPropertyValue?`: ...; `grid?`: ...; `gridArea?`: ...; `gridAutoColumns?`: ...; `gridAutoFlow?`: ...; `gridAutoRows?`: ...; `gridColumn?`: ...; `gridColumnEnd?`: ...; `gridColumnGap?`: ...; `gridColumnStart?`: ...; `gridGap?`: ...; `gridRow?`: ...; `gridRowEnd?`: ...; `gridRowGap?`: ...; `gridRowStart?`: ...; `gridTemplate?`: ...; `gridTemplateAreas?`: ...; `gridTemplateColumns?`: ...; `gridTemplateRows?`: ...; `height?`: ...; `hyphenateCharacter?`: ...; `hyphenateLimitChars?`: ...; `hyphens?`: ...; `imageOrientation?`: ...; `imageRendering?`: ...; `inlineSize?`: ...; `inset?`: ...; `insetBlock?`: ...; `insetBlockEnd?`: ...; `insetBlockStart?`: ...; `insetInline?`: ...; `insetInlineEnd?`: ...; `insetInlineStart?`: ...; `isolation?`: ...; `item?`: ...; `justifyContent?`: ...; `justifyItems?`: ...; `justifySelf?`: ...; `left?`: ...; `length?`: ...; `letterSpacing?`: ...; `lightingColor?`: ...; `lineBreak?`: ...; `lineHeight?`: ...; `listStyle?`: ...; `listStyleImage?`: ...; `listStylePosition?`: ...; `listStyleType?`: ...; `margin?`: ...; `marginBlock?`: ...; `marginBlockEnd?`: ...; `marginBlockStart?`: ...; `marginBottom?`: ...; `marginInline?`: ...; `marginInlineEnd?`: ...; `marginInlineStart?`: ...; `marginLeft?`: ...; `marginRight?`: ...; `marginTop?`: ...; `marker?`: ...; `markerEnd?`: ...; `markerMid?`: ...; `markerStart?`: ...; `mask?`: ...; `maskClip?`: ...; `maskComposite?`: ...; `maskImage?`: ...; `maskMode?`: ...; `maskOrigin?`: ...; `maskPosition?`: ...; `maskRepeat?`: ...; `maskSize?`: ...; `maskType?`: ...; `mathDepth?`: ...; `mathStyle?`: ...; `maxBlockSize?`: ...; `maxHeight?`: ...; `maxInlineSize?`: ...; `maxWidth?`: ...; `minBlockSize?`: ...; `minHeight?`: ...; `minInlineSize?`: ...; `minWidth?`: ...; `mixBlendMode?`: ...; `objectFit?`: ...; `objectPosition?`: ...; `offset?`: ...; `offsetAnchor?`: ...; `offsetDistance?`: ...; `offsetPath?`: ...; `offsetPosition?`: ...; `offsetRotate?`: ...; `opacity?`: ...; `order?`: ...; `orphans?`: ...; `outline?`: ...; `outlineColor?`: ...; `outlineOffset?`: ...; `outlineStyle?`: ...; `outlineWidth?`: ...; `overflow?`: ...; `overflowAnchor?`: ...; `overflowBlock?`: ...; `overflowClipMargin?`: ...; `overflowInline?`: ...; `overflowWrap?`: ...; `overflowX?`: ...; `overflowY?`: ...; `overscrollBehavior?`: ...; `overscrollBehaviorBlock?`: ...; `overscrollBehaviorInline?`: ...; `overscrollBehaviorX?`: ...; `overscrollBehaviorY?`: ...; `padding?`: ...; `paddingBlock?`: ...; `paddingBlockEnd?`: ...; `paddingBlockStart?`: ...; `paddingBottom?`: ...; `paddingInline?`: ...; `paddingInlineEnd?`: ...; `paddingInlineStart?`: ...; `paddingLeft?`: ...; `paddingRight?`: ...; `paddingTop?`: ...; `page?`: ...; `pageBreakAfter?`: ...; `pageBreakBefore?`: ...; `pageBreakInside?`: ...; `paintOrder?`: ...; `parentRule?`: ...; `perspective?`: ...; `perspectiveOrigin?`: ...; `placeContent?`: ...; `placeItems?`: ...; `placeSelf?`: ...; `pointerEvents?`: ...; `position?`: ...; `printColorAdjust?`: ...; `quotes?`: ...; `r?`: ...; `removeProperty?`: ...; `resize?`: ...; `right?`: ...; `rotate?`: ...; `rowGap?`: ...; `rubyAlign?`: ...; `rubyPosition?`: ...; `rx?`: ...; `ry?`: ...; `scale?`: ...; `scrollbarColor?`: ...; `scrollbarGutter?`: ...; `scrollbarWidth?`: ...; `scrollBehavior?`: ...; `scrollMargin?`: ...; `scrollMarginBlock?`: ...; `scrollMarginBlockEnd?`: ...; `scrollMarginBlockStart?`: ...; `scrollMarginBottom?`: ...; `scrollMarginInline?`: ...; `scrollMarginInlineEnd?`: ...; `scrollMarginInlineStart?`: ...; `scrollMarginLeft?`: ...; `scrollMarginRight?`: ...; `scrollMarginTop?`: ...; `scrollPadding?`: ...; `scrollPaddingBlock?`: ...; `scrollPaddingBlockEnd?`: ...; `scrollPaddingBlockStart?`: ...; `scrollPaddingBottom?`: ...; `scrollPaddingInline?`: ...; `scrollPaddingInlineEnd?`: ...; `scrollPaddingInlineStart?`: ...; `scrollPaddingLeft?`: ...; `scrollPaddingRight?`: ...; `scrollPaddingTop?`: ...; `scrollSnapAlign?`: ...; `scrollSnapStop?`: ...; `scrollSnapType?`: ...; `setProperty?`: ...; `shapeImageThreshold?`: ...; `shapeMargin?`: ...; `shapeOutside?`: ...; `shapeRendering?`: ...; `stopColor?`: ...; `stopOpacity?`: ...; `stroke?`: ...; `strokeDasharray?`: ...; `strokeDashoffset?`: ...; `strokeLinecap?`: ...; `strokeLinejoin?`: ...; `strokeMiterlimit?`: ...; `strokeOpacity?`: ...; `strokeWidth?`: ...; `tableLayout?`: ...; `tabSize?`: ...; `textAlign?`: ...; `textAlignLast?`: ...; `textAnchor?`: ...; `textBox?`: ...; `textBoxEdge?`: ...; `textBoxTrim?`: ...; `textCombineUpright?`: ...; `textDecoration?`: ...; `textDecorationColor?`: ...; `textDecorationLine?`: ...; `textDecorationSkipInk?`: ...; `textDecorationStyle?`: ...; `textDecorationThickness?`: ...; `textEmphasis?`: ...; `textEmphasisColor?`: ...; `textEmphasisPosition?`: ...; `textEmphasisStyle?`: ...; `textIndent?`: ...; `textOrientation?`: ...; `textOverflow?`: ...; `textRendering?`: ...; `textShadow?`: ...; `textTransform?`: ...; `textUnderlineOffset?`: ...; `textUnderlinePosition?`: ...; `textWrap?`: ...; `textWrapMode?`: ...; `textWrapStyle?`: ...; `top?`: ...; `touchAction?`: ...; `transform?`: ...; `transformBox?`: ...; `transformOrigin?`: ...; `transformStyle?`: ...; `transition?`: ...; `transitionBehavior?`: ...; `transitionDelay?`: ...; `transitionDuration?`: ...; `transitionProperty?`: ...; `transitionTimingFunction?`: ...; `translate?`: ...; `unicodeBidi?`: ...; `userSelect?`: ...; `vectorEffect?`: ...; `verticalAlign?`: ...; `viewTransitionClass?`: ...; `viewTransitionName?`: ...; `visibility?`: ...; `webkitAlignContent?`: ...; `webkitAlignItems?`: ...; `webkitAlignSelf?`: ...; `webkitAnimation?`: ...; `webkitAnimationDelay?`: ...; `webkitAnimationDirection?`: ...; `webkitAnimationDuration?`: ...; `webkitAnimationFillMode?`: ...; `webkitAnimationIterationCount?`: ...; `webkitAnimationName?`: ...; `webkitAnimationPlayState?`: ...; `webkitAnimationTimingFunction?`: ...; `webkitAppearance?`: ...; `webkitBackfaceVisibility?`: ...; `webkitBackgroundClip?`: ...; `webkitBackgroundOrigin?`: ...; `webkitBackgroundSize?`: ...; `webkitBorderBottomLeftRadius?`: ...; `webkitBorderBottomRightRadius?`: ...; `webkitBorderRadius?`: ...; `webkitBorderTopLeftRadius?`: ...; `webkitBorderTopRightRadius?`: ...; `webkitBoxAlign?`: ...; `webkitBoxFlex?`: ...; `webkitBoxOrdinalGroup?`: ...; `webkitBoxOrient?`: ...; `webkitBoxPack?`: ...; `webkitBoxShadow?`: ...; `webkitBoxSizing?`: ...; `webkitFilter?`: ...; `webkitFlex?`: ...; `webkitFlexBasis?`: ...; `webkitFlexDirection?`: ...; `webkitFlexFlow?`: ...; `webkitFlexGrow?`: ...; `webkitFlexShrink?`: ...; `webkitFlexWrap?`: ...; `webkitJustifyContent?`: ...; `webkitLineClamp?`: ...; `webkitMask?`: ...; `webkitMaskBoxImage?`: ...; `webkitMaskBoxImageOutset?`: ...; `webkitMaskBoxImageRepeat?`: ...; `webkitMaskBoxImageSlice?`: ...; `webkitMaskBoxImageSource?`: ...; `webkitMaskBoxImageWidth?`: ...; `webkitMaskClip?`: ...; `webkitMaskComposite?`: ...; `webkitMaskImage?`: ...; `webkitMaskOrigin?`: ...; `webkitMaskPosition?`: ...; `webkitMaskRepeat?`: ...; `webkitMaskSize?`: ...; `webkitOrder?`: ...; `webkitPerspective?`: ...; `webkitPerspectiveOrigin?`: ...; `webkitTextFillColor?`: ...; `webkitTextSizeAdjust?`: ...; `webkitTextStroke?`: ...; `webkitTextStrokeColor?`: ...; `webkitTextStrokeWidth?`: ...; `webkitTransform?`: ...; `webkitTransformOrigin?`: ...; `webkitTransformStyle?`: ...; `webkitTransition?`: ...; `webkitTransitionDelay?`: ...; `webkitTransitionDuration?`: ...; `webkitTransitionProperty?`: ...; `webkitTransitionTimingFunction?`: ...; `webkitUserSelect?`: ...; `whiteSpace?`: ...; `whiteSpaceCollapse?`: ...; `widows?`: ...; `width?`: ...; `willChange?`: ...; `wordBreak?`: ...; `wordSpacing?`: ...; `wordWrap?`: ...; `writingMode?`: ...; `x?`: ...; `y?`: ...; `zIndex?`: ...; `zoom?`: ...; }; `tabIndex?`: `number`; `tagName?`: `string`; `TEXT_NODE?`: `3`; `textContent?`: `string`; `textTracks?`: {[`key`: ...]: ...; `[iterator]?`: ...; `addEventListener?`: ...; `dispatchEvent?`: ...; `getTrackById?`: ...; `length?`: ...; `onaddtrack?`: ...; `onchange?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; }; `title?`: `string`; `toggleAttribute?`: (`qualifiedName`, `force?`) => ...; `togglePopover?`: (`options?`) => ...; `translate?`: `boolean`; `volume?`: `number`; `webkitMatchesSelector?`: (`selectors`) => ...; `writingSuggestions?`: `string`; }; `playbackEngineConfiguration?`: { `lazyLoadPlayers?`: `boolean`; `playbackConfigurations?`: { `hls?`: ...; `native?`: ...; `shaka?`: ...; }; `playerLoader?`: { `debugLibraries?`: ...; `esmImportAsDefault?`: ...; `loadConfigurations?`: ...; `urlSpecs?`: ...; }; `playerVersions?`: {[`key`: ...]: ...; `PlaybackEngineTypes.Dash?`: ...; `PlaybackEngineTypes.Hls?`: ...; `PlaybackEngineTypes.Native?`: ...; `PlaybackEngineTypes.Shaka?`: ...; `PlaybackEngineTypes.Unknown?`: ...; `PlaybackEngineTypes.Useless?`: ...; }; }; `playbackEngineLoader?`: { `configure?`: (`playbackEnginesLoadConfiguration`) => ...; `getConfiguredPlaybackEngineTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlaybackEngine?`: <`TArgs`>(`type`) => ...; `loadConfiguredPlaybackEngines?`: () => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadNativePlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPlaybackEngine?`: <`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `setLogger?`: (`logger`) => ...; }; `playbackEngines?`: {[`key`: `string`]: `IHlsPlaybackEngineConstructor` | `INativePlaybackEngineConstructor` | `IShakaPlaybackEngineConstructor` | `IPlaybackEngineConstructor`<...> | `undefined`; `PlaybackEngineTypes.Hls?`: `IHlsPlaybackEngineConstructor`; `PlaybackEngineTypes.Native?`: `INativePlaybackEngineConstructor`; `PlaybackEngineTypes.Shaka?`: `IShakaPlaybackEngineConstructor`; }; `playbackEngineSelector?`: `IPlaybackEngineSelector`; `playerLoader?`: { `configure?`: (`playerLoaderConfiguration`) => ...; `configureLoadConfigurationsIfNotConfigured?`: (`loadConfigurations`) => ...; `getConfiguredPlayerTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlayer?`: (`type`, `predicate?`) => ...; `loadConfiguredPlayers?`: (`exportPredicates?`) => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadPlayer?`: <`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `registerExportPredicate?`: (`type`, `predicate`) => ...; `setLogger?`: (`logger`) => ...; }; `shaka?`: { `shaka?`: `any`; `shakaPlayerConstructor?`: (`mediaElement?`) => ...; }; }

###### components.wacka.playerArgs.advertisementHandlers?

{[`key`: `string`]: `AdvertisementHandlerConstructor` | `undefined`; }

###### components.wacka.playerArgs.configuration?

{ `advertisement?`: { `controller?`: ...; `handlers?`: ...; }; }

###### components.wacka.playerArgs.configuration.advertisement?

{ `controller?`: ...; `handlers?`: ...; }

###### components.wacka.playerArgs.configuration.advertisement.controller?

...

###### components.wacka.playerArgs.configuration.advertisement.handlers?

...

###### components.wacka.playerArgs.engineConfiguration?

{ `buffering?`: { `ahead?`: ...; `behind?`: ...; }; `drm?`: { `supportedProtectionSystems?`: ...; }; `language?`: { `preferred?`: ...; }; `metrics?`: { `downloadRatioAggregatorSamples?`: ...; `downloadTimeAggregatorSamples?`: ...; `enabled?`: ...; `interval?`: ...; `liveEdgeOffsetAggregatorSamples?`: ...; `liveOffsetAggregatorSamples?`: ...; `maxBufferStalls?`: ...; `mode?`: ...; `networkAggregatorSamples?`: ...; `timeSeriesLength?`: ...; }; `recovery?`: { `enabled?`: ...; }; `tracks?`: { `accessibilityRoles?`: ...; `disableSameLanguageText?`: ...; `matchConfiguration?`: ...; `noAccessibilityTracks?`: ...; }; }

###### components.wacka.playerArgs.engineConfiguration.buffering?

{ `ahead?`: ...; `behind?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.buffering.ahead?

...

###### components.wacka.playerArgs.engineConfiguration.buffering.behind?

...

###### components.wacka.playerArgs.engineConfiguration.drm?

{ `supportedProtectionSystems?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.drm.supportedProtectionSystems?

...

###### components.wacka.playerArgs.engineConfiguration.language?

{ `preferred?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.language.preferred?

...

###### components.wacka.playerArgs.engineConfiguration.metrics?

{ `downloadRatioAggregatorSamples?`: ...; `downloadTimeAggregatorSamples?`: ...; `enabled?`: ...; `interval?`: ...; `liveEdgeOffsetAggregatorSamples?`: ...; `liveOffsetAggregatorSamples?`: ...; `maxBufferStalls?`: ...; `mode?`: ...; `networkAggregatorSamples?`: ...; `timeSeriesLength?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.metrics.downloadRatioAggregatorSamples?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.downloadTimeAggregatorSamples?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.enabled?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.interval?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.liveEdgeOffsetAggregatorSamples?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.liveOffsetAggregatorSamples?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.maxBufferStalls?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.mode?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.networkAggregatorSamples?

...

###### components.wacka.playerArgs.engineConfiguration.metrics.timeSeriesLength?

...

###### components.wacka.playerArgs.engineConfiguration.recovery?

{ `enabled?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.recovery.enabled?

...

###### components.wacka.playerArgs.engineConfiguration.tracks?

{ `accessibilityRoles?`: ...; `disableSameLanguageText?`: ...; `matchConfiguration?`: ...; `noAccessibilityTracks?`: ...; }

###### components.wacka.playerArgs.engineConfiguration.tracks.accessibilityRoles?

...

###### components.wacka.playerArgs.engineConfiguration.tracks.disableSameLanguageText?

...

###### components.wacka.playerArgs.engineConfiguration.tracks.matchConfiguration?

...

###### components.wacka.playerArgs.engineConfiguration.tracks.noAccessibilityTracks?

...

###### components.wacka.playerArgs.hls?

{ `Hls?`: *typeof* `Hls`; }

###### components.wacka.playerArgs.hls.Hls?

*typeof* `Hls`

###### components.wacka.playerArgs.logger?

{ `debug?`: (...`data`) => ...; `debugVerbose?`: (...`data`) => ...; `error?`: (...`data`) => ...; `getLevel?`: () => ...; `info?`: (...`data`) => ...; `log?`: (...`data`) => ...; `logAtLevel?`: (`level`, ...`data`) => ...; `setImplementation?`: (`implementation`) => ...; `setLevel?`: (`level`) => ...; `warn?`: (...`data`) => ...; }

###### components.wacka.playerArgs.logger.debug?

(...`data`) => ...

###### components.wacka.playerArgs.logger.debugVerbose?

(...`data`) => ...

###### components.wacka.playerArgs.logger.error?

(...`data`) => ...

###### components.wacka.playerArgs.logger.getLevel?

() => ...

###### components.wacka.playerArgs.logger.info?

(...`data`) => ...

###### components.wacka.playerArgs.logger.log?

(...`data`) => ...

###### components.wacka.playerArgs.logger.logAtLevel?

(`level`, ...`data`) => ...

###### components.wacka.playerArgs.logger.setImplementation?

(`implementation`) => ...

###### components.wacka.playerArgs.logger.setLevel?

(`level`) => ...

###### components.wacka.playerArgs.logger.warn?

(...`data`) => ...

###### components.wacka.playerArgs.logLevel?

`LogLevels`

###### components.wacka.playerArgs.mediaElement?

{ `accessKey?`: `string`; `accessKeyLabel?`: `string`; `addEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `addTextTrack?`: (`kind`, `label?`, `language?`) => ...; `after?`: (...`nodes`) => ...; `animate?`: (`keyframes`, `options?`) => ...; `append?`: (...`nodes`) => ...; `appendChild?`: <`T`>(`node`) => ...; `ariaActiveDescendantElement?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `ariaAtomic?`: `string` | `null`; `ariaAutoComplete?`: `string` | `null`; `ariaBrailleLabel?`: `string` | `null`; `ariaBrailleRoleDescription?`: `string` | `null`; `ariaBusy?`: `string` | `null`; `ariaChecked?`: `string` | `null`; `ariaColCount?`: `string` | `null`; `ariaColIndex?`: `string` | `null`; `ariaColIndexText?`: `string` | `null`; `ariaColSpan?`: `string` | `null`; `ariaControlsElements?`: readonly ...[] | `null`; `ariaCurrent?`: `string` | `null`; `ariaDescribedByElements?`: readonly ...[] | `null`; `ariaDescription?`: `string` | `null`; `ariaDetailsElements?`: readonly ...[] | `null`; `ariaDisabled?`: `string` | `null`; `ariaErrorMessageElements?`: readonly ...[] | `null`; `ariaExpanded?`: `string` | `null`; `ariaFlowToElements?`: readonly ...[] | `null`; `ariaHasPopup?`: `string` | `null`; `ariaHidden?`: `string` | `null`; `ariaInvalid?`: `string` | `null`; `ariaKeyShortcuts?`: `string` | `null`; `ariaLabel?`: `string` | `null`; `ariaLabelledByElements?`: readonly ...[] | `null`; `ariaLevel?`: `string` | `null`; `ariaLive?`: `string` | `null`; `ariaModal?`: `string` | `null`; `ariaMultiLine?`: `string` | `null`; `ariaMultiSelectable?`: `string` | `null`; `ariaOrientation?`: `string` | `null`; `ariaOwnsElements?`: readonly ...[] | `null`; `ariaPlaceholder?`: `string` | `null`; `ariaPosInSet?`: `string` | `null`; `ariaPressed?`: `string` | `null`; `ariaReadOnly?`: `string` | `null`; `ariaRelevant?`: `string` | `null`; `ariaRequired?`: `string` | `null`; `ariaRoleDescription?`: `string` | `null`; `ariaRowCount?`: `string` | `null`; `ariaRowIndex?`: `string` | `null`; `ariaRowIndexText?`: `string` | `null`; `ariaRowSpan?`: `string` | `null`; `ariaSelected?`: `string` | `null`; `ariaSetSize?`: `string` | `null`; `ariaSort?`: `string` | `null`; `ariaValueMax?`: `string` | `null`; `ariaValueMin?`: `string` | `null`; `ariaValueNow?`: `string` | `null`; `ariaValueText?`: `string` | `null`; `assignedSlot?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assign?`: ...; `assignedElements?`: ...; `assignedNodes?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `name?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `attachInternals?`: () => ...; `attachShadow?`: (`init`) => ...; `ATTRIBUTE_NODE?`: `2`; `attributes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `getNamedItem?`: ...; `getNamedItemNS?`: ...; `item?`: ...; `length?`: ...; `removeNamedItem?`: ...; `removeNamedItemNS?`: ...; `setNamedItem?`: ...; `setNamedItemNS?`: ...; }; `attributeStyleMap?`: `ReadonlyMap`<..., ...>; `autocapitalize?`: `string`; `autocorrect?`: `boolean`; `autofocus?`: `boolean`; `autoplay?`: `boolean`; `baseURI?`: `string`; `before?`: (...`nodes`) => ...; `blur?`: () => ...; `buffered?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `canPlayType?`: (`type`) => ...; `CDATA_SECTION_NODE?`: `4`; `checkVisibility?`: (`options?`) => ...; `childElementCount?`: `number`; `childNodes?`: {[`key`: ...]: ...; `[iterator]?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `values?`: ...; }; `children?`: {[`key`: ...]: ...; `[iterator]?`: ...; `item?`: ...; `length?`: ...; `namedItem?`: ...; }; `classList?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `className?`: `string`; `click?`: () => ...; `clientHeight?`: `number`; `clientLeft?`: `number`; `clientTop?`: `number`; `clientWidth?`: `number`; `cloneNode?`: (`subtree?`) => ...; `closest?`: {<`K`>(`selector`): ...; <`K`>(`selector`): ...; <`K`>(`selector`): ...; <`E`>(`selectors`): ...; }; `COMMENT_NODE?`: `8`; `compareDocumentPosition?`: (`other`) => ...; `computedStyleMap?`: () => ...; `contains?`: (`other`) => ...; `contentEditable?`: `string`; `controls?`: `boolean`; `crossOrigin?`: `string` | `null`; `currentCSSZoom?`: `number`; `currentSrc?`: `string`; `currentTime?`: `number`; `dataset?`: {[`key`: ...]: ...; }; `defaultMuted?`: `boolean`; `defaultPlaybackRate?`: `number`; `dir?`: `string`; `disableRemotePlayback?`: `boolean`; `dispatchEvent?`: (`event`) => ...; `DOCUMENT_FRAGMENT_NODE?`: `11`; `DOCUMENT_NODE?`: `9`; `DOCUMENT_POSITION_CONTAINED_BY?`: `16`; `DOCUMENT_POSITION_CONTAINS?`: `8`; `DOCUMENT_POSITION_DISCONNECTED?`: `1`; `DOCUMENT_POSITION_FOLLOWING?`: `4`; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: `32`; `DOCUMENT_POSITION_PRECEDING?`: `2`; `DOCUMENT_TYPE_NODE?`: `10`; `draggable?`: `boolean`; `duration?`: `number`; `ELEMENT_NODE?`: `1`; `ended?`: `boolean`; `enterKeyHint?`: `string`; `ENTITY_NODE?`: `6`; `ENTITY_REFERENCE_NODE?`: `5`; `error?`: { `code?`: ...; `MEDIA_ERR_ABORTED?`: ...; `MEDIA_ERR_DECODE?`: ...; `MEDIA_ERR_NETWORK?`: ...; `MEDIA_ERR_SRC_NOT_SUPPORTED?`: ...; `message?`: ...; } | `null`; `fastSeek?`: (`time`) => ...; `firstChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `firstElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `focus?`: (`options?`) => ...; `getAnimations?`: (`options?`) => ...; `getAttribute?`: (`qualifiedName`) => ...; `getAttributeNames?`: () => ...; `getAttributeNode?`: (`qualifiedName`) => ...; `getAttributeNodeNS?`: (`namespace`, `localName`) => ...; `getAttributeNS?`: (`namespace`, `localName`) => ...; `getBoundingClientRect?`: () => ...; `getClientRects?`: () => ...; `getElementsByClassName?`: (`classNames`) => ...; `getElementsByTagName?`: {<`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; (`qualifiedName`): ...; }; `getElementsByTagNameNS?`: {(`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespace`, `localName`): ...; }; `getHTML?`: (`options?`) => ...; `getRootNode?`: (`options?`) => ...; `hasAttribute?`: (`qualifiedName`) => ...; `hasAttributeNS?`: (`namespace`, `localName`) => ...; `hasAttributes?`: () => ...; `hasChildNodes?`: () => ...; `hasPointerCapture?`: (`pointerId`) => ...; `HAVE_CURRENT_DATA?`: `2`; `HAVE_ENOUGH_DATA?`: `4`; `HAVE_FUTURE_DATA?`: `3`; `HAVE_METADATA?`: `1`; `HAVE_NOTHING?`: `0`; `hidden?`: `boolean`; `hidePopover?`: () => ...; `id?`: `string`; `inert?`: `boolean`; `innerHTML?`: `string`; `innerText?`: `string`; `inputMode?`: `string`; `insertAdjacentElement?`: (`where`, `element`) => ...; `insertAdjacentHTML?`: (`position`, `string`) => ...; `insertAdjacentText?`: (`where`, `data`) => ...; `insertBefore?`: <`T`>(`node`, `child`) => ...; `isConnected?`: `boolean`; `isContentEditable?`: `boolean`; `isDefaultNamespace?`: (`namespace`) => ...; `isEqualNode?`: (`otherNode`) => ...; `isSameNode?`: (`otherNode`) => ...; `lang?`: `string`; `lastChild?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `lastElementChild?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `load?`: () => ...; `localName?`: `string`; `lookupNamespaceURI?`: (`prefix`) => ...; `lookupPrefix?`: (`namespace`) => ...; `loop?`: `boolean`; `matches?`: (`selectors`) => ...; `mediaKeys?`: { `createSession?`: ...; `getStatusForPolicy?`: ...; `setServerCertificate?`: ...; } | `null`; `muted?`: `boolean`; `namespaceURI?`: `string` | `null`; `NETWORK_EMPTY?`: `0`; `NETWORK_IDLE?`: `1`; `NETWORK_LOADING?`: `2`; `NETWORK_NO_SOURCE?`: `3`; `networkState?`: `number`; `nextElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `nextSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `nodeName?`: `string`; `nodeType?`: `number`; `nodeValue?`: `string` | `null`; `nonce?`: `string`; `normalize?`: () => ...; `NOTATION_NODE?`: `12`; `offsetHeight?`: `number`; `offsetLeft?`: `number`; `offsetParent?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `offsetTop?`: `number`; `offsetWidth?`: `number`; `onabort?`: (`this`, `ev`) => ... | `null`; `onanimationcancel?`: (`this`, `ev`) => ... | `null`; `onanimationend?`: (`this`, `ev`) => ... | `null`; `onanimationiteration?`: (`this`, `ev`) => ... | `null`; `onanimationstart?`: (`this`, `ev`) => ... | `null`; `onauxclick?`: (`this`, `ev`) => ... | `null`; `onbeforeinput?`: (`this`, `ev`) => ... | `null`; `onbeforematch?`: (`this`, `ev`) => ... | `null`; `onbeforetoggle?`: (`this`, `ev`) => ... | `null`; `onblur?`: (`this`, `ev`) => ... | `null`; `oncancel?`: (`this`, `ev`) => ... | `null`; `oncanplay?`: (`this`, `ev`) => ... | `null`; `oncanplaythrough?`: (`this`, `ev`) => ... | `null`; `onchange?`: (`this`, `ev`) => ... | `null`; `onclick?`: (`this`, `ev`) => ... | `null`; `onclose?`: (`this`, `ev`) => ... | `null`; `oncontextlost?`: (`this`, `ev`) => ... | `null`; `oncontextmenu?`: (`this`, `ev`) => ... | `null`; `oncontextrestored?`: (`this`, `ev`) => ... | `null`; `oncopy?`: (`this`, `ev`) => ... | `null`; `oncuechange?`: (`this`, `ev`) => ... | `null`; `oncut?`: (`this`, `ev`) => ... | `null`; `ondblclick?`: (`this`, `ev`) => ... | `null`; `ondrag?`: (`this`, `ev`) => ... | `null`; `ondragend?`: (`this`, `ev`) => ... | `null`; `ondragenter?`: (`this`, `ev`) => ... | `null`; `ondragleave?`: (`this`, `ev`) => ... | `null`; `ondragover?`: (`this`, `ev`) => ... | `null`; `ondragstart?`: (`this`, `ev`) => ... | `null`; `ondrop?`: (`this`, `ev`) => ... | `null`; `ondurationchange?`: (`this`, `ev`) => ... | `null`; `onemptied?`: (`this`, `ev`) => ... | `null`; `onencrypted?`: (`this`, `ev`) => ... | `null`; `onended?`: (`this`, `ev`) => ... | `null`; `onerror?`: `OnErrorEventHandler`; `onfocus?`: (`this`, `ev`) => ... | `null`; `onformdata?`: (`this`, `ev`) => ... | `null`; `onfullscreenchange?`: (`this`, `ev`) => ... | `null`; `onfullscreenerror?`: (`this`, `ev`) => ... | `null`; `ongotpointercapture?`: (`this`, `ev`) => ... | `null`; `oninput?`: (`this`, `ev`) => ... | `null`; `oninvalid?`: (`this`, `ev`) => ... | `null`; `onkeydown?`: (`this`, `ev`) => ... | `null`; `onkeypress?`: (`this`, `ev`) => ... | `null`; `onkeyup?`: (`this`, `ev`) => ... | `null`; `onload?`: (`this`, `ev`) => ... | `null`; `onloadeddata?`: (`this`, `ev`) => ... | `null`; `onloadedmetadata?`: (`this`, `ev`) => ... | `null`; `onloadstart?`: (`this`, `ev`) => ... | `null`; `onlostpointercapture?`: (`this`, `ev`) => ... | `null`; `onmousedown?`: (`this`, `ev`) => ... | `null`; `onmouseenter?`: (`this`, `ev`) => ... | `null`; `onmouseleave?`: (`this`, `ev`) => ... | `null`; `onmousemove?`: (`this`, `ev`) => ... | `null`; `onmouseout?`: (`this`, `ev`) => ... | `null`; `onmouseover?`: (`this`, `ev`) => ... | `null`; `onmouseup?`: (`this`, `ev`) => ... | `null`; `onpaste?`: (`this`, `ev`) => ... | `null`; `onpause?`: (`this`, `ev`) => ... | `null`; `onplay?`: (`this`, `ev`) => ... | `null`; `onplaying?`: (`this`, `ev`) => ... | `null`; `onpointercancel?`: (`this`, `ev`) => ... | `null`; `onpointerdown?`: (`this`, `ev`) => ... | `null`; `onpointerenter?`: (`this`, `ev`) => ... | `null`; `onpointerleave?`: (`this`, `ev`) => ... | `null`; `onpointermove?`: (`this`, `ev`) => ... | `null`; `onpointerout?`: (`this`, `ev`) => ... | `null`; `onpointerover?`: (`this`, `ev`) => ... | `null`; `onpointerrawupdate?`: (`this`, `ev`) => ... | `null`; `onpointerup?`: (`this`, `ev`) => ... | `null`; `onprogress?`: (`this`, `ev`) => ... | `null`; `onratechange?`: (`this`, `ev`) => ... | `null`; `onreset?`: (`this`, `ev`) => ... | `null`; `onresize?`: (`this`, `ev`) => ... | `null`; `onscroll?`: (`this`, `ev`) => ... | `null`; `onscrollend?`: (`this`, `ev`) => ... | `null`; `onsecuritypolicyviolation?`: (`this`, `ev`) => ... | `null`; `onseeked?`: (`this`, `ev`) => ... | `null`; `onseeking?`: (`this`, `ev`) => ... | `null`; `onselect?`: (`this`, `ev`) => ... | `null`; `onselectionchange?`: (`this`, `ev`) => ... | `null`; `onselectstart?`: (`this`, `ev`) => ... | `null`; `onslotchange?`: (`this`, `ev`) => ... | `null`; `onstalled?`: (`this`, `ev`) => ... | `null`; `onsubmit?`: (`this`, `ev`) => ... | `null`; `onsuspend?`: (`this`, `ev`) => ... | `null`; `ontimeupdate?`: (`this`, `ev`) => ... | `null`; `ontoggle?`: (`this`, `ev`) => ... | `null`; `ontouchcancel?`: (`this`, `ev`) => ... | `null`; `ontouchend?`: (`this`, `ev`) => ... | `null`; `ontouchmove?`: (`this`, `ev`) => ... | `null`; `ontouchstart?`: (`this`, `ev`) => ... | `null`; `ontransitioncancel?`: (`this`, `ev`) => ... | `null`; `ontransitionend?`: (`this`, `ev`) => ... | `null`; `ontransitionrun?`: (`this`, `ev`) => ... | `null`; `ontransitionstart?`: (`this`, `ev`) => ... | `null`; `onvolumechange?`: (`this`, `ev`) => ... | `null`; `onwaiting?`: (`this`, `ev`) => ... | `null`; `onwaitingforkey?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationend?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationiteration?`: (`this`, `ev`) => ... | `null`; `onwebkitanimationstart?`: (`this`, `ev`) => ... | `null`; `onwebkittransitionend?`: (`this`, `ev`) => ... | `null`; `onwheel?`: (`this`, `ev`) => ... | `null`; `outerHTML?`: `string`; `outerText?`: `string`; `ownerDocument?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `adoptNode?`: ...; `alinkColor?`: ...; `all?`: ...; `anchors?`: ...; `append?`: ...; `appendChild?`: ...; `applets?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `bgColor?`: ...; `body?`: ...; `captureEvents?`: ...; `caretPositionFromPoint?`: ...; `caretRangeFromPoint?`: ...; `CDATA_SECTION_NODE?`: ...; `characterSet?`: ...; `charset?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clear?`: ...; `cloneNode?`: ...; `close?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `compatMode?`: ...; `contains?`: ...; `contentType?`: ...; `cookie?`: ...; `createAttribute?`: ...; `createAttributeNS?`: ...; `createCDATASection?`: ...; `createComment?`: ...; `createDocumentFragment?`: ...; `createElement?`: ...; `createElementNS?`: ...; `createEvent?`: ...; `createExpression?`: ...; `createNodeIterator?`: ...; `createNSResolver?`: ...; `createProcessingInstruction?`: ...; `createRange?`: ...; `createTextNode?`: ...; `createTreeWalker?`: ...; `currentScript?`: ...; `defaultView?`: ...; `designMode?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `doctype?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `documentElement?`: ...; `documentURI?`: ...; `domain?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `embeds?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `evaluate?`: ...; `execCommand?`: ...; `exitFullscreen?`: ...; `exitPictureInPicture?`: ...; `exitPointerLock?`: ...; `fgColor?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fonts?`: ...; `forms?`: ...; `fragmentDirective?`: ...; `fullscreen?`: ...; `fullscreenElement?`: ...; `fullscreenEnabled?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getElementsByClassName?`: ...; `getElementsByName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getRootNode?`: ...; `getSelection?`: ...; `hasChildNodes?`: ...; `hasFocus?`: ...; `hasStorageAccess?`: ...; `head?`: ...; `hidden?`: ...; `images?`: ...; `implementation?`: ...; `importNode?`: ...; `inputEncoding?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lastModified?`: ...; `linkColor?`: ...; `links?`: ...; `location?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointerlockchange?`: ...; `onpointerlockerror?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreadystatechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvisibilitychange?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `open?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pictureInPictureEnabled?`: ...; `plugins?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `queryCommandEnabled?`: ...; `queryCommandIndeterm?`: ...; `queryCommandState?`: ...; `queryCommandSupported?`: ...; `queryCommandValue?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `readyState?`: ...; `referrer?`: ...; `releaseEvents?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `requestStorageAccess?`: ...; `rootElement?`: ...; `scripts?`: ...; `scrollingElement?`: ...; `startViewTransition?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `timeline?`: ...; `title?`: ...; `URL?`: ...; `visibilityState?`: ...; `vlinkColor?`: ...; `write?`: ...; `writeln?`: ...; }; `parentElement?`: { `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`; `parentNode?`: { `addEventListener?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `part?`: {[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }; `pause?`: () => ...; `paused?`: `boolean`; `play?`: () => ...; `playbackRate?`: `number`; `played?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `popover?`: `string` | `null`; `prefix?`: `string` | `null`; `preload?`: `""` | `"metadata"` | `"none"` | `"auto"`; `prepend?`: (...`nodes`) => ...; `preservesPitch?`: `boolean`; `previousElementSibling?`: { `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`; `previousSibling?`: { `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `PROCESSING_INSTRUCTION_NODE?`: `7`; `querySelector?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `querySelectorAll?`: {<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }; `readyState?`: `number`; `releasePointerCapture?`: (`pointerId`) => ...; `remote?`: { `addEventListener?`: ...; `cancelWatchAvailability?`: ...; `dispatchEvent?`: ...; `onconnect?`: ...; `onconnecting?`: ...; `ondisconnect?`: ...; `prompt?`: ...; `removeEventListener?`: ...; `state?`: ...; `watchAvailability?`: ...; }; `remove?`: () => ...; `removeAttribute?`: (`qualifiedName`) => ...; `removeAttributeNode?`: (`attr`) => ...; `removeAttributeNS?`: (`namespace`, `localName`) => ...; `removeChild?`: <`T`>(`child`) => ...; `removeEventListener?`: {<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }; `replaceChild?`: <`T`>(`node`, `child`) => ...; `replaceChildren?`: (...`nodes`) => ...; `replaceWith?`: (...`nodes`) => ...; `requestFullscreen?`: (`options?`) => ...; `requestPointerLock?`: (`options?`) => ...; `role?`: `string` | `null`; `scroll?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollBy?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollHeight?`: `number`; `scrollIntoView?`: (`arg?`) => ...; `scrollLeft?`: `number`; `scrollTo?`: {(`options?`): ...; (`x`, `y`): ...; }; `scrollTop?`: `number`; `scrollWidth?`: `number`; `seekable?`: { `end?`: ...; `length?`: ...; `start?`: ...; }; `seeking?`: `boolean`; `setAttribute?`: (`qualifiedName`, `value`) => ...; `setAttributeNode?`: (`attr`) => ...; `setAttributeNodeNS?`: (`attr`) => ...; `setAttributeNS?`: (`namespace`, `qualifiedName`, `value`) => ...; `setHTMLUnsafe?`: (`html`) => ...; `setMediaKeys?`: (`mediaKeys`) => ...; `setPointerCapture?`: (`pointerId`) => ...; `setSinkId?`: (`sinkId`) => ...; `shadowRoot?`: { `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clonable?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `delegatesFocus?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fullscreenElement?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `host?`: ...; `innerHTML?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `mode?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onslotchange?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `serializable?`: ...; `setHTMLUnsafe?`: ...; `slotAssignment?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`; `showPopover?`: () => ...; `sinkId?`: `string`; `slot?`: `string`; `spellcheck?`: `boolean`; `src?`: `string`; `srcObject?`: { `active?`: ...; `addEventListener?`: ...; `addTrack?`: ...; `clone?`: ...; `dispatchEvent?`: ...; `getAudioTracks?`: ...; `getTrackById?`: ...; `getTracks?`: ...; `getVideoTracks?`: ...; `id?`: ...; `onaddtrack?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; `removeTrack?`: ...; } | { `activeSourceBuffers?`: ...; `addEventListener?`: ...; `addSourceBuffer?`: ...; `clearLiveSeekableRange?`: ...; `dispatchEvent?`: ...; `duration?`: ...; `endOfStream?`: ...; `onsourceclose?`: ...; `onsourceended?`: ...; `onsourceopen?`: ...; `readyState?`: ...; `removeEventListener?`: ...; `removeSourceBuffer?`: ...; `setLiveSeekableRange?`: ...; `sourceBuffers?`: ...; } | { `arrayBuffer?`: ...; `bytes?`: ...; `size?`: ...; `slice?`: ...; `stream?`: ...; `text?`: ...; `type?`: ...; } | `null`; `style?`: {[`key`: ...]: ...; `[iterator]?`: ...; `accentColor?`: ...; `alignContent?`: ...; `alignItems?`: ...; `alignmentBaseline?`: ...; `alignSelf?`: ...; `all?`: ...; `animation?`: ...; `animationComposition?`: ...; `animationDelay?`: ...; `animationDirection?`: ...; `animationDuration?`: ...; `animationFillMode?`: ...; `animationIterationCount?`: ...; `animationName?`: ...; `animationPlayState?`: ...; `animationTimingFunction?`: ...; `appearance?`: ...; `aspectRatio?`: ...; `backdropFilter?`: ...; `backfaceVisibility?`: ...; `background?`: ...; `backgroundAttachment?`: ...; `backgroundBlendMode?`: ...; `backgroundClip?`: ...; `backgroundColor?`: ...; `backgroundImage?`: ...; `backgroundOrigin?`: ...; `backgroundPosition?`: ...; `backgroundPositionX?`: ...; `backgroundPositionY?`: ...; `backgroundRepeat?`: ...; `backgroundSize?`: ...; `baselineShift?`: ...; `baselineSource?`: ...; `blockSize?`: ...; `border?`: ...; `borderBlock?`: ...; `borderBlockColor?`: ...; `borderBlockEnd?`: ...; `borderBlockEndColor?`: ...; `borderBlockEndStyle?`: ...; `borderBlockEndWidth?`: ...; `borderBlockStart?`: ...; `borderBlockStartColor?`: ...; `borderBlockStartStyle?`: ...; `borderBlockStartWidth?`: ...; `borderBlockStyle?`: ...; `borderBlockWidth?`: ...; `borderBottom?`: ...; `borderBottomColor?`: ...; `borderBottomLeftRadius?`: ...; `borderBottomRightRadius?`: ...; `borderBottomStyle?`: ...; `borderBottomWidth?`: ...; `borderCollapse?`: ...; `borderColor?`: ...; `borderEndEndRadius?`: ...; `borderEndStartRadius?`: ...; `borderImage?`: ...; `borderImageOutset?`: ...; `borderImageRepeat?`: ...; `borderImageSlice?`: ...; `borderImageSource?`: ...; `borderImageWidth?`: ...; `borderInline?`: ...; `borderInlineColor?`: ...; `borderInlineEnd?`: ...; `borderInlineEndColor?`: ...; `borderInlineEndStyle?`: ...; `borderInlineEndWidth?`: ...; `borderInlineStart?`: ...; `borderInlineStartColor?`: ...; `borderInlineStartStyle?`: ...; `borderInlineStartWidth?`: ...; `borderInlineStyle?`: ...; `borderInlineWidth?`: ...; `borderLeft?`: ...; `borderLeftColor?`: ...; `borderLeftStyle?`: ...; `borderLeftWidth?`: ...; `borderRadius?`: ...; `borderRight?`: ...; `borderRightColor?`: ...; `borderRightStyle?`: ...; `borderRightWidth?`: ...; `borderSpacing?`: ...; `borderStartEndRadius?`: ...; `borderStartStartRadius?`: ...; `borderStyle?`: ...; `borderTop?`: ...; `borderTopColor?`: ...; `borderTopLeftRadius?`: ...; `borderTopRightRadius?`: ...; `borderTopStyle?`: ...; `borderTopWidth?`: ...; `borderWidth?`: ...; `bottom?`: ...; `boxDecorationBreak?`: ...; `boxShadow?`: ...; `boxSizing?`: ...; `breakAfter?`: ...; `breakBefore?`: ...; `breakInside?`: ...; `captionSide?`: ...; `caretColor?`: ...; `clear?`: ...; `clip?`: ...; `clipPath?`: ...; `clipRule?`: ...; `color?`: ...; `colorInterpolation?`: ...; `colorInterpolationFilters?`: ...; `colorScheme?`: ...; `columnCount?`: ...; `columnFill?`: ...; `columnGap?`: ...; `columnRule?`: ...; `columnRuleColor?`: ...; `columnRuleStyle?`: ...; `columnRuleWidth?`: ...; `columns?`: ...; `columnSpan?`: ...; `columnWidth?`: ...; `contain?`: ...; `container?`: ...; `containerName?`: ...; `containerType?`: ...; `containIntrinsicBlockSize?`: ...; `containIntrinsicHeight?`: ...; `containIntrinsicInlineSize?`: ...; `containIntrinsicSize?`: ...; `containIntrinsicWidth?`: ...; `content?`: ...; `contentVisibility?`: ...; `counterIncrement?`: ...; `counterReset?`: ...; `counterSet?`: ...; `cssFloat?`: ...; `cssText?`: ...; `cursor?`: ...; `cx?`: ...; `cy?`: ...; `d?`: ...; `direction?`: ...; `display?`: ...; `dominantBaseline?`: ...; `emptyCells?`: ...; `fill?`: ...; `fillOpacity?`: ...; `fillRule?`: ...; `filter?`: ...; `flex?`: ...; `flexBasis?`: ...; `flexDirection?`: ...; `flexFlow?`: ...; `flexGrow?`: ...; `flexShrink?`: ...; `flexWrap?`: ...; `float?`: ...; `floodColor?`: ...; `floodOpacity?`: ...; `font?`: ...; `fontFamily?`: ...; `fontFeatureSettings?`: ...; `fontKerning?`: ...; `fontOpticalSizing?`: ...; `fontPalette?`: ...; `fontSize?`: ...; `fontSizeAdjust?`: ...; `fontStretch?`: ...; `fontStyle?`: ...; `fontSynthesis?`: ...; `fontSynthesisSmallCaps?`: ...; `fontSynthesisStyle?`: ...; `fontSynthesisWeight?`: ...; `fontVariant?`: ...; `fontVariantAlternates?`: ...; `fontVariantCaps?`: ...; `fontVariantEastAsian?`: ...; `fontVariantLigatures?`: ...; `fontVariantNumeric?`: ...; `fontVariantPosition?`: ...; `fontVariationSettings?`: ...; `fontWeight?`: ...; `forcedColorAdjust?`: ...; `gap?`: ...; `getPropertyPriority?`: ...; `getPropertyValue?`: ...; `grid?`: ...; `gridArea?`: ...; `gridAutoColumns?`: ...; `gridAutoFlow?`: ...; `gridAutoRows?`: ...; `gridColumn?`: ...; `gridColumnEnd?`: ...; `gridColumnGap?`: ...; `gridColumnStart?`: ...; `gridGap?`: ...; `gridRow?`: ...; `gridRowEnd?`: ...; `gridRowGap?`: ...; `gridRowStart?`: ...; `gridTemplate?`: ...; `gridTemplateAreas?`: ...; `gridTemplateColumns?`: ...; `gridTemplateRows?`: ...; `height?`: ...; `hyphenateCharacter?`: ...; `hyphenateLimitChars?`: ...; `hyphens?`: ...; `imageOrientation?`: ...; `imageRendering?`: ...; `inlineSize?`: ...; `inset?`: ...; `insetBlock?`: ...; `insetBlockEnd?`: ...; `insetBlockStart?`: ...; `insetInline?`: ...; `insetInlineEnd?`: ...; `insetInlineStart?`: ...; `isolation?`: ...; `item?`: ...; `justifyContent?`: ...; `justifyItems?`: ...; `justifySelf?`: ...; `left?`: ...; `length?`: ...; `letterSpacing?`: ...; `lightingColor?`: ...; `lineBreak?`: ...; `lineHeight?`: ...; `listStyle?`: ...; `listStyleImage?`: ...; `listStylePosition?`: ...; `listStyleType?`: ...; `margin?`: ...; `marginBlock?`: ...; `marginBlockEnd?`: ...; `marginBlockStart?`: ...; `marginBottom?`: ...; `marginInline?`: ...; `marginInlineEnd?`: ...; `marginInlineStart?`: ...; `marginLeft?`: ...; `marginRight?`: ...; `marginTop?`: ...; `marker?`: ...; `markerEnd?`: ...; `markerMid?`: ...; `markerStart?`: ...; `mask?`: ...; `maskClip?`: ...; `maskComposite?`: ...; `maskImage?`: ...; `maskMode?`: ...; `maskOrigin?`: ...; `maskPosition?`: ...; `maskRepeat?`: ...; `maskSize?`: ...; `maskType?`: ...; `mathDepth?`: ...; `mathStyle?`: ...; `maxBlockSize?`: ...; `maxHeight?`: ...; `maxInlineSize?`: ...; `maxWidth?`: ...; `minBlockSize?`: ...; `minHeight?`: ...; `minInlineSize?`: ...; `minWidth?`: ...; `mixBlendMode?`: ...; `objectFit?`: ...; `objectPosition?`: ...; `offset?`: ...; `offsetAnchor?`: ...; `offsetDistance?`: ...; `offsetPath?`: ...; `offsetPosition?`: ...; `offsetRotate?`: ...; `opacity?`: ...; `order?`: ...; `orphans?`: ...; `outline?`: ...; `outlineColor?`: ...; `outlineOffset?`: ...; `outlineStyle?`: ...; `outlineWidth?`: ...; `overflow?`: ...; `overflowAnchor?`: ...; `overflowBlock?`: ...; `overflowClipMargin?`: ...; `overflowInline?`: ...; `overflowWrap?`: ...; `overflowX?`: ...; `overflowY?`: ...; `overscrollBehavior?`: ...; `overscrollBehaviorBlock?`: ...; `overscrollBehaviorInline?`: ...; `overscrollBehaviorX?`: ...; `overscrollBehaviorY?`: ...; `padding?`: ...; `paddingBlock?`: ...; `paddingBlockEnd?`: ...; `paddingBlockStart?`: ...; `paddingBottom?`: ...; `paddingInline?`: ...; `paddingInlineEnd?`: ...; `paddingInlineStart?`: ...; `paddingLeft?`: ...; `paddingRight?`: ...; `paddingTop?`: ...; `page?`: ...; `pageBreakAfter?`: ...; `pageBreakBefore?`: ...; `pageBreakInside?`: ...; `paintOrder?`: ...; `parentRule?`: ...; `perspective?`: ...; `perspectiveOrigin?`: ...; `placeContent?`: ...; `placeItems?`: ...; `placeSelf?`: ...; `pointerEvents?`: ...; `position?`: ...; `printColorAdjust?`: ...; `quotes?`: ...; `r?`: ...; `removeProperty?`: ...; `resize?`: ...; `right?`: ...; `rotate?`: ...; `rowGap?`: ...; `rubyAlign?`: ...; `rubyPosition?`: ...; `rx?`: ...; `ry?`: ...; `scale?`: ...; `scrollbarColor?`: ...; `scrollbarGutter?`: ...; `scrollbarWidth?`: ...; `scrollBehavior?`: ...; `scrollMargin?`: ...; `scrollMarginBlock?`: ...; `scrollMarginBlockEnd?`: ...; `scrollMarginBlockStart?`: ...; `scrollMarginBottom?`: ...; `scrollMarginInline?`: ...; `scrollMarginInlineEnd?`: ...; `scrollMarginInlineStart?`: ...; `scrollMarginLeft?`: ...; `scrollMarginRight?`: ...; `scrollMarginTop?`: ...; `scrollPadding?`: ...; `scrollPaddingBlock?`: ...; `scrollPaddingBlockEnd?`: ...; `scrollPaddingBlockStart?`: ...; `scrollPaddingBottom?`: ...; `scrollPaddingInline?`: ...; `scrollPaddingInlineEnd?`: ...; `scrollPaddingInlineStart?`: ...; `scrollPaddingLeft?`: ...; `scrollPaddingRight?`: ...; `scrollPaddingTop?`: ...; `scrollSnapAlign?`: ...; `scrollSnapStop?`: ...; `scrollSnapType?`: ...; `setProperty?`: ...; `shapeImageThreshold?`: ...; `shapeMargin?`: ...; `shapeOutside?`: ...; `shapeRendering?`: ...; `stopColor?`: ...; `stopOpacity?`: ...; `stroke?`: ...; `strokeDasharray?`: ...; `strokeDashoffset?`: ...; `strokeLinecap?`: ...; `strokeLinejoin?`: ...; `strokeMiterlimit?`: ...; `strokeOpacity?`: ...; `strokeWidth?`: ...; `tableLayout?`: ...; `tabSize?`: ...; `textAlign?`: ...; `textAlignLast?`: ...; `textAnchor?`: ...; `textBox?`: ...; `textBoxEdge?`: ...; `textBoxTrim?`: ...; `textCombineUpright?`: ...; `textDecoration?`: ...; `textDecorationColor?`: ...; `textDecorationLine?`: ...; `textDecorationSkipInk?`: ...; `textDecorationStyle?`: ...; `textDecorationThickness?`: ...; `textEmphasis?`: ...; `textEmphasisColor?`: ...; `textEmphasisPosition?`: ...; `textEmphasisStyle?`: ...; `textIndent?`: ...; `textOrientation?`: ...; `textOverflow?`: ...; `textRendering?`: ...; `textShadow?`: ...; `textTransform?`: ...; `textUnderlineOffset?`: ...; `textUnderlinePosition?`: ...; `textWrap?`: ...; `textWrapMode?`: ...; `textWrapStyle?`: ...; `top?`: ...; `touchAction?`: ...; `transform?`: ...; `transformBox?`: ...; `transformOrigin?`: ...; `transformStyle?`: ...; `transition?`: ...; `transitionBehavior?`: ...; `transitionDelay?`: ...; `transitionDuration?`: ...; `transitionProperty?`: ...; `transitionTimingFunction?`: ...; `translate?`: ...; `unicodeBidi?`: ...; `userSelect?`: ...; `vectorEffect?`: ...; `verticalAlign?`: ...; `viewTransitionClass?`: ...; `viewTransitionName?`: ...; `visibility?`: ...; `webkitAlignContent?`: ...; `webkitAlignItems?`: ...; `webkitAlignSelf?`: ...; `webkitAnimation?`: ...; `webkitAnimationDelay?`: ...; `webkitAnimationDirection?`: ...; `webkitAnimationDuration?`: ...; `webkitAnimationFillMode?`: ...; `webkitAnimationIterationCount?`: ...; `webkitAnimationName?`: ...; `webkitAnimationPlayState?`: ...; `webkitAnimationTimingFunction?`: ...; `webkitAppearance?`: ...; `webkitBackfaceVisibility?`: ...; `webkitBackgroundClip?`: ...; `webkitBackgroundOrigin?`: ...; `webkitBackgroundSize?`: ...; `webkitBorderBottomLeftRadius?`: ...; `webkitBorderBottomRightRadius?`: ...; `webkitBorderRadius?`: ...; `webkitBorderTopLeftRadius?`: ...; `webkitBorderTopRightRadius?`: ...; `webkitBoxAlign?`: ...; `webkitBoxFlex?`: ...; `webkitBoxOrdinalGroup?`: ...; `webkitBoxOrient?`: ...; `webkitBoxPack?`: ...; `webkitBoxShadow?`: ...; `webkitBoxSizing?`: ...; `webkitFilter?`: ...; `webkitFlex?`: ...; `webkitFlexBasis?`: ...; `webkitFlexDirection?`: ...; `webkitFlexFlow?`: ...; `webkitFlexGrow?`: ...; `webkitFlexShrink?`: ...; `webkitFlexWrap?`: ...; `webkitJustifyContent?`: ...; `webkitLineClamp?`: ...; `webkitMask?`: ...; `webkitMaskBoxImage?`: ...; `webkitMaskBoxImageOutset?`: ...; `webkitMaskBoxImageRepeat?`: ...; `webkitMaskBoxImageSlice?`: ...; `webkitMaskBoxImageSource?`: ...; `webkitMaskBoxImageWidth?`: ...; `webkitMaskClip?`: ...; `webkitMaskComposite?`: ...; `webkitMaskImage?`: ...; `webkitMaskOrigin?`: ...; `webkitMaskPosition?`: ...; `webkitMaskRepeat?`: ...; `webkitMaskSize?`: ...; `webkitOrder?`: ...; `webkitPerspective?`: ...; `webkitPerspectiveOrigin?`: ...; `webkitTextFillColor?`: ...; `webkitTextSizeAdjust?`: ...; `webkitTextStroke?`: ...; `webkitTextStrokeColor?`: ...; `webkitTextStrokeWidth?`: ...; `webkitTransform?`: ...; `webkitTransformOrigin?`: ...; `webkitTransformStyle?`: ...; `webkitTransition?`: ...; `webkitTransitionDelay?`: ...; `webkitTransitionDuration?`: ...; `webkitTransitionProperty?`: ...; `webkitTransitionTimingFunction?`: ...; `webkitUserSelect?`: ...; `whiteSpace?`: ...; `whiteSpaceCollapse?`: ...; `widows?`: ...; `width?`: ...; `willChange?`: ...; `wordBreak?`: ...; `wordSpacing?`: ...; `wordWrap?`: ...; `writingMode?`: ...; `x?`: ...; `y?`: ...; `zIndex?`: ...; `zoom?`: ...; }; `tabIndex?`: `number`; `tagName?`: `string`; `TEXT_NODE?`: `3`; `textContent?`: `string`; `textTracks?`: {[`key`: ...]: ...; `[iterator]?`: ...; `addEventListener?`: ...; `dispatchEvent?`: ...; `getTrackById?`: ...; `length?`: ...; `onaddtrack?`: ...; `onchange?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; }; `title?`: `string`; `toggleAttribute?`: (`qualifiedName`, `force?`) => ...; `togglePopover?`: (`options?`) => ...; `translate?`: `boolean`; `volume?`: `number`; `webkitMatchesSelector?`: (`selectors`) => ...; `writingSuggestions?`: `string`; }

###### components.wacka.playerArgs.mediaElement.accessKey?

`string`

The **`HTMLElement.accessKey`** property sets the keystroke which a user can press to jump to a given element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey)

###### components.wacka.playerArgs.mediaElement.accessKeyLabel?

`string`

The **`HTMLElement.accessKeyLabel`** read-only property returns a string containing the element's browser-assigned access key (if any); otherwise it returns an empty string.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKeyLabel)

###### components.wacka.playerArgs.mediaElement.addEventListener?

{<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }

###### components.wacka.playerArgs.mediaElement.addTextTrack?

(`kind`, `label?`, `language?`) => ...

###### components.wacka.playerArgs.mediaElement.after?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.animate?

(`keyframes`, `options?`) => ...

###### components.wacka.playerArgs.mediaElement.append?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.appendChild?

<`T`>(`node`) => ...

###### components.wacka.playerArgs.mediaElement.ariaActiveDescendantElement?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)

###### components.wacka.playerArgs.mediaElement.ariaAtomic?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)

###### components.wacka.playerArgs.mediaElement.ariaAutoComplete?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)

###### components.wacka.playerArgs.mediaElement.ariaBrailleLabel?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)

###### components.wacka.playerArgs.mediaElement.ariaBrailleRoleDescription?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)

###### components.wacka.playerArgs.mediaElement.ariaBusy?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)

###### components.wacka.playerArgs.mediaElement.ariaChecked?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)

###### components.wacka.playerArgs.mediaElement.ariaColCount?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)

###### components.wacka.playerArgs.mediaElement.ariaColIndex?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)

###### components.wacka.playerArgs.mediaElement.ariaColIndexText?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)

###### components.wacka.playerArgs.mediaElement.ariaColSpan?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)

###### components.wacka.playerArgs.mediaElement.ariaControlsElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)

###### components.wacka.playerArgs.mediaElement.ariaCurrent?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)

###### components.wacka.playerArgs.mediaElement.ariaDescribedByElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)

###### components.wacka.playerArgs.mediaElement.ariaDescription?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)

###### components.wacka.playerArgs.mediaElement.ariaDetailsElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)

###### components.wacka.playerArgs.mediaElement.ariaDisabled?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)

###### components.wacka.playerArgs.mediaElement.ariaErrorMessageElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)

###### components.wacka.playerArgs.mediaElement.ariaExpanded?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)

###### components.wacka.playerArgs.mediaElement.ariaFlowToElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)

###### components.wacka.playerArgs.mediaElement.ariaHasPopup?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)

###### components.wacka.playerArgs.mediaElement.ariaHidden?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)

###### components.wacka.playerArgs.mediaElement.ariaInvalid?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)

###### components.wacka.playerArgs.mediaElement.ariaKeyShortcuts?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)

###### components.wacka.playerArgs.mediaElement.ariaLabel?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)

###### components.wacka.playerArgs.mediaElement.ariaLabelledByElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)

###### components.wacka.playerArgs.mediaElement.ariaLevel?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)

###### components.wacka.playerArgs.mediaElement.ariaLive?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaLive)

###### components.wacka.playerArgs.mediaElement.ariaModal?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaModal)

###### components.wacka.playerArgs.mediaElement.ariaMultiLine?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)

###### components.wacka.playerArgs.mediaElement.ariaMultiSelectable?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)

###### components.wacka.playerArgs.mediaElement.ariaOrientation?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)

###### components.wacka.playerArgs.mediaElement.ariaOwnsElements?

readonly ...[] | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)

###### components.wacka.playerArgs.mediaElement.ariaPlaceholder?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)

###### components.wacka.playerArgs.mediaElement.ariaPosInSet?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)

###### components.wacka.playerArgs.mediaElement.ariaPressed?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)

###### components.wacka.playerArgs.mediaElement.ariaReadOnly?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)

###### components.wacka.playerArgs.mediaElement.ariaRelevant?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)

###### components.wacka.playerArgs.mediaElement.ariaRequired?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)

###### components.wacka.playerArgs.mediaElement.ariaRoleDescription?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)

###### components.wacka.playerArgs.mediaElement.ariaRowCount?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)

###### components.wacka.playerArgs.mediaElement.ariaRowIndex?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)

###### components.wacka.playerArgs.mediaElement.ariaRowIndexText?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)

###### components.wacka.playerArgs.mediaElement.ariaRowSpan?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)

###### components.wacka.playerArgs.mediaElement.ariaSelected?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)

###### components.wacka.playerArgs.mediaElement.ariaSetSize?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)

###### components.wacka.playerArgs.mediaElement.ariaSort?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaSort)

###### components.wacka.playerArgs.mediaElement.ariaValueMax?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)

###### components.wacka.playerArgs.mediaElement.ariaValueMin?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)

###### components.wacka.playerArgs.mediaElement.ariaValueNow?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)

###### components.wacka.playerArgs.mediaElement.ariaValueText?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)

###### components.wacka.playerArgs.mediaElement.assignedSlot?

{ `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assign?`: ...; `assignedElements?`: ...; `assignedNodes?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `name?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)

###### components.wacka.playerArgs.mediaElement.attachInternals?

() => ...

###### components.wacka.playerArgs.mediaElement.attachShadow?

(`init`) => ...

###### components.wacka.playerArgs.mediaElement.ATTRIBUTE_NODE?

`2`

###### components.wacka.playerArgs.mediaElement.attributes?

{[`key`: ...]: ...; `[iterator]?`: ...; `getNamedItem?`: ...; `getNamedItemNS?`: ...; `item?`: ...; `length?`: ...; `removeNamedItem?`: ...; `removeNamedItemNS?`: ...; `setNamedItem?`: ...; `setNamedItemNS?`: ...; }

The **`Element.attributes`** property returns a live collection of all attribute nodes registered to the specified node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/attributes)

###### components.wacka.playerArgs.mediaElement.attributes.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.attributes.getNamedItem?

...

###### components.wacka.playerArgs.mediaElement.attributes.getNamedItemNS?

...

###### components.wacka.playerArgs.mediaElement.attributes.item?

...

###### components.wacka.playerArgs.mediaElement.attributes.length?

...

The read-only **`length`** property of the NamedNodeMap interface is the number of objects stored in the map.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/NamedNodeMap/length)

###### components.wacka.playerArgs.mediaElement.attributes.removeNamedItem?

...

###### components.wacka.playerArgs.mediaElement.attributes.removeNamedItemNS?

...

###### components.wacka.playerArgs.mediaElement.attributes.setNamedItem?

...

###### components.wacka.playerArgs.mediaElement.attributes.setNamedItemNS?

...

###### components.wacka.playerArgs.mediaElement.attributeStyleMap?

`ReadonlyMap`<..., ...>

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/attributeStyleMap)

###### components.wacka.playerArgs.mediaElement.autocapitalize?

`string`

The **`autocapitalize`** property of the HTMLElement interface represents the element's capitalization behavior for user input.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/autocapitalize)

###### components.wacka.playerArgs.mediaElement.autocorrect?

`boolean`

The **`autocorrect`** property of the HTMLElement interface controls whether or not autocorrection of editable text is enabled for spelling and/or punctuation errors.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/autocorrect)

###### components.wacka.playerArgs.mediaElement.autofocus?

`boolean`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/autofocus)

###### components.wacka.playerArgs.mediaElement.autoplay?

`boolean`

The **`HTMLMediaElement.autoplay`** property reflects the `autoplay` HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/autoplay)

###### components.wacka.playerArgs.mediaElement.baseURI?

`string`

The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/baseURI)

###### components.wacka.playerArgs.mediaElement.before?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.blur?

() => ...

###### components.wacka.playerArgs.mediaElement.buffered?

{ `end?`: ...; `length?`: ...; `start?`: ...; }

The **`buffered`** read-only property of HTMLMediaElement objects returns a new static normalized `TimeRanges` object that represents the ranges of the media resource, if any, that the user agent has buffered at the moment the `buffered` property is accessed.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/buffered)

###### components.wacka.playerArgs.mediaElement.buffered.end?

...

###### components.wacka.playerArgs.mediaElement.buffered.length?

...

The **`TimeRanges.length`** read-only property returns the number of ranges in the object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TimeRanges/length)

###### components.wacka.playerArgs.mediaElement.buffered.start?

...

###### components.wacka.playerArgs.mediaElement.canPlayType?

(`type`) => ...

###### components.wacka.playerArgs.mediaElement.CDATA_SECTION_NODE?

`4`

node is a CDATASection node.

###### components.wacka.playerArgs.mediaElement.checkVisibility?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.childElementCount?

`number`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

###### components.wacka.playerArgs.mediaElement.childNodes?

{[`key`: ...]: ...; `[iterator]?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `values?`: ...; }

The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/childNodes)

###### components.wacka.playerArgs.mediaElement.childNodes.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.childNodes.entries?

...

###### components.wacka.playerArgs.mediaElement.childNodes.forEach?

...

###### components.wacka.playerArgs.mediaElement.childNodes.item?

...

###### components.wacka.playerArgs.mediaElement.childNodes.keys?

...

###### components.wacka.playerArgs.mediaElement.childNodes.length?

...

The **`NodeList.length`** property returns the number of items in a NodeList.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/NodeList/length)

###### components.wacka.playerArgs.mediaElement.childNodes.values?

...

###### components.wacka.playerArgs.mediaElement.children?

{[`key`: ...]: ...; `[iterator]?`: ...; `item?`: ...; `length?`: ...; `namedItem?`: ...; }

Returns the child elements.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/children)

###### components.wacka.playerArgs.mediaElement.children.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.children.item?

...

###### components.wacka.playerArgs.mediaElement.children.length?

...

The **`HTMLCollection.length`** property returns the number of items in a HTMLCollection.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLCollection/length)

###### components.wacka.playerArgs.mediaElement.children.namedItem?

...

###### components.wacka.playerArgs.mediaElement.classList?

{[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }

###### components.wacka.playerArgs.mediaElement.classList.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.classList.add?

...

###### components.wacka.playerArgs.mediaElement.classList.contains?

...

###### components.wacka.playerArgs.mediaElement.classList.entries?

...

###### components.wacka.playerArgs.mediaElement.classList.forEach?

...

###### components.wacka.playerArgs.mediaElement.classList.item?

...

###### components.wacka.playerArgs.mediaElement.classList.keys?

...

###### components.wacka.playerArgs.mediaElement.classList.length?

...

The read-only **`length`** property of the DOMTokenList interface is an `integer` representing the number of objects stored in the object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/DOMTokenList/length)

###### components.wacka.playerArgs.mediaElement.classList.remove?

...

###### components.wacka.playerArgs.mediaElement.classList.replace?

...

###### components.wacka.playerArgs.mediaElement.classList.supports?

...

###### components.wacka.playerArgs.mediaElement.classList.toggle?

...

###### components.wacka.playerArgs.mediaElement.classList.toString?

...

###### components.wacka.playerArgs.mediaElement.classList.value?

...

The **`value`** property of the DOMTokenList interface is a stringifier that returns the value of the list serialized as a string, or clears and sets the list to the given value.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/DOMTokenList/value)

###### components.wacka.playerArgs.mediaElement.classList.values?

...

###### components.wacka.playerArgs.mediaElement.className?

`string`

The **`className`** property of the of the specified element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/className)

###### components.wacka.playerArgs.mediaElement.click?

() => ...

###### components.wacka.playerArgs.mediaElement.clientHeight?

`number`

The **`clientHeight`** read-only property of the Element interface is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/clientHeight)

###### components.wacka.playerArgs.mediaElement.clientLeft?

`number`

The **`clientLeft`** read-only property of the Element interface returns the width of the left border of an element in pixels.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/clientLeft)

###### components.wacka.playerArgs.mediaElement.clientTop?

`number`

The **`clientTop`** read-only property of the Element interface returns the width of the top border of an element in pixels.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/clientTop)

###### components.wacka.playerArgs.mediaElement.clientWidth?

`number`

The **`clientWidth`** read-only property of the Element interface is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/clientWidth)

###### components.wacka.playerArgs.mediaElement.cloneNode?

(`subtree?`) => ...

###### components.wacka.playerArgs.mediaElement.closest?

{<`K`>(`selector`): ...; <`K`>(`selector`): ...; <`K`>(`selector`): ...; <`E`>(`selectors`): ...; }

###### components.wacka.playerArgs.mediaElement.COMMENT_NODE?

`8`

node is a Comment node.

###### components.wacka.playerArgs.mediaElement.compareDocumentPosition?

(`other`) => ...

###### components.wacka.playerArgs.mediaElement.computedStyleMap?

() => ...

###### components.wacka.playerArgs.mediaElement.contains?

(`other`) => ...

###### components.wacka.playerArgs.mediaElement.contentEditable?

`string`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable)

###### components.wacka.playerArgs.mediaElement.controls?

`boolean`

The **`HTMLMediaElement.controls`** property reflects the `controls` HTML attribute, which controls whether user interface controls for playing the media item will be displayed.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/controls)

###### components.wacka.playerArgs.mediaElement.crossOrigin?

`string` | `null`

The **`HTMLMediaElement.crossOrigin`** property is the CORS setting for this media element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/crossOrigin)

###### components.wacka.playerArgs.mediaElement.currentCSSZoom?

`number`

The **`currentCSSZoom`** read-only property of the Element interface provides the 'effective' CSS `zoom` of an element, taking into account the zoom applied to the element and all its parent elements.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/currentCSSZoom)

###### components.wacka.playerArgs.mediaElement.currentSrc?

`string`

The **`HTMLMediaElement.currentSrc`** property contains the absolute URL of the chosen media resource.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/currentSrc)

###### components.wacka.playerArgs.mediaElement.currentTime?

`number`

The HTMLMediaElement interface's **`currentTime`** property specifies the current playback time in seconds.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/currentTime)

###### components.wacka.playerArgs.mediaElement.dataset?

{[`key`: ...]: ...; }

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dataset)

###### components.wacka.playerArgs.mediaElement.defaultMuted?

`boolean`

The **`HTMLMediaElement.defaultMuted`** property reflects the `muted` HTML attribute, which indicates whether the media element's audio output should be muted by default.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/defaultMuted)

###### components.wacka.playerArgs.mediaElement.defaultPlaybackRate?

`number`

The **`HTMLMediaElement.defaultPlaybackRate`** property indicates the default playback rate for the media.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)

###### components.wacka.playerArgs.mediaElement.dir?

`string`

The **`HTMLElement.dir`** property indicates the text writing directionality of the content of the current element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dir)

###### components.wacka.playerArgs.mediaElement.disableRemotePlayback?

`boolean`

The **`disableRemotePlayback`** property of the HTMLMediaElement interface determines whether the media element is allowed to have a remote playback UI.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/disableRemotePlayback)

###### components.wacka.playerArgs.mediaElement.dispatchEvent?

(`event`) => ...

###### components.wacka.playerArgs.mediaElement.DOCUMENT_FRAGMENT_NODE?

`11`

node is a DocumentFragment node.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_NODE?

`9`

node is a document.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_CONTAINED_BY?

`16`

Set when other is a descendant of node.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_CONTAINS?

`8`

Set when other is an ancestor of node.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_DISCONNECTED?

`1`

Set when node and other are not in the same tree.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_FOLLOWING?

`4`

Set when other is following node.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?

`32`

###### components.wacka.playerArgs.mediaElement.DOCUMENT_POSITION_PRECEDING?

`2`

Set when other is preceding node.

###### components.wacka.playerArgs.mediaElement.DOCUMENT_TYPE_NODE?

`10`

node is a doctype.

###### components.wacka.playerArgs.mediaElement.draggable?

`boolean`

The **`draggable`** property of the HTMLElement interface gets and sets a Boolean primitive indicating if the element is draggable.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable)

###### components.wacka.playerArgs.mediaElement.duration?

`number`

The _read-only_ HTMLMediaElement property **`duration`** indicates the length of the element's media in seconds.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/duration)

###### components.wacka.playerArgs.mediaElement.ELEMENT_NODE?

`1`

node is an element.

###### components.wacka.playerArgs.mediaElement.ended?

`boolean`

The **`HTMLMediaElement.ended`** property indicates whether the media element has ended playback.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended)

###### components.wacka.playerArgs.mediaElement.enterKeyHint?

`string`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint)

###### components.wacka.playerArgs.mediaElement.ENTITY_NODE?

`6`

###### components.wacka.playerArgs.mediaElement.ENTITY_REFERENCE_NODE?

`5`

###### components.wacka.playerArgs.mediaElement.error?

{ `code?`: ...; `MEDIA_ERR_ABORTED?`: ...; `MEDIA_ERR_DECODE?`: ...; `MEDIA_ERR_NETWORK?`: ...; `MEDIA_ERR_SRC_NOT_SUPPORTED?`: ...; `message?`: ...; } | `null`

The **`HTMLMediaElement.error`** property is the there has not been an error.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/error)

###### components.wacka.playerArgs.mediaElement.fastSeek?

(`time`) => ...

###### components.wacka.playerArgs.mediaElement.firstChild?

{ `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/firstChild)

###### components.wacka.playerArgs.mediaElement.firstElementChild?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

Returns the first child that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

###### components.wacka.playerArgs.mediaElement.focus?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.getAnimations?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.getAttribute?

(`qualifiedName`) => ...

###### components.wacka.playerArgs.mediaElement.getAttributeNames?

() => ...

###### components.wacka.playerArgs.mediaElement.getAttributeNode?

(`qualifiedName`) => ...

###### components.wacka.playerArgs.mediaElement.getAttributeNodeNS?

(`namespace`, `localName`) => ...

###### components.wacka.playerArgs.mediaElement.getAttributeNS?

(`namespace`, `localName`) => ...

###### components.wacka.playerArgs.mediaElement.getBoundingClientRect?

() => ...

###### components.wacka.playerArgs.mediaElement.getClientRects?

() => ...

###### components.wacka.playerArgs.mediaElement.getElementsByClassName?

(`classNames`) => ...

###### components.wacka.playerArgs.mediaElement.getElementsByTagName?

{<`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; <`K`>(`qualifiedName`): ...; (`qualifiedName`): ...; }

###### components.wacka.playerArgs.mediaElement.getElementsByTagNameNS?

{(`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespaceURI`, `localName`): ...; (`namespace`, `localName`): ...; }

###### components.wacka.playerArgs.mediaElement.getHTML?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.getRootNode?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.hasAttribute?

(`qualifiedName`) => ...

###### components.wacka.playerArgs.mediaElement.hasAttributeNS?

(`namespace`, `localName`) => ...

###### components.wacka.playerArgs.mediaElement.hasAttributes?

() => ...

###### components.wacka.playerArgs.mediaElement.hasChildNodes?

() => ...

###### components.wacka.playerArgs.mediaElement.hasPointerCapture?

(`pointerId`) => ...

###### components.wacka.playerArgs.mediaElement.HAVE_CURRENT_DATA?

`2`

###### components.wacka.playerArgs.mediaElement.HAVE_ENOUGH_DATA?

`4`

###### components.wacka.playerArgs.mediaElement.HAVE_FUTURE_DATA?

`3`

###### components.wacka.playerArgs.mediaElement.HAVE_METADATA?

`1`

###### components.wacka.playerArgs.mediaElement.HAVE_NOTHING?

`0`

###### components.wacka.playerArgs.mediaElement.hidden?

`boolean`

The HTMLElement property **`hidden`** reflects the value of the element's `hidden` attribute.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden)

###### components.wacka.playerArgs.mediaElement.hidePopover?

() => ...

###### components.wacka.playerArgs.mediaElement.id?

`string`

The **`id`** property of the Element interface represents the element's identifier, reflecting the **`id`** global attribute.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/id)

###### components.wacka.playerArgs.mediaElement.inert?

`boolean`

The HTMLElement property **`inert`** reflects the value of the element's `inert` attribute.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)

###### components.wacka.playerArgs.mediaElement.innerHTML?

`string`

The **`innerHTML`** property of the Element interface gets or sets the HTML or XML markup contained within the element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/innerHTML)

###### components.wacka.playerArgs.mediaElement.innerText?

`string`

The **`innerText`** property of the HTMLElement interface represents the rendered text content of a node and its descendants.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText)

###### components.wacka.playerArgs.mediaElement.inputMode?

`string`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode)

###### components.wacka.playerArgs.mediaElement.insertAdjacentElement?

(`where`, `element`) => ...

###### components.wacka.playerArgs.mediaElement.insertAdjacentHTML?

(`position`, `string`) => ...

###### components.wacka.playerArgs.mediaElement.insertAdjacentText?

(`where`, `data`) => ...

###### components.wacka.playerArgs.mediaElement.insertBefore?

<`T`>(`node`, `child`) => ...

###### components.wacka.playerArgs.mediaElement.isConnected?

`boolean`

The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/isConnected)

###### components.wacka.playerArgs.mediaElement.isContentEditable?

`boolean`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/isContentEditable)

###### components.wacka.playerArgs.mediaElement.isDefaultNamespace?

(`namespace`) => ...

###### components.wacka.playerArgs.mediaElement.isEqualNode?

(`otherNode`) => ...

###### components.wacka.playerArgs.mediaElement.isSameNode?

(`otherNode`) => ...

###### components.wacka.playerArgs.mediaElement.lang?

`string`

The **`lang`** property of the HTMLElement interface indicates the base language of an element's attribute values and text content, in the form of a MISSING: RFC(5646, 'BCP 47 language identifier tag')].

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/lang)

###### components.wacka.playerArgs.mediaElement.lastChild?

{ `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/lastChild)

###### components.wacka.playerArgs.mediaElement.lastElementChild?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

Returns the last child that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

###### components.wacka.playerArgs.mediaElement.load?

() => ...

###### components.wacka.playerArgs.mediaElement.localName?

`string`

The **`Element.localName`** read-only property returns the local part of the qualified name of an element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/localName)

###### components.wacka.playerArgs.mediaElement.lookupNamespaceURI?

(`prefix`) => ...

###### components.wacka.playerArgs.mediaElement.lookupPrefix?

(`namespace`) => ...

###### components.wacka.playerArgs.mediaElement.loop?

`boolean`

The **`HTMLMediaElement.loop`** property reflects the `loop` HTML attribute, which controls whether the media element should start over when it reaches the end.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loop)

###### components.wacka.playerArgs.mediaElement.matches?

(`selectors`) => ...

###### components.wacka.playerArgs.mediaElement.mediaKeys?

{ `createSession?`: ...; `getStatusForPolicy?`: ...; `setServerCertificate?`: ...; } | `null`

The read-only **`HTMLMediaElement.mediaKeys`** property returns a MediaKeys object, that is a set of keys that the element can use for decryption of media data during playback.
Available only in secure contexts.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/mediaKeys)

###### components.wacka.playerArgs.mediaElement.muted?

`boolean`

The **`HTMLMediaElement.muted`** property indicates whether the media element is muted.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/muted)

###### components.wacka.playerArgs.mediaElement.namespaceURI?

`string` | `null`

The **`Element.namespaceURI`** read-only property returns the namespace URI of the element, or `null` if the element is not in a namespace.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)

###### components.wacka.playerArgs.mediaElement.NETWORK_EMPTY?

`0`

###### components.wacka.playerArgs.mediaElement.NETWORK_IDLE?

`1`

###### components.wacka.playerArgs.mediaElement.NETWORK_LOADING?

`2`

###### components.wacka.playerArgs.mediaElement.NETWORK_NO_SOURCE?

`3`

###### components.wacka.playerArgs.mediaElement.networkState?

`number`

The **`HTMLMediaElement.networkState`** property indicates the current state of the fetching of media over the network.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/networkState)

###### components.wacka.playerArgs.mediaElement.nextElementSibling?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)

###### components.wacka.playerArgs.mediaElement.nextSibling?

{ `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

###### components.wacka.playerArgs.mediaElement.nodeName?

`string`

The read-only **`nodeName`** property of Node returns the name of the current node as a string.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeName)

###### components.wacka.playerArgs.mediaElement.nodeType?

`number`

The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeType)

###### components.wacka.playerArgs.mediaElement.nodeValue?

`string` | `null`

The **`nodeValue`** property of the Node interface returns or sets the value of the current node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

###### components.wacka.playerArgs.mediaElement.nonce?

`string`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce)

###### components.wacka.playerArgs.mediaElement.normalize?

() => ...

###### components.wacka.playerArgs.mediaElement.NOTATION_NODE?

`12`

###### components.wacka.playerArgs.mediaElement.offsetHeight?

`number`

The **`offsetHeight`** read-only property of the HTMLElement interface returns the height of an element, including vertical padding and borders, as an integer.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetHeight)

###### components.wacka.playerArgs.mediaElement.offsetLeft?

`number`

The **`offsetLeft`** read-only property of the HTMLElement interface returns the number of pixels that the _upper left corner_ of the current element is offset to the left within the HTMLElement.offsetParent node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetLeft)

###### components.wacka.playerArgs.mediaElement.offsetParent?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

The **`HTMLElement.offsetParent`** read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetParent)

###### components.wacka.playerArgs.mediaElement.offsetTop?

`number`

The **`offsetTop`** read-only property of the HTMLElement interface returns the distance from the outer border of the current element (including its margin) to the top padding edge of the HTMLelement.offsetParent, the _closest positioned_ ancestor element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetTop)

###### components.wacka.playerArgs.mediaElement.offsetWidth?

`number`

The **`offsetWidth`** read-only property of the HTMLElement interface returns the layout width of an element as an integer.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetWidth)

###### components.wacka.playerArgs.mediaElement.onabort?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

###### components.wacka.playerArgs.mediaElement.onanimationcancel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

###### components.wacka.playerArgs.mediaElement.onanimationend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

###### components.wacka.playerArgs.mediaElement.onanimationiteration?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

###### components.wacka.playerArgs.mediaElement.onanimationstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

###### components.wacka.playerArgs.mediaElement.onauxclick?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

###### components.wacka.playerArgs.mediaElement.onbeforeinput?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

###### components.wacka.playerArgs.mediaElement.onbeforematch?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

###### components.wacka.playerArgs.mediaElement.onbeforetoggle?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

###### components.wacka.playerArgs.mediaElement.onblur?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/blur_event)

###### components.wacka.playerArgs.mediaElement.oncancel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

###### components.wacka.playerArgs.mediaElement.oncanplay?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

###### components.wacka.playerArgs.mediaElement.oncanplaythrough?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

###### components.wacka.playerArgs.mediaElement.onchange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

###### components.wacka.playerArgs.mediaElement.onclick?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/click_event)

###### components.wacka.playerArgs.mediaElement.onclose?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

###### components.wacka.playerArgs.mediaElement.oncontextlost?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

###### components.wacka.playerArgs.mediaElement.oncontextmenu?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

###### components.wacka.playerArgs.mediaElement.oncontextrestored?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

###### components.wacka.playerArgs.mediaElement.oncopy?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/copy_event)

###### components.wacka.playerArgs.mediaElement.oncuechange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

###### components.wacka.playerArgs.mediaElement.oncut?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/cut_event)

###### components.wacka.playerArgs.mediaElement.ondblclick?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

###### components.wacka.playerArgs.mediaElement.ondrag?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

###### components.wacka.playerArgs.mediaElement.ondragend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

###### components.wacka.playerArgs.mediaElement.ondragenter?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

###### components.wacka.playerArgs.mediaElement.ondragleave?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

###### components.wacka.playerArgs.mediaElement.ondragover?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

###### components.wacka.playerArgs.mediaElement.ondragstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

###### components.wacka.playerArgs.mediaElement.ondrop?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

###### components.wacka.playerArgs.mediaElement.ondurationchange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

###### components.wacka.playerArgs.mediaElement.onemptied?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

###### components.wacka.playerArgs.mediaElement.onencrypted?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/encrypted_event)

###### components.wacka.playerArgs.mediaElement.onended?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

###### components.wacka.playerArgs.mediaElement.onerror?

`OnErrorEventHandler`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

###### components.wacka.playerArgs.mediaElement.onfocus?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/focus_event)

###### components.wacka.playerArgs.mediaElement.onformdata?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

###### components.wacka.playerArgs.mediaElement.onfullscreenchange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)

###### components.wacka.playerArgs.mediaElement.onfullscreenerror?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)

###### components.wacka.playerArgs.mediaElement.ongotpointercapture?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

###### components.wacka.playerArgs.mediaElement.oninput?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/input_event)

###### components.wacka.playerArgs.mediaElement.oninvalid?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

###### components.wacka.playerArgs.mediaElement.onkeydown?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

###### components.wacka.playerArgs.mediaElement.onkeypress?

(`this`, `ev`) => ... | `null`

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

###### components.wacka.playerArgs.mediaElement.onkeyup?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

###### components.wacka.playerArgs.mediaElement.onload?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

###### components.wacka.playerArgs.mediaElement.onloadeddata?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

###### components.wacka.playerArgs.mediaElement.onloadedmetadata?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

###### components.wacka.playerArgs.mediaElement.onloadstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

###### components.wacka.playerArgs.mediaElement.onlostpointercapture?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

###### components.wacka.playerArgs.mediaElement.onmousedown?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

###### components.wacka.playerArgs.mediaElement.onmouseenter?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

###### components.wacka.playerArgs.mediaElement.onmouseleave?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

###### components.wacka.playerArgs.mediaElement.onmousemove?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

###### components.wacka.playerArgs.mediaElement.onmouseout?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

###### components.wacka.playerArgs.mediaElement.onmouseover?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

###### components.wacka.playerArgs.mediaElement.onmouseup?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

###### components.wacka.playerArgs.mediaElement.onpaste?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/paste_event)

###### components.wacka.playerArgs.mediaElement.onpause?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

###### components.wacka.playerArgs.mediaElement.onplay?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

###### components.wacka.playerArgs.mediaElement.onplaying?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

###### components.wacka.playerArgs.mediaElement.onpointercancel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

###### components.wacka.playerArgs.mediaElement.onpointerdown?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

###### components.wacka.playerArgs.mediaElement.onpointerenter?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

###### components.wacka.playerArgs.mediaElement.onpointerleave?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

###### components.wacka.playerArgs.mediaElement.onpointermove?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

###### components.wacka.playerArgs.mediaElement.onpointerout?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

###### components.wacka.playerArgs.mediaElement.onpointerover?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

###### components.wacka.playerArgs.mediaElement.onpointerrawupdate?

(`this`, `ev`) => ... | `null`

Available only in secure contexts.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

###### components.wacka.playerArgs.mediaElement.onpointerup?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

###### components.wacka.playerArgs.mediaElement.onprogress?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

###### components.wacka.playerArgs.mediaElement.onratechange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

###### components.wacka.playerArgs.mediaElement.onreset?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

###### components.wacka.playerArgs.mediaElement.onresize?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

###### components.wacka.playerArgs.mediaElement.onscroll?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

###### components.wacka.playerArgs.mediaElement.onscrollend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

###### components.wacka.playerArgs.mediaElement.onsecuritypolicyviolation?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

###### components.wacka.playerArgs.mediaElement.onseeked?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

###### components.wacka.playerArgs.mediaElement.onseeking?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

###### components.wacka.playerArgs.mediaElement.onselect?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

###### components.wacka.playerArgs.mediaElement.onselectionchange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

###### components.wacka.playerArgs.mediaElement.onselectstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

###### components.wacka.playerArgs.mediaElement.onslotchange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

###### components.wacka.playerArgs.mediaElement.onstalled?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

###### components.wacka.playerArgs.mediaElement.onsubmit?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

###### components.wacka.playerArgs.mediaElement.onsuspend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

###### components.wacka.playerArgs.mediaElement.ontimeupdate?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

###### components.wacka.playerArgs.mediaElement.ontoggle?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

###### components.wacka.playerArgs.mediaElement.ontouchcancel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

###### components.wacka.playerArgs.mediaElement.ontouchend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

###### components.wacka.playerArgs.mediaElement.ontouchmove?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

###### components.wacka.playerArgs.mediaElement.ontouchstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

###### components.wacka.playerArgs.mediaElement.ontransitioncancel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

###### components.wacka.playerArgs.mediaElement.ontransitionend?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

###### components.wacka.playerArgs.mediaElement.ontransitionrun?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

###### components.wacka.playerArgs.mediaElement.ontransitionstart?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

###### components.wacka.playerArgs.mediaElement.onvolumechange?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

###### components.wacka.playerArgs.mediaElement.onwaiting?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

###### components.wacka.playerArgs.mediaElement.onwaitingforkey?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waitingforkey_event)

###### components.wacka.playerArgs.mediaElement.onwebkitanimationend?

(`this`, `ev`) => ... | `null`

**Deprecated**

This is a legacy alias of `onanimationend`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

###### components.wacka.playerArgs.mediaElement.onwebkitanimationiteration?

(`this`, `ev`) => ... | `null`

**Deprecated**

This is a legacy alias of `onanimationiteration`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

###### components.wacka.playerArgs.mediaElement.onwebkitanimationstart?

(`this`, `ev`) => ... | `null`

**Deprecated**

This is a legacy alias of `onanimationstart`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

###### components.wacka.playerArgs.mediaElement.onwebkittransitionend?

(`this`, `ev`) => ... | `null`

**Deprecated**

This is a legacy alias of `ontransitionend`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

###### components.wacka.playerArgs.mediaElement.onwheel?

(`this`, `ev`) => ... | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

###### components.wacka.playerArgs.mediaElement.outerHTML?

`string`

The **`outerHTML`** attribute of the Element DOM interface gets the serialized HTML fragment describing the element including its descendants.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/outerHTML)

###### components.wacka.playerArgs.mediaElement.outerText?

`string`

The **`outerText`** property of the HTMLElement interface returns the same value as HTMLElement.innerText.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText)

###### components.wacka.playerArgs.mediaElement.ownerDocument?

{ `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `adoptNode?`: ...; `alinkColor?`: ...; `all?`: ...; `anchors?`: ...; `append?`: ...; `appendChild?`: ...; `applets?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `bgColor?`: ...; `body?`: ...; `captureEvents?`: ...; `caretPositionFromPoint?`: ...; `caretRangeFromPoint?`: ...; `CDATA_SECTION_NODE?`: ...; `characterSet?`: ...; `charset?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clear?`: ...; `cloneNode?`: ...; `close?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `compatMode?`: ...; `contains?`: ...; `contentType?`: ...; `cookie?`: ...; `createAttribute?`: ...; `createAttributeNS?`: ...; `createCDATASection?`: ...; `createComment?`: ...; `createDocumentFragment?`: ...; `createElement?`: ...; `createElementNS?`: ...; `createEvent?`: ...; `createExpression?`: ...; `createNodeIterator?`: ...; `createNSResolver?`: ...; `createProcessingInstruction?`: ...; `createRange?`: ...; `createTextNode?`: ...; `createTreeWalker?`: ...; `currentScript?`: ...; `defaultView?`: ...; `designMode?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `doctype?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `documentElement?`: ...; `documentURI?`: ...; `domain?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `embeds?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `evaluate?`: ...; `execCommand?`: ...; `exitFullscreen?`: ...; `exitPictureInPicture?`: ...; `exitPointerLock?`: ...; `fgColor?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fonts?`: ...; `forms?`: ...; `fragmentDirective?`: ...; `fullscreen?`: ...; `fullscreenElement?`: ...; `fullscreenEnabled?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getElementsByClassName?`: ...; `getElementsByName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getRootNode?`: ...; `getSelection?`: ...; `hasChildNodes?`: ...; `hasFocus?`: ...; `hasStorageAccess?`: ...; `head?`: ...; `hidden?`: ...; `images?`: ...; `implementation?`: ...; `importNode?`: ...; `inputEncoding?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lastModified?`: ...; `linkColor?`: ...; `links?`: ...; `location?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointerlockchange?`: ...; `onpointerlockerror?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreadystatechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvisibilitychange?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `open?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pictureInPictureEnabled?`: ...; `plugins?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `queryCommandEnabled?`: ...; `queryCommandIndeterm?`: ...; `queryCommandState?`: ...; `queryCommandSupported?`: ...; `queryCommandValue?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `readyState?`: ...; `referrer?`: ...; `releaseEvents?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `requestStorageAccess?`: ...; `rootElement?`: ...; `scripts?`: ...; `scrollingElement?`: ...; `startViewTransition?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `timeline?`: ...; `title?`: ...; `URL?`: ...; `visibilityState?`: ...; `vlinkColor?`: ...; `write?`: ...; `writeln?`: ...; }

The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)

###### components.wacka.playerArgs.mediaElement.ownerDocument.activeElement?

...

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/activeElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.addEventListener?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.adoptedStyleSheets?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/adoptedStyleSheets)

###### components.wacka.playerArgs.mediaElement.ownerDocument.adoptNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.alinkColor?

...

Returns or sets the color of an active link in the document body.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/alinkColor)

###### components.wacka.playerArgs.mediaElement.ownerDocument.all?

...

The Document interface's read-only **`all`** property returns an HTMLAllCollection rooted at the document node.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/all)

###### components.wacka.playerArgs.mediaElement.ownerDocument.anchors?

...

The **`anchors`** read-only property of the An HTMLCollection.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/anchors)

###### components.wacka.playerArgs.mediaElement.ownerDocument.append?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.appendChild?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.applets?

...

The **`applets`** property of the Document returns an empty HTMLCollection.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/applets)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ATTRIBUTE_NODE?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.baseURI?

...

The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/baseURI)

###### components.wacka.playerArgs.mediaElement.ownerDocument.bgColor?

...

The deprecated `bgColor` property gets or sets the background color of the current document.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/bgColor)

###### components.wacka.playerArgs.mediaElement.ownerDocument.body?

...

The **`Document.body`** property represents the `null` if no such element exists.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/body)

###### components.wacka.playerArgs.mediaElement.ownerDocument.captureEvents?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.caretPositionFromPoint?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.caretRangeFromPoint?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.CDATA_SECTION_NODE?

...

node is a CDATASection node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.characterSet?

...

The **`Document.characterSet`** read-only property returns the character encoding of the document that it's currently rendered with.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/characterSet)

###### components.wacka.playerArgs.mediaElement.ownerDocument.charset?

...

**Deprecated**

This is a legacy alias of `characterSet`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/characterSet)

###### components.wacka.playerArgs.mediaElement.ownerDocument.childElementCount?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

###### components.wacka.playerArgs.mediaElement.ownerDocument.childNodes?

...

The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/childNodes)

###### components.wacka.playerArgs.mediaElement.ownerDocument.children?

...

Returns the child elements.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/children)

###### components.wacka.playerArgs.mediaElement.ownerDocument.clear?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.cloneNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.close?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.COMMENT_NODE?

...

node is a Comment node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.compareDocumentPosition?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.compatMode?

...

The **`Document.compatMode`** read-only property indicates whether the document is rendered in Quirks mode or Standards mode.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/compatMode)

###### components.wacka.playerArgs.mediaElement.ownerDocument.contains?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.contentType?

...

The **`Document.contentType`** read-only property returns the MIME type that the document is being rendered as.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/contentType)

###### components.wacka.playerArgs.mediaElement.ownerDocument.cookie?

...

The Document property `cookie` lets you read and write cookies associated with the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/cookie)

###### components.wacka.playerArgs.mediaElement.ownerDocument.createAttribute?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createAttributeNS?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createCDATASection?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createComment?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createDocumentFragment?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createElement?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createElementNS?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createEvent?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createExpression?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createNodeIterator?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createNSResolver?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createProcessingInstruction?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createRange?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createTextNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.createTreeWalker?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.currentScript?

...

The **`Document.currentScript`** property returns the script element whose script is currently being processed and isn't a JavaScript module.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/currentScript)

###### components.wacka.playerArgs.mediaElement.ownerDocument.defaultView?

...

In browsers, **`document.defaultView`** returns the This property is read-only.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/defaultView)

###### components.wacka.playerArgs.mediaElement.ownerDocument.designMode?

...

**`document.designMode`** controls whether the entire document is editable.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/designMode)

###### components.wacka.playerArgs.mediaElement.ownerDocument.dir?

...

The **`Document.dir`** property is a string representing the directionality of the text of the document, whether left to right (default) or right to left.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/dir)

###### components.wacka.playerArgs.mediaElement.ownerDocument.dispatchEvent?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.doctype?

...

The **`doctype`** read-only property of the Document interface is a DocumentType object representing the Doctype associated with the current document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/doctype)

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_FRAGMENT_NODE?

...

node is a DocumentFragment node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_NODE?

...

node is a document.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_CONTAINED_BY?

...

Set when other is a descendant of node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_CONTAINS?

...

Set when other is an ancestor of node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_DISCONNECTED?

...

Set when node and other are not in the same tree.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_FOLLOWING?

...

Set when other is following node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_POSITION_PRECEDING?

...

Set when other is preceding node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.DOCUMENT_TYPE_NODE?

...

node is a doctype.

###### components.wacka.playerArgs.mediaElement.ownerDocument.documentElement?

...

The **`documentElement`** read-only property of the Document interface returns the example, the html element for HTML documents).

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/documentElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.documentURI?

...

The **`documentURI`** read-only property of the A string.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/documentURI)

###### components.wacka.playerArgs.mediaElement.ownerDocument.domain?

...

The **`domain`** property of the Document interface gets/sets the domain portion of the origin of the current document, as used by the same-origin policy.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/domain)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ELEMENT_NODE?

...

node is an element.

###### components.wacka.playerArgs.mediaElement.ownerDocument.elementFromPoint?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.elementsFromPoint?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.embeds?

...

The **`embeds`** read-only property of the An HTMLCollection.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/embeds)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ENTITY_NODE?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.ENTITY_REFERENCE_NODE?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.evaluate?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.execCommand?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.exitFullscreen?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.exitPictureInPicture?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.exitPointerLock?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.fgColor?

...

**`fgColor`** gets/sets the foreground color, or text color, of the current document.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fgColor)

###### components.wacka.playerArgs.mediaElement.ownerDocument.firstChild?

...

The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/firstChild)

###### components.wacka.playerArgs.mediaElement.ownerDocument.firstElementChild?

...

Returns the first child that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

###### components.wacka.playerArgs.mediaElement.ownerDocument.fonts?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fonts)

###### components.wacka.playerArgs.mediaElement.ownerDocument.forms?

...

The **`forms`** read-only property of the Document interface returns an HTMLCollection listing all the form elements contained in the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/forms)

###### components.wacka.playerArgs.mediaElement.ownerDocument.fragmentDirective?

...

The **`fragmentDirective`** read-only property of the Document interface returns the FragmentDirective for the current document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fragmentDirective)

###### components.wacka.playerArgs.mediaElement.ownerDocument.fullscreen?

...

The obsolete Document interface's **`fullscreen`** read-only property reports whether or not the document is currently displaying content in fullscreen mode.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fullscreen)

###### components.wacka.playerArgs.mediaElement.ownerDocument.fullscreenElement?

...

Returns document's fullscreen element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.fullscreenEnabled?

...

The read-only **`fullscreenEnabled`** property on the Document interface indicates whether or not fullscreen mode is available.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fullscreenEnabled)

###### components.wacka.playerArgs.mediaElement.ownerDocument.getAnimations?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getElementById?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getElementsByClassName?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getElementsByName?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getElementsByTagName?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getElementsByTagNameNS?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getRootNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.getSelection?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.hasChildNodes?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.hasFocus?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.hasStorageAccess?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.head?

...

The **`head`** read-only property of the Document interface returns the head element of the current document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/head)

###### components.wacka.playerArgs.mediaElement.ownerDocument.hidden?

...

The **`Document.hidden`** read-only property returns a Boolean value indicating if the page is considered hidden or not.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/hidden)

###### components.wacka.playerArgs.mediaElement.ownerDocument.images?

...

The **`images`** read-only property of the Document interface returns a collection of the images in the current HTML document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/images)

###### components.wacka.playerArgs.mediaElement.ownerDocument.implementation?

...

The **`Document.implementation`** property returns a A DOMImplementation object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/implementation)

###### components.wacka.playerArgs.mediaElement.ownerDocument.importNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.inputEncoding?

...

**Deprecated**

This is a legacy alias of `characterSet`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/characterSet)

###### components.wacka.playerArgs.mediaElement.ownerDocument.insertBefore?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.isConnected?

...

The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/isConnected)

###### components.wacka.playerArgs.mediaElement.ownerDocument.isDefaultNamespace?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.isEqualNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.isSameNode?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.lastChild?

...

The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/lastChild)

###### components.wacka.playerArgs.mediaElement.ownerDocument.lastElementChild?

...

Returns the last child that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

###### components.wacka.playerArgs.mediaElement.ownerDocument.lastModified?

...

The **`lastModified`** property of the Document interface returns a string containing the date and local time on which the current document was last modified.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/lastModified)

###### components.wacka.playerArgs.mediaElement.ownerDocument.linkColor?

...

The **`Document.linkColor`** property gets/sets the color of links within the document.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/linkColor)

###### components.wacka.playerArgs.mediaElement.ownerDocument.links?

...

The **`links`** read-only property of the Document interface returns a collection of all area elements and a elements in a document with a value for the href attribute.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/links)

###### components.wacka.playerArgs.mediaElement.ownerDocument.location?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.lookupNamespaceURI?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.lookupPrefix?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.nextSibling?

...

The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

###### components.wacka.playerArgs.mediaElement.ownerDocument.nodeName?

...

The read-only **`nodeName`** property of Node returns the name of the current node as a string.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeName)

###### components.wacka.playerArgs.mediaElement.ownerDocument.nodeType?

...

The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeType)

###### components.wacka.playerArgs.mediaElement.ownerDocument.nodeValue?

...

The **`nodeValue`** property of the Node interface returns or sets the value of the current node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

###### components.wacka.playerArgs.mediaElement.ownerDocument.normalize?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.NOTATION_NODE?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.onabort?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onanimationcancel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onanimationend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onanimationiteration?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onanimationstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onauxclick?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onbeforeinput?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onbeforematch?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onbeforetoggle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onblur?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/blur_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncancel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncanplay?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncanplaythrough?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onclick?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/click_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onclose?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncontextlost?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncontextmenu?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncontextrestored?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncopy?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/copy_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncuechange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oncut?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/cut_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondblclick?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondrag?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondragend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondragenter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondragleave?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondragover?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondragstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondrop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ondurationchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onemptied?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onended?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onerror?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onfocus?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/focus_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onformdata?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onfullscreenchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fullscreenchange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onfullscreenerror?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/fullscreenerror_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ongotpointercapture?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oninput?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/input_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.oninvalid?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onkeydown?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onkeypress?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onkeyup?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onload?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onloadeddata?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onloadedmetadata?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onloadstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onlostpointercapture?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmousedown?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmouseenter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmouseleave?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmousemove?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmouseout?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmouseover?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onmouseup?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpaste?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/paste_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpause?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onplay?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onplaying?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointercancel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerdown?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerenter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerleave?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerlockchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/pointerlockchange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerlockerror?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/pointerlockerror_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointermove?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerout?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerover?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerrawupdate?

...

Available only in secure contexts.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onpointerup?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onprogress?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onratechange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onreadystatechange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/readystatechange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onreset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onresize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onscroll?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onscrollend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onsecuritypolicyviolation?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onseeked?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onseeking?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onselect?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onselectionchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onselectstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onslotchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onstalled?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onsubmit?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onsuspend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontimeupdate?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontoggle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontouchcancel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontouchend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontouchmove?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontouchstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontransitioncancel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontransitionend?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontransitionrun?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.ontransitionstart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onvisibilitychange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/visibilitychange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onvolumechange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwaiting?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwebkitanimationend?

...

**Deprecated**

This is a legacy alias of `onanimationend`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwebkitanimationiteration?

...

**Deprecated**

This is a legacy alias of `onanimationiteration`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwebkitanimationstart?

...

**Deprecated**

This is a legacy alias of `onanimationstart`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwebkittransitionend?

...

**Deprecated**

This is a legacy alias of `ontransitionend`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.onwheel?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

###### components.wacka.playerArgs.mediaElement.ownerDocument.open?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.ownerDocument?

...

The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)

###### components.wacka.playerArgs.mediaElement.ownerDocument.parentElement?

...

The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/parentElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.parentNode?

...

The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/parentNode)

###### components.wacka.playerArgs.mediaElement.ownerDocument.pictureInPictureElement?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.pictureInPictureEnabled?

...

The read-only **`pictureInPictureEnabled`** property of the available.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureEnabled)

###### components.wacka.playerArgs.mediaElement.ownerDocument.plugins?

...

The **`plugins`** read-only property of the containing one or more HTMLEmbedElements representing the An HTMLCollection.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/plugins)

###### components.wacka.playerArgs.mediaElement.ownerDocument.pointerLockElement?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/pointerLockElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.prepend?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.previousSibling?

...

The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

###### components.wacka.playerArgs.mediaElement.ownerDocument.PROCESSING_INSTRUCTION_NODE?

...

node is a ProcessingInstruction node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.queryCommandEnabled?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.queryCommandIndeterm?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.queryCommandState?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.queryCommandSupported?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.queryCommandValue?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.querySelector?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.querySelectorAll?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.readyState?

...

The **`Document.readyState`** property describes the loading state of the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/readyState)

###### components.wacka.playerArgs.mediaElement.ownerDocument.referrer?

...

The **`Document.referrer`** property returns the URI of the page that linked to this page.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/referrer)

###### components.wacka.playerArgs.mediaElement.ownerDocument.releaseEvents?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.removeChild?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.removeEventListener?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.replaceChild?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.replaceChildren?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.requestStorageAccess?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.rootElement?

...

**`Document.rootElement`** returns the Element that is the root element of the document if it is an documents.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/rootElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.scripts?

...

The **`scripts`** property of the Document interface returns a list of the script elements in the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scripts)

###### components.wacka.playerArgs.mediaElement.ownerDocument.scrollingElement?

...

The **`scrollingElement`** read-only property of the scrolls the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/scrollingElement)

###### components.wacka.playerArgs.mediaElement.ownerDocument.startViewTransition?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.styleSheets?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/styleSheets)

###### components.wacka.playerArgs.mediaElement.ownerDocument.TEXT_NODE?

...

node is a Text node.

###### components.wacka.playerArgs.mediaElement.ownerDocument.textContent?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.timeline?

...

The `timeline` readonly property of the Document interface represents the default timeline of the current document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/timeline)

###### components.wacka.playerArgs.mediaElement.ownerDocument.title?

...

The **`document.title`** property gets or sets the current title of the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/title)

###### components.wacka.playerArgs.mediaElement.ownerDocument.URL?

...

The **`URL`** read-only property of the Document interface returns the document location as a string.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/URL)

###### components.wacka.playerArgs.mediaElement.ownerDocument.visibilityState?

...

The **`Document.visibilityState`** read-only property returns the visibility of the document.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/visibilityState)

###### components.wacka.playerArgs.mediaElement.ownerDocument.vlinkColor?

...

The **`Document.vlinkColor`** property gets/sets the color of links that the user has visited in the document.

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Document/vlinkColor)

###### components.wacka.playerArgs.mediaElement.ownerDocument.write?

...

###### components.wacka.playerArgs.mediaElement.ownerDocument.writeln?

...

###### components.wacka.playerArgs.mediaElement.parentElement?

{ `accessKey?`: ...; `accessKeyLabel?`: ...; `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachInternals?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `attributeStyleMap?`: ...; `autocapitalize?`: ...; `autocorrect?`: ...; `autofocus?`: ...; `baseURI?`: ...; `before?`: ...; `blur?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `click?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `contentEditable?`: ...; `currentCSSZoom?`: ...; `dataset?`: ...; `dir?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `draggable?`: ...; `ELEMENT_NODE?`: ...; `enterKeyHint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `focus?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `hidden?`: ...; `hidePopover?`: ...; `id?`: ...; `inert?`: ...; `innerHTML?`: ...; `innerText?`: ...; `inputMode?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isContentEditable?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lang?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `nonce?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `offsetHeight?`: ...; `offsetLeft?`: ...; `offsetParent?`: ...; `offsetTop?`: ...; `offsetWidth?`: ...; `onabort?`: ...; `onanimationcancel?`: ...; `onanimationend?`: ...; `onanimationiteration?`: ...; `onanimationstart?`: ...; `onauxclick?`: ...; `onbeforeinput?`: ...; `onbeforematch?`: ...; `onbeforetoggle?`: ...; `onblur?`: ...; `oncancel?`: ...; `oncanplay?`: ...; `oncanplaythrough?`: ...; `onchange?`: ...; `onclick?`: ...; `onclose?`: ...; `oncontextlost?`: ...; `oncontextmenu?`: ...; `oncontextrestored?`: ...; `oncopy?`: ...; `oncuechange?`: ...; `oncut?`: ...; `ondblclick?`: ...; `ondrag?`: ...; `ondragend?`: ...; `ondragenter?`: ...; `ondragleave?`: ...; `ondragover?`: ...; `ondragstart?`: ...; `ondrop?`: ...; `ondurationchange?`: ...; `onemptied?`: ...; `onended?`: ...; `onerror?`: ...; `onfocus?`: ...; `onformdata?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `ongotpointercapture?`: ...; `oninput?`: ...; `oninvalid?`: ...; `onkeydown?`: ...; `onkeypress?`: ...; `onkeyup?`: ...; `onload?`: ...; `onloadeddata?`: ...; `onloadedmetadata?`: ...; `onloadstart?`: ...; `onlostpointercapture?`: ...; `onmousedown?`: ...; `onmouseenter?`: ...; `onmouseleave?`: ...; `onmousemove?`: ...; `onmouseout?`: ...; `onmouseover?`: ...; `onmouseup?`: ...; `onpaste?`: ...; `onpause?`: ...; `onplay?`: ...; `onplaying?`: ...; `onpointercancel?`: ...; `onpointerdown?`: ...; `onpointerenter?`: ...; `onpointerleave?`: ...; `onpointermove?`: ...; `onpointerout?`: ...; `onpointerover?`: ...; `onpointerrawupdate?`: ...; `onpointerup?`: ...; `onprogress?`: ...; `onratechange?`: ...; `onreset?`: ...; `onresize?`: ...; `onscroll?`: ...; `onscrollend?`: ...; `onsecuritypolicyviolation?`: ...; `onseeked?`: ...; `onseeking?`: ...; `onselect?`: ...; `onselectionchange?`: ...; `onselectstart?`: ...; `onslotchange?`: ...; `onstalled?`: ...; `onsubmit?`: ...; `onsuspend?`: ...; `ontimeupdate?`: ...; `ontoggle?`: ...; `ontouchcancel?`: ...; `ontouchend?`: ...; `ontouchmove?`: ...; `ontouchstart?`: ...; `ontransitioncancel?`: ...; `ontransitionend?`: ...; `ontransitionrun?`: ...; `ontransitionstart?`: ...; `onvolumechange?`: ...; `onwaiting?`: ...; `onwebkitanimationend?`: ...; `onwebkitanimationiteration?`: ...; `onwebkitanimationstart?`: ...; `onwebkittransitionend?`: ...; `onwheel?`: ...; `outerHTML?`: ...; `outerText?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `popover?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `showPopover?`: ...; `slot?`: ...; `spellcheck?`: ...; `style?`: ...; `tabIndex?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `title?`: ...; `toggleAttribute?`: ...; `togglePopover?`: ...; `translate?`: ...; `webkitMatchesSelector?`: ...; `writingSuggestions?`: ...; } | `null`

The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/parentElement)

###### components.wacka.playerArgs.mediaElement.parentNode?

{ `addEventListener?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/parentNode)

###### components.wacka.playerArgs.mediaElement.part?

{[`key`: ...]: ...; `[iterator]?`: ...; `add?`: ...; `contains?`: ...; `entries?`: ...; `forEach?`: ...; `item?`: ...; `keys?`: ...; `length?`: ...; `remove?`: ...; `replace?`: ...; `supports?`: ...; `toggle?`: ...; `toString?`: ...; `value?`: ...; `values?`: ...; }

###### components.wacka.playerArgs.mediaElement.part.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.part.add?

...

###### components.wacka.playerArgs.mediaElement.part.contains?

...

###### components.wacka.playerArgs.mediaElement.part.entries?

...

###### components.wacka.playerArgs.mediaElement.part.forEach?

...

###### components.wacka.playerArgs.mediaElement.part.item?

...

###### components.wacka.playerArgs.mediaElement.part.keys?

...

###### components.wacka.playerArgs.mediaElement.part.length?

...

The read-only **`length`** property of the DOMTokenList interface is an `integer` representing the number of objects stored in the object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/DOMTokenList/length)

###### components.wacka.playerArgs.mediaElement.part.remove?

...

###### components.wacka.playerArgs.mediaElement.part.replace?

...

###### components.wacka.playerArgs.mediaElement.part.supports?

...

###### components.wacka.playerArgs.mediaElement.part.toggle?

...

###### components.wacka.playerArgs.mediaElement.part.toString?

...

###### components.wacka.playerArgs.mediaElement.part.value?

...

The **`value`** property of the DOMTokenList interface is a stringifier that returns the value of the list serialized as a string, or clears and sets the list to the given value.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/DOMTokenList/value)

###### components.wacka.playerArgs.mediaElement.part.values?

...

###### components.wacka.playerArgs.mediaElement.pause?

() => ...

###### components.wacka.playerArgs.mediaElement.paused?

`boolean`

The read-only **`HTMLMediaElement.paused`** property tells whether the media element is paused.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/paused)

###### components.wacka.playerArgs.mediaElement.play?

() => ...

###### components.wacka.playerArgs.mediaElement.playbackRate?

`number`

The **`HTMLMediaElement.playbackRate`** property sets the rate at which the media is being played back.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playbackRate)

###### components.wacka.playerArgs.mediaElement.played?

{ `end?`: ...; `length?`: ...; `start?`: ...; }

The **`played`** read-only property of the HTMLMediaElement interface indicates the time ranges the resource, an audio or video media file, has played.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/played)

###### components.wacka.playerArgs.mediaElement.played.end?

...

###### components.wacka.playerArgs.mediaElement.played.length?

...

The **`TimeRanges.length`** read-only property returns the number of ranges in the object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TimeRanges/length)

###### components.wacka.playerArgs.mediaElement.played.start?

...

###### components.wacka.playerArgs.mediaElement.popover?

`string` | `null`

The **`popover`** property of the HTMLElement interface gets and sets an element's popover state via JavaScript (`'auto'`, `'hint'`, or `'manual'`), and can be used for feature detection.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/popover)

###### components.wacka.playerArgs.mediaElement.prefix?

`string` | `null`

The **`Element.prefix`** read-only property returns the namespace prefix of the specified element, or `null` if no prefix is specified.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/prefix)

###### components.wacka.playerArgs.mediaElement.preload?

`""` | `"metadata"` | `"none"` | `"auto"`

The **`preload`** property of the HTMLMediaElement interface is a string that provides a hint to the browser about what the author thinks will lead to the best user experience.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preload)

###### components.wacka.playerArgs.mediaElement.prepend?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.preservesPitch?

`boolean`

The **`HTMLMediaElement.preservesPitch`** property determines whether or not the browser should adjust the pitch of the audio to compensate for changes to the playback rate made by setting HTMLMediaElement.playbackRate.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preservesPitch)

###### components.wacka.playerArgs.mediaElement.previousElementSibling?

{ `addEventListener?`: ...; `after?`: ...; `animate?`: ...; `append?`: ...; `appendChild?`: ...; `ariaActiveDescendantElement?`: ...; `ariaAtomic?`: ...; `ariaAutoComplete?`: ...; `ariaBrailleLabel?`: ...; `ariaBrailleRoleDescription?`: ...; `ariaBusy?`: ...; `ariaChecked?`: ...; `ariaColCount?`: ...; `ariaColIndex?`: ...; `ariaColIndexText?`: ...; `ariaColSpan?`: ...; `ariaControlsElements?`: ...; `ariaCurrent?`: ...; `ariaDescribedByElements?`: ...; `ariaDescription?`: ...; `ariaDetailsElements?`: ...; `ariaDisabled?`: ...; `ariaErrorMessageElements?`: ...; `ariaExpanded?`: ...; `ariaFlowToElements?`: ...; `ariaHasPopup?`: ...; `ariaHidden?`: ...; `ariaInvalid?`: ...; `ariaKeyShortcuts?`: ...; `ariaLabel?`: ...; `ariaLabelledByElements?`: ...; `ariaLevel?`: ...; `ariaLive?`: ...; `ariaModal?`: ...; `ariaMultiLine?`: ...; `ariaMultiSelectable?`: ...; `ariaOrientation?`: ...; `ariaOwnsElements?`: ...; `ariaPlaceholder?`: ...; `ariaPosInSet?`: ...; `ariaPressed?`: ...; `ariaReadOnly?`: ...; `ariaRelevant?`: ...; `ariaRequired?`: ...; `ariaRoleDescription?`: ...; `ariaRowCount?`: ...; `ariaRowIndex?`: ...; `ariaRowIndexText?`: ...; `ariaRowSpan?`: ...; `ariaSelected?`: ...; `ariaSetSize?`: ...; `ariaSort?`: ...; `ariaValueMax?`: ...; `ariaValueMin?`: ...; `ariaValueNow?`: ...; `ariaValueText?`: ...; `assignedSlot?`: ...; `attachShadow?`: ...; `ATTRIBUTE_NODE?`: ...; `attributes?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `checkVisibility?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `classList?`: ...; `className?`: ...; `clientHeight?`: ...; `clientLeft?`: ...; `clientTop?`: ...; `clientWidth?`: ...; `cloneNode?`: ...; `closest?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `computedStyleMap?`: ...; `contains?`: ...; `currentCSSZoom?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `getAnimations?`: ...; `getAttribute?`: ...; `getAttributeNames?`: ...; `getAttributeNode?`: ...; `getAttributeNodeNS?`: ...; `getAttributeNS?`: ...; `getBoundingClientRect?`: ...; `getClientRects?`: ...; `getElementsByClassName?`: ...; `getElementsByTagName?`: ...; `getElementsByTagNameNS?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasAttribute?`: ...; `hasAttributeNS?`: ...; `hasAttributes?`: ...; `hasChildNodes?`: ...; `hasPointerCapture?`: ...; `id?`: ...; `innerHTML?`: ...; `insertAdjacentElement?`: ...; `insertAdjacentHTML?`: ...; `insertAdjacentText?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `localName?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `matches?`: ...; `namespaceURI?`: ...; `nextElementSibling?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onfullscreenchange?`: ...; `onfullscreenerror?`: ...; `outerHTML?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `part?`: ...; `prefix?`: ...; `prepend?`: ...; `previousElementSibling?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `releasePointerCapture?`: ...; `remove?`: ...; `removeAttribute?`: ...; `removeAttributeNode?`: ...; `removeAttributeNS?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `replaceWith?`: ...; `requestFullscreen?`: ...; `requestPointerLock?`: ...; `role?`: ...; `scroll?`: ...; `scrollBy?`: ...; `scrollHeight?`: ...; `scrollIntoView?`: ...; `scrollLeft?`: ...; `scrollTo?`: ...; `scrollTop?`: ...; `scrollWidth?`: ...; `setAttribute?`: ...; `setAttributeNode?`: ...; `setAttributeNodeNS?`: ...; `setAttributeNS?`: ...; `setHTMLUnsafe?`: ...; `setPointerCapture?`: ...; `shadowRoot?`: ...; `slot?`: ...; `tagName?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; `toggleAttribute?`: ...; `webkitMatchesSelector?`: ...; } | `null`

Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)

###### components.wacka.playerArgs.mediaElement.previousSibling?

{ `addEventListener?`: ...; `after?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `before?`: ...; `CDATA_SECTION_NODE?`: ...; `childNodes?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `remove?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceWith?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

###### components.wacka.playerArgs.mediaElement.PROCESSING_INSTRUCTION_NODE?

`7`

node is a ProcessingInstruction node.

###### components.wacka.playerArgs.mediaElement.querySelector?

{<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }

###### components.wacka.playerArgs.mediaElement.querySelectorAll?

{<`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`K`>(`selectors`): ...; <`E`>(`selectors`): ...; }

###### components.wacka.playerArgs.mediaElement.readyState?

`number`

The **`HTMLMediaElement.readyState`** property indicates the readiness state of the media.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/readyState)

###### components.wacka.playerArgs.mediaElement.releasePointerCapture?

(`pointerId`) => ...

###### components.wacka.playerArgs.mediaElement.remote?

{ `addEventListener?`: ...; `cancelWatchAvailability?`: ...; `dispatchEvent?`: ...; `onconnect?`: ...; `onconnecting?`: ...; `ondisconnect?`: ...; `prompt?`: ...; `removeEventListener?`: ...; `state?`: ...; `watchAvailability?`: ...; }

The **`remote`** read-only property of the HTMLMediaElement interface returns the RemotePlayback object associated with the media element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/remote)

###### components.wacka.playerArgs.mediaElement.remote.addEventListener?

...

###### components.wacka.playerArgs.mediaElement.remote.cancelWatchAvailability?

...

###### components.wacka.playerArgs.mediaElement.remote.dispatchEvent?

...

###### components.wacka.playerArgs.mediaElement.remote.onconnect?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/RemotePlayback/connect_event)

###### components.wacka.playerArgs.mediaElement.remote.onconnecting?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/RemotePlayback/connecting_event)

###### components.wacka.playerArgs.mediaElement.remote.ondisconnect?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/RemotePlayback/disconnect_event)

###### components.wacka.playerArgs.mediaElement.remote.prompt?

...

###### components.wacka.playerArgs.mediaElement.remote.removeEventListener?

...

###### components.wacka.playerArgs.mediaElement.remote.state?

...

The **`state`** read-only property of the RemotePlayback interface returns the current state of the `RemotePlayback` connection.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/RemotePlayback/state)

###### components.wacka.playerArgs.mediaElement.remote.watchAvailability?

...

###### components.wacka.playerArgs.mediaElement.remove?

() => ...

###### components.wacka.playerArgs.mediaElement.removeAttribute?

(`qualifiedName`) => ...

###### components.wacka.playerArgs.mediaElement.removeAttributeNode?

(`attr`) => ...

###### components.wacka.playerArgs.mediaElement.removeAttributeNS?

(`namespace`, `localName`) => ...

###### components.wacka.playerArgs.mediaElement.removeChild?

<`T`>(`child`) => ...

###### components.wacka.playerArgs.mediaElement.removeEventListener?

{<`K`>(`type`, `listener`, `options?`): ...; (`type`, `listener`, `options?`): ...; }

###### components.wacka.playerArgs.mediaElement.replaceChild?

<`T`>(`node`, `child`) => ...

###### components.wacka.playerArgs.mediaElement.replaceChildren?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.replaceWith?

(...`nodes`) => ...

###### components.wacka.playerArgs.mediaElement.requestFullscreen?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.requestPointerLock?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.role?

`string` | `null`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/role)

###### components.wacka.playerArgs.mediaElement.scroll?

{(`options?`): ...; (`x`, `y`): ...; }

###### components.wacka.playerArgs.mediaElement.scrollBy?

{(`options?`): ...; (`x`, `y`): ...; }

###### components.wacka.playerArgs.mediaElement.scrollHeight?

`number`

The **`scrollHeight`** read-only property of the Element interface is a measurement of the height of an element's content, including content not visible on the screen due to overflow.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)

###### components.wacka.playerArgs.mediaElement.scrollIntoView?

(`arg?`) => ...

###### components.wacka.playerArgs.mediaElement.scrollLeft?

`number`

The **`scrollLeft`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its left edge.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)

###### components.wacka.playerArgs.mediaElement.scrollTo?

{(`options?`): ...; (`x`, `y`): ...; }

###### components.wacka.playerArgs.mediaElement.scrollTop?

`number`

The **`scrollTop`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its top edge.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/scrollTop)

###### components.wacka.playerArgs.mediaElement.scrollWidth?

`number`

The **`scrollWidth`** read-only property of the Element interface is a measurement of the width of an element's content, including content not visible on the screen due to overflow.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)

###### components.wacka.playerArgs.mediaElement.seekable?

{ `end?`: ...; `length?`: ...; `start?`: ...; }

The **`seekable`** read-only property of HTMLMediaElement objects returns a new static normalized `TimeRanges` object that represents the ranges of the media resource, if any, that the user agent is able to seek to at the time `seekable` property is accessed.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seekable)

###### components.wacka.playerArgs.mediaElement.seekable.end?

...

###### components.wacka.playerArgs.mediaElement.seekable.length?

...

The **`TimeRanges.length`** read-only property returns the number of ranges in the object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TimeRanges/length)

###### components.wacka.playerArgs.mediaElement.seekable.start?

...

###### components.wacka.playerArgs.mediaElement.seeking?

`boolean`

The **`seeking`** read-only property of the HTMLMediaElement interface is a Boolean indicating whether the resource, the audio or video, is in the process of seeking to a new position.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking)

###### components.wacka.playerArgs.mediaElement.setAttribute?

(`qualifiedName`, `value`) => ...

###### components.wacka.playerArgs.mediaElement.setAttributeNode?

(`attr`) => ...

###### components.wacka.playerArgs.mediaElement.setAttributeNodeNS?

(`attr`) => ...

###### components.wacka.playerArgs.mediaElement.setAttributeNS?

(`namespace`, `qualifiedName`, `value`) => ...

###### components.wacka.playerArgs.mediaElement.setHTMLUnsafe?

(`html`) => ...

###### components.wacka.playerArgs.mediaElement.setMediaKeys?

(`mediaKeys`) => ...

###### components.wacka.playerArgs.mediaElement.setPointerCapture?

(`pointerId`) => ...

###### components.wacka.playerArgs.mediaElement.setSinkId?

(`sinkId`) => ...

###### components.wacka.playerArgs.mediaElement.shadowRoot?

{ `activeElement?`: ...; `addEventListener?`: ...; `adoptedStyleSheets?`: ...; `append?`: ...; `appendChild?`: ...; `ATTRIBUTE_NODE?`: ...; `baseURI?`: ...; `CDATA_SECTION_NODE?`: ...; `childElementCount?`: ...; `childNodes?`: ...; `children?`: ...; `clonable?`: ...; `cloneNode?`: ...; `COMMENT_NODE?`: ...; `compareDocumentPosition?`: ...; `contains?`: ...; `delegatesFocus?`: ...; `dispatchEvent?`: ...; `DOCUMENT_FRAGMENT_NODE?`: ...; `DOCUMENT_NODE?`: ...; `DOCUMENT_POSITION_CONTAINED_BY?`: ...; `DOCUMENT_POSITION_CONTAINS?`: ...; `DOCUMENT_POSITION_DISCONNECTED?`: ...; `DOCUMENT_POSITION_FOLLOWING?`: ...; `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?`: ...; `DOCUMENT_POSITION_PRECEDING?`: ...; `DOCUMENT_TYPE_NODE?`: ...; `ELEMENT_NODE?`: ...; `elementFromPoint?`: ...; `elementsFromPoint?`: ...; `ENTITY_NODE?`: ...; `ENTITY_REFERENCE_NODE?`: ...; `firstChild?`: ...; `firstElementChild?`: ...; `fullscreenElement?`: ...; `getAnimations?`: ...; `getElementById?`: ...; `getHTML?`: ...; `getRootNode?`: ...; `hasChildNodes?`: ...; `host?`: ...; `innerHTML?`: ...; `insertBefore?`: ...; `isConnected?`: ...; `isDefaultNamespace?`: ...; `isEqualNode?`: ...; `isSameNode?`: ...; `lastChild?`: ...; `lastElementChild?`: ...; `lookupNamespaceURI?`: ...; `lookupPrefix?`: ...; `mode?`: ...; `nextSibling?`: ...; `nodeName?`: ...; `nodeType?`: ...; `nodeValue?`: ...; `normalize?`: ...; `NOTATION_NODE?`: ...; `onslotchange?`: ...; `ownerDocument?`: ...; `parentElement?`: ...; `parentNode?`: ...; `pictureInPictureElement?`: ...; `pointerLockElement?`: ...; `prepend?`: ...; `previousSibling?`: ...; `PROCESSING_INSTRUCTION_NODE?`: ...; `querySelector?`: ...; `querySelectorAll?`: ...; `removeChild?`: ...; `removeEventListener?`: ...; `replaceChild?`: ...; `replaceChildren?`: ...; `serializable?`: ...; `setHTMLUnsafe?`: ...; `slotAssignment?`: ...; `styleSheets?`: ...; `TEXT_NODE?`: ...; `textContent?`: ...; } | `null`

The `Element.shadowRoot` read-only property represents the shadow root hosted by the element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)

###### components.wacka.playerArgs.mediaElement.showPopover?

() => ...

###### components.wacka.playerArgs.mediaElement.sinkId?

`string`

The **`sinkId`** read-only property of the HTMLMediaElement interface returns a string that is the unique ID of the device to be used for playing audio output.
Available only in secure contexts.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/sinkId)

###### components.wacka.playerArgs.mediaElement.slot?

`string`

The **`slot`** property of the Element interface returns the name of the shadow DOM slot the element is inserted in.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/slot)

###### components.wacka.playerArgs.mediaElement.spellcheck?

`boolean`

The **`spellcheck`** property of the HTMLElement interface represents a boolean value that controls the spell-checking hint.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck)

###### components.wacka.playerArgs.mediaElement.src?

`string`

The **`HTMLMediaElement.src`** property reflects the value of the HTML media element's `src` attribute, which indicates the URL of a media resource to use in the element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/src)

###### components.wacka.playerArgs.mediaElement.srcObject?

{ `active?`: ...; `addEventListener?`: ...; `addTrack?`: ...; `clone?`: ...; `dispatchEvent?`: ...; `getAudioTracks?`: ...; `getTrackById?`: ...; `getTracks?`: ...; `getVideoTracks?`: ...; `id?`: ...; `onaddtrack?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; `removeTrack?`: ...; } | { `activeSourceBuffers?`: ...; `addEventListener?`: ...; `addSourceBuffer?`: ...; `clearLiveSeekableRange?`: ...; `dispatchEvent?`: ...; `duration?`: ...; `endOfStream?`: ...; `onsourceclose?`: ...; `onsourceended?`: ...; `onsourceopen?`: ...; `readyState?`: ...; `removeEventListener?`: ...; `removeSourceBuffer?`: ...; `setLiveSeekableRange?`: ...; `sourceBuffers?`: ...; } | { `arrayBuffer?`: ...; `bytes?`: ...; `size?`: ...; `slice?`: ...; `stream?`: ...; `text?`: ...; `type?`: ...; } | `null`

The **`srcObject`** property of the the source of the media associated with the HTMLMediaElement, or `null` if not assigned.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/srcObject)

###### components.wacka.playerArgs.mediaElement.style?

{[`key`: ...]: ...; `[iterator]?`: ...; `accentColor?`: ...; `alignContent?`: ...; `alignItems?`: ...; `alignmentBaseline?`: ...; `alignSelf?`: ...; `all?`: ...; `animation?`: ...; `animationComposition?`: ...; `animationDelay?`: ...; `animationDirection?`: ...; `animationDuration?`: ...; `animationFillMode?`: ...; `animationIterationCount?`: ...; `animationName?`: ...; `animationPlayState?`: ...; `animationTimingFunction?`: ...; `appearance?`: ...; `aspectRatio?`: ...; `backdropFilter?`: ...; `backfaceVisibility?`: ...; `background?`: ...; `backgroundAttachment?`: ...; `backgroundBlendMode?`: ...; `backgroundClip?`: ...; `backgroundColor?`: ...; `backgroundImage?`: ...; `backgroundOrigin?`: ...; `backgroundPosition?`: ...; `backgroundPositionX?`: ...; `backgroundPositionY?`: ...; `backgroundRepeat?`: ...; `backgroundSize?`: ...; `baselineShift?`: ...; `baselineSource?`: ...; `blockSize?`: ...; `border?`: ...; `borderBlock?`: ...; `borderBlockColor?`: ...; `borderBlockEnd?`: ...; `borderBlockEndColor?`: ...; `borderBlockEndStyle?`: ...; `borderBlockEndWidth?`: ...; `borderBlockStart?`: ...; `borderBlockStartColor?`: ...; `borderBlockStartStyle?`: ...; `borderBlockStartWidth?`: ...; `borderBlockStyle?`: ...; `borderBlockWidth?`: ...; `borderBottom?`: ...; `borderBottomColor?`: ...; `borderBottomLeftRadius?`: ...; `borderBottomRightRadius?`: ...; `borderBottomStyle?`: ...; `borderBottomWidth?`: ...; `borderCollapse?`: ...; `borderColor?`: ...; `borderEndEndRadius?`: ...; `borderEndStartRadius?`: ...; `borderImage?`: ...; `borderImageOutset?`: ...; `borderImageRepeat?`: ...; `borderImageSlice?`: ...; `borderImageSource?`: ...; `borderImageWidth?`: ...; `borderInline?`: ...; `borderInlineColor?`: ...; `borderInlineEnd?`: ...; `borderInlineEndColor?`: ...; `borderInlineEndStyle?`: ...; `borderInlineEndWidth?`: ...; `borderInlineStart?`: ...; `borderInlineStartColor?`: ...; `borderInlineStartStyle?`: ...; `borderInlineStartWidth?`: ...; `borderInlineStyle?`: ...; `borderInlineWidth?`: ...; `borderLeft?`: ...; `borderLeftColor?`: ...; `borderLeftStyle?`: ...; `borderLeftWidth?`: ...; `borderRadius?`: ...; `borderRight?`: ...; `borderRightColor?`: ...; `borderRightStyle?`: ...; `borderRightWidth?`: ...; `borderSpacing?`: ...; `borderStartEndRadius?`: ...; `borderStartStartRadius?`: ...; `borderStyle?`: ...; `borderTop?`: ...; `borderTopColor?`: ...; `borderTopLeftRadius?`: ...; `borderTopRightRadius?`: ...; `borderTopStyle?`: ...; `borderTopWidth?`: ...; `borderWidth?`: ...; `bottom?`: ...; `boxDecorationBreak?`: ...; `boxShadow?`: ...; `boxSizing?`: ...; `breakAfter?`: ...; `breakBefore?`: ...; `breakInside?`: ...; `captionSide?`: ...; `caretColor?`: ...; `clear?`: ...; `clip?`: ...; `clipPath?`: ...; `clipRule?`: ...; `color?`: ...; `colorInterpolation?`: ...; `colorInterpolationFilters?`: ...; `colorScheme?`: ...; `columnCount?`: ...; `columnFill?`: ...; `columnGap?`: ...; `columnRule?`: ...; `columnRuleColor?`: ...; `columnRuleStyle?`: ...; `columnRuleWidth?`: ...; `columns?`: ...; `columnSpan?`: ...; `columnWidth?`: ...; `contain?`: ...; `container?`: ...; `containerName?`: ...; `containerType?`: ...; `containIntrinsicBlockSize?`: ...; `containIntrinsicHeight?`: ...; `containIntrinsicInlineSize?`: ...; `containIntrinsicSize?`: ...; `containIntrinsicWidth?`: ...; `content?`: ...; `contentVisibility?`: ...; `counterIncrement?`: ...; `counterReset?`: ...; `counterSet?`: ...; `cssFloat?`: ...; `cssText?`: ...; `cursor?`: ...; `cx?`: ...; `cy?`: ...; `d?`: ...; `direction?`: ...; `display?`: ...; `dominantBaseline?`: ...; `emptyCells?`: ...; `fill?`: ...; `fillOpacity?`: ...; `fillRule?`: ...; `filter?`: ...; `flex?`: ...; `flexBasis?`: ...; `flexDirection?`: ...; `flexFlow?`: ...; `flexGrow?`: ...; `flexShrink?`: ...; `flexWrap?`: ...; `float?`: ...; `floodColor?`: ...; `floodOpacity?`: ...; `font?`: ...; `fontFamily?`: ...; `fontFeatureSettings?`: ...; `fontKerning?`: ...; `fontOpticalSizing?`: ...; `fontPalette?`: ...; `fontSize?`: ...; `fontSizeAdjust?`: ...; `fontStretch?`: ...; `fontStyle?`: ...; `fontSynthesis?`: ...; `fontSynthesisSmallCaps?`: ...; `fontSynthesisStyle?`: ...; `fontSynthesisWeight?`: ...; `fontVariant?`: ...; `fontVariantAlternates?`: ...; `fontVariantCaps?`: ...; `fontVariantEastAsian?`: ...; `fontVariantLigatures?`: ...; `fontVariantNumeric?`: ...; `fontVariantPosition?`: ...; `fontVariationSettings?`: ...; `fontWeight?`: ...; `forcedColorAdjust?`: ...; `gap?`: ...; `getPropertyPriority?`: ...; `getPropertyValue?`: ...; `grid?`: ...; `gridArea?`: ...; `gridAutoColumns?`: ...; `gridAutoFlow?`: ...; `gridAutoRows?`: ...; `gridColumn?`: ...; `gridColumnEnd?`: ...; `gridColumnGap?`: ...; `gridColumnStart?`: ...; `gridGap?`: ...; `gridRow?`: ...; `gridRowEnd?`: ...; `gridRowGap?`: ...; `gridRowStart?`: ...; `gridTemplate?`: ...; `gridTemplateAreas?`: ...; `gridTemplateColumns?`: ...; `gridTemplateRows?`: ...; `height?`: ...; `hyphenateCharacter?`: ...; `hyphenateLimitChars?`: ...; `hyphens?`: ...; `imageOrientation?`: ...; `imageRendering?`: ...; `inlineSize?`: ...; `inset?`: ...; `insetBlock?`: ...; `insetBlockEnd?`: ...; `insetBlockStart?`: ...; `insetInline?`: ...; `insetInlineEnd?`: ...; `insetInlineStart?`: ...; `isolation?`: ...; `item?`: ...; `justifyContent?`: ...; `justifyItems?`: ...; `justifySelf?`: ...; `left?`: ...; `length?`: ...; `letterSpacing?`: ...; `lightingColor?`: ...; `lineBreak?`: ...; `lineHeight?`: ...; `listStyle?`: ...; `listStyleImage?`: ...; `listStylePosition?`: ...; `listStyleType?`: ...; `margin?`: ...; `marginBlock?`: ...; `marginBlockEnd?`: ...; `marginBlockStart?`: ...; `marginBottom?`: ...; `marginInline?`: ...; `marginInlineEnd?`: ...; `marginInlineStart?`: ...; `marginLeft?`: ...; `marginRight?`: ...; `marginTop?`: ...; `marker?`: ...; `markerEnd?`: ...; `markerMid?`: ...; `markerStart?`: ...; `mask?`: ...; `maskClip?`: ...; `maskComposite?`: ...; `maskImage?`: ...; `maskMode?`: ...; `maskOrigin?`: ...; `maskPosition?`: ...; `maskRepeat?`: ...; `maskSize?`: ...; `maskType?`: ...; `mathDepth?`: ...; `mathStyle?`: ...; `maxBlockSize?`: ...; `maxHeight?`: ...; `maxInlineSize?`: ...; `maxWidth?`: ...; `minBlockSize?`: ...; `minHeight?`: ...; `minInlineSize?`: ...; `minWidth?`: ...; `mixBlendMode?`: ...; `objectFit?`: ...; `objectPosition?`: ...; `offset?`: ...; `offsetAnchor?`: ...; `offsetDistance?`: ...; `offsetPath?`: ...; `offsetPosition?`: ...; `offsetRotate?`: ...; `opacity?`: ...; `order?`: ...; `orphans?`: ...; `outline?`: ...; `outlineColor?`: ...; `outlineOffset?`: ...; `outlineStyle?`: ...; `outlineWidth?`: ...; `overflow?`: ...; `overflowAnchor?`: ...; `overflowBlock?`: ...; `overflowClipMargin?`: ...; `overflowInline?`: ...; `overflowWrap?`: ...; `overflowX?`: ...; `overflowY?`: ...; `overscrollBehavior?`: ...; `overscrollBehaviorBlock?`: ...; `overscrollBehaviorInline?`: ...; `overscrollBehaviorX?`: ...; `overscrollBehaviorY?`: ...; `padding?`: ...; `paddingBlock?`: ...; `paddingBlockEnd?`: ...; `paddingBlockStart?`: ...; `paddingBottom?`: ...; `paddingInline?`: ...; `paddingInlineEnd?`: ...; `paddingInlineStart?`: ...; `paddingLeft?`: ...; `paddingRight?`: ...; `paddingTop?`: ...; `page?`: ...; `pageBreakAfter?`: ...; `pageBreakBefore?`: ...; `pageBreakInside?`: ...; `paintOrder?`: ...; `parentRule?`: ...; `perspective?`: ...; `perspectiveOrigin?`: ...; `placeContent?`: ...; `placeItems?`: ...; `placeSelf?`: ...; `pointerEvents?`: ...; `position?`: ...; `printColorAdjust?`: ...; `quotes?`: ...; `r?`: ...; `removeProperty?`: ...; `resize?`: ...; `right?`: ...; `rotate?`: ...; `rowGap?`: ...; `rubyAlign?`: ...; `rubyPosition?`: ...; `rx?`: ...; `ry?`: ...; `scale?`: ...; `scrollbarColor?`: ...; `scrollbarGutter?`: ...; `scrollbarWidth?`: ...; `scrollBehavior?`: ...; `scrollMargin?`: ...; `scrollMarginBlock?`: ...; `scrollMarginBlockEnd?`: ...; `scrollMarginBlockStart?`: ...; `scrollMarginBottom?`: ...; `scrollMarginInline?`: ...; `scrollMarginInlineEnd?`: ...; `scrollMarginInlineStart?`: ...; `scrollMarginLeft?`: ...; `scrollMarginRight?`: ...; `scrollMarginTop?`: ...; `scrollPadding?`: ...; `scrollPaddingBlock?`: ...; `scrollPaddingBlockEnd?`: ...; `scrollPaddingBlockStart?`: ...; `scrollPaddingBottom?`: ...; `scrollPaddingInline?`: ...; `scrollPaddingInlineEnd?`: ...; `scrollPaddingInlineStart?`: ...; `scrollPaddingLeft?`: ...; `scrollPaddingRight?`: ...; `scrollPaddingTop?`: ...; `scrollSnapAlign?`: ...; `scrollSnapStop?`: ...; `scrollSnapType?`: ...; `setProperty?`: ...; `shapeImageThreshold?`: ...; `shapeMargin?`: ...; `shapeOutside?`: ...; `shapeRendering?`: ...; `stopColor?`: ...; `stopOpacity?`: ...; `stroke?`: ...; `strokeDasharray?`: ...; `strokeDashoffset?`: ...; `strokeLinecap?`: ...; `strokeLinejoin?`: ...; `strokeMiterlimit?`: ...; `strokeOpacity?`: ...; `strokeWidth?`: ...; `tableLayout?`: ...; `tabSize?`: ...; `textAlign?`: ...; `textAlignLast?`: ...; `textAnchor?`: ...; `textBox?`: ...; `textBoxEdge?`: ...; `textBoxTrim?`: ...; `textCombineUpright?`: ...; `textDecoration?`: ...; `textDecorationColor?`: ...; `textDecorationLine?`: ...; `textDecorationSkipInk?`: ...; `textDecorationStyle?`: ...; `textDecorationThickness?`: ...; `textEmphasis?`: ...; `textEmphasisColor?`: ...; `textEmphasisPosition?`: ...; `textEmphasisStyle?`: ...; `textIndent?`: ...; `textOrientation?`: ...; `textOverflow?`: ...; `textRendering?`: ...; `textShadow?`: ...; `textTransform?`: ...; `textUnderlineOffset?`: ...; `textUnderlinePosition?`: ...; `textWrap?`: ...; `textWrapMode?`: ...; `textWrapStyle?`: ...; `top?`: ...; `touchAction?`: ...; `transform?`: ...; `transformBox?`: ...; `transformOrigin?`: ...; `transformStyle?`: ...; `transition?`: ...; `transitionBehavior?`: ...; `transitionDelay?`: ...; `transitionDuration?`: ...; `transitionProperty?`: ...; `transitionTimingFunction?`: ...; `translate?`: ...; `unicodeBidi?`: ...; `userSelect?`: ...; `vectorEffect?`: ...; `verticalAlign?`: ...; `viewTransitionClass?`: ...; `viewTransitionName?`: ...; `visibility?`: ...; `webkitAlignContent?`: ...; `webkitAlignItems?`: ...; `webkitAlignSelf?`: ...; `webkitAnimation?`: ...; `webkitAnimationDelay?`: ...; `webkitAnimationDirection?`: ...; `webkitAnimationDuration?`: ...; `webkitAnimationFillMode?`: ...; `webkitAnimationIterationCount?`: ...; `webkitAnimationName?`: ...; `webkitAnimationPlayState?`: ...; `webkitAnimationTimingFunction?`: ...; `webkitAppearance?`: ...; `webkitBackfaceVisibility?`: ...; `webkitBackgroundClip?`: ...; `webkitBackgroundOrigin?`: ...; `webkitBackgroundSize?`: ...; `webkitBorderBottomLeftRadius?`: ...; `webkitBorderBottomRightRadius?`: ...; `webkitBorderRadius?`: ...; `webkitBorderTopLeftRadius?`: ...; `webkitBorderTopRightRadius?`: ...; `webkitBoxAlign?`: ...; `webkitBoxFlex?`: ...; `webkitBoxOrdinalGroup?`: ...; `webkitBoxOrient?`: ...; `webkitBoxPack?`: ...; `webkitBoxShadow?`: ...; `webkitBoxSizing?`: ...; `webkitFilter?`: ...; `webkitFlex?`: ...; `webkitFlexBasis?`: ...; `webkitFlexDirection?`: ...; `webkitFlexFlow?`: ...; `webkitFlexGrow?`: ...; `webkitFlexShrink?`: ...; `webkitFlexWrap?`: ...; `webkitJustifyContent?`: ...; `webkitLineClamp?`: ...; `webkitMask?`: ...; `webkitMaskBoxImage?`: ...; `webkitMaskBoxImageOutset?`: ...; `webkitMaskBoxImageRepeat?`: ...; `webkitMaskBoxImageSlice?`: ...; `webkitMaskBoxImageSource?`: ...; `webkitMaskBoxImageWidth?`: ...; `webkitMaskClip?`: ...; `webkitMaskComposite?`: ...; `webkitMaskImage?`: ...; `webkitMaskOrigin?`: ...; `webkitMaskPosition?`: ...; `webkitMaskRepeat?`: ...; `webkitMaskSize?`: ...; `webkitOrder?`: ...; `webkitPerspective?`: ...; `webkitPerspectiveOrigin?`: ...; `webkitTextFillColor?`: ...; `webkitTextSizeAdjust?`: ...; `webkitTextStroke?`: ...; `webkitTextStrokeColor?`: ...; `webkitTextStrokeWidth?`: ...; `webkitTransform?`: ...; `webkitTransformOrigin?`: ...; `webkitTransformStyle?`: ...; `webkitTransition?`: ...; `webkitTransitionDelay?`: ...; `webkitTransitionDuration?`: ...; `webkitTransitionProperty?`: ...; `webkitTransitionTimingFunction?`: ...; `webkitUserSelect?`: ...; `whiteSpace?`: ...; `whiteSpaceCollapse?`: ...; `widows?`: ...; `width?`: ...; `willChange?`: ...; `wordBreak?`: ...; `wordSpacing?`: ...; `wordWrap?`: ...; `writingMode?`: ...; `x?`: ...; `y?`: ...; `zIndex?`: ...; `zoom?`: ...; }

###### components.wacka.playerArgs.mediaElement.style.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.style.accentColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/accent-color)

###### components.wacka.playerArgs.mediaElement.style.alignContent?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-content)

###### components.wacka.playerArgs.mediaElement.style.alignItems?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-items)

###### components.wacka.playerArgs.mediaElement.style.alignmentBaseline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/alignment-baseline)

###### components.wacka.playerArgs.mediaElement.style.alignSelf?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-self)

###### components.wacka.playerArgs.mediaElement.style.all?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/all)

###### components.wacka.playerArgs.mediaElement.style.animation?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation)

###### components.wacka.playerArgs.mediaElement.style.animationComposition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-composition)

###### components.wacka.playerArgs.mediaElement.style.animationDelay?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-delay)

###### components.wacka.playerArgs.mediaElement.style.animationDirection?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-direction)

###### components.wacka.playerArgs.mediaElement.style.animationDuration?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-duration)

###### components.wacka.playerArgs.mediaElement.style.animationFillMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)

###### components.wacka.playerArgs.mediaElement.style.animationIterationCount?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)

###### components.wacka.playerArgs.mediaElement.style.animationName?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-name)

###### components.wacka.playerArgs.mediaElement.style.animationPlayState?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-play-state)

###### components.wacka.playerArgs.mediaElement.style.animationTimingFunction?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)

###### components.wacka.playerArgs.mediaElement.style.appearance?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/appearance)

###### components.wacka.playerArgs.mediaElement.style.aspectRatio?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/aspect-ratio)

###### components.wacka.playerArgs.mediaElement.style.backdropFilter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/backdrop-filter)

###### components.wacka.playerArgs.mediaElement.style.backfaceVisibility?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/backface-visibility)

###### components.wacka.playerArgs.mediaElement.style.background?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background)

###### components.wacka.playerArgs.mediaElement.style.backgroundAttachment?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-attachment)

###### components.wacka.playerArgs.mediaElement.style.backgroundBlendMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)

###### components.wacka.playerArgs.mediaElement.style.backgroundClip?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-clip)

###### components.wacka.playerArgs.mediaElement.style.backgroundColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-color)

###### components.wacka.playerArgs.mediaElement.style.backgroundImage?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-image)

###### components.wacka.playerArgs.mediaElement.style.backgroundOrigin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-origin)

###### components.wacka.playerArgs.mediaElement.style.backgroundPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-position)

###### components.wacka.playerArgs.mediaElement.style.backgroundPositionX?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-position-x)

###### components.wacka.playerArgs.mediaElement.style.backgroundPositionY?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-position-y)

###### components.wacka.playerArgs.mediaElement.style.backgroundRepeat?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-repeat)

###### components.wacka.playerArgs.mediaElement.style.backgroundSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-size)

###### components.wacka.playerArgs.mediaElement.style.baselineShift?

...

###### components.wacka.playerArgs.mediaElement.style.baselineSource?

...

###### components.wacka.playerArgs.mediaElement.style.blockSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/block-size)

###### components.wacka.playerArgs.mediaElement.style.border?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border)

###### components.wacka.playerArgs.mediaElement.style.borderBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block)

###### components.wacka.playerArgs.mediaElement.style.borderBlockColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-color)

###### components.wacka.playerArgs.mediaElement.style.borderBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-end)

###### components.wacka.playerArgs.mediaElement.style.borderBlockEndColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)

###### components.wacka.playerArgs.mediaElement.style.borderBlockEndStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)

###### components.wacka.playerArgs.mediaElement.style.borderBlockEndWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)

###### components.wacka.playerArgs.mediaElement.style.borderBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-start)

###### components.wacka.playerArgs.mediaElement.style.borderBlockStartColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)

###### components.wacka.playerArgs.mediaElement.style.borderBlockStartStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)

###### components.wacka.playerArgs.mediaElement.style.borderBlockStartWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)

###### components.wacka.playerArgs.mediaElement.style.borderBlockStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-style)

###### components.wacka.playerArgs.mediaElement.style.borderBlockWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-block-width)

###### components.wacka.playerArgs.mediaElement.style.borderBottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom)

###### components.wacka.playerArgs.mediaElement.style.borderBottomColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)

###### components.wacka.playerArgs.mediaElement.style.borderBottomLeftRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)

###### components.wacka.playerArgs.mediaElement.style.borderBottomRightRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)

###### components.wacka.playerArgs.mediaElement.style.borderBottomStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)

###### components.wacka.playerArgs.mediaElement.style.borderBottomWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)

###### components.wacka.playerArgs.mediaElement.style.borderCollapse?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-collapse)

###### components.wacka.playerArgs.mediaElement.style.borderColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-color)

###### components.wacka.playerArgs.mediaElement.style.borderEndEndRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius)

###### components.wacka.playerArgs.mediaElement.style.borderEndStartRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius)

###### components.wacka.playerArgs.mediaElement.style.borderImage?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image)

###### components.wacka.playerArgs.mediaElement.style.borderImageOutset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image-outset)

###### components.wacka.playerArgs.mediaElement.style.borderImageRepeat?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)

###### components.wacka.playerArgs.mediaElement.style.borderImageSlice?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image-slice)

###### components.wacka.playerArgs.mediaElement.style.borderImageSource?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image-source)

###### components.wacka.playerArgs.mediaElement.style.borderImageWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-image-width)

###### components.wacka.playerArgs.mediaElement.style.borderInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline)

###### components.wacka.playerArgs.mediaElement.style.borderInlineColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-color)

###### components.wacka.playerArgs.mediaElement.style.borderInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-end)

###### components.wacka.playerArgs.mediaElement.style.borderInlineEndColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)

###### components.wacka.playerArgs.mediaElement.style.borderInlineEndStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)

###### components.wacka.playerArgs.mediaElement.style.borderInlineEndWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)

###### components.wacka.playerArgs.mediaElement.style.borderInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-start)

###### components.wacka.playerArgs.mediaElement.style.borderInlineStartColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)

###### components.wacka.playerArgs.mediaElement.style.borderInlineStartStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)

###### components.wacka.playerArgs.mediaElement.style.borderInlineStartWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)

###### components.wacka.playerArgs.mediaElement.style.borderInlineStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-style)

###### components.wacka.playerArgs.mediaElement.style.borderInlineWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-inline-width)

###### components.wacka.playerArgs.mediaElement.style.borderLeft?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-left)

###### components.wacka.playerArgs.mediaElement.style.borderLeftColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-left-color)

###### components.wacka.playerArgs.mediaElement.style.borderLeftStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-left-style)

###### components.wacka.playerArgs.mediaElement.style.borderLeftWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-left-width)

###### components.wacka.playerArgs.mediaElement.style.borderRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-radius)

###### components.wacka.playerArgs.mediaElement.style.borderRight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-right)

###### components.wacka.playerArgs.mediaElement.style.borderRightColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-right-color)

###### components.wacka.playerArgs.mediaElement.style.borderRightStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-right-style)

###### components.wacka.playerArgs.mediaElement.style.borderRightWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-right-width)

###### components.wacka.playerArgs.mediaElement.style.borderSpacing?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-spacing)

###### components.wacka.playerArgs.mediaElement.style.borderStartEndRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius)

###### components.wacka.playerArgs.mediaElement.style.borderStartStartRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius)

###### components.wacka.playerArgs.mediaElement.style.borderStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-style)

###### components.wacka.playerArgs.mediaElement.style.borderTop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top)

###### components.wacka.playerArgs.mediaElement.style.borderTopColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-color)

###### components.wacka.playerArgs.mediaElement.style.borderTopLeftRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)

###### components.wacka.playerArgs.mediaElement.style.borderTopRightRadius?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)

###### components.wacka.playerArgs.mediaElement.style.borderTopStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-style)

###### components.wacka.playerArgs.mediaElement.style.borderTopWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-width)

###### components.wacka.playerArgs.mediaElement.style.borderWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-width)

###### components.wacka.playerArgs.mediaElement.style.bottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/bottom)

###### components.wacka.playerArgs.mediaElement.style.boxDecorationBreak?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-decoration-break)

###### components.wacka.playerArgs.mediaElement.style.boxShadow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-shadow)

###### components.wacka.playerArgs.mediaElement.style.boxSizing?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-sizing)

###### components.wacka.playerArgs.mediaElement.style.breakAfter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/break-after)

###### components.wacka.playerArgs.mediaElement.style.breakBefore?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/break-before)

###### components.wacka.playerArgs.mediaElement.style.breakInside?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/break-inside)

###### components.wacka.playerArgs.mediaElement.style.captionSide?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/caption-side)

###### components.wacka.playerArgs.mediaElement.style.caretColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/caret-color)

###### components.wacka.playerArgs.mediaElement.style.clear?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/clear)

###### components.wacka.playerArgs.mediaElement.style.clip?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/clip)

###### components.wacka.playerArgs.mediaElement.style.clipPath?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/clip-path)

###### components.wacka.playerArgs.mediaElement.style.clipRule?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/clip-rule)

###### components.wacka.playerArgs.mediaElement.style.color?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/color)

###### components.wacka.playerArgs.mediaElement.style.colorInterpolation?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/color-interpolation)

###### components.wacka.playerArgs.mediaElement.style.colorInterpolationFilters?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/color-interpolation-filters)

###### components.wacka.playerArgs.mediaElement.style.colorScheme?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/color-scheme)

###### components.wacka.playerArgs.mediaElement.style.columnCount?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-count)

###### components.wacka.playerArgs.mediaElement.style.columnFill?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-fill)

###### components.wacka.playerArgs.mediaElement.style.columnGap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-gap)

###### components.wacka.playerArgs.mediaElement.style.columnRule?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-rule)

###### components.wacka.playerArgs.mediaElement.style.columnRuleColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-rule-color)

###### components.wacka.playerArgs.mediaElement.style.columnRuleStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-rule-style)

###### components.wacka.playerArgs.mediaElement.style.columnRuleWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-rule-width)

###### components.wacka.playerArgs.mediaElement.style.columns?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/columns)

###### components.wacka.playerArgs.mediaElement.style.columnSpan?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-span)

###### components.wacka.playerArgs.mediaElement.style.columnWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/column-width)

###### components.wacka.playerArgs.mediaElement.style.contain?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain)

###### components.wacka.playerArgs.mediaElement.style.container?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/container)

###### components.wacka.playerArgs.mediaElement.style.containerName?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/container-name)

###### components.wacka.playerArgs.mediaElement.style.containerType?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/container-type)

###### components.wacka.playerArgs.mediaElement.style.containIntrinsicBlockSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-block-size)

###### components.wacka.playerArgs.mediaElement.style.containIntrinsicHeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height)

###### components.wacka.playerArgs.mediaElement.style.containIntrinsicInlineSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-inline-size)

###### components.wacka.playerArgs.mediaElement.style.containIntrinsicSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size)

###### components.wacka.playerArgs.mediaElement.style.containIntrinsicWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width)

###### components.wacka.playerArgs.mediaElement.style.content?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/content)

###### components.wacka.playerArgs.mediaElement.style.contentVisibility?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/content-visibility)

###### components.wacka.playerArgs.mediaElement.style.counterIncrement?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/counter-increment)

###### components.wacka.playerArgs.mediaElement.style.counterReset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/counter-reset)

###### components.wacka.playerArgs.mediaElement.style.counterSet?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/counter-set)

###### components.wacka.playerArgs.mediaElement.style.cssFloat?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat)

###### components.wacka.playerArgs.mediaElement.style.cssText?

...

The **`cssText`** property of the CSSStyleDeclaration interface returns or sets the text of the element's **inline** style declaration only.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText)

###### components.wacka.playerArgs.mediaElement.style.cursor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/cursor)

###### components.wacka.playerArgs.mediaElement.style.cx?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/cx)

###### components.wacka.playerArgs.mediaElement.style.cy?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/cy)

###### components.wacka.playerArgs.mediaElement.style.d?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/d)

###### components.wacka.playerArgs.mediaElement.style.direction?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/direction)

###### components.wacka.playerArgs.mediaElement.style.display?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/display)

###### components.wacka.playerArgs.mediaElement.style.dominantBaseline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/dominant-baseline)

###### components.wacka.playerArgs.mediaElement.style.emptyCells?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/empty-cells)

###### components.wacka.playerArgs.mediaElement.style.fill?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/fill)

###### components.wacka.playerArgs.mediaElement.style.fillOpacity?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/fill-opacity)

###### components.wacka.playerArgs.mediaElement.style.fillRule?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/fill-rule)

###### components.wacka.playerArgs.mediaElement.style.filter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/filter)

###### components.wacka.playerArgs.mediaElement.style.flex?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex)

###### components.wacka.playerArgs.mediaElement.style.flexBasis?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-basis)

###### components.wacka.playerArgs.mediaElement.style.flexDirection?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-direction)

###### components.wacka.playerArgs.mediaElement.style.flexFlow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-flow)

###### components.wacka.playerArgs.mediaElement.style.flexGrow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-grow)

###### components.wacka.playerArgs.mediaElement.style.flexShrink?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-shrink)

###### components.wacka.playerArgs.mediaElement.style.flexWrap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-wrap)

###### components.wacka.playerArgs.mediaElement.style.float?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/float)

###### components.wacka.playerArgs.mediaElement.style.floodColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flood-color)

###### components.wacka.playerArgs.mediaElement.style.floodOpacity?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flood-opacity)

###### components.wacka.playerArgs.mediaElement.style.font?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font)

###### components.wacka.playerArgs.mediaElement.style.fontFamily?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-family)

###### components.wacka.playerArgs.mediaElement.style.fontFeatureSettings?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)

###### components.wacka.playerArgs.mediaElement.style.fontKerning?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-kerning)

###### components.wacka.playerArgs.mediaElement.style.fontOpticalSizing?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)

###### components.wacka.playerArgs.mediaElement.style.fontPalette?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-palette)

###### components.wacka.playerArgs.mediaElement.style.fontSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-size)

###### components.wacka.playerArgs.mediaElement.style.fontSizeAdjust?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-size-adjust)

###### components.wacka.playerArgs.mediaElement.style.fontStretch?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-stretch)

###### components.wacka.playerArgs.mediaElement.style.fontStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-style)

###### components.wacka.playerArgs.mediaElement.style.fontSynthesis?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-synthesis)

###### components.wacka.playerArgs.mediaElement.style.fontSynthesisSmallCaps?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps)

###### components.wacka.playerArgs.mediaElement.style.fontSynthesisStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style)

###### components.wacka.playerArgs.mediaElement.style.fontSynthesisWeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight)

###### components.wacka.playerArgs.mediaElement.style.fontVariant?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant)

###### components.wacka.playerArgs.mediaElement.style.fontVariantAlternates?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)

###### components.wacka.playerArgs.mediaElement.style.fontVariantCaps?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)

###### components.wacka.playerArgs.mediaElement.style.fontVariantEastAsian?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)

###### components.wacka.playerArgs.mediaElement.style.fontVariantLigatures?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)

###### components.wacka.playerArgs.mediaElement.style.fontVariantNumeric?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)

###### components.wacka.playerArgs.mediaElement.style.fontVariantPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variant-position)

###### components.wacka.playerArgs.mediaElement.style.fontVariationSettings?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)

###### components.wacka.playerArgs.mediaElement.style.fontWeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/font-weight)

###### components.wacka.playerArgs.mediaElement.style.forcedColorAdjust?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust)

###### components.wacka.playerArgs.mediaElement.style.gap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/gap)

###### components.wacka.playerArgs.mediaElement.style.getPropertyPriority?

...

###### components.wacka.playerArgs.mediaElement.style.getPropertyValue?

...

###### components.wacka.playerArgs.mediaElement.style.grid?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid)

###### components.wacka.playerArgs.mediaElement.style.gridArea?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-area)

###### components.wacka.playerArgs.mediaElement.style.gridAutoColumns?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)

###### components.wacka.playerArgs.mediaElement.style.gridAutoFlow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)

###### components.wacka.playerArgs.mediaElement.style.gridAutoRows?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)

###### components.wacka.playerArgs.mediaElement.style.gridColumn?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-column)

###### components.wacka.playerArgs.mediaElement.style.gridColumnEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-column-end)

###### components.wacka.playerArgs.mediaElement.style.gridColumnGap?

...

**Deprecated**

This is a legacy alias of `columnGap`.

###### components.wacka.playerArgs.mediaElement.style.gridColumnStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-column-start)

###### components.wacka.playerArgs.mediaElement.style.gridGap?

...

**Deprecated**

This is a legacy alias of `gap`.

###### components.wacka.playerArgs.mediaElement.style.gridRow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-row)

###### components.wacka.playerArgs.mediaElement.style.gridRowEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-row-end)

###### components.wacka.playerArgs.mediaElement.style.gridRowGap?

...

**Deprecated**

This is a legacy alias of `rowGap`.

###### components.wacka.playerArgs.mediaElement.style.gridRowStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-row-start)

###### components.wacka.playerArgs.mediaElement.style.gridTemplate?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-template)

###### components.wacka.playerArgs.mediaElement.style.gridTemplateAreas?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)

###### components.wacka.playerArgs.mediaElement.style.gridTemplateColumns?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)

###### components.wacka.playerArgs.mediaElement.style.gridTemplateRows?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)

###### components.wacka.playerArgs.mediaElement.style.height?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/height)

###### components.wacka.playerArgs.mediaElement.style.hyphenateCharacter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/hyphenate-character)

###### components.wacka.playerArgs.mediaElement.style.hyphenateLimitChars?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/hyphenate-limit-chars)

###### components.wacka.playerArgs.mediaElement.style.hyphens?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/hyphens)

###### components.wacka.playerArgs.mediaElement.style.imageOrientation?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/image-orientation)

###### components.wacka.playerArgs.mediaElement.style.imageRendering?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/image-rendering)

###### components.wacka.playerArgs.mediaElement.style.inlineSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inline-size)

###### components.wacka.playerArgs.mediaElement.style.inset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset)

###### components.wacka.playerArgs.mediaElement.style.insetBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-block)

###### components.wacka.playerArgs.mediaElement.style.insetBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-block-end)

###### components.wacka.playerArgs.mediaElement.style.insetBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-block-start)

###### components.wacka.playerArgs.mediaElement.style.insetInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-inline)

###### components.wacka.playerArgs.mediaElement.style.insetInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-inline-end)

###### components.wacka.playerArgs.mediaElement.style.insetInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/inset-inline-start)

###### components.wacka.playerArgs.mediaElement.style.isolation?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/isolation)

###### components.wacka.playerArgs.mediaElement.style.item?

...

###### components.wacka.playerArgs.mediaElement.style.justifyContent?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/justify-content)

###### components.wacka.playerArgs.mediaElement.style.justifyItems?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/justify-items)

###### components.wacka.playerArgs.mediaElement.style.justifySelf?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/justify-self)

###### components.wacka.playerArgs.mediaElement.style.left?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/left)

###### components.wacka.playerArgs.mediaElement.style.length?

...

The read-only property returns an integer that represents the number of style declarations in this CSS declaration block.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length)

###### components.wacka.playerArgs.mediaElement.style.letterSpacing?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/letter-spacing)

###### components.wacka.playerArgs.mediaElement.style.lightingColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/lighting-color)

###### components.wacka.playerArgs.mediaElement.style.lineBreak?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/line-break)

###### components.wacka.playerArgs.mediaElement.style.lineHeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/line-height)

###### components.wacka.playerArgs.mediaElement.style.listStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/list-style)

###### components.wacka.playerArgs.mediaElement.style.listStyleImage?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/list-style-image)

###### components.wacka.playerArgs.mediaElement.style.listStylePosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/list-style-position)

###### components.wacka.playerArgs.mediaElement.style.listStyleType?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/list-style-type)

###### components.wacka.playerArgs.mediaElement.style.margin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin)

###### components.wacka.playerArgs.mediaElement.style.marginBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-block)

###### components.wacka.playerArgs.mediaElement.style.marginBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-block-end)

###### components.wacka.playerArgs.mediaElement.style.marginBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-block-start)

###### components.wacka.playerArgs.mediaElement.style.marginBottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-bottom)

###### components.wacka.playerArgs.mediaElement.style.marginInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-inline)

###### components.wacka.playerArgs.mediaElement.style.marginInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)

###### components.wacka.playerArgs.mediaElement.style.marginInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)

###### components.wacka.playerArgs.mediaElement.style.marginLeft?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-left)

###### components.wacka.playerArgs.mediaElement.style.marginRight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-right)

###### components.wacka.playerArgs.mediaElement.style.marginTop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/margin-top)

###### components.wacka.playerArgs.mediaElement.style.marker?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/marker)

###### components.wacka.playerArgs.mediaElement.style.markerEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/marker-end)

###### components.wacka.playerArgs.mediaElement.style.markerMid?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/marker-mid)

###### components.wacka.playerArgs.mediaElement.style.markerStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/marker-start)

###### components.wacka.playerArgs.mediaElement.style.mask?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask)

###### components.wacka.playerArgs.mediaElement.style.maskClip?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-clip)

###### components.wacka.playerArgs.mediaElement.style.maskComposite?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-composite)

###### components.wacka.playerArgs.mediaElement.style.maskImage?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-image)

###### components.wacka.playerArgs.mediaElement.style.maskMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-mode)

###### components.wacka.playerArgs.mediaElement.style.maskOrigin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-origin)

###### components.wacka.playerArgs.mediaElement.style.maskPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-position)

###### components.wacka.playerArgs.mediaElement.style.maskRepeat?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-repeat)

###### components.wacka.playerArgs.mediaElement.style.maskSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-size)

###### components.wacka.playerArgs.mediaElement.style.maskType?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-type)

###### components.wacka.playerArgs.mediaElement.style.mathDepth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/math-depth)

###### components.wacka.playerArgs.mediaElement.style.mathStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/math-style)

###### components.wacka.playerArgs.mediaElement.style.maxBlockSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/max-block-size)

###### components.wacka.playerArgs.mediaElement.style.maxHeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/max-height)

###### components.wacka.playerArgs.mediaElement.style.maxInlineSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/max-inline-size)

###### components.wacka.playerArgs.mediaElement.style.maxWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/max-width)

###### components.wacka.playerArgs.mediaElement.style.minBlockSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/min-block-size)

###### components.wacka.playerArgs.mediaElement.style.minHeight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/min-height)

###### components.wacka.playerArgs.mediaElement.style.minInlineSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/min-inline-size)

###### components.wacka.playerArgs.mediaElement.style.minWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/min-width)

###### components.wacka.playerArgs.mediaElement.style.mixBlendMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)

###### components.wacka.playerArgs.mediaElement.style.objectFit?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/object-fit)

###### components.wacka.playerArgs.mediaElement.style.objectPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/object-position)

###### components.wacka.playerArgs.mediaElement.style.offset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset)

###### components.wacka.playerArgs.mediaElement.style.offsetAnchor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset-anchor)

###### components.wacka.playerArgs.mediaElement.style.offsetDistance?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset-distance)

###### components.wacka.playerArgs.mediaElement.style.offsetPath?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset-path)

###### components.wacka.playerArgs.mediaElement.style.offsetPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset-position)

###### components.wacka.playerArgs.mediaElement.style.offsetRotate?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/offset-rotate)

###### components.wacka.playerArgs.mediaElement.style.opacity?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/opacity)

###### components.wacka.playerArgs.mediaElement.style.order?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/order)

###### components.wacka.playerArgs.mediaElement.style.orphans?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/orphans)

###### components.wacka.playerArgs.mediaElement.style.outline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/outline)

###### components.wacka.playerArgs.mediaElement.style.outlineColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/outline-color)

###### components.wacka.playerArgs.mediaElement.style.outlineOffset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/outline-offset)

###### components.wacka.playerArgs.mediaElement.style.outlineStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/outline-style)

###### components.wacka.playerArgs.mediaElement.style.outlineWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/outline-width)

###### components.wacka.playerArgs.mediaElement.style.overflow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow)

###### components.wacka.playerArgs.mediaElement.style.overflowAnchor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-anchor)

###### components.wacka.playerArgs.mediaElement.style.overflowBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-block)

###### components.wacka.playerArgs.mediaElement.style.overflowClipMargin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin)

###### components.wacka.playerArgs.mediaElement.style.overflowInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-inline)

###### components.wacka.playerArgs.mediaElement.style.overflowWrap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)

###### components.wacka.playerArgs.mediaElement.style.overflowX?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-x)

###### components.wacka.playerArgs.mediaElement.style.overflowY?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-y)

###### components.wacka.playerArgs.mediaElement.style.overscrollBehavior?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior)

###### components.wacka.playerArgs.mediaElement.style.overscrollBehaviorBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block)

###### components.wacka.playerArgs.mediaElement.style.overscrollBehaviorInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline)

###### components.wacka.playerArgs.mediaElement.style.overscrollBehaviorX?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x)

###### components.wacka.playerArgs.mediaElement.style.overscrollBehaviorY?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)

###### components.wacka.playerArgs.mediaElement.style.padding?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding)

###### components.wacka.playerArgs.mediaElement.style.paddingBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-block)

###### components.wacka.playerArgs.mediaElement.style.paddingBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-block-end)

###### components.wacka.playerArgs.mediaElement.style.paddingBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-block-start)

###### components.wacka.playerArgs.mediaElement.style.paddingBottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-bottom)

###### components.wacka.playerArgs.mediaElement.style.paddingInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-inline)

###### components.wacka.playerArgs.mediaElement.style.paddingInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)

###### components.wacka.playerArgs.mediaElement.style.paddingInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)

###### components.wacka.playerArgs.mediaElement.style.paddingLeft?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-left)

###### components.wacka.playerArgs.mediaElement.style.paddingRight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-right)

###### components.wacka.playerArgs.mediaElement.style.paddingTop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/padding-top)

###### components.wacka.playerArgs.mediaElement.style.page?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/page)

###### components.wacka.playerArgs.mediaElement.style.pageBreakAfter?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/page-break-after)

###### components.wacka.playerArgs.mediaElement.style.pageBreakBefore?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/page-break-before)

###### components.wacka.playerArgs.mediaElement.style.pageBreakInside?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/page-break-inside)

###### components.wacka.playerArgs.mediaElement.style.paintOrder?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/paint-order)

###### components.wacka.playerArgs.mediaElement.style.parentRule?

...

The **CSSStyleDeclaration.parentRule** read-only property returns a CSSRule that is the parent of this style block, e.g., a CSSStyleRule representing the style for a CSS selector.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule)

###### components.wacka.playerArgs.mediaElement.style.perspective?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/perspective)

###### components.wacka.playerArgs.mediaElement.style.perspectiveOrigin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/perspective-origin)

###### components.wacka.playerArgs.mediaElement.style.placeContent?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/place-content)

###### components.wacka.playerArgs.mediaElement.style.placeItems?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/place-items)

###### components.wacka.playerArgs.mediaElement.style.placeSelf?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/place-self)

###### components.wacka.playerArgs.mediaElement.style.pointerEvents?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/pointer-events)

###### components.wacka.playerArgs.mediaElement.style.position?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/position)

###### components.wacka.playerArgs.mediaElement.style.printColorAdjust?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/print-color-adjust)

###### components.wacka.playerArgs.mediaElement.style.quotes?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/quotes)

###### components.wacka.playerArgs.mediaElement.style.r?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/r)

###### components.wacka.playerArgs.mediaElement.style.removeProperty?

...

###### components.wacka.playerArgs.mediaElement.style.resize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/resize)

###### components.wacka.playerArgs.mediaElement.style.right?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/right)

###### components.wacka.playerArgs.mediaElement.style.rotate?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/rotate)

###### components.wacka.playerArgs.mediaElement.style.rowGap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/row-gap)

###### components.wacka.playerArgs.mediaElement.style.rubyAlign?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/ruby-align)

###### components.wacka.playerArgs.mediaElement.style.rubyPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/ruby-position)

###### components.wacka.playerArgs.mediaElement.style.rx?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/rx)

###### components.wacka.playerArgs.mediaElement.style.ry?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/ry)

###### components.wacka.playerArgs.mediaElement.style.scale?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scale)

###### components.wacka.playerArgs.mediaElement.style.scrollbarColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scrollbar-color)

###### components.wacka.playerArgs.mediaElement.style.scrollbarGutter?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter)

###### components.wacka.playerArgs.mediaElement.style.scrollbarWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scrollbar-width)

###### components.wacka.playerArgs.mediaElement.style.scrollBehavior?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)

###### components.wacka.playerArgs.mediaElement.style.scrollMargin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginBottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginLeft?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginRight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right)

###### components.wacka.playerArgs.mediaElement.style.scrollMarginTop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top)

###### components.wacka.playerArgs.mediaElement.style.scrollPadding?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingBlock?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingBlockEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingBlockStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingBottom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingInline?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingInlineEnd?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingInlineStart?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingLeft?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingRight?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right)

###### components.wacka.playerArgs.mediaElement.style.scrollPaddingTop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top)

###### components.wacka.playerArgs.mediaElement.style.scrollSnapAlign?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)

###### components.wacka.playerArgs.mediaElement.style.scrollSnapStop?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)

###### components.wacka.playerArgs.mediaElement.style.scrollSnapType?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)

###### components.wacka.playerArgs.mediaElement.style.setProperty?

...

###### components.wacka.playerArgs.mediaElement.style.shapeImageThreshold?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)

###### components.wacka.playerArgs.mediaElement.style.shapeMargin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/shape-margin)

###### components.wacka.playerArgs.mediaElement.style.shapeOutside?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/shape-outside)

###### components.wacka.playerArgs.mediaElement.style.shapeRendering?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/shape-rendering)

###### components.wacka.playerArgs.mediaElement.style.stopColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stop-color)

###### components.wacka.playerArgs.mediaElement.style.stopOpacity?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stop-opacity)

###### components.wacka.playerArgs.mediaElement.style.stroke?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke)

###### components.wacka.playerArgs.mediaElement.style.strokeDasharray?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray)

###### components.wacka.playerArgs.mediaElement.style.strokeDashoffset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-dashoffset)

###### components.wacka.playerArgs.mediaElement.style.strokeLinecap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-linecap)

###### components.wacka.playerArgs.mediaElement.style.strokeLinejoin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-linejoin)

###### components.wacka.playerArgs.mediaElement.style.strokeMiterlimit?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-miterlimit)

###### components.wacka.playerArgs.mediaElement.style.strokeOpacity?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-opacity)

###### components.wacka.playerArgs.mediaElement.style.strokeWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/stroke-width)

###### components.wacka.playerArgs.mediaElement.style.tableLayout?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/table-layout)

###### components.wacka.playerArgs.mediaElement.style.tabSize?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/tab-size)

###### components.wacka.playerArgs.mediaElement.style.textAlign?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-align)

###### components.wacka.playerArgs.mediaElement.style.textAlignLast?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-align-last)

###### components.wacka.playerArgs.mediaElement.style.textAnchor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-anchor)

###### components.wacka.playerArgs.mediaElement.style.textBox?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-box)

###### components.wacka.playerArgs.mediaElement.style.textBoxEdge?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-box-edge)

###### components.wacka.playerArgs.mediaElement.style.textBoxTrim?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-box-trim)

###### components.wacka.playerArgs.mediaElement.style.textCombineUpright?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-combine-upright)

###### components.wacka.playerArgs.mediaElement.style.textDecoration?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration)

###### components.wacka.playerArgs.mediaElement.style.textDecorationColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)

###### components.wacka.playerArgs.mediaElement.style.textDecorationLine?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)

###### components.wacka.playerArgs.mediaElement.style.textDecorationSkipInk?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink)

###### components.wacka.playerArgs.mediaElement.style.textDecorationStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)

###### components.wacka.playerArgs.mediaElement.style.textDecorationThickness?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness)

###### components.wacka.playerArgs.mediaElement.style.textEmphasis?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-emphasis)

###### components.wacka.playerArgs.mediaElement.style.textEmphasisColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color)

###### components.wacka.playerArgs.mediaElement.style.textEmphasisPosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position)

###### components.wacka.playerArgs.mediaElement.style.textEmphasisStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style)

###### components.wacka.playerArgs.mediaElement.style.textIndent?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-indent)

###### components.wacka.playerArgs.mediaElement.style.textOrientation?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-orientation)

###### components.wacka.playerArgs.mediaElement.style.textOverflow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-overflow)

###### components.wacka.playerArgs.mediaElement.style.textRendering?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-rendering)

###### components.wacka.playerArgs.mediaElement.style.textShadow?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-shadow)

###### components.wacka.playerArgs.mediaElement.style.textTransform?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-transform)

###### components.wacka.playerArgs.mediaElement.style.textUnderlineOffset?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-underline-offset)

###### components.wacka.playerArgs.mediaElement.style.textUnderlinePosition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-underline-position)

###### components.wacka.playerArgs.mediaElement.style.textWrap?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-wrap)

###### components.wacka.playerArgs.mediaElement.style.textWrapMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-wrap-mode)

###### components.wacka.playerArgs.mediaElement.style.textWrapStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-wrap-style)

###### components.wacka.playerArgs.mediaElement.style.top?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/top)

###### components.wacka.playerArgs.mediaElement.style.touchAction?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/touch-action)

###### components.wacka.playerArgs.mediaElement.style.transform?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform)

###### components.wacka.playerArgs.mediaElement.style.transformBox?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform-box)

###### components.wacka.playerArgs.mediaElement.style.transformOrigin?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform-origin)

###### components.wacka.playerArgs.mediaElement.style.transformStyle?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform-style)

###### components.wacka.playerArgs.mediaElement.style.transition?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition)

###### components.wacka.playerArgs.mediaElement.style.transitionBehavior?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-behavior)

###### components.wacka.playerArgs.mediaElement.style.transitionDelay?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-delay)

###### components.wacka.playerArgs.mediaElement.style.transitionDuration?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-duration)

###### components.wacka.playerArgs.mediaElement.style.transitionProperty?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-property)

###### components.wacka.playerArgs.mediaElement.style.transitionTimingFunction?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)

###### components.wacka.playerArgs.mediaElement.style.translate?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/translate)

###### components.wacka.playerArgs.mediaElement.style.unicodeBidi?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)

###### components.wacka.playerArgs.mediaElement.style.userSelect?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/user-select)

###### components.wacka.playerArgs.mediaElement.style.vectorEffect?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/vector-effect)

###### components.wacka.playerArgs.mediaElement.style.verticalAlign?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/vertical-align)

###### components.wacka.playerArgs.mediaElement.style.viewTransitionClass?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/view-transition-class)

###### components.wacka.playerArgs.mediaElement.style.viewTransitionName?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/view-transition-name)

###### components.wacka.playerArgs.mediaElement.style.visibility?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/visibility)

###### components.wacka.playerArgs.mediaElement.style.webkitAlignContent?

...

**Deprecated**

This is a legacy alias of `alignContent`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-content)

###### components.wacka.playerArgs.mediaElement.style.webkitAlignItems?

...

**Deprecated**

This is a legacy alias of `alignItems`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-items)

###### components.wacka.playerArgs.mediaElement.style.webkitAlignSelf?

...

**Deprecated**

This is a legacy alias of `alignSelf`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/align-self)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimation?

...

**Deprecated**

This is a legacy alias of `animation`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationDelay?

...

**Deprecated**

This is a legacy alias of `animationDelay`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-delay)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationDirection?

...

**Deprecated**

This is a legacy alias of `animationDirection`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-direction)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationDuration?

...

**Deprecated**

This is a legacy alias of `animationDuration`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-duration)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationFillMode?

...

**Deprecated**

This is a legacy alias of `animationFillMode`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationIterationCount?

...

**Deprecated**

This is a legacy alias of `animationIterationCount`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationName?

...

**Deprecated**

This is a legacy alias of `animationName`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-name)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationPlayState?

...

**Deprecated**

This is a legacy alias of `animationPlayState`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-play-state)

###### components.wacka.playerArgs.mediaElement.style.webkitAnimationTimingFunction?

...

**Deprecated**

This is a legacy alias of `animationTimingFunction`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)

###### components.wacka.playerArgs.mediaElement.style.webkitAppearance?

...

**Deprecated**

This is a legacy alias of `appearance`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/appearance)

###### components.wacka.playerArgs.mediaElement.style.webkitBackfaceVisibility?

...

**Deprecated**

This is a legacy alias of `backfaceVisibility`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/backface-visibility)

###### components.wacka.playerArgs.mediaElement.style.webkitBackgroundClip?

...

**Deprecated**

This is a legacy alias of `backgroundClip`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-clip)

###### components.wacka.playerArgs.mediaElement.style.webkitBackgroundOrigin?

...

**Deprecated**

This is a legacy alias of `backgroundOrigin`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-origin)

###### components.wacka.playerArgs.mediaElement.style.webkitBackgroundSize?

...

**Deprecated**

This is a legacy alias of `backgroundSize`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/background-size)

###### components.wacka.playerArgs.mediaElement.style.webkitBorderBottomLeftRadius?

...

**Deprecated**

This is a legacy alias of `borderBottomLeftRadius`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)

###### components.wacka.playerArgs.mediaElement.style.webkitBorderBottomRightRadius?

...

**Deprecated**

This is a legacy alias of `borderBottomRightRadius`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)

###### components.wacka.playerArgs.mediaElement.style.webkitBorderRadius?

...

**Deprecated**

This is a legacy alias of `borderRadius`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-radius)

###### components.wacka.playerArgs.mediaElement.style.webkitBorderTopLeftRadius?

...

**Deprecated**

This is a legacy alias of `borderTopLeftRadius`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)

###### components.wacka.playerArgs.mediaElement.style.webkitBorderTopRightRadius?

...

**Deprecated**

This is a legacy alias of `borderTopRightRadius`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxAlign?

...

**Deprecated**

This is a legacy alias of `boxAlign`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-align)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxFlex?

...

**Deprecated**

This is a legacy alias of `boxFlex`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-flex)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxOrdinalGroup?

...

**Deprecated**

This is a legacy alias of `boxOrdinalGroup`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxOrient?

...

**Deprecated**

This is a legacy alias of `boxOrient`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-orient)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxPack?

...

**Deprecated**

This is a legacy alias of `boxPack`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-pack)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxShadow?

...

**Deprecated**

This is a legacy alias of `boxShadow`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-shadow)

###### components.wacka.playerArgs.mediaElement.style.webkitBoxSizing?

...

**Deprecated**

This is a legacy alias of `boxSizing`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/box-sizing)

###### components.wacka.playerArgs.mediaElement.style.webkitFilter?

...

**Deprecated**

This is a legacy alias of `filter`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/filter)

###### components.wacka.playerArgs.mediaElement.style.webkitFlex?

...

**Deprecated**

This is a legacy alias of `flex`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexBasis?

...

**Deprecated**

This is a legacy alias of `flexBasis`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-basis)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexDirection?

...

**Deprecated**

This is a legacy alias of `flexDirection`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-direction)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexFlow?

...

**Deprecated**

This is a legacy alias of `flexFlow`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-flow)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexGrow?

...

**Deprecated**

This is a legacy alias of `flexGrow`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-grow)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexShrink?

...

**Deprecated**

This is a legacy alias of `flexShrink`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-shrink)

###### components.wacka.playerArgs.mediaElement.style.webkitFlexWrap?

...

**Deprecated**

This is a legacy alias of `flexWrap`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/flex-wrap)

###### components.wacka.playerArgs.mediaElement.style.webkitJustifyContent?

...

**Deprecated**

This is a legacy alias of `justifyContent`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/justify-content)

###### components.wacka.playerArgs.mediaElement.style.webkitLineClamp?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/line-clamp)

###### components.wacka.playerArgs.mediaElement.style.webkitMask?

...

**Deprecated**

This is a legacy alias of `mask`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImage?

...

**Deprecated**

This is a legacy alias of `maskBorder`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImageOutset?

...

**Deprecated**

This is a legacy alias of `maskBorderOutset`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImageRepeat?

...

**Deprecated**

This is a legacy alias of `maskBorderRepeat`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImageSlice?

...

**Deprecated**

This is a legacy alias of `maskBorderSlice`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImageSource?

...

**Deprecated**

This is a legacy alias of `maskBorderSource`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border-source)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskBoxImageWidth?

...

**Deprecated**

This is a legacy alias of `maskBorderWidth`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-border-width)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskClip?

...

**Deprecated**

This is a legacy alias of `maskClip`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-clip)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskComposite?

...

**Deprecated**

This is a legacy alias of `maskComposite`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-composite)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskImage?

...

**Deprecated**

This is a legacy alias of `maskImage`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-image)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskOrigin?

...

**Deprecated**

This is a legacy alias of `maskOrigin`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-origin)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskPosition?

...

**Deprecated**

This is a legacy alias of `maskPosition`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-position)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskRepeat?

...

**Deprecated**

This is a legacy alias of `maskRepeat`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-repeat)

###### components.wacka.playerArgs.mediaElement.style.webkitMaskSize?

...

**Deprecated**

This is a legacy alias of `maskSize`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/mask-size)

###### components.wacka.playerArgs.mediaElement.style.webkitOrder?

...

**Deprecated**

This is a legacy alias of `order`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/order)

###### components.wacka.playerArgs.mediaElement.style.webkitPerspective?

...

**Deprecated**

This is a legacy alias of `perspective`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/perspective)

###### components.wacka.playerArgs.mediaElement.style.webkitPerspectiveOrigin?

...

**Deprecated**

This is a legacy alias of `perspectiveOrigin`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/perspective-origin)

###### components.wacka.playerArgs.mediaElement.style.webkitTextFillColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color)

###### components.wacka.playerArgs.mediaElement.style.webkitTextSizeAdjust?

...

**Deprecated**

This is a legacy alias of `textSizeAdjust`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)

###### components.wacka.playerArgs.mediaElement.style.webkitTextStroke?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke)

###### components.wacka.playerArgs.mediaElement.style.webkitTextStrokeColor?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color)

###### components.wacka.playerArgs.mediaElement.style.webkitTextStrokeWidth?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width)

###### components.wacka.playerArgs.mediaElement.style.webkitTransform?

...

**Deprecated**

This is a legacy alias of `transform`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform)

###### components.wacka.playerArgs.mediaElement.style.webkitTransformOrigin?

...

**Deprecated**

This is a legacy alias of `transformOrigin`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform-origin)

###### components.wacka.playerArgs.mediaElement.style.webkitTransformStyle?

...

**Deprecated**

This is a legacy alias of `transformStyle`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transform-style)

###### components.wacka.playerArgs.mediaElement.style.webkitTransition?

...

**Deprecated**

This is a legacy alias of `transition`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition)

###### components.wacka.playerArgs.mediaElement.style.webkitTransitionDelay?

...

**Deprecated**

This is a legacy alias of `transitionDelay`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-delay)

###### components.wacka.playerArgs.mediaElement.style.webkitTransitionDuration?

...

**Deprecated**

This is a legacy alias of `transitionDuration`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-duration)

###### components.wacka.playerArgs.mediaElement.style.webkitTransitionProperty?

...

**Deprecated**

This is a legacy alias of `transitionProperty`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-property)

###### components.wacka.playerArgs.mediaElement.style.webkitTransitionTimingFunction?

...

**Deprecated**

This is a legacy alias of `transitionTimingFunction`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)

###### components.wacka.playerArgs.mediaElement.style.webkitUserSelect?

...

**Deprecated**

This is a legacy alias of `userSelect`.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/user-select)

###### components.wacka.playerArgs.mediaElement.style.whiteSpace?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/white-space)

###### components.wacka.playerArgs.mediaElement.style.whiteSpaceCollapse?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/white-space-collapse)

###### components.wacka.playerArgs.mediaElement.style.widows?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/widows)

###### components.wacka.playerArgs.mediaElement.style.width?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/width)

###### components.wacka.playerArgs.mediaElement.style.willChange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/will-change)

###### components.wacka.playerArgs.mediaElement.style.wordBreak?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/word-break)

###### components.wacka.playerArgs.mediaElement.style.wordSpacing?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/word-spacing)

###### components.wacka.playerArgs.mediaElement.style.wordWrap?

...

**Deprecated**

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)

###### components.wacka.playerArgs.mediaElement.style.writingMode?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/writing-mode)

###### components.wacka.playerArgs.mediaElement.style.x?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/x)

###### components.wacka.playerArgs.mediaElement.style.y?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/y)

###### components.wacka.playerArgs.mediaElement.style.zIndex?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/z-index)

###### components.wacka.playerArgs.mediaElement.style.zoom?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/CSS/zoom)

###### components.wacka.playerArgs.mediaElement.tabIndex?

`number`

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex)

###### components.wacka.playerArgs.mediaElement.tagName?

`string`

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Element/tagName)

###### components.wacka.playerArgs.mediaElement.TEXT_NODE?

`3`

node is a Text node.

###### components.wacka.playerArgs.mediaElement.textContent?

`string`

###### components.wacka.playerArgs.mediaElement.textTracks?

{[`key`: ...]: ...; `[iterator]?`: ...; `addEventListener?`: ...; `dispatchEvent?`: ...; `getTrackById?`: ...; `length?`: ...; `onaddtrack?`: ...; `onchange?`: ...; `onremovetrack?`: ...; `removeEventListener?`: ...; }

The read-only **`textTracks`** property on HTMLMediaElement objects returns a objects representing the media element's text tracks, in the same order as in the list of text tracks.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/textTracks)

###### components.wacka.playerArgs.mediaElement.textTracks.[iterator]?

...

###### components.wacka.playerArgs.mediaElement.textTracks.addEventListener?

...

###### components.wacka.playerArgs.mediaElement.textTracks.dispatchEvent?

...

###### components.wacka.playerArgs.mediaElement.textTracks.getTrackById?

...

###### components.wacka.playerArgs.mediaElement.textTracks.length?

...

The read-only **TextTrackList** property **`length`** returns the number of entries in the `TextTrackList`, each of which is a TextTrack representing one track in the media element.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TextTrackList/length)

###### components.wacka.playerArgs.mediaElement.textTracks.onaddtrack?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TextTrackList/addtrack_event)

###### components.wacka.playerArgs.mediaElement.textTracks.onchange?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TextTrackList/change_event)

###### components.wacka.playerArgs.mediaElement.textTracks.onremovetrack?

...

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/TextTrackList/removetrack_event)

###### components.wacka.playerArgs.mediaElement.textTracks.removeEventListener?

...

###### components.wacka.playerArgs.mediaElement.title?

`string`

The **`HTMLElement.title`** property represents the title of the element: the text usually displayed in a 'tooltip' popup when the mouse is over the node.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/title)

###### components.wacka.playerArgs.mediaElement.toggleAttribute?

(`qualifiedName`, `force?`) => ...

###### components.wacka.playerArgs.mediaElement.togglePopover?

(`options?`) => ...

###### components.wacka.playerArgs.mediaElement.translate?

`boolean`

The **`translate`** property of the HTMLElement interface indicates whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/translate)

###### components.wacka.playerArgs.mediaElement.volume?

`number`

The **`HTMLMediaElement.volume`** property sets the volume at which the media will be played.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volume)

###### components.wacka.playerArgs.mediaElement.webkitMatchesSelector?

(`selectors`) => ...

###### components.wacka.playerArgs.mediaElement.writingSuggestions?

`string`

The **`writingSuggestions`** property of the HTMLElement interface is a string indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/HTMLElement/writingSuggestions)

###### components.wacka.playerArgs.playbackEngineConfiguration?

{ `lazyLoadPlayers?`: `boolean`; `playbackConfigurations?`: { `hls?`: ...; `native?`: ...; `shaka?`: ...; }; `playerLoader?`: { `debugLibraries?`: ...; `esmImportAsDefault?`: ...; `loadConfigurations?`: ...; `urlSpecs?`: ...; }; `playerVersions?`: {[`key`: ...]: ...; `PlaybackEngineTypes.Dash?`: ...; `PlaybackEngineTypes.Hls?`: ...; `PlaybackEngineTypes.Native?`: ...; `PlaybackEngineTypes.Shaka?`: ...; `PlaybackEngineTypes.Unknown?`: ...; `PlaybackEngineTypes.Useless?`: ...; }; }

###### components.wacka.playerArgs.playbackEngineConfiguration.lazyLoadPlayers?

`boolean`

###### components.wacka.playerArgs.playbackEngineConfiguration.playbackConfigurations?

{ `hls?`: ...; `native?`: ...; `shaka?`: ...; }

###### components.wacka.playerArgs.playbackEngineConfiguration.playbackConfigurations.hls?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playbackConfigurations.native?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playbackConfigurations.shaka?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerLoader?

{ `debugLibraries?`: ...; `esmImportAsDefault?`: ...; `loadConfigurations?`: ...; `urlSpecs?`: ...; }

###### components.wacka.playerArgs.playbackEngineConfiguration.playerLoader.debugLibraries?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerLoader.esmImportAsDefault?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerLoader.loadConfigurations?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerLoader.urlSpecs?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions?

{[`key`: ...]: ...; `PlaybackEngineTypes.Dash?`: ...; `PlaybackEngineTypes.Hls?`: ...; `PlaybackEngineTypes.Native?`: ...; `PlaybackEngineTypes.Shaka?`: ...; `PlaybackEngineTypes.Unknown?`: ...; `PlaybackEngineTypes.Useless?`: ...; }

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Dash?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Hls?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Native?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Shaka?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Unknown?

...

###### components.wacka.playerArgs.playbackEngineConfiguration.playerVersions.PlaybackEngineTypes.Useless?

...

###### components.wacka.playerArgs.playbackEngineLoader?

{ `configure?`: (`playbackEnginesLoadConfiguration`) => ...; `getConfiguredPlaybackEngineTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlaybackEngine?`: <`TArgs`>(`type`) => ...; `loadConfiguredPlaybackEngines?`: () => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadNativePlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPlaybackEngine?`: <`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlaybackEngine?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `setLogger?`: (`logger`) => ...; }

###### components.wacka.playerArgs.playbackEngineLoader.configure?

(`playbackEnginesLoadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.getConfiguredPlaybackEngineTypes?

() => ...

###### components.wacka.playerArgs.playbackEngineLoader.installPackage?

(`packageSpec`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.load?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadAll?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadAs?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadConfiguredPlaybackEngine?

<`TArgs`>(`type`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadConfiguredPlaybackEngines?

() => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadDefault?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadExports?

<`TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadHlsPlaybackEngine?

<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadNamed?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadNativePlaybackEngine?

<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadPlaybackEngine?

<`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadPredicated?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.loadShakaPlaybackEngine?

<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playbackEngineLoader.setLogger?

(`logger`) => ...

###### components.wacka.playerArgs.playbackEngines?

{[`key`: `string`]: `IHlsPlaybackEngineConstructor` | `INativePlaybackEngineConstructor` | `IShakaPlaybackEngineConstructor` | `IPlaybackEngineConstructor`<...> | `undefined`; `PlaybackEngineTypes.Hls?`: `IHlsPlaybackEngineConstructor`; `PlaybackEngineTypes.Native?`: `INativePlaybackEngineConstructor`; `PlaybackEngineTypes.Shaka?`: `IShakaPlaybackEngineConstructor`; }

###### components.wacka.playerArgs.playbackEngines.PlaybackEngineTypes.Hls?

`IHlsPlaybackEngineConstructor`

###### components.wacka.playerArgs.playbackEngines.PlaybackEngineTypes.Native?

`INativePlaybackEngineConstructor`

###### components.wacka.playerArgs.playbackEngines.PlaybackEngineTypes.Shaka?

`IShakaPlaybackEngineConstructor`

###### components.wacka.playerArgs.playbackEngineSelector?

`IPlaybackEngineSelector`

###### components.wacka.playerArgs.playerLoader?

{ `configure?`: (`playerLoaderConfiguration`) => ...; `configureLoadConfigurationsIfNotConfigured?`: (`loadConfigurations`) => ...; `getConfiguredPlayerTypes?`: () => ...; `installPackage?`: (`packageSpec`) => ...; `load?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAll?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadAs?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadConfiguredPlayer?`: (`type`, `predicate?`) => ...; `loadConfiguredPlayers?`: (`exportPredicates?`) => ...; `loadDefault?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadExports?`: <`TLoadConfiguration`>(`loadConfiguration`) => ...; `loadHlsPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `loadNamed?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadPlayer?`: <`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`) => ...; `loadPredicated?`: <`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...; `loadShakaPlayer?`: <`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...; `registerExportPredicate?`: (`type`, `predicate`) => ...; `setLogger?`: (`logger`) => ...; }

###### components.wacka.playerArgs.playerLoader.configure?

(`playerLoaderConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.configureLoadConfigurationsIfNotConfigured?

(`loadConfigurations`) => ...

###### components.wacka.playerArgs.playerLoader.getConfiguredPlayerTypes?

() => ...

###### components.wacka.playerArgs.playerLoader.installPackage?

(`packageSpec`) => ...

###### components.wacka.playerArgs.playerLoader.load?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadAll?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadAs?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadConfiguredPlayer?

(`type`, `predicate?`) => ...

###### components.wacka.playerArgs.playerLoader.loadConfiguredPlayers?

(`exportPredicates?`) => ...

###### components.wacka.playerArgs.playerLoader.loadDefault?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadExports?

<`TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadHlsPlayer?

<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playerLoader.loadNamed?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadPlayer?

<`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playerLoader.loadPredicated?

<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`) => ...

###### components.wacka.playerArgs.playerLoader.loadShakaPlayer?

<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`) => ...

###### components.wacka.playerArgs.playerLoader.registerExportPredicate?

(`type`, `predicate`) => ...

###### components.wacka.playerArgs.playerLoader.setLogger?

(`logger`) => ...

###### components.wacka.playerArgs.shaka?

{ `shaka?`: `any`; `shakaPlayerConstructor?`: (`mediaElement?`) => ...; }

###### components.wacka.playerArgs.shaka.shaka?

`any`

###### components.wacka.playerArgs.shaka.shakaPlayerConstructor?

(`mediaElement?`) => ...

###### serviceLayer?

{[`key`: `string`]: `any`; }

###### serviceLayerClass?

(`args`) => [`IServiceLayer`](reference/interfaces/IServiceLayer.md)

###### serviceLayerFactory?

{ `create?`: (`args`) => [`IServiceLayer`](reference/interfaces/IServiceLayer.md); }

###### serviceLayerFactory.create?

(`args`) => [`IServiceLayer`](reference/interfaces/IServiceLayer.md)

###### serviceLayerManifest?

{ `args?`: `any`; `configuration?`: {[`key`: `string`]: `any`; }; `followsApplicationLifecycle?`: `boolean`; `loadConfiguration?`: { `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }; `type?`: `string`; }

###### serviceLayerManifest.args?

`any`

###### serviceLayerManifest.configuration?

{[`key`: `string`]: `any`; }

###### serviceLayerManifest.followsApplicationLifecycle?

`boolean`

###### serviceLayerManifest.loadConfiguration?

{ `bundleName?`: `string`; `exportName?`: `string`; `exportPredicate?`: (`key`, `value`) => `boolean`; `exportType?`: `ComponentExportTypes`; `forceReload?`: `boolean`; `resource?`: `string`; `type?`: `ComponentLoadTypes`; }

###### serviceLayerManifest.loadConfiguration.bundleName?

`string`

###### serviceLayerManifest.loadConfiguration.exportName?

`string`

###### serviceLayerManifest.loadConfiguration.exportPredicate?

(`key`, `value`) => `boolean`

ts-auto-guard-suppress function-type

###### serviceLayerManifest.loadConfiguration.exportType?

`ComponentExportTypes`

###### serviceLayerManifest.loadConfiguration.forceReload?

`boolean`

###### serviceLayerManifest.loadConfiguration.resource?

`string`

###### serviceLayerManifest.loadConfiguration.type?

`ComponentLoadTypes`

###### serviceLayerManifest.type?

`string`

###### serviceLayerUrl?

`string`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleConfigure`](DeCafClientBase.md#handleconfigure)

***

### handleDeCafLoad()

> **handleDeCafLoad**(`load`, `playbackSession`): `Promise`<`void`>

#### Parameters

##### load

`Load`

##### playbackSession

`PlaybackSession`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleDeCafLoad`](DeCafClientBase.md#handledecafload)

***

### handleDismissStillWatching()

> **handleDismissStillWatching**(): `Promise`<`void`>

Additional Client commands

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleDismissStillWatching`](DeCafClientBase.md#handledismissstillwatching)

***

### handleLoad()

> **handleLoad**(`load`, `playbackSession`): `Promise`<`void`>

#### Parameters

##### load

`Load`

##### playbackSession

`PlaybackSession`

#### Returns

`Promise`<`void`>

#### Inherited from

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleLoad`](DeCafClientBase.md#handleload)

***

### handleNextLoad()

> **handleNextLoad**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleNextLoad`](DeCafClientBase.md#handlenextload)

***

### handlePause()

> **handlePause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handlePause`](DeCafClientBase.md#handlepause)

***

### handlePlay()

> **handlePlay**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handlePlay`](DeCafClientBase.md#handleplay)

***

### handleReset()

> **handleReset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleReset`](DeCafClientBase.md#handlereset)

***

### handleSeek()

> **handleSeek**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SeekCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSeek`](DeCafClientBase.md#handleseek)

***

### handleSenderConnected()

> **handleSenderConnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSenderConnected`](DeCafClientBase.md#handlesenderconnected)

***

### handleSenderDisconnected()

> **handleSenderDisconnected**(`id`): `Promise`<`void`>

#### Parameters

##### id

`string`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSenderDisconnected`](DeCafClientBase.md#handlesenderdisconnected)

***

### handleSetAudioTrack()

> **handleSetAudioTrack**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetAudioTrackCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSetAudioTrack`](DeCafClientBase.md#handlesetaudiotrack)

***

### handleSetMuted()

> **handleSetMuted**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetMutedCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSetMuted`](DeCafClientBase.md#handlesetmuted)

***

### handleSetTextTrack()

> **handleSetTextTrack**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SetTextTrackCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSetTextTrack`](DeCafClientBase.md#handlesettexttrack)

***

### handleSetTracks()

> **handleSetTracks**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetTracks`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSetTracks`](DeCafClientBase.md#handlesettracks)

***

### handleSetVolume()

> **handleSetVolume**(`command`): `Promise`<`void`>

#### Parameters

##### command

`SetVolumeCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSetVolume`](DeCafClientBase.md#handlesetvolume)

***

### handleSkipSection()

> **handleSkipSection**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`SkipSectionCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleSkipSection`](DeCafClientBase.md#handleskipsection)

***

### handleStop()

> **handleStop**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`StopCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleStop`](DeCafClientBase.md#handlestop)

***

### handleTerminate()

> **handleTerminate**(`command?`): `Promise`<`void`>

#### Parameters

##### command?

`TerminateCommand`

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`handleTerminate`](DeCafClientBase.md#handleterminate)

***

### initialize()

> **initialize**(): `Promise`<`void`>

DeCaf Client

#### Returns

`Promise`<`void`>

#### Overrides

[`DeCafClientBase`](reference/classes/DeCafClientBase.md).[`initialize`](DeCafClientBase.md#initialize)

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

#### Parameters

##### metadata

`Metadata`

#### Returns

`void`

***

### setMetadatas()

> **setMetadatas**(`metadatas`): `void`

#### Parameters

##### metadatas

`Metadata`[]

#### Returns

`void`

***

### terminate()

> **terminate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
