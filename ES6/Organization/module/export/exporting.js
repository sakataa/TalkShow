export function foo() {
    console.log("foo");
}
let awesome = 42;
let bar = [1, 2, 3];
let baz = {Id: 1, Name: "ABC"};
export { bar, awesome, baz as obj };

// later
awesome = 100;