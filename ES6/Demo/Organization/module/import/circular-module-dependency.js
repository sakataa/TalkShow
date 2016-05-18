import foo from "../export/circular-module-dependency/A";
import bar from "../export/circular-module-dependency/B";

function Ex3() {
    console.log(foo(25)); //11
    console.log(bar(25)); //11.5
}

document.getElementById('btnEx3').addEventListener('click', function () {
    Ex3();
});