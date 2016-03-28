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

function Ex3(){
    var re = /\d+\.\s(.*?)(?:\s|$)/y;
    let str = "1. foo 2. bar 3. baz";
    
    str.match(re); // [ "1. foo ", "foo" ]
    console.log(re.lastIndex); // 7 -- correct position!
    str.match(re); // [ "2. bar ", "bar" ]
    console.log(re.lastIndex); // 14 -- correct position!
    str.match(re); // ["3. baz", "baz"]
}