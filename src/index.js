if (window.__quiq__disablePolyfill || global._babelPolyfill) {
  // throw new Error("only one instance of @babel/polyfill is allowed");
  return;
}
global._babelPolyfill = true;

import "core-js/shim";
import "regenerator-runtime/runtime";
