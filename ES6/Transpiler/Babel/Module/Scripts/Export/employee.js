import { Person } from "./person"

let _title = new WeakMap();
export class Employee extends Person {
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

export let count = 1;
export function square ( x ) {
	return x * x;
}