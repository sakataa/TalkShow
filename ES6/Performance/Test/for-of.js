let forLoopCount = 10000;
let arrayData = [];
for(let i = 0; i < forLoopCount; i++){
    arrayData.push({Id: i, Value: i});
}

function testES5ForOfLoop(){
    testES5(function(){
        // for(let i = 0; i < arrayData.length; i++){
        //     console.log(arrayData[i]);
        // }
        arrayData.forEach(function(item){
            console.log(item);
        });
    });
}

function testES6ForOfLoop(){
    testES6(function(){
        for(let item of arrayData){
            console.log(item);        
        }
    });
}