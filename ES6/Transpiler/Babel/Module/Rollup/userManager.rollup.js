'use strict';

let _name = Symbol();
class Person {
     constructor(name) {
         this[_name] = name;
     }
     prototypeMethod() {
         console.log(`call prototype method`);
     }
     static staticMethod(){
         console.log(`call static method`);
     }
     get name() {
         return this[_name].toUpperCase();
     }
     set name(newName) {
         this[_name] = newName;
     }
}

let _title = new WeakMap();
class Employee$1 extends Person {
    constructor(name, title){
      super(name);
      _title.set(this, title);            
    }
    get title(){
      return _title.get(this);
    }
    prototypeMethod() {
      super.prototypeMethod();
      console.log(`name: ${this.name}, title: ${this.title}`);
    }
}

const Employee = Employee$1;
let employee = new Employee("Rapth", "Developer");
console.log(employee.title);
employee.prototypeMethod();
Employee.staticMethod();

document.getElementById("output").innerHTML = `Name: ${employee.name} - Title: ${employee.title}`