import * as es6Module from "../export/exporting";

function Ex4() {
    es6Module.foo();
    console.log(es6Module.bar);
    console.log(es6Module.awesome);
    console.log(es6Module.obj);
    es6Module.privateFunc();//TypeError
}

document.getElementById('btnEx4').addEventListener('click', function () {
    Ex4();
});