"use strict";

var x = 3;
function func(randomize) {
    if (randomize) {
        var _x = Math.random();
        return _x;
    }

    return x;
}

console.log("Block scope:");
console.log(func(false)); // 3

var funcs = [];

var _loop = function _loop(i) {
    funcs.push(function () {
        console.log(i);
    });
};

for (var i = 0; i < 5; i++) {
    _loop(i);
}

console.log("Closure:");
funcs[3](); //3