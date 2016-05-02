function Ex1(){
	foo( 1, 2, 3, 4, 5 );  // 1 2 [3,4,5]
}
function foo(x, y, ... z) {
	console.log( x, y, z );
}