let count = books.items.length;
let bookList = books.items;
let defaultLength = 1000000000;

function showES5Result(es5ElapsedTime){
    document.getElementById("es5ElapsedTime").innerText = es5ElapsedTime + " ms";
}
function showES6Result(es6ElapsedTime){
    document.getElementById("es6ElapsedTime").innerText = es6ElapsedTime + " ms";
}

function showResult(message){
    document.getElementById("result").innerText = message;   
}

function getResult(){
    if(es5EllapsedTime > 0 && es6EllapsedTime > 0){
        let subtraction = es6EllapsedTime - es5EllapsedTime;

        let message = "";
        let devitation = 0.00;
        if(subtraction > 0){
            devitation = es6EllapsedTime/es5EllapsedTime;
            message = `ES6 slower than ES5 ${devitation}x`;
        }
        else{
            devitation = es5EllapsedTime/es6EllapsedTime;
            message = `ES6 faster than ES5 ${devitation}x`;
        }
        showResult(message);
    }
}