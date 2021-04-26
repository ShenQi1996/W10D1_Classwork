/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n  constructor(htmlArr) {\n    this.htmlElements = htmlArr;\n  }\n\n  html(str) {\n    if (!str) {\n      let firstNode = this.htmlElements[0];\n      return firstNode.innerHTML;\n    }\n    for (let node of this.htmlElements) {\n      node.innerHTML = str;\n    }\n  }\n\n  empty() {\n    for (let node of this.htmlElements) {\n      node.innerHTML = \"\";\n    }\n  }\n\n  append(arg) {\n    if (typeof arg === \"string\") {\n      for (let node of this.htmlElements) {\n        let ihtml = node.innerHTML;\n        node.innerHTML = ihtml + arg;\n      }\n    }\n    if (arg instanceof DOMNodeCollection) {\n      for (let argNode of arg.htmlElements) {\n        for (let node of this.htmlElements) {\n          node.appendChild(argNode);\n        }\n      }\n    }\n    if (arg instanceof HTMLElement) {\n      arg = $l(arg);\n      this.append(arg);\n    }\n  }\n\n  attr(attrName, attrValue) {\n    if(!attrValue) {\n      for(let node of this.htmlElements) {\n        if (node.getAttribute(attrName)) return node.getAttribute(attrName);\n      }\n      return;\n    }\n    // set the attribute value for each element\n    for(let node of this.htmlElements) {\n      node.setAttribute(attrName,attrValue);\n    }\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection__WEBPACK_IMPORTED_MODULE_0__);\n// const DOMNodeCollection = require(\"./dom_node_collection\");\r\n\r\n\r\nWindow.prototype.$l = function (elSelector) {\r\n  if (typeof elSelector === \"string\") {\r\n    let $elementList = document.querySelectorAll(elSelector);\r\n    let newAr = Array.from($elementList);\r\n    return new (_dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default())(newAr);\r\n  }\r\n  if (elSelector instanceof HTMLElement) {\r\n    return new (_dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default())([elSelector]);\r\n  }\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  let $lis = window.$l(\"li\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;