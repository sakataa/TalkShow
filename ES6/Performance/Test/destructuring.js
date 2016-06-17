let es5EllapsedTime = 0;
let es6EllapsedTime = 0;
let book = bookList[0];

function testES5(){   
    var start = performance.now();
    for(var i = 0; i < defaultLength; i++){        
        var bookId = book.id;
        var bookKind = book.kind;
        var bookTitle = book.volumeInfo.title;
        var bookSubtitle = book.volumeInfo.subtitle;
        var isForSale = book.saleInfo.saleability;
        var hasEPUB = book.accessInfo.epub.isAvailable;
        var hasPDF = book.accessInfo.pdf.isAvailable;
        var offers = book.offers;
    }
    var end = performance.now();
    es5EllapsedTime = end - start;
    showES5Result(es5EllapsedTime);
    getResult();
}

function testES6(){
    var start = performance.now();
    for(var i = 0; i < defaultLength; i++){
        var { id, kind, volumeInfo: { title: bookTitle, subtitle: bookSubtitle }, saleInfo: { saleability: isForSale }, accessInfo: { epub: { isAvailable: hasEPUB}, pdf: { isAvailable: hasPDF } }, offers } = book;
    }
    var end = performance.now();
    es6EllapsedTime = end - start;
    showES6Result(es6EllapsedTime);
    getResult();
}

