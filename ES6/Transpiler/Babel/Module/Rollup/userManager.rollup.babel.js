'use strict';

var babelHelpers = {};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers.get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers;

var _name = Symbol();
var Person = function () {
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

var _title = new WeakMap();
var Employee = function (_Person) {
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
}(Person);

var employee = new Employee("Rapth", "Developer");
console.log(employee.title);
employee.prototypeMethod();
Employee.staticMethod();

document.getElementById("output").innerHTML = "Name: " + employee.name + " - Title: " + employee.title;