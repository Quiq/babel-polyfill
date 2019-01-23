if (!window.__quiq__disablePolyfill && !global._babelPolyfill) {
  require('core-js/shim');
  require('regenerator-runtime/runtime');
}