function Ex1(){
    let sym = Symbol("some optional description");
    console.log(typeof sym);  // "symbol"
    console.log(sym.toString());  // "Symbol(some optional description)"
}

function Ex2(){
    const INSTANCE = Symbol( "instance" );
    function HappyFace() {
        if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
        
        function smile() { console.log("smile") }
        return HappyFace[INSTANCE] = {
            smile: smile
        };
    }
    
    let me = HappyFace(),
    you = HappyFace();
    console.log(me === you);
} 

function Ex3(){
    let s = Symbol.for( "something cool" );
    let desc = Symbol.keyFor( s );
    console.log( desc );  // "something cool"
    // get the symbol from the registry again
    let s2 = Symbol.for( desc );
    console.log(s2 === s);  // true 
}

function Ex4() {
    let o = {
        foo: 42,
        [Symbol("bar")] : "hello world" ,
        [Symbol("xxx")] : "hello xxx" ,
        baz: true
    };
    
    let propertyNames = Object.getOwnPropertyNames( o ); 
    console.log(propertyNames);// [ "foo","baz" ]
    let propertySymbols = Object.getOwnPropertySymbols( o );  // [ Symbol(bar) ]
    console.log(propertySymbols);// [ Symbol(bar) ]
    
    console.log(o[propertySymbols[0]]); //"hello world"
}

