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
    let re = /\d+\.\s(.*?)(?:\s|$)/y;
    let str = "1. foo 2. bar 3. baz";
    
    console.log(`Example 3:`);
    console.log(re.exec( str )); //[ "1. foo ", "foo" ]
    console.log(re.lastIndex); //7
    console.log(re.exec( str )); //[ "2. bar ", "bar" ]
    console.log(re.lastIndex); //14
    console.log(re.exec( str )); //["3. baz", "baz"]
    console.log(re.lastIndex); //20
    console.log(re.exec( str )); //null
    console.log(re.lastIndex); //0
}

function Ex4(){
    let re = /o+./g, // <-- look, `g`!
    //let re = /o+./y, // <-- look, `y`!
    str = "foot book more";
    
    console.log(re.exec( str )); // ["oot"]
    console.log(re.lastIndex); // 4
    console.log(re.exec( str )); // ["ook"]
    console.log(re.lastIndex); // 9
    console.log(re.exec( str )); // ["or"]
    console.log(re.lastIndex); // 13
    console.log(re.exec( str )); // null -- no more matches!
    console.log(re.lastIndex); // 0 -- starts over now!
}

function Ex5(){
    let re = /foo/ig;
    console.log(re.flags); // "gi"
}

function Ex6() {
    let re1 = /foo*/y;
    console.log(re1.source); // "foo*"
    console.log(re1.flags); // "y"
    let re2 = new RegExp( re1 );
    console.log(re2.source); // "foo*"
    console.log(re2.flags); // "y"
    let re3 = new RegExp( re1, "ig" );
    console.log(re3.source); // "foo*"
    console.log(re3.flags); // "gi"
}

function Ex7() {
    let regex = /^foo/my;
    
    regex.lastIndex = 2;
    console.log(regex.test("..foo")); // false
    regex.lastIndex = 2;
    console.log(regex.test(".\nfoo")); // true
    console.log(regex.lastIndex); //5
}