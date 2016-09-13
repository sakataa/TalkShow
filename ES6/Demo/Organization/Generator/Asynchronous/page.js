const storyUrl = "Data/story.json";
const rootChapterUrl = "Data/Chapters";
let it;

function Ex1() {
    it = main();
    it.next();
}

function* main() {
    let storyJson = yield request(storyUrl);
    let story = JSON.parse(storyJson);
    console.log("Story: ", story);

    let firstChapterUrl = `${rootChapterUrl}/${story.chapterUrls[0]}`;
    let firstChapterJson = yield request(firstChapterUrl);
    let firstChapter = JSON.parse(firstChapterJson);
    console.log("The first chapter: ", firstChapter);
}

function request(url) {
    // this is where we're hiding the asynchronicity,
    // away from the main code of our generator
    // `it.next(..)` is the generator's iterator-resume
    // call
    makeAjaxCall(url, function (response) {
        it.next(response);
    });
}

function makeAjaxCall(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function () {
        if (request.status === 200) {
            callback(request.response);
        }
        else {
            callback(Error(request.statusText));
        }
    };

    // Handle network errors
    request.onerror = function () {
        reject(Error("Network Error"));
    };

    request.send();
}

