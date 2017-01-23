import {foo as aliasFoo, bar, awesome, obj as instance} from "../export/exporting";

function Ex1() {
    aliasFoo();
    console.log(bar);
    console.log(awesome);
    console.log(instance);
    const a;
}

document.getElementById('btnEx1').addEventListener('click', function () {
    Ex1();
});