if (!global._babelPolyfill) {
  global._babelPolyfill = true;

  require('core-js/shim');

  require('regenerator-runtime/runtime');
}