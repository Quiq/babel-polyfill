if (window.__quiq__disablePolyfill) {
  // throw new Error("only one instance of @babel/polyfill is allowed");
  return;
}

import "core-js/shim";
import "regenerator-runtime/runtime";
