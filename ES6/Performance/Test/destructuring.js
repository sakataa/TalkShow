let destructuringLength = 1000000000;
let book = bookList[0];
resetTime();

function testES5Destructuring(){
    testES5(function() {
        for(let i = 0; i < destructuringLength; i++){        
            var bookId = book.id;
            var bookKind = book.kind;
            var bookTitle = book.volumeInfo.title;
            var bookSubtitle = book.volumeInfo.subtitle;
            var isForSale = book.saleInfo.saleability;
            var hasEPUB = book.accessInfo.epub.isAvailable;
            var hasPDF = book.accessInfo.pdf.isAvailable;
            var offers = book.offers;
        }
    })
}

function testES6Destructuring(){
    testES6(function(){
        for(let i = 0; i < destructuringLength; i++){
            var { id, kind, volumeInfo: { title: bookTitle, subtitle: bookSubtitle }, saleInfo: { saleability: isForSale }, accessInfo: { epub: { isAvailable: hasEPUB}, pdf: { isAvailable: hasPDF } }, offers } = book;
        }
    })
}

