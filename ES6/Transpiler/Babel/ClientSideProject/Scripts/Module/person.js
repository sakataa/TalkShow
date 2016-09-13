let _name = Symbol();
export class Person {
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