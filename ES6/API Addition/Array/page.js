function Ex1(){
    let a = Array( 3 );
    console.log("Array a");
    console.log(a.length);  // 3
    console.log(a[0]);  // undefined
    
    let b = Array.of( 3 );
    console.log("Array b");
    console.log(b.length);  // 1
    console.log(b[0]);  // 3
    
    let c = Array.of( 1, 2, 3 );
    console.log("Array c");
    console.log(c.length);  // 3
    console.log(c);  // [1,2,3]
}

function Ex2(){
    // array-like object
    let obj = {
        length: 3,
        0: "foo" ,
        1: "bar"
    };

    let arrLikeObject = Array.from(obj);
    console.log("Array-like object:");
    console.log(arrLikeObject); // ["foo", "bar", "undefined"]
    
    // Any iterable object...
    // Set
    let s = new Set(["foo", window]);
    let arrSet = Array.from(s);   
    console.log("Set:", arrSet); // ["foo", window]

    // Map
    let m = new Map([[1, 2], [2, 4], [4, 8]]);
    let arrMap = Array.from(m);                          
    console.log("Map:", arrMap); // [[1, 2], [2, 4], [4, 8]]  
}

function Ex3(){
    let arr1 = [1, 2, 3, 4, 5].copyWithin( 3, 0 );  // [1,2,3,1,2]
    let arr2 = [1, 2, 3, 4, 5].copyWithin( 3, 0, 1 );  // [1,2,3,1,5]
    let arr3 = [1, 2, 3, 4, 5].copyWithin( 0, - 2 );  // [4,5,3,4,5]
    let arr4 = [1, 2, 3, 4, 5].copyWithin( 0, - 2, - 1 );  // [4,2,3,4,5]
    
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
}

function Ex4(){
    let arr1 = Array( 4 ).fill( 2 ); //[2, 2, 2, 2]
    let arr2 = [1, 2, 3].fill(4, 1); // [1, 4, 4]
    let arr3 = [1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
    
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
}

function Ex5(){
    let a = [1, 2, 3, 4, 5];
    let match1 = a.find( function matcher(v){
        return v == "2"; // 2
    });  
    let match2 = a.find( function matcher(v){
        return v == 7;  // undefined
    });
    
    console.log(match1);
    console.log(match2);
    
    let points = [
        { x: 10, y: 20 },
        { x: 20, y: 30 },
        { x: 30, y: 40 },
        { x: 40, y: 50 },
        { x: 50, y: 60 }
    ];
    
    let match3 = points.find(function matcher(point) {
            return (
                point. x % 3 == 0 &&
                point. y % 4 == 0
            );
    }); // { x: 30, y: 40 }
    
    console.log(match3);
}

function Ex6(){
    let a = [1, 2, 3, 4, 5];
    let indx1 = a.findIndex( function matcher(v){
        return v == 2; // 1
    });  
    let indx2 = a.findIndex( function matcher(v){
        return v == 7;  // -1
    });
    
    console.log(indx1);
    console.log(indx2);
    
    let points = [
            { x: 10, y: 20 },
            { x: 20, y: 30 },
            { x: 30, y: 40 },
            { x: 40, y: 50 },
            { x: 50, y: 60 }
        ];
    let indx3 = points.findIndex( function matcher(point) {
        return (
            point. x % 3 == 0 &&
            point. y % 4 == 0
        );
    });  // 2
    let indx4 = points.findIndex( function matcher(point) {
        return (
            point. x % 6 == 0 &&
            point. y % 7 == 0
        );
    });  // -1
    
    console.log(indx3);
    console.log(indx4);
}

//Run on Scratch JS, current browser is not supported yet
function Ex7(){
    let a = [1, 2, 3];
    let values = [...a.values()];  // [1,2,3]
    let keys = [...a.keys()];  // [0,1,2]
    let entries = [...a.entries()];  // [ [0,1], [1,2], [2,3] ]
    let iterator = [...a[Symbol.iterator]()];  // [1,2,3]
    
    console.log(values);
    console.log(keys);
    console.log(entries);
    console.log(iterator);
}