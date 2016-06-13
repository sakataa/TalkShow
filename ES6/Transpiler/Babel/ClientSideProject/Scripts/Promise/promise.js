const storyUrl = "https://cdn.rawgit.com/sakataa/TalkShow/ES6/ES6/Demo/Organization/Generator/Asynchronous/Data/story.json";
const rootChapterUrl = "https://cdn.rawgit.com/sakataa/TalkShow/ES6/ES6/Demo/Organization/Generator/Asynchronous/Data/Chapters";
function getData(url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("GET", url);

        request.onload = function () {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
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

function getChaptersAsync() {
    let storyPromise = getData(storyUrl);
    let chapterPromises = new Set();
  
    return storyPromise.then((data) => {
      for(const chapterUrl of data.chapterUrls){
        chapterPromises.add(getData(`${rootChapterUrl}/${chapterUrl}`));
      }
      
      return Promise.all(chapterPromises);
    })
};

function run(){
  getChaptersAsync().then((chapters) => {
    for(const chapter of chapters){
      console.log(chapter);
    }
  });
}

run();