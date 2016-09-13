let classLength = 100000;

function ES5Class(){
    this.name = "ES5";
}
ES5Class.prototype.work = function(){
    console.log("working");
}

class ES6Class{
    constructor(){
        this.name = "ES6";
    }
    work(){
        console.log("working");
    }
}

function testES5Class(){
    testES5(function(){
        for(let i = 0; i < classLength; i++){
            let es5Class = new ES5Class();
            es5Class.work();
        }
    })
}

function testES6Class(){
    testES6(function(){
        for(let i = 0; i < classLength; i++){
            let es6Class = new ES6Class();
            es6Class.work();
        }
    })
}