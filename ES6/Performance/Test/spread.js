let spreadCount = 500000;
let spreadData = ["Muller", "Bruce", "Alex", "Bravo", "Joseph", "Forrest", "Walter"];

function doSpread(p1, p2, p3, p4, p5, p6, p7){
    console.log(p1, p2, p3, p4, p5, p6, p7);
}

function testES5Spread(){
    testES5(function(){
        for(let i = 0; i < spreadCount; i++){
            doSpread(spreadData[0], spreadData[1], spreadData[2], spreadData[3], spreadData[4], spreadData[5], spreadData[6], spreadData[7]);
        }
    })
}

function testES6Spread(){
    testES6(function(){
        for(let i = 0; i < spreadCount; i++){
            doSpread(...spreadData);
        }
    })
}