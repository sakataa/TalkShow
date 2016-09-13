import { Employee, count } from "./employee"

let employee = new Employee("Rapth", "Developer");
console.log(employee.title);
employee.prototypeMethod();
Employee.staticMethod();

document.getElementById("output").innerHTML = `Name: ${employee.name} -- Title: ${employee.title}`