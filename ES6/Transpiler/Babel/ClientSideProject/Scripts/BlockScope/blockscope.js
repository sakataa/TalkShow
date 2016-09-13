var x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    
    return x;
}

console.log("Block scope:");
console.log(func(false)); // 3

var funcs = [];
for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log(i);
	});
}

console.log("Closure:");
funcs[3](); //3