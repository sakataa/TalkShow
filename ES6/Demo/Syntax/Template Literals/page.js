function Ex1(){
    let name = "Walter" ;
    let greeting = `Hello ${name}!` ;
    
    console.log(`Example 1:`);
    console.log( greeting );  // "Hello Walter!"
    console.log( typeof greeting );  // "string"
}

function  Ex2() {
    let text =
    `Now is the time for all good men
to come to the aid of their
    country!` ;
    
    console.log(`Example 2:`);
    console.log( text );
    // Now is the time for all good men
    // to come to the aid of their
    // country!
}

function Ex3(){
    let upper = function (s) {
        return s.toUpperCase();
    }
    let who = "reader"
    let text =
    ` A very ${upper( "warm" )} welcome
to all of you ${upper( ` ${who}s` )}! ` ;
    
    console.log(`Example 3:`);
    console. log( text );
    // A very WARM welcome
    // to all of you READERS!
}

function Ex4(){
    let foo = function (strings, ... values) {
        console.log( strings );
        console.log( values );
    }
    let desc = "awesome" ;
    let yeah = "yeah!";
    
    console.log(`Example 4:`);
    foo`Everything is ${desc}, ${yeah}! ` ;
    // ["Everything is ", ", ", "! "]
    // ["awesome", "yeah!"]
}

function Ex5(){
    let bar = function () {
        return function foo(strings, ... values) {
            console.log( strings );
            console.log( values );
        }
    }
    
    var desc = "awesome" ;
    console.log(`Example 5:`);
    bar() `Everything is ${desc}!` ;
    // [ "Everything is ", "!"]
    // [ "awesome" ]
}

function Ex6(){
    let tag = function (strings, ... values) {
        return strings.reduce( 
            function(previousValue, currentValue, currentIndex) { 
                return previousValue + (currentIndex > 0 ? values[currentIndex - 1] : "" ) + currentValue; 
            });
    }
    
    var desc = "awesome" ;
    var text = tag `Everything is ${desc}!  ${desc}`;
    console.log(`Example 6:`);
    console.log( text );  // Everything is awesome!
}

function Ex7() {
    let formatDollar = function (strings, ... values) {
        return strings. reduce(
            function(previousValue, currentValue, currentIndex){
                if (currentIndex > 0) {
                    if (typeof values[currentIndex- 1] == "number" ) {
                        // look, also using interpolated
                        // string literals!
                        previousValue += `$${values[currentIndex- 1].toFixed(2)}` ;
                    }
                    else {
                        previousValue += values[currentIndex- 1];
                    }
                }
                return previousValue + currentValue;
            }, "");
    }
    var amt1 = 11.99, amt2 = amt1 * 1.08, name = "Walter" ;
    var text = formatDollar
    `Thanks for your purchase, ${name}! Your
    product cost was ${amt1}, which with tax
    comes out to ${amt2}.`
    
    console.log(`Example 7:`);
    console. log( text );
    // Thanks for your purchase, Walter! Your
    // product cost was $11.99, which with tax
    // comes out to $12.95.
}

function Ex8(){
    console.log(`Example 8 - Without raw string:`);
    console.log( `Hello\nWorld` );
    /* "Hello
    World" */
    
    console.log(`Example 8 - With raw string:`);
    console.log( String.raw `Hello\nWorld` );
    // "Hello\nWorld"
}

function Ex9(){
    let showRaw = function (strings, ... values) {
        console.log( strings );
        console.log( strings.raw );
        console.log( strings.raw[0] );
    }
    
    let name = "Walter";
    console.log(`Example 9:`);
    showRaw `Hi ${name}, Hello \n World` ;
    // [ "Hello ↵ World" ]
    // [ "Hello \n World" ]
}