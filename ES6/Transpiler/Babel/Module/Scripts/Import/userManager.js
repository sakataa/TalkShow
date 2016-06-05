import {Employee} from "../Export/employee"

let employee = new Employee("Rapth", "Developer");
console.log(employee.title);
employee.prototypeMethod();
Employee.staticMethod();

document.getElementById("output").innerHTML = `Name: ${employee.name} - Title: ${employee.title}`