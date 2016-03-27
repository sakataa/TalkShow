function Ex1(){
    
}

function Ex2(){
    let re2 = /foo/y, // <-- notice the `y` sticky flag
    str = "++foo++" ;
    
    console.log(`Example 2:`);
    
    console.log(`lastIndex equal 0`);
    console.log(re2.lastIndex);// 0
    console.log(re2.test( str ));  // false -- "foo" not found at `0`
    console.log(re2.lastIndex);  // 0
    
    re2. lastIndex = 2;
    console.log(`lastIndex equal 2`);
    console.log(re2.test( str ));  // true
    console.log(re2.lastIndex);  // 5 -- updated to after previous match
    console.log(re2.test( str ));  // false
    console.log(re2.lastIndex);  // 0 -- reset after previous match failure
}