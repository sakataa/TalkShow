function Ex1(){
    let a = ["a" , "b" , "c" , "d" , "e" ];
    for (let val of a) {
        console.log( val );
    }
    // "a" "b" "c" "d" "e"
}

function Ex2(){
    let objects = [ {Id: 1, Name: "A"}, {Id: 2, Name: "B"}, {Id: 3, Name: "C"}, {Id: 4, Name: "D"} ];
    for (let item of objects) {
        console.log(`Id: ${item.Id}, Name: ${item.Name}`);
    }
    // Id: 1, Name: A
    // Id: 2, Name: B
    // Id: 3, Name: C
    // Id: 4, Name: D
}