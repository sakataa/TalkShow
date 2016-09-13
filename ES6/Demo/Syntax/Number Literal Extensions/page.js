function Ex1(){
    let dec = 42,
    oct = 0o52,  // or `0O52` :(
    hex = 0x2a,  // or `0X2a` :/
    bin = 0b101010;  // or `0B101010` :/
    
    console.log(`Example 1:`);
    console.log(Number(dec));  // 42
    console.log(Number(oct));  // 42
    console.log(Number(hex));  // 42
    console.log(Number(bin));  // 42
}

function Ex2(){
    let a = 42;
    
    console.log(`Example 2:`);
    console.log(a.toString());  // "42" -- also `a.toString( 10 )`
    console.log(a.toString( 8 ));  // "52"
    console.log(a.toString( 16 ));  // "2a"
    console.log(a.toString( 2 ));  // "101010"
}