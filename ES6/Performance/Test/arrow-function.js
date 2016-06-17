let es5Obj = {
    value: 40,
    fn: function(){},
    getValue: function(){
        var self = this;
        return function(){
            return self.value;
        }
    }
}

let es6Obj = {
    value: 40,
    fn: () => {},
    getValue: function() {
        return () => this.value;
    }
}

function testES5ArrowFunction(){
    testES5(function(){
        for(var i = 0; i < defaultLength; i++){
            es5Obj.fn();
        }
    })
}

function testES6ArrowFunction(){
    testES6(function(){
        for(var i = 0; i < defaultLength; i++){
            es6Obj.fn();
        }
    })
}

function testES5ThisArrowFunction(){
    testES5(function(){
        for(var i = 0; i < defaultLength; i++){
            es5Obj.getValue()();
        }
    })
}

function testES6ThisArrowFunction(){
    testES6(function(){
        for(var i = 0; i < defaultLength; i++){
            es6Obj.getValue()();
        }
    })
}