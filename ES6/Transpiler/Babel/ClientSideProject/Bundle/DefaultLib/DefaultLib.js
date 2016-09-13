/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defaultLib = __webpack_require__(300);
	
	var defaultModule = _interopRequireWildcard(_defaultLib);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	console.log("defaultLib.js");
	(0, defaultModule.default)();
	
	defaultModule.example();
	
	console.log(defaultModule.count);
	defaultModule.count = 5;
	console.log(defaultModule.count);
	
	defaultModule.increase();
	console.log(defaultModule.count);
	
	console.log(defaultModule.privateData);

/***/ },

/***/ 300:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = insertLink;
	exports.example = example;
	var count = 0;
	var privateData = "Private";
	
	function insertLink() {
	    $("body").append("<a href=\"#\">This is link</a>");
	    console.log("DefaultLib.js: default function is called");
	}
	
	function example() {
	    console.log("DefaultLib.js: function example");
	}
	
	function increase() {
	    exports.count = count += 1;
	    console.log("DefaultLib.js: function increase");
	}
	
	exports.count = count;
	exports.increase = increase;

/***/ }

/******/ });
//# sourceMappingURL=DefaultLib.js.map