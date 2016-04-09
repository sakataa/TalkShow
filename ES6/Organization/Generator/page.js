function Ex1(){
    let foo = function *() {
        let x = yield 10;
        console.log(x);
    }
    
    let res = foo();
    console.log(res);
    
    console.log(res.next());
    console.log(res.next());
}

function Ex2(){
    let foo = function *() {
        let arr = [ yield 1 + 1 + 1, yield 2 + 1 + 1, yield 3 + 1 + 1];
        console.log( arr, yield 4 );
    }
    
    let res = foo();
    console.log(res);
    
    for(let v of res){
        console.log(v);
    }
    
    console.log(res.next());
}

function Ex3() {
    function* anotherGenerator(i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
    }

    function* generator(i) {
        yield i;
        yield* anotherGenerator(i);
        yield i + 10;
    }

    let gen = generator(10);
    
    for(let value of gen){
        console.log(value);
    }
    
    console.log(gen.next());
}

function Ex4(){
    let foo = function *() {
        let x = yield 1;
        let y = yield 2;
        let z = yield 3;
        console.log(x, y, z);
    }

    let it = foo();
    // start up the generator
    let step1 = it.next(); 
    console.log(step1); // { value: 1, done: false }
    // answer first question
    let step2 = it.next("foo"); 
    console.log(step2); // { value: 2, done: false }
    // answer second question
    let step3 = it.next("bar"); 
    console.log(step3); // { value: 3, done: false }
    // answer third question
    let step4 = it.next("baz"); // "foo" "bar" "baz"
    console.log(step4); // { value: undefined, done: true }
}

function Ex5(){
    function* foo(x) {
        if (x < 3) {
            x = yield* foo(x + 1);
        }
        return x * 2;
    }
    let it = foo(1);
    let result = it.next();  // { value: 24, done: true }
    console.log(result);
}

//run on Scratch JS, because return is unavailable on current browser
function Ex6(){
    function* foo() {
        try {
            yield 1;
            yield 2;
            yield 3;
        }
        finally {
            console.log("cleanup!");
        }
    }
    let it = foo();
    let step1 = it.next();  // { value: 1, done: false }
    console.log(step1);
    let step2 = it.return(42);  // { value: 42, done: true }
    console.log(step2);
    let step3 = it.next();  // { value: undefined, done: true }
    console.log(step3);
}

function Ex7(){
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
    }
    let it1 = foo();
    console.log(it1.next());  // { value: 1, done: false }
    console.log(it1.next());  // { value: 2, done: false }
    let it2 = foo();
    console.log(it2.next());  // { value: 1, done: false }
    console.log(it1.next());  // { value: 3, done: false }
    console.log(it2.next());  // { value: 2, done: false }
    console.log(it2.next());  // { value: 3, done: false }
    console.log(it2.next());  // { value: undefined, done: true }
    console.log(it1.next());  // { value: undefined, done: true }
}

function Ex8(){
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
    }
    let it = foo();
    let step1 = it.next();  // { value: 1, done: false }
    console.log(step1);
    try {
        it.throw("Oops!");
    }
    catch (err) {
        console.log(err); // Exception: Oops!
    }
    console.log(it.next());  // { value: undefined, done: true }
}

function Ex9(){
    function* foo() {
        try {
            yield 1;
        }
        catch (err) {
            console.log(err);
        }
        yield 2;
        throw "foo: e2";
    }
    function* bar() {
        try {
            yield* foo();
            console.log("never gets here");
        }
        catch (err) {
            console.log(err);
        }
    }
    let it = bar();
    try {
        let step1 = it.next();  // { value: 1, done: false }
        console.log(step1);
        
        let step2 = it.throw("e1");  // e1
        // { value: 2, done: false }
        console.log(step2);
        
        let step3 = it.next();  // foo: e2
        // { value: undefined, done: true }
        console.log(step3);
    }
    catch (err) {
        console.log("never gets here");
    }
    console.log(it.next());  // { value: undefined, done: true }
}

