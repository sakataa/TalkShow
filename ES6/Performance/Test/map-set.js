resetTime();
let length = 10000000;
let lengthLookup = 1000000000;

let keys = [],
    values = [],
    es5Set = [],
    key = {};

let map = new Map(),
    set = new Set();

function testES5MapSetAddItem(){
    testES5(function(){        
        for (var i = 0; i < length; i++) {
            keys.push(i);
            values.push(i);
            es5Set.push(i);
        }

        for (var i = 0; i < length; i++) {
            keys.push(key);
            values.push(i);
            es5Set.push(key);
        }       
    })
}

function testES6MapSetAddItem(){
    testES6(function(){       
        for (var i = 0; i < length; i++) {
            map.set(i, i);
            set.add(i);
        }

        for (var i = 0; i < length; i++) {
            map.set(key, i);
            set.add(key);
        }
    })    
}

function testES5MapSetLookup(){
    testES5(function(){
        for (var i = 0; i < lengthLookup; i++) {
            es5Set.indexOf(key) >= 0 && keys.indexOf(key) >= 0;
        }
    })
}

function testES6MapSetLookup(){
    testES6(function(){
        for (var i = 0; i < lengthLookup; i++) {
            map.has(key) && set.has(key);
        }
    })
}