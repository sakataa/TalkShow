function Ex1() {
    class Employee {
        constructor(name) {
            this._name = name;
        }

        doWork() {
            return `${this._name} is working`;
        }

        get name() {
            return this._name.toUpperCase();
        }

        set name(newName) {
            if (newName) {
                this._name = newName;
            }
        }
        
        static staticMethod(){
            console.log(`call static method`);
        }
        
        static get staticProperty() {
            return "staticProperty";
        }
    }

    let developer = new Employee("Scott");
    console.log(developer._name);
    console.log(developer.name);
    console.log(developer.doWork());
    
    developer.name = "Walter";
    console.log(developer._name);
    console.log(developer.name);
    console.log(developer.doWork());
    
    Employee.staticMethod();
    console.log(Employee.staticProperty);
}

function Ex2(){
    class Animal{
        constructor(name){
            this._name = name;
        }
        
        move(){
            console.log(`${this._name} is moving`);
        }
        
        eat(){
            console.log(`${this._name} is eating`);
        }
    }
    
    class Dog extends Animal{
        constructor(name, color){
            super(name);
            this._color = color;        
        }
        
        eat(){
            super.eat();
            console.log(`Its hair is ${this._color}, nice!!!`);
        }
        
        bark(){
            console.log(`A dog named ${this._name} with ${this._color} hair is barking`);
        }
    }
    
    let dog = new Dog("chihuahua", "black");
    dog.move();
    dog.eat();
    dog.bark();
}

function Ex3(){
    class MyArray extends Array {
        first() { return this[0]; }
        last() { return this[this.length - 1]; }
    }
    var a = new MyArray(1, 2, 3);
    console.log(a.length);  // 3
    console.log(a);  // [1,2,3]
    console.log(a.first());  // 1
    console.log(a.last());  // 3
}

function Ex4(){
    class ParentA {
        constructor() { this.id = "a"; }
        foo() { console.log("ParentA:", this.id); }
    }
    class ParentB {
        constructor() { this.id = "b"; }
        foo() { console.log("ParentB:", this.id); }
    }
    class ChildA extends ParentA {
        foo() {
            super.foo();
            console.log("ChildA:", this.id);
        }
    }
    class ChildB extends ParentB {
        foo() {
            super.foo();
            console.log("ChildB:", this.id);
        }
    }
    var a = new ChildA();
    a.foo();  // ParentA: a
    // ChildA: a
    var b = new ChildB();  // ParentB: b
    b.foo();  // ChildB: b
    
    // borrow `b.foo()` to use in `a` context
    b.foo.call(a);  // ParentB: a
    // ChildB: a
}

function Ex5(){
    class Foo {
        constructor() {
            console.log("Foo: ", new.target.name);
        }
    }
    class Bar extends Foo {
        constructor() {
            super();
            console.log("Bar: ", new.target.name);
        }
        baz() {
            console.log("baz: ", new.target);
        }
    }
    var a = new Foo();
    // Foo: Foo
    var b = new Bar();
    // Foo: Bar
    // Bar: Bar
    b.baz(); // baz: undefined
}

function Ex6(){
    class Foo {
        // defer `species` to derived constructor
        static get [Symbol.species]() { return this; }
        spawn() {
            return new this.constructor[Symbol.species]();
        }
    }
    class Bar extends Foo {
        // force `species` to be parent constructor
        static get [Symbol.species]() { return Foo; }
    }
    var a = new Foo();
    var b = a.spawn();
    console.log(b instanceof Foo);  // true
    var x = new Bar();
    var y = x.spawn();
    console.log(y instanceof Bar);  // false
    console.log(y instanceof Foo);  // true
}


