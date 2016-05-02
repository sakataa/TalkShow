function Ex1(){
    let a = NaN, b = "NaN" , c = 42;
    
    console.log(isNaN( a ));  // true
    console.log(isNaN( b ));  // true -- oops!
    console.log(isNaN( c ));  // false
    console.log(Number.isNaN( a ));  // true
    console.log(Number.isNaN( b ));  // false -- fixed!
    console.log(Number.isNaN( c ));  // false
}

function Ex2(){
    let a = NaN, b = Infinity, c = 42;
    
    console.log(Number.isFinite( a ));  // false
    console.log(Number.isFinite( b ));  // false
    console.log(Number.isFinite( c ));  // true
    
    let d = "42" ;
    console.log(isFinite( d ));  // true
    console.log(Number.isFinite( d ));  // false
}

function Ex3(){
    console.log(Number.isInteger( 4 ));  // true
    console.log(Number.isInteger( 4.2 ));  // false
    
    let x = Math. pow( 2, 53 ),
    y = Math. pow( - 2, 53 );
    console.log(Number.isSafeInteger( x - 1 ));  // true
    console.log(Number.isSafeInteger( y + 1 ));  // true
    console.log(Number.isSafeInteger( x ));  // false
    console.log(Number.isSafeInteger( y ));  // false
}