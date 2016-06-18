let restCount = 100000;
let restData = ["Muller", "Bruce", "Alex", "Bravo", "Joseph", "Forrest", "Walter"];

function es5Rest(){
    console.log("first:", arguments[0]);
	console.log("rest:", Array.prototype.slice.call(arguments, 1));
}

function es6Rest(p1, ...rest){
    console.log("first:", p1);
    console.log("rest:", rest);
}

function testES5Rest(){
    testES5(function(){
        for(let i = 0; i < restCount; i++){
            es5Rest(restData[0], restData[1], restData[2], restData[3], restData[4], restData[5], restData[6], restData[7]);
        }
    })
}

function testES6Rest(){
    testES6(function(){
        for(let i = 0; i < restCount; i++){
            es6Rest(restData[0], restData[1], restData[2], restData[3], restData[4], restData[5], restData[6], restData[7]);
        }
    })
}