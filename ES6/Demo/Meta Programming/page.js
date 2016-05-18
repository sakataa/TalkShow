function Ex1(){
    function Foo(greeting) {
        this. greeting = greeting;
    }
    Foo.prototype[Symbol.toStringTag] = "Foo" ;
    
    let a = new Foo( "hello" ),
    b = new Foo( "world" );
    b[Symbol.toStringTag] = "cool" ;
    
    console.log(a.toString());  // [object Foo]
    console.log(String( b ));  // [object cool]
}

function Ex2(){
    var arr = [1, 2, 3, 4, 5];
    let arrTemp = arr + 10;  // 1,2,3,4,510
    console.log(arrTemp);
    
    arr[Symbol.toPrimitive] = function(hint) {
        if (hint == "default" || hint == "number" ) {
            // sum all numbers
            return this.reduce( function(acc, curr){
                return acc + curr;
            }, 0 );
        }
    };
    
    arrTemp = arr + 10;  // 25
    console.log(arrTemp);
}

function Ex3(){
    let a = [1, 2, 3], b = [4, 5, 6];
    b[Symbol.isConcatSpreadable] = false;
    let arrConcat = [].concat( a, b );  // [1,2,3,[4,5,6]]
    
    console.log(arrConcat);
}

function Ex4(){
    let obj = { a: 1 };
    let handlers = {
        get(target, key, context) {
            // note: target === obj,
            // context === pobj
            console.log( "accessing: " , key );
            return Reflect.get(
                target, key, context
            );
        }
    };
    
    let pobj = new Proxy( obj, handlers );
    console.log(obj.a); // 1
    console.log(pobj.a); // accessing: a
                        // 1
}