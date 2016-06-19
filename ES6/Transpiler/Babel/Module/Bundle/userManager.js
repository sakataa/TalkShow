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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _employee = __webpack_require__(5);
	
	var employee = new _employee.Employee("Rapth", "Developer");
	console.log(employee.title);
	employee.prototypeMethod();
	_employee.Employee.staticMethod();
	
	document.getElementById("output").innerHTML = "Name: " + employee.name + " - Title: " + employee.title;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.count = exports.Employee = undefined;
	exports.square = square;
	
	var _person = __webpack_require__(6);
	
	var _title = new WeakMap();
	
	var Employee = exports.Employee = function (_Person) {
	  babelHelpers.inherits(Employee, _Person);
	
	  function Employee(name, title) {
	    babelHelpers.classCallCheck(this, Employee);
	
	    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));
	
	    _title.set(_this, title);
	    return _this;
	  }
	
	  babelHelpers.createClass(Employee, [{
	    key: "prototypeMethod",
	    value: function prototypeMethod() {
	      babelHelpers.get(Object.getPrototypeOf(Employee.prototype), "prototypeMethod", this).call(this);
	      console.log("name: " + this.name + ", title: " + this.title);
	    }
	  }, {
	    key: "title",
	    get: function get() {
	      return _title.get(this);
	    }
	  }]);
	  return Employee;
	}(_person.Person);
	
	var count = exports.count = 1;
	function square(x) {
	  return x * x;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var _name = Symbol();
	
	var Person = exports.Person = function () {
	    function Person(name) {
	        babelHelpers.classCallCheck(this, Person);
	
	        this[_name] = name;
	    }
	
	    babelHelpers.createClass(Person, [{
	        key: "prototypeMethod",
	        value: function prototypeMethod() {
	            console.log("call prototype method");
	        }
	    }, {
	        key: "name",
	        get: function get() {
	            return this[_name].toUpperCase();
	        },
	        set: function set(newName) {
	            this[_name] = newName;
	        }
	    }], [{
	        key: "staticMethod",
	        value: function staticMethod() {
	            console.log("call static method");
	        }
	    }]);
	    return Person;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=userManager.js.map