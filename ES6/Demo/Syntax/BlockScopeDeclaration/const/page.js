function Ex1() {
	const a = 2;
	console.log(a);  // 2
	a = 3;  // TypeError!
}

function Ex2(){
	const a = [1, 2, 3];
	 a.push(4);
	 a.push(5);
	 console.log(a);  // [1,2,3,4,5]
	 a = 42;  // TypeError!
}