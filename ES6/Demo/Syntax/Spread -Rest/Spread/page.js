function Ex1(){
	foo( ...[1, 2, 3] );// 1 2 3
    console.log("Using apply");
	foo.apply( null, [1, 2, 3] );
}
function foo(x, y, z) {
	console.log(x);
	console.log(y);
	console.log(z);
}

function Ex2(){
	let a = [2, 3, 4];
	let b = [ 1, ... a, 5 ];
	console.log(b); // [1,2,3,4,5]
}