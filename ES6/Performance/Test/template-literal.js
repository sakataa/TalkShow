let data = ["Muller", "Bruce", "Alex", "Bravo", "Joseph", "Forrest", "Walter"];
let templateLiteralCount = 100000000;

function testES5TemplateLiteral(){
    testES5(function(){
        for(let i = 0; i < templateLiteralCount; i++){
            data[0] + ' ' + data[1] + ' ' + data[2] + ' ' + data[3]+ '\n' 
            + ' ' + data[4]+ ' ' + data[5]+ ' ' + data[6];
        }
    })
}

function testES6TemplateLiteral(){
    testES6(function(){
        for(let i = 0; i < templateLiteralCount; i++){
            `${data[0]} ${data[1]} ${data[2]} ${data[3]}
             ${data[4]} ${data[5]} ${data[6]}`;
        }
    })
}