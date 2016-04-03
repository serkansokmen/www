System.config({
  baseURL: "/",
  trace: true,
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/main.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:react-dom@0.14.8.js",
      "npm:react@0.14.8.js",
      "npm:react-retina-image@2.0.0.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "app/data.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:react@0.14.8/react.js",
      "npm:react-dom@0.14.8/index.js",
      "npm:react-retina-image@2.0.0/dist/index.js",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js",
      "npm:react@0.14.8/lib/React.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js",
      "npm:react@0.14.8/lib/ReactDOM.js",
      "npm:is-retina@1.0.3.js",
      "npm:image-exists@1.1.0.js",
      "npm:isarray@0.0.1.js",
      "npm:object-assign@4.0.1.js",
      "github:jspm/nodelibs-path@0.1.0.js",
      "npm:array-equal@1.0.0.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:react@0.14.8/lib/ReactDOMServer.js",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:react@0.14.8/lib/ReactIsomorphic.js",
      "npm:react@0.14.8/lib/deprecated.js",
      "npm:react@0.14.8/lib/Object.assign.js",
      "npm:react@0.14.8/lib/ReactCurrentOwner.js",
      "npm:react@0.14.8/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.8/lib/ReactPerf.js",
      "npm:react@0.14.8/lib/ReactDefaultInjection.js",
      "npm:react@0.14.8/lib/ReactInstanceHandles.js",
      "npm:react@0.14.8/lib/ReactVersion.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.8/lib/ReactReconciler.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:react@0.14.8/lib/renderSubtreeIntoContainer.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:react@0.14.8/lib/ReactMount.js",
      "npm:react@0.14.8/lib/ReactUpdates.js",
      "npm:react@0.14.8/lib/findDOMNode.js",
      "npm:is-retina@1.0.3/index.js",
      "npm:object-assign@4.0.1/index.js",
      "npm:image-exists@1.1.0/index.js",
      "npm:isarray@0.0.1/index.js",
      "github:jspm/nodelibs-path@0.1.0/index.js",
      "npm:array-equal@1.0.0/index.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:react@0.14.8/lib/ReactComponent.js",
      "npm:react@0.14.8/lib/ReactServerRendering.js",
      "npm:react@0.14.8/lib/ReactClass.js",
      "npm:react@0.14.8/lib/ReactDOMFactories.js",
      "npm:react@0.14.8/lib/ReactElementValidator.js",
      "npm:react@0.14.8/lib/ReactChildren.js",
      "npm:react@0.14.8/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.8/lib/ClientReactRootIndex.js",
      "npm:react@0.14.8/lib/ServerReactRootIndex.js",
      "npm:react@0.14.8/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.8/lib/ReactInjection.js",
      "npm:react@0.14.8/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/ReactElement.js",
      "npm:react@0.14.8/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.8/lib/ReactPropTypes.js",
      "npm:react@0.14.8/lib/onlyChild.js",
      "npm:react@0.14.8/lib/DOMPropertyOperations.js",
      "npm:react@0.14.8/lib/DOMChildrenOperations.js",
      "npm:react@0.14.8/lib/setTextContent.js",
      "npm:react@0.14.8/lib/validateDOMNesting.js",
      "npm:react@0.14.8/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.8/lib/ChangeEventPlugin.js",
      "npm:react@0.14.8/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.8/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.8/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.8/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.8/lib/ReactDOMComponent.js",
      "npm:react@0.14.8/lib/ReactEventListener.js",
      "npm:react@0.14.8/lib/SelectEventPlugin.js",
      "npm:react@0.14.8/lib/SimpleEventPlugin.js",
      "npm:react@0.14.8/lib/ReactRootIndex.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:react@0.14.8/lib/ReactRef.js",
      "npm:react@0.14.8/lib/ReactDefaultPerf.js",
      "npm:react@0.14.8/lib/DOMProperty.js",
      "npm:react@0.14.8/lib/ReactInstanceMap.js",
      "npm:react@0.14.8/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.8/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.8/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.8/lib/ReactMarkupChecksum.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:react@0.14.8/lib/ReactBrowserEventEmitter.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.8/lib/ReactUpdateQueue.js",
      "npm:react@0.14.8/lib/instantiateReactComponent.js",
      "npm:react@0.14.8/lib/setInnerHTML.js",
      "npm:react@0.14.8/lib/CallbackQueue.js",
      "npm:react@0.14.8/lib/PooledClass.js",
      "npm:react@0.14.8/lib/Transaction.js",
      "npm:path-browserify@0.0.0.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:react@0.14.8/lib/ReactServerBatchingStrategy.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:react@0.14.8/lib/getIteratorFn.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:react@0.14.8/lib/canDefineProperty.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.8/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.8/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.8/lib/getEventTarget.js",
      "npm:react@0.14.8/lib/isTextInputElement.js",
      "npm:react@0.14.8/lib/ReactDOMButton.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.8/lib/ReactEmptyComponent.js",
      "npm:react@0.14.8/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.8/lib/FallbackCompositionState.js",
      "npm:react@0.14.8/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.8/lib/SyntheticInputEvent.js",
      "npm:react@0.14.8/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.8/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.8/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.8/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.8/lib/SyntheticDragEvent.js",
      "npm:react@0.14.8/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.8/lib/ReactMultiChild.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.8/lib/traverseAllChildren.js",
      "npm:react@0.14.8/lib/ReactInputSelection.js",
      "npm:react@0.14.8/lib/EventPluginHub.js",
      "npm:react@0.14.8/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.8/lib/ReactNativeComponent.js",
      "npm:react@0.14.8/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.8/lib/Danger.js",
      "npm:react@0.14.8/lib/EventPropagators.js",
      "npm:react@0.14.8/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.8/lib/EventConstants.js",
      "npm:react@0.14.8/lib/SyntheticEvent.js",
      "npm:react@0.14.8/lib/isEventSupported.js",
      "npm:react@0.14.8/lib/AutoFocusUtils.js",
      "npm:react@0.14.8/lib/CSSPropertyOperations.js",
      "npm:react@0.14.8/lib/ReactDOMInput.js",
      "npm:react@0.14.8/lib/ReactDOMOption.js",
      "npm:react@0.14.8/lib/ReactDOMSelect.js",
      "npm:react@0.14.8/lib/ReactDOMTextarea.js",
      "npm:react@0.14.8/lib/getEventCharCode.js",
      "npm:react@0.14.8/lib/SyntheticUIEvent.js",
      "npm:react@0.14.8/lib/SyntheticWheelEvent.js",
      "npm:process@0.11.2.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:react@0.14.8/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.14.8/lib/ReactOwner.js",
      "npm:react@0.14.8/lib/adler32.js",
      "npm:react@0.14.8/lib/ViewportMetrics.js",
      "npm:react@0.14.8/lib/ReactEventEmitterMixin.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:path-browserify@0.0.0/index.js",
      "npm:react@0.14.8/lib/EventPluginRegistry.js",
      "npm:react@0.14.8/lib/ReactCompositeComponent.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:react@0.14.8/lib/getEventModifierState.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.8/lib/forEachAccumulated.js",
      "npm:react@0.14.8/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:react@0.14.8/lib/getEventKey.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:react@0.14.8/lib/dangerousStyleValue.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:react@0.14.8/lib/ReactErrorUtils.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:react@0.14.8/lib/getTextContentAccessor.js",
      "npm:react@0.14.8/lib/ReactChildReconciler.js",
      "npm:react@0.14.8/lib/flattenChildren.js",
      "npm:react@0.14.8/lib/ReactDOMSelection.js",
      "npm:react@0.14.8/lib/EventPluginUtils.js",
      "npm:react@0.14.8/lib/accumulateInto.js",
      "npm:react@0.14.8/lib/LinkedValueUtils.js",
      "npm:process@0.11.2/browser.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:react@0.14.8/lib/getNodeForCharacterOffset.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "app/main.css!css.js",
      "npm:fbjs@0.6.1/lib/toArray.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "box2d": "npm:box2d@1.0.0",
    "clean-css": "npm:clean-css@3.4.11",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "npm:whatwg-fetch@0.11.0",
    "firebase": "github:firebase/firebase-bower@2.4.2",
    "image": "github:systemjs/plugin-image@0.1.0",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jspm-loader-css": "npm:jspm-loader-css@1.1.0",
    "postcss-simple-vars": "npm:postcss-simple-vars@1.2.0",
    "react": "npm:react@0.14.8",
    "react-dom": "npm:react-dom@0.14.8",
    "react-retina-image": "npm:react-retina-image@2.0.0",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:box2d@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:css-modules-loader-core@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.10",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
      "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css@1.1.0": {
      "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "postcss": "npm:postcss@5.0.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.10"
    },
    "npm:postcss-modules-scope@1.0.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-values@1.1.0": {
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
      "postcss": "npm:postcss@5.0.10"
    },
    "npm:postcss-simple-vars@1.2.0": {
      "postcss": "npm:postcss@5.0.19"
    },
    "npm:postcss@5.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:postcss@5.0.19": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-retina-image@2.0.0": {
      "array-equal": "npm:array-equal@1.0.0",
      "image-exists": "npm:image-exists@1.1.0",
      "is-retina": "npm:is-retina@1.0.3",
      "isarray": "npm:isarray@0.0.1",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
