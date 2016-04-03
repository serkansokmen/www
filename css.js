import { CSSLoader, Plugins } from 'jspm-loader-css'
import vars from 'postcss-simple-vars'

const {fetch, bundle} = new CSSLoader([
  vars,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName)

export { fetch, bundle }
