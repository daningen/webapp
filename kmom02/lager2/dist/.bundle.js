/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/order.js */ \"./src/order.js\");\n/* global home */\n\n\n\n\n(function IIFE() {\n    _src_order_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOrder();\n    console.log(\"hehheh\");\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWFpbi5qcz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBob21lICovXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBvcmRlciBmcm9tIFwiLi9zcmMvb3JkZXIuanNcIjtcblxuXG4oZnVuY3Rpb24gSUlGRSgpIHtcbiAgICBvcmRlci5nZXRPcmRlcigpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVoaGVoXCIpO1xufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\"use.strict\";\n\nvar order = (function order() {\n    var baseURL = \"https://lager.emilfolino.se/v2/\";\n    var apiKey = \"8e4ce3ab696d336c288e8d094260e759\";\n\n    function getOrder() {\n        fetch(`${baseURL}/orders?${apiKey}`)\n            .then(function(response) {\n                return response.json();\n            })\n            .then(function(result) {\n                console.log(result.data);\n            });\n    }\n    var publicAPI = {\n        getOrder: getOrder\n\n    };\n\n    return publicAPI;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3JkZXIuanM/ZGVkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZS5zdHJpY3RcIjtcblxudmFyIG9yZGVyID0gKGZ1bmN0aW9uIG9yZGVyKCkge1xuICAgIHZhciBiYXNlVVJMID0gXCJodHRwczovL2xhZ2VyLmVtaWxmb2xpbm8uc2UvdjIvXCI7XG4gICAgdmFyIGFwaUtleSA9IFwiOGU0Y2UzYWI2OTZkMzM2YzI4OGU4ZDA5NDI2MGU3NTlcIjtcblxuICAgIGZ1bmN0aW9uIGdldE9yZGVyKCkge1xuICAgICAgICBmZXRjaChgJHtiYXNlVVJMfS9vcmRlcnM/JHthcGlLZXl9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHB1YmxpY0FQSSA9IHtcbiAgICAgICAgZ2V0T3JkZXI6IGdldE9yZGVyXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHB1YmxpY0FQSTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG9yZGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/order.js\n");

/***/ })

/******/ });