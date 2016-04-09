function Ex1(){
    let Fib = {
        [Symbol.iterator]() {
            let n1 = 1, n2 = 1;
            return {
                next() {
                    let current = n2;
                    n2 = n1;
                    n1 = n1 + current;
                    return { value: current, done: false };
                },
                return(v) {
                    console.log("Fibonacci sequence abandoned.");
                    return { value: v, done: true };
                }
            };
        }
    };
    
    for (let v of Fib) {
        console.log(v);
        if (v > 50) break;
    }
// 1 1 2 3 5 8 13 21 34 55
// Fibonacci sequence abandoned.
//current browser will not call return function, but in babel it will run
}

function Ex2(){
    let tasks = {
        [Symbol.iterator]() {
            let steps = this.actions.slice();
            return {
                // make the iterator an iterable
                [Symbol.iterator]() { return this; },
                next(...args) {
                    if (steps.length > 0) {
                        let item = steps.shift();
                        let res = item(...args);
                        return { value: res, done: false };
                    }
                    else {
                        return { done: true }
                    }
                },
                return(v) {
                    steps.length = 0;
                    return { value: v, done: true };
                }
            };
        },
        actions: []
    };

    tasks.actions.push(
        function step1(x) {
            console.log("step 1:", x);
            return x * 2;
        },
        function step2(x, y) {
            console.log("step 2:", x, y);
            return x + (y * 2);
        },
        function step3(x, y, z) {
            console.log("step 3:", x, y, z);
            return (x * y) + z;
        }
    );
    let it = tasks[Symbol.iterator]();
    let step1 = it.next(10);  // step 1: 10
    console.log(step1); // { value: 20, done: false }
    
    let step2 = it.next(20, 50);  // step 2: 20 50
    console.log(step2); // { value: 120, done: false }
    
    let step3 = it.next(20, 50, 120); // step 3: 20 50 120
    console.log(step3); // { value: 1120, done: false }
    
    let step4 = it.next(); 
    console.log(step4); // { done: true }
}

function Ex3(){
    let a = [1, 2, 3, 4, 5];
    let b = [0, ...a, 6];
    console.log(b);

    let it = b[Symbol.iterator]();
    let [x, y] = it;  // take just the first two elements from `it`
    let [z, ...w] = it;  // take the third, then the rest all at once
    
    // is `it` is fully exhausted? Yep.
    console.log(it.next());  // { value: undefined, done: true

    console.log(x);
    console.log(y);
    console.log(z);
    console.log(w);
}

