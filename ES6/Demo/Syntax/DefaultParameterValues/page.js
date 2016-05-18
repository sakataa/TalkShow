function Ex1(){
	let foo = function(x, y){
		x = x || 11;
		y = y || 31;
		console.log(x + y);
	}
	
	foo();  // 42
	foo( 5, 6 );  // 11
	foo( 5 );  // 36
	foo( null, 6 );  // 17
	foo( 0, 42 );  // 53 <-- Oops, not 42
}


function Ex2(){
	let foo = function(x, y){
		x = (x !== undefined) ? x : 11;
		y = (y !== undefined) ? y : 31;
		console.log(x + y);
	}
	
	foo( 0, 42 );  // 42
	foo( undefined, 6 );  // 17
    foo( null, 6 );  // 6
}

function Ex3(){
	let foo = function(x, y){
		x = (0 in arguments) ? x : 11;
		y = (1 in arguments) ? y : 31;
		console.log(x + y);
	}
	
	foo( 5 );  // 36
	foo( 5, undefined );  // NaN
}

function Ex4(){
	let foo = function(x = 11, y = 31){
		console.log(x + y);
	}
	
	foo();  // 42
	foo( 5, 6 );  // 11
	foo( 0, 42 );  // 42
	foo( 5 );  // 36
	foo( 5, undefined );  // 36 <-- `undefined` is missing
	foo( 5, null );  // 5 <-- null coerces to `0`
	foo( undefined, 6 );  // 17 <-- `undefined` is missing
	foo( null, 6 );  // 6 <-- null coerces to `0`
}

function Ex5(){
	let bar = function(val) {
		console.log( "bar called!" );
		return y + val;
	}
	let foo = function(x = y + 3, z = bar(x)) {
		console.log(x, z);
	}
	let y = 5;
	foo();  // "bar called"
	        // 8 13
	foo( 10 );  // "bar called"
	            // 10 15
	y = 6;
	foo( undefined, 10 );  // 9 10
}

function Ex6(){
	var w = 1, z = 2;
	let foo = function(x = w + 1, y = x + 1, z = z + 1) {
		console.log(x, y, z);
	}
	foo();  // ReferenceError
}