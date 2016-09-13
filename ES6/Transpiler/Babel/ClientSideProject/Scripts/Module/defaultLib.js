let count = 0;
let privateData = "Private";

export default function insertLink(){
    $("body").append(`<a href="#">This is link</a>`);
    console.log("DefaultLib.js: default function is called");
}

export function example(){
    console.log("DefaultLib.js: function example");
}

function increase(){
    count++;
    console.log("DefaultLib.js: function increase");
}

export {count, increase}


