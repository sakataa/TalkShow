function Ex1(){
    /*ES5
    var gclef = "\uD834\uDD1E" ;
    console. log( gclef );  //
    */
    let snowman = "\u{2603}", letter = "\u{1f4e9}" ;
    
    console.log(`Example 1:`);
    console.log( snowman );//☃  
    console.log( letter ); //📩
}

function Ex2(){
    let s1 = "\xE9",
    s2 = "e\u0301";
    
    console.log(`Example 2:`);
    console.log(s1.length); //1
    console.log(s2.length); //2
    
    console.log([...s1]); //Array [ "é" ]
    console.log([...s2]); //Array [ "e", "́" ]
    
    console.log(s1.normalize().length);  // 1
    console.log(s2.normalize().length);  // 1
    
    console.log(s1 === s2);  // false
    console.log(s1 === s2.normalize());  // true
}

function Ex3() {
    let s1 = "abc\u0301d" ,
    s2 = "ab\u0107d" ,
    s3 = "ab\u{1d49e}d" ;
    
    console.log(`Example 3:`);
    console.log( s1 );  // "abćd"
    console.log( s2 );  // "abćd"
    console.log( s3 );  // "ab𝒞d"
    console.log(s1.charAt( 2 ));  // "c"
    console.log(s2.charAt( 2 ));  // "ć"
    console.log(s3.charAt( 2 ));  // "" <-- unprintable surrogate
    console.log(s3.charAt( 3 ));  // "" <-- unprintable surrogate
    
    console.log([... s1. normalize()][2]);  // "ć"
    console.log([... s2. normalize()][2]);  // "ć"
    console.log([... s3. normalize()][2]);  // "𝒞
}

function Ex4() {
    let s1 = "abc\u0301d" ,
    s2 = "ab\u0107d" ,
    s3 = "ab\u{1d49e}d" ;
    
    console.log(`Example 4:`);
    console.log(s1.normalize().codePointAt( 2 ));// "99"
    console.log(s2.normalize().codePointAt( 2 ));// "263"
    console.log(s3.normalize().codePointAt( 2 ));// "119966"
    
    console.log(String.fromCodePoint( s1.normalize().codePointAt( 2 ) ));// "ć"
    console.log(String.fromCodePoint( s2.normalize().codePointAt( 2 ) ));// "ć"
    console.log(String.fromCodePoint( s3.normalize().codePointAt( 2 ) ));// "𝒞
}