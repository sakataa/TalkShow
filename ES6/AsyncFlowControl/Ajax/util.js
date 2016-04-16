let Util = (function() {
    let rootUrl = "Data";
    let chapterRootUrl = rootUrl + "/Chapters";
    
    function getData(url) {
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
    };
    
    function getChapter(index){   
        getJSON(url).then(function (story) {
            let chapterUrl = `${chapterRootUrl}/${story.chapterUrls[index - 1]}`;
            return getJSON(chapterUrl);
        }).then(function (chapter) {
            console.log(`Got chapter ${index}!`, chapter);
        });
    };
    
    let storyPromise;
    function getChapterWithReusingPromise(index){
        storyPromise = storyPromise || getJSON(url); //reuse promise, story.json only fetch once
        
        storyPromise.then(function (story) {
            let chapterUrl = `${chapterRootUrl}/${story.chapterUrls[index - 1]}`;
            return getJSON(chapterUrl);
        }).then(function (chapter) {
            console.log(`Got chapter ${index}!`, chapter);
        });
    };
    
    function getChapterSync() {
        storyPromise = getJSON(url);
        let chapterPromises = [];

        storyPromise.then(function (story) {
            story.chapterUrls.forEach(function (chapterUrl) {
                let chapter = getJSON(`${chapterRootUrl}/${chapterUrl}`);
                chapterPromises.push(chapter);
            });

            return Promise.all(chapterPromises);
        })
            .then(function (chapters) {
                chapters.forEach(function (chapter) {
                    console.log(chapter);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    function getUrl(fileName) {
        return rootUrl + `/${fileName}`;
    };
    
    function getJSON(url) {
        return getData(url).then(JSON.parse);
    };
    
    return {
        rootUrl: rootUrl,
        chapterRootUrl: chapterRootUrl,
        getData(url) { return getData(url); },
        getChapter(index) { getChapter(index) },
        getChapterWithReusingPromise(index) { getChapterWithReusingPromise(index) },
        getChapterSync() { getChapterSync() },
        getUrl(fileName) { return getUrl(fileName) },
        getJSON(url) { return getJSON(url) }      
    }
})();

