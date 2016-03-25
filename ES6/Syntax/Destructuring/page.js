function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

function Ex1(){
    let [ a, b, c ] = foo();

    console.log("Example 1:");
    console.log(a, b, c ); // 1 2 3
}

function Ex2(){
    var { x: x, y: y, z: z } = bar();

    console.log("Example 2:");
    console. log( x, y, z ); // 4 5 6
}

function Ex3(){
    var { x, y, z } = bar();

    console.log("Example 3:");
    console. log( x, y, z ); // 4 5 6
}

function Ex4(){
    var { x: bam, y: baz, z: bap } = bar();
    
    console.log("Example 4:");
    console. log( bam, baz, bap );  // 4 5 6
    console. log( x, y, z );  // ReferenceError
}

function Ex5(){
    var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
    var { x = 5, y = 10, z = 15, w = 20 } = bar();

    console.log("Example 5:")
    console.log( a, b, c, d ); // 1 2 3 12
    console.log( x, y, z, w ); // 4 5 6 20
}

function Ex6(){
    var x = 200, y = 300, z = 100;
    var o1 = { x: { y: 42 }, z: { y: z } };
    
    ( { y: x = { y: y } } = o1 );
    ( { z: y = { y: z } } = o1 );
    ( { x: z = { y: x } } = o1 );

    console.log("Example 6:")
    console. log( x.y, y.y, z.y ); // 300 100 42
}

function Ex7(){
    var a1 = [ 1, [2, 3, 4], 5 ];
    var o1 = { x: { y: { z: 6 } } };

    var [ a, [ b, c, d ], e ] = a1;
    var { x: { y: { z: w } } } = o1;
    
    console.log("Example 7:")
    console.log( a, b, c, d, e ); // 1 2 3 4 5
    console.log( w ); // 6
}

function Ex8(){
    var App = {
        model: {
            User: "Walter"
        }
    };
    // instead of:
    // var User = App.model.User;
    var { model: { User } } = App;
    
    console.log("Example 8:")
    console.log(User);
}

function Ex9(){
    let foo = function( [ x, y ] ) {
        console.log( x, y );
    }

    console.log("Example 9:")
    foo( [ 1, 2 ] ); // 1 2
    foo( [ 1 ] ); // 1 undefined
    foo( [] ); // undefined undefined
}

function Ex10(){
    let foo = function( {x, y} ) {
        console.log( x, y );
    }
    
    console.log("Example 10:")
    foo( { y: 1, x: 2 } ); // 2 1
    foo( { y: 42 } ); // undefined 42
    foo( {} ); // undefined undefined
}

function Ex11(){
    let defaults = {
        options: {
            Remove: true,
            Enable: false,
            Instance: {}
        },
        log: {
            Warn: true,
            Error: true
        }
    };
    
    let config = {
        options: {
            Remove: false,
            Instance: null
        }
    };


    // destructure (with default value assignments)
    let {
        options: {
            Remove = defaults.options.Remove,
            Enable = defaults.options.Enable,
            Instance = defaults.options.Instance
        } = {},
        
        log: {
            Warn = defaults.log.Warn,
            Error = defaults.log.Error
        } = {}
    } = config;
    
    // restructure
    config = {
        options: { Remove, Enable, Instance },
        log: { Warn, Error }
    };
    
    console.log("Example 11:")
    console.log(config);
}

function Ex12(){
    var a = 1;
    var b = 3;

    [a, b] = [b, a];
    
    console.log("Example 12:")
    console.log(a); // 3
    console.log(b); // 1
}

function Ex13(){
    let f = function() {
        return [1, 2, 3];
    }

    var [a, , b] = f();
    
    console.log("Example 13:")
    console.log(a); // 1
    console.log(b); // 3
}

function Ex14(){
    var a, b;
    ({a, b} = {a:1, b:2});
    
    console.log("Example 14:")
    console.log(a, b);
}

function Ex15(){
    let key = "z";
    let { [key]: foo } = { z: "bar" };
    
    console.log("Example 15:")
    console.log(foo); // "bar"
}

function Ex16(){
    let bar = function() {
        return { x: 4, y: 5, z: 6 };
    }   

    var which = "x" ,
    o = {};
    ( { [which] : o[which] } = bar() );
    
    console.log("Example 16:")
    console.log( o.x ); // 4
}

function Ex17(){
    var o = { a: 1, b: 2, c: 3 }, p = [4, 5, 6], a, b, c, x, y, z;
    
    ({a} = {b, c} = o);
    [x, y] = [z] = p;
    
    console.log("Example 17:")
    console.log( a, b, c ); // 1 2 3
    console.log( x, y, z ); // 4 5 4
}

function Ex18(){
    var a = [2, 3, 4];
    var [b, ...c] = a;
    
    console.log("Example 18:")
    console.log( b, c ); // 2 [3,4]
}
