import * as anotherFile from "../export/exporting-anotherfile";

function Ex2() {
    anotherFile.foo();
    console.log(anotherFile.bar);
    console.log(anotherFile.awesome);
    console.log(anotherFile.obj);
}

document.getElementById('btnEx2').addEventListener('click', function () {
    Ex2();
});