function default_foo() {
    console.log("Default-foo");
}

let default_bar = 40;

//export default default_foo;
export {default_foo as default};
export { default_bar };
//export { default_foo as default, default_bar };

default_bar = 50;
default_foo = function () {
    console.log("edited default_foo");
}