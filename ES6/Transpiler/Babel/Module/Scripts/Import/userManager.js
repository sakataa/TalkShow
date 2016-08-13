import * as employeeApi from "../Export/employee"

const Employee = employeeApi.Employee;
let employee = new Employee("Rapth", "Developer");
console.log(employee.title);
employee.prototypeMethod();
Employee.staticMethod();

document.getElementById("output").innerHTML = `Name: ${employee.name} - Title: ${employee.title}`