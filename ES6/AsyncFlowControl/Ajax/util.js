let Util = (function() {
    let rootUrl = "Data";
    let chapterRootUrl = rootUrl + "/Chapters";
    const fakeSlowNetwork = 1;
    const waitingTime = 4000;
    
    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve("wait"), ms * fakeSlowNetwork);
        });
    }
    
    function getData(url) {
        let fakeNetworkWait = wait(waitingTime);
        let requestPromise = new Promise(function (resolve, reject) {
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
        
        return Promise.all([fakeNetworkWait, requestPromise]).then(function(results) {
            return results[1];
        }); 
    };
    
    function getChapter(index){   
        getJSON(url).then(function (story) {
            let fullChapterUrl = getChapterUrl(story.chapterUrls[index - 1]);
            return getJSON(fullChapterUrl);
        }).then(function (chapter) {
            console.log(`Got chapter ${index}!`, chapter);
        });
    };
    
    let storyPromise;
    function getChapterWithReusingPromise(index){
        storyPromise = storyPromise || getJSON(url); //reuse promise, story.json only fetch once
        
        storyPromise.then(function (story) {
            let fullChapterUrl = getChapterUrl(story.chapterUrls[index - 1]);
            return getJSON(fullChapterUrl);
        }).then(function (chapter) {
            console.log(`Got chapter ${index}!`, chapter);
        });
    };
    
    function getChaptersAsync() {
        storyPromise = getJSON(url);
        let chapterPromises = [];

        return storyPromise.then(function (story) {
            story.chapterUrls.forEach(function (chapterUrl) {
                let fullChapterUrl = getChapterUrl(chapterUrl);
                let chapter = getJSON(fullChapterUrl);
                chapterPromises.push(chapter);
            });

            return Promise.all(chapterPromises);
        })
    };
    
    function getChapterUrl(chapterName) {
        return `${chapterRootUrl}/${chapterName}`;
    }
    
    function getUrl(fileName) {
        return rootUrl + `/${fileName}`;
    };
    
    function getJSON(url) {
        return getData(url).then(JSON.parse);
    };
    
    function getChaptersSync() {
        let storyUrl = getUrl("story.json");
        let story = getJsonSync(storyUrl);
        
        story.chapterUrls.forEach(function (chapterUrl) {
            let fullChapterUrl = getChapterUrl(chapterUrl);
            let chapter = getJsonSync(fullChapterUrl);
            console.log(chapter);
        });

    };
    
    function getSync(url) {
        let startTime = Date.now();
        let waiting = waitingTime * fakeSlowNetwork;
        
        let req = new XMLHttpRequest();
        req.open('get', url, false);
        req.send();

        while (waiting > Date.now() - startTime);

        if (req.status == 200) {
            return req.response;
        }
        else {
            throw Error(req.statusText || "Request failed");
        }
    }

    function getJsonSync(url) {
        return JSON.parse(getSync(url));
    }
    
    return {
        rootUrl: rootUrl,
        chapterRootUrl: chapterRootUrl,
        getData(url) { return getData(url); },
        getChapter(index) { getChapter(index) },
        getChapterWithReusingPromise(index) { getChapterWithReusingPromise(index) },
        getChaptersAsync() { return getChaptersAsync() },
        getChaptersSync() { getChaptersSync(); },
        getUrl(fileName) { return getUrl(fileName) },
        getJSON(url) { return getJSON(url) }      
    }
})();

