System.config({
  baseURL: "/",
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
  sassPluginOptions: {
    "autoprefixer": true
  },

  depCache: {
    "main.js": [
      "babel-runtime/core-js/object/keys",
      "./main.json!json",
      "pixi.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/keys.js": [
      "core-js/library/fn/object/keys"
    ],
    "npm:pixi.js@3.0.10.js": [
      "npm:pixi.js@3.0.10/src/index.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/keys.js": [
      "../../modules/es6.object.keys",
      "../../modules/$.core"
    ],
    "npm:pixi.js@3.0.10/src/index.js": [
      "./polyfill/index",
      "./core/index",
      "./extras/index",
      "./filters/index",
      "./interaction/index",
      "./loaders/index",
      "./mesh/index",
      "./accessibility/index",
      "./deprecation"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:pixi.js@3.0.10/src/polyfill/index.js": [
      "./Object.assign",
      "./requestAnimationFrame",
      "./Math.sign"
    ],
    "npm:pixi.js@3.0.10/src/core/index.js": [
      "./const",
      "./math/index",
      "./utils/index",
      "./ticker/index",
      "./display/DisplayObject",
      "./display/Container",
      "./sprites/Sprite",
      "./particles/ParticleContainer",
      "./sprites/webgl/SpriteRenderer",
      "./particles/webgl/ParticleRenderer",
      "./text/Text",
      "./graphics/Graphics",
      "./graphics/GraphicsData",
      "./graphics/webgl/GraphicsRenderer",
      "./textures/Texture",
      "./textures/BaseTexture",
      "./textures/RenderTexture",
      "./textures/VideoBaseTexture",
      "./textures/TextureUvs",
      "./renderers/canvas/CanvasRenderer",
      "./renderers/canvas/utils/CanvasGraphics",
      "./renderers/canvas/utils/CanvasBuffer",
      "./renderers/webgl/WebGLRenderer",
      "./renderers/webgl/managers/WebGLManager",
      "./renderers/webgl/managers/ShaderManager",
      "./renderers/webgl/shaders/Shader",
      "./renderers/webgl/shaders/TextureShader",
      "./renderers/webgl/shaders/PrimitiveShader",
      "./renderers/webgl/shaders/ComplexPrimitiveShader",
      "./renderers/webgl/utils/ObjectRenderer",
      "./renderers/webgl/utils/RenderTarget",
      "./renderers/webgl/filters/AbstractFilter",
      "./renderers/webgl/filters/FXAAFilter",
      "./renderers/webgl/filters/SpriteMaskFilter"
    ],
    "npm:pixi.js@3.0.10/src/filters/index.js": [
      "./ascii/AsciiFilter",
      "./bloom/BloomFilter",
      "./blur/BlurFilter",
      "./blur/BlurXFilter",
      "./blur/BlurYFilter",
      "./blur/BlurDirFilter",
      "./color/ColorMatrixFilter",
      "./color/ColorStepFilter",
      "./convolution/ConvolutionFilter",
      "./crosshatch/CrossHatchFilter",
      "./displacement/DisplacementFilter",
      "./dot/DotScreenFilter",
      "./gray/GrayFilter",
      "./dropshadow/DropShadowFilter",
      "./invert/InvertFilter",
      "./noise/NoiseFilter",
      "./pixelate/PixelateFilter",
      "./rgb/RGBSplitFilter",
      "./shockwave/ShockwaveFilter",
      "./sepia/SepiaFilter",
      "./blur/SmartBlurFilter",
      "./tiltshift/TiltShiftFilter",
      "./tiltshift/TiltShiftXFilter",
      "./tiltshift/TiltShiftYFilter",
      "./twist/TwistFilter"
    ],
    "npm:pixi.js@3.0.10/src/extras/index.js": [
      "./cacheAsBitmap",
      "./getChildByName",
      "./getGlobalPosition",
      "./MovieClip",
      "./TilingSprite",
      "./BitmapText"
    ],
    "npm:pixi.js@3.0.10/src/interaction/index.js": [
      "./InteractionData",
      "./InteractionManager",
      "./interactiveTarget"
    ],
    "npm:pixi.js@3.0.10/src/mesh/index.js": [
      "./Mesh",
      "./Plane",
      "./Rope",
      "./webgl/MeshRenderer",
      "./webgl/MeshShader"
    ],
    "npm:pixi.js@3.0.10/src/accessibility/index.js": [
      "./accessibleTarget",
      "./AccessibilityManager"
    ],
    "npm:pixi.js@3.0.10/src/loaders/index.js": [
      "./loader",
      "./bitmapFontParser",
      "./spritesheetParser",
      "./textureParser",
      "resource-loader"
    ],
    "npm:pixi.js@3.0.10/src/deprecation.js": [
      "./core/index",
      "./mesh/index",
      "./extras/index",
      "./filters/index"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:pixi.js@3.0.10/src/core/math/index.js": [
      "./Point",
      "./Matrix",
      "./GroupD8",
      "./shapes/Circle",
      "./shapes/Ellipse",
      "./shapes/Polygon",
      "./shapes/Rectangle",
      "./shapes/RoundedRectangle"
    ],
    "npm:pixi.js@3.0.10/src/core/display/Container.js": [
      "../math/index",
      "../utils/index",
      "./DisplayObject",
      "../textures/RenderTexture"
    ],
    "npm:pixi.js@3.0.10/src/core/ticker/index.js": [
      "./Ticker"
    ],
    "npm:pixi.js@3.0.10/src/core/sprites/Sprite.js": [
      "../math/index",
      "../textures/Texture",
      "../display/Container",
      "../renderers/canvas/utils/CanvasTinter",
      "../utils/index",
      "../const"
    ],
    "npm:pixi.js@3.0.10/src/core/particles/ParticleContainer.js": [
      "../display/Container",
      "../const"
    ],
    "npm:pixi.js@3.0.10/src/core/sprites/webgl/SpriteRenderer.js": [
      "../../renderers/webgl/utils/ObjectRenderer",
      "../../renderers/webgl/WebGLRenderer",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/text/Text.js": [
      "../sprites/Sprite",
      "../textures/Texture",
      "../math/index",
      "../utils/index",
      "../const"
    ],
    "npm:pixi.js@3.0.10/src/core/graphics/Graphics.js": [
      "../display/Container",
      "../textures/Texture",
      "../renderers/canvas/utils/CanvasBuffer",
      "../renderers/canvas/utils/CanvasGraphics",
      "./GraphicsData",
      "../math/index",
      "../const"
    ],
    "npm:pixi.js@3.0.10/src/core/particles/webgl/ParticleRenderer.js": [
      "../../renderers/webgl/utils/ObjectRenderer",
      "../../renderers/webgl/WebGLRenderer",
      "./ParticleShader",
      "./ParticleBuffer",
      "../../math/index"
    ],
    "npm:pixi.js@3.0.10/src/core/textures/RenderTexture.js": [
      "./BaseTexture",
      "./Texture",
      "../renderers/webgl/utils/RenderTarget",
      "../renderers/webgl/managers/FilterManager",
      "../renderers/canvas/utils/CanvasBuffer",
      "../math/index",
      "../const"
    ],
    "npm:pixi.js@3.0.10/src/core/textures/TextureUvs.js": [
      "../math/GroupD8"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/canvas/CanvasRenderer.js": [
      "../SystemRenderer",
      "./utils/CanvasMaskManager",
      "../../utils/index",
      "../../math/index",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/canvas/utils/CanvasGraphics.js": [
      "../../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/WebGLRenderer.js": [
      "../SystemRenderer",
      "./managers/ShaderManager",
      "./managers/MaskManager",
      "./managers/StencilManager",
      "./managers/FilterManager",
      "./managers/BlendModeManager",
      "./utils/RenderTarget",
      "./utils/ObjectRenderer",
      "./filters/FXAAFilter",
      "../../utils/index",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/shaders/Shader.js": [
      "../../../utils/index"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/managers/ShaderManager.js": [
      "./WebGLManager",
      "../shaders/TextureShader",
      "../shaders/ComplexPrimitiveShader",
      "../shaders/PrimitiveShader",
      "../../../utils/index"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/shaders/TextureShader.js": [
      "./Shader"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/shaders/ComplexPrimitiveShader.js": [
      "./Shader"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/shaders/PrimitiveShader.js": [
      "./Shader"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/utils/RenderTarget.js": [
      "../../../math/index",
      "../../../utils/index",
      "../../../const",
      "./StencilMaskStack"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/utils/ObjectRenderer.js": [
      "../managers/WebGLManager"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/filters/AbstractFilter.js": [
      "../shaders/TextureShader"
    ],
    "npm:pixi.js@3.0.10/src/polyfill/Object.assign.js": [
      "object-assign"
    ],
    "npm:pixi.js@3.0.10/src/core/textures/BaseTexture.js": [
      "../utils/index",
      "../const",
      "eventemitter3"
    ],
    "npm:pixi.js@3.0.10/src/core/textures/Texture.js": [
      "./BaseTexture",
      "./VideoBaseTexture",
      "./TextureUvs",
      "eventemitter3",
      "../math/index",
      "../utils/index"
    ],
    "npm:pixi.js@3.0.10/src/core/utils/index.js": [
      "../const",
      "eventemitter3",
      "./pluginTarget",
      "async"
    ],
    "npm:pixi.js@3.0.10/src/core/display/DisplayObject.js": [
      "../math/index",
      "../textures/RenderTexture",
      "eventemitter3",
      "../const",
      "process"
    ],
    "npm:pixi.js@3.0.10/src/core/graphics/webgl/GraphicsRenderer.js": [
      "../../utils/index",
      "../../math/index",
      "../../const",
      "../../renderers/webgl/utils/ObjectRenderer",
      "../../renderers/webgl/WebGLRenderer",
      "./WebGLGraphicsData",
      "earcut"
    ],
    "npm:pixi.js@3.0.10/src/core/textures/VideoBaseTexture.js": [
      "./BaseTexture",
      "../utils/index",
      "process"
    ],
    "npm:pixi.js@3.0.10/src/filters/bloom/BloomFilter.js": [
      "../../core/index",
      "../blur/BlurXFilter",
      "../blur/BlurYFilter"
    ],
    "npm:pixi.js@3.0.10/src/filters/blur/BlurFilter.js": [
      "../../core/index",
      "./BlurXFilter",
      "./BlurYFilter"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/filters/FXAAFilter.js": [
      "./AbstractFilter",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/ascii/AsciiFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/filters/SpriteMaskFilter.js": [
      "./AbstractFilter",
      "../../../math/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/blur/BlurXFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/blur/BlurYFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/blur/BlurDirFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/color/ColorStepFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/color/ColorMatrixFilter.js": [
      "../../core/index",
      "fs",
      "process"
    ],
    "npm:pixi.js@3.0.10/src/filters/dropshadow/DropShadowFilter.js": [
      "../../core/index",
      "../blur/BlurXFilter",
      "./BlurYTintFilter"
    ],
    "npm:pixi.js@3.0.10/src/filters/tiltshift/TiltShiftFilter.js": [
      "../../core/index",
      "./TiltShiftXFilter",
      "./TiltShiftYFilter"
    ],
    "npm:pixi.js@3.0.10/src/filters/tiltshift/TiltShiftYFilter.js": [
      "./TiltShiftAxisFilter"
    ],
    "npm:pixi.js@3.0.10/src/filters/tiltshift/TiltShiftXFilter.js": [
      "./TiltShiftAxisFilter"
    ],
    "npm:pixi.js@3.0.10/src/extras/cacheAsBitmap.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/extras/getGlobalPosition.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/extras/getChildByName.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/extras/MovieClip.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/extras/TilingSprite.js": [
      "../core/index",
      "../core/renderers/canvas/utils/CanvasTinter"
    ],
    "npm:pixi.js@3.0.10/src/extras/BitmapText.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/interaction/InteractionData.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/interaction/InteractionManager.js": [
      "../core/index",
      "./InteractionData",
      "./interactiveTarget"
    ],
    "npm:pixi.js@3.0.10/src/mesh/Plane.js": [
      "./Mesh"
    ],
    "npm:pixi.js@3.0.10/src/mesh/Mesh.js": [
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/mesh/Rope.js": [
      "./Mesh",
      "../core/index"
    ],
    "npm:pixi.js@3.0.10/src/mesh/webgl/MeshShader.js": [
      "../../core/index"
    ],
    "npm:pixi.js@3.0.10/src/mesh/webgl/MeshRenderer.js": [
      "../../core/index",
      "../Mesh"
    ],
    "npm:pixi.js@3.0.10/src/accessibility/AccessibilityManager.js": [
      "../core/index",
      "./accessibleTarget"
    ],
    "npm:pixi.js@3.0.10/src/loaders/textureParser.js": [
      "../core/index"
    ],
    "npm:resource-loader@1.6.4.js": [
      "npm:resource-loader@1.6.4/src/index.js"
    ],
    "npm:pixi.js@3.0.10/src/filters/convolution/ConvolutionFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/crosshatch/CrossHatchFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/displacement/DisplacementFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/gray/GrayFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/invert/InvertFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/noise/NoiseFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/pixelate/PixelateFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/rgb/RGBSplitFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/dot/DotScreenFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/shockwave/ShockwaveFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/sepia/SepiaFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/blur/SmartBlurFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/twist/TwistFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/loaders/loader.js": [
      "resource-loader",
      "./textureParser",
      "./spritesheetParser",
      "./bitmapFontParser"
    ],
    "npm:pixi.js@3.0.10/src/loaders/bitmapFontParser.js": [
      "resource-loader",
      "../core/index",
      "../extras/index",
      "path"
    ],
    "npm:pixi.js@3.0.10/src/loaders/spritesheetParser.js": [
      "resource-loader",
      "path",
      "../core/index"
    ],
    "npm:object-assign@4.0.1.js": [
      "npm:object-assign@4.0.1/index"
    ],
    "npm:eventemitter3@1.2.0.js": [
      "npm:eventemitter3@1.2.0/index.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:pixi.js@3.0.10/src/core/math/Matrix.js": [
      "./Point"
    ],
    "npm:pixi.js@3.0.10/src/core/math/GroupD8.js": [
      "./Matrix"
    ],
    "npm:pixi.js@3.0.10/src/core/math/shapes/Circle.js": [
      "./Rectangle",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/math/shapes/Ellipse.js": [
      "./Rectangle",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/math/shapes/Polygon.js": [
      "../Point",
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/math/shapes/Rectangle.js": [
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/math/shapes/RoundedRectangle.js": [
      "../../const"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/canvas/utils/CanvasTinter.js": [
      "../../../utils/index"
    ],
    "npm:pixi.js@3.0.10/src/core/particles/webgl/ParticleShader.js": [
      "../../renderers/webgl/shaders/TextureShader"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/managers/FilterManager.js": [
      "./WebGLManager",
      "../utils/RenderTarget",
      "../../../const",
      "../utils/Quad",
      "../../../math/index"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/canvas/utils/CanvasMaskManager.js": [
      "./CanvasGraphics"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/managers/MaskManager.js": [
      "./WebGLManager",
      "../filters/SpriteMaskFilter"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/managers/StencilManager.js": [
      "./WebGLManager",
      "../../../utils/index"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/webgl/managers/BlendModeManager.js": [
      "./WebGLManager"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:pixi.js@3.0.10/src/core/ticker/Ticker.js": [
      "../const",
      "eventemitter3"
    ],
    "npm:pixi.js@3.0.10/src/core/renderers/SystemRenderer.js": [
      "../utils/index",
      "../math/index",
      "../const",
      "eventemitter3"
    ],
    "npm:earcut@2.1.1.js": [
      "npm:earcut@2.1.1/src/earcut.js"
    ],
    "npm:async@1.5.2.js": [
      "npm:async@1.5.2/lib/async.js"
    ],
    "github:jspm/nodelibs-fs@0.1.2.js": [
      "github:jspm/nodelibs-fs@0.1.2/index"
    ],
    "npm:resource-loader@1.6.4/src/index.js": [
      "./Loader",
      "./Resource",
      "./middlewares/caching/memory",
      "./middlewares/parsing/blob"
    ],
    "github:jspm/nodelibs-path@0.1.0.js": [
      "github:jspm/nodelibs-path@0.1.0/index"
    ],
    "npm:pixi.js@3.0.10/src/filters/dropshadow/BlurYTintFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:pixi.js@3.0.10/src/filters/tiltshift/TiltShiftAxisFilter.js": [
      "../../core/index",
      "fs"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:earcut@2.1.1/src/earcut.js": [
      "process"
    ],
    "npm:async@1.5.2/lib/async.js": [
      "process"
    ],
    "npm:resource-loader@1.6.4/src/middlewares/parsing/blob.js": [
      "../../Resource",
      "../../b64"
    ],
    "npm:resource-loader@1.6.4/src/Loader.js": [
      "async",
      "url",
      "./Resource",
      "eventemitter3",
      "process"
    ],
    "github:jspm/nodelibs-path@0.1.0/index.js": [
      "path-browserify"
    ],
    "npm:resource-loader@1.6.4/src/Resource.js": [
      "eventemitter3",
      "url"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:async@0.9.2.js": [
      "npm:async@0.9.2/lib/async.js"
    ],
    "github:jspm/nodelibs-url@0.1.0.js": [
      "github:jspm/nodelibs-url@0.1.0/index"
    ],
    "npm:path-browserify@0.0.0.js": [
      "npm:path-browserify@0.0.0/index.js"
    ],
    "github:jspm/nodelibs-url@0.1.0/index.js": [
      "url"
    ],
    "npm:async@0.9.2/lib/async.js": [
      "process"
    ],
    "npm:path-browserify@0.0.0/index.js": [
      "process"
    ],
    "npm:url@0.10.3.js": [
      "npm:url@0.10.3/url.js"
    ],
    "npm:url@0.10.3/url.js": [
      "punycode",
      "querystring"
    ],
    "npm:punycode@1.3.2.js": [
      "npm:punycode@1.3.2/punycode.js"
    ],
    "npm:querystring@0.2.0.js": [
      "npm:querystring@0.2.0/index"
    ],
    "npm:punycode@1.3.2/punycode.js": [
      "process"
    ],
    "npm:querystring@0.2.0/index.js": [
      "./decode",
      "./encode"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@3.4.11",
    "core-js": "npm:core-js@1.2.6",
    "css": "npm:jspm-loader-css@1.1.0",
    "d3": "npm:d3@3.5.16",
    "image": "github:systemjs/plugin-image@0.1.0",
    "jquery": "npm:jquery@2.2.3",
    "json": "github:systemjs/plugin-json@0.1.1",
    "jspm-loader-css": "npm:jspm-loader-css@1.1.0",
    "pixi.js": "npm:pixi.js@3.0.10",
    "postcss-simple-vars": "npm:postcss-simple-vars@1.2.0",
    "react": "npm:react@15.0.1",
    "react-dom": "npm:react-dom@15.0.1",
    "scss": "github:mobilexag/plugin-sass@0.4.0",
    "toxiclibsjs": "npm:toxiclibsjs@0.3.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
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
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:mobilexag/plugin-sass@0.4.0": {
      "autoprefixer": "npm:autoprefixer@6.3.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash": "npm:lodash@4.8.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.19",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.7",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:autoprefixer@6.3.6": {
      "browserslist": "npm:browserslist@1.3.1",
      "caniuse-db": "npm:caniuse-db@1.0.30000446",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.0.19",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:brfs@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "quote-stream": "npm:quote-stream@1.0.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1",
      "through2": "npm:through2@2.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-versionify@1.0.6": {
      "find-root": "npm:find-root@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.3"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@1.3.1": {
      "caniuse-db": "npm:caniuse-db@1.0.30000446",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:buffer-equal@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
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
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.34",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
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
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.0.34"
    },
    "npm:earcut@2.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:escodegen@1.3.3": {
      "esprima": "npm:esprima@1.1.1",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.1": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
      "core-js": "npm:core-js@1.2.6",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:find-root@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.11.0"
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
    "npm:lodash@4.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:node-fetch@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:pixi.js@3.0.10": {
      "async": "npm:async@1.5.2",
      "brfs": "npm:brfs@1.4.3",
      "browserify-versionify": "npm:browserify-versionify@1.0.6",
      "earcut": "npm:earcut@2.1.1",
      "eventemitter3": "npm:eventemitter3@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "resource-loader": "npm:resource-loader@1.6.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
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
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:postcss@5.0.19": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:quote-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.4.2"
    },
    "npm:quote-stream@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-equal": "npm:buffer-equal@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.1"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.0.1": {
      "react": "npm:react@15.0.1"
    },
    "npm:react@15.0.1": {
      "fbjs": "npm:fbjs@0.8.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "object-assign": "npm:object-assign@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "inline-process-browser": "npm:inline-process-browser@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.16",
      "esprima": "npm:esprima@2.7.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.4"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:resource-loader@1.6.4": {
      "async": "npm:async@0.9.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "eventemitter3": "npm:eventemitter3@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sass.js@0.9.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:static-module@1.3.1": {
      "concat-stream": "npm:concat-stream@1.4.10",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.1",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.34"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@0.6.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:toxiclibsjs@0.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.1"
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.11.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    }
  }
});
