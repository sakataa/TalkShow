let rootUrl = "Data";
let chapterRootUrl = rootUrl + "/Chapters";
let url = getUrl("story.json");
function Ex1() {   
    get(url).then(function (response) {
        console.log("Success!", response);
    }, function (error) {
        console.log("Failed!", error);
    });
}

function Ex2() {   
    get(url).then(function (response) {
        return JSON.parse(response);
    }).then(function (response) {
        console.log("Yey JSON!", response);
    });
}

function Ex3(){
    getJSON(url).then(function (response) {
        console.log("Yey JSON!", response);
    });
}

function Ex4(){
    getChapter(1);
    getChapter(4);
}

function Ex5(){
    getChapterWithReusingPromise(1);
    getChapterWithReusingPromise(4);
}

function Ex6(){
    var jsonPromise = new Promise(function (resolve, reject) {
        // JSON.parse throws an error if you feed it some
        // invalid JSON, so this implicitly rejects:
        resolve(JSON.parse("This ain't JSON"));
    });

    jsonPromise.then(function (data) {
        // This never happens:
        console.log("It worked!", data);
    }).catch(function (err) {
        // Instead, this happens:
        console.log("It failed!", err);
    });
}

function get(url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        //request.responseType = "json";

        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            }
            else {
                reject(Error(request.statusText));
            }
        };

        // Handle network errors
        request.onerror = function () {
            reject(Error("Network Error"));
        };

        request.send();
    });
}

function getChapter(index){   
    getJSON(url).then(function (story) {
        return getJSON(`${chapterRootUrl}/${story.chapterUrls[index - 1]}`);
    }).then(function (chapter) {
        console.log(`Got chapter ${index}!`, chapter);
    });
}

let storyPromise;
function getChapterWithReusingPromise(index){
    storyPromise = storyPromise || getJSON(url); //reuse promise, story.json only fetch once
    
    storyPromise.then(function (story) {
        return getJSON(`${chapterRootUrl}/${story.chapterUrls[index - 1]}`);
    }).then(function (chapter) {
        console.log(`Got chapter ${index}!`, chapter);
    });
}

function getUrl(fileName) {
    return rootUrl + `/${fileName}`;
}

function getJSON(url) {
    return get(url).then(JSON.parse);
}

