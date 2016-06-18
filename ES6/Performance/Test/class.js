function ES5Class(){
    this.name = "ES5";
}
ES5Class.prototype.work = function(){}

class ES6Class{
    constructor(){
        this.name = "ES6";
    }
    work(){
    }
}

function testES5Class(){
    testES5(function(){
        for(let i = 0; i < defaultLength; i++){
            let es5Class = new ES5Class();
            es5Class.work();
        }
    })
}

function testES6Class(){
    testES6(function(){
        for(let i = 0; i < defaultLength; i++){
            let es6Class = new ES6Class();
            es6Class.work();
        }
    })
}