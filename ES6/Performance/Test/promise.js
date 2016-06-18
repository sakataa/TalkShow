let url = "https://cdn.rawgit.com/sakataa/TalkShow/ES6/ES6/Demo/Organization/Generator/Asynchronous/Data/story.json";
let promiseCount = 1000;

function testES5Promise(){
    testES5(function(){
        for(let i = 0; i < promiseCount; i++){
            $.ajax({
                url: url
            })
            .then(function( data, textStatus, jqXHR ) {
                //console.log("ES5: " + i);              
            });
        }
    })
}

function testES6Promise(){
    testES6(function(){
        for(let i = 0; i < promiseCount; i++){
            new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("GET", url);

                request.onload = function () {
                    if (request.status === 200) {
                        resolve(request.response);
                    }
                    else {
                        reject(Error(request.statusText));
                    }
                };

                request.send();
            })
            .then( (data) => { /*console.log("ES6: " + i);*/ } );
        }
    })
}






