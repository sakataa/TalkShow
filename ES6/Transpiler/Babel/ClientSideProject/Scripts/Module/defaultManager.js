import fnDefault, * as defaultModule from "./defaultLib"

console.log("defaultLib.js");
fnDefault();

defaultModule.example();

console.log(defaultModule.count);
defaultModule.count = 5;
console.log(defaultModule.count);

defaultModule.increase();
console.log(defaultModule.count);

console.log(defaultModule.privateData);


