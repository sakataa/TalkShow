function Ex1(){
    let x = 2, y = 3, o = { x, y };
    console.log("Example 1 - ES5:");
    console.log(o);
    
    x = 2, y = 3, o = { x, y }; 
    console.log("Example 1 - ES6:");
    console.log(o);
}

function Ex2(){
    let o = {
        x: function() {
        },
        y: function() {
        }
    };    
    console.log("Example 2 - ES5:");
    console.log(o);
    
    o = {
        x() {
        },
        y() {
        }
    }    
    console.log("Example 2 - ES6:");
    console.log(o);
}

function Ex3(){
    let prefix = "user_" ;
    let o = {
        baz: function() {},
        [ prefix + "foo" ] : "foo",
        [ prefix + "bar" ] : function() {}
    };
    
    //ES5
    o[ prefix + "foo1" ] = "foo1"
    o[ prefix + "bar1" ] = function() {}
    
    console.log("Example 2 - ES6:");
    console.log(o);
}