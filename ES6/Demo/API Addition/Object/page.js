function Ex1(){
    let x = NaN, y = 0, z = - 0;
    
    console.log(x === x);  // false
    console.log(y === z);  // true
    console.log(Object.is( x, x ));  // true
    console.log(Object.is( y, z ));  // false
}

function Ex2(){
    let o = {
        foo: 42,
        [ Symbol( "bar" ) ] : "hello world" ,
        baz: true
    };
    
    let sym = Object.getOwnPropertySymbols( o );  // [ Symbol(bar) ]
    console.log(sym);
}

function Ex3() {
    var o1 = {
        foo() { console. log( "foo" ); }
    };
    var o2 = {
        // .. o2's definition ..
    };
    
    Object.setPrototypeOf( o2, o1 );
    // delegates to `o1.foo()`
    o2.foo();  // foo
}

function Ex4() {
    let o1 = { a: 1 };
    let o2 = { b: 2 };
    let o3 = { c: 3 };

    let obj = Object.assign(o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
    console.log(o1);  // { a: 1, b: 2, c: 3 }
}