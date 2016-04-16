let url = Util.getUrl("story.json");
function Ex1() {
    Util.getData(url).then(function (response) {
        console.log("Success!", response);
    }, function (error) {
        console.log("Failed!", error);
    });
}

function Ex2() {
    Util.getData(url).then(function (response) {
        return JSON.parse(response);
    }).then(function (response) {
        console.log("Yey JSON!", response);
    });
}

function Ex3() {
    Util.getJSON(url).then(function (response) {
        console.log("Yey JSON!", response);
    });
}

function Ex4() {
    Util.getChapter(1);
    Util.getChapter(4);
}

function Ex5() {
    Util.getChapterWithReusingPromise(1);
    Util.getChapterWithReusingPromise(4);
}

function Ex6() {
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

function Ex7() {
    Util.getChaptersAsync()
        .then(function (chapters) {
            chapters.forEach(function (chapter) {
                console.log(chapter);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function Ex8() {
    Util.getChaptersSync();
}