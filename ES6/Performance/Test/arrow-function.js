let arrowFunctionLength = 200000;
let es5Obj = {
    value: 40,
    fn: function(){
        console.log("ES5");
    },
    getValue: function(){
        var self = this;
        return function(){
            return self.value;
        }
    }
}

let es6Obj = {
    value: 40,
    fn: () => {
        console.log("ES6");
    },
    getValue: function() {
        return () => this.value;
    }
}

function testES5ArrowFunction(){
    testES5(function(){
        for(let i = 0; i < arrowFunctionLength; i++){
            es5Obj.fn();
        }
    })
}

function testES6ArrowFunction(){
    testES6(function(){
        for(let i = 0; i < arrowFunctionLength; i++){
            es6Obj.fn();
        }
    })
}

function testES5ThisArrowFunction(){
    testES5(function(){
        for(let i = 0; i < arrowFunctionLength; i++){
            console.log(es5Obj.getValue()());
        }
    })
}

function testES6ThisArrowFunction(){
    testES6(function(){
        for(let i = 0; i < arrowFunctionLength; i++){
            console.log(es6Obj.getValue()());
        }
    })
}