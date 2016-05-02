function Ex1() {
    var a = 2
	{
	    let a = 3
	    console.log(a) // 3
	}
	console.log( a )  // 2
}

function Ex2(){
	let a = 2;
	if (a > 1) {
		let b = a * 3;
        console.log("b:", b); //6
		for (let i = a; i <= b; i++) {
			let j = i + 10
            console.log("j" + i, j);
		}
		// 12 13 14 15 16
		let c = a + b;
        console.log("c:", c); //8
	}
	console.log("b:", b); //Uncaught ReferenceError: b is not defined
}

function Ex3(){
	{
		console.log(a); // undefined
		console.log(b); //Uncaught ReferenceError: b is not defined
		var a;
		let b;
	}
}

function Ex4(){
	let funcs = [];
	for (let i = 0; i < 5; i++) {
		funcs.push(function(){
			console.log(i);
		});
	}
	funcs[3]();  // 3
}