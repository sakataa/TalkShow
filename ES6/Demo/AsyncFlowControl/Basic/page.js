function Ex1() {
    // an immediately resolved promise
    var p2 = Promise.resolve("foo");

    // can get it after the fact, unlike events
    p2.then((res) => console.log(res));

    var p = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(4), 2000);
    });

    // handler can't change promise, just value
    p.then((res) => {
        res += 2;
        console.log(res);
    });

    // still gets 4
    p.then((res) => console.log(res));
}

function Ex2() {
    //var p1 = Promise.reject("Oops");
    var p2 = new Promise(function pr(resolve, reject) {
        reject("Oops");
    });

    p2.then(resolve => { console.log("Success"); })
        .catch(err => { console.log(err); });
}

function Ex3() {
    var p1 = Promise.resolve(42);
    var p2 = new Promise(function pr(resolve) {
        setTimeout(function () {
            resolve(43);
        }, 100);
    });
    var v3 = 44;
    var p4 = new Promise(function pr(resolve, reject) {
        setTimeout(function () {
            reject("Oops");
        }, 10);
    });

    Promise.all([p1, p2, v3])
        .then(function fulfilled(vals) {
            console.log(vals);  // [42,43,44]
        });

    Promise.all([p1, p2, v3, p4])
        .then(
        function fulfilled(vals) {
            // never gets here
        },
        function rejected(reason) {
            console.log(reason);  // Oops
        });
}

function Ex4() {
    var p1 = Promise.resolve(42);
    var p2 = new Promise(function pr(resolve) {
        setTimeout(function () {
            resolve(43);
        }, 100);
    });
    var v3 = 44;
    var p4 = new Promise(function pr(resolve, reject) {
        setTimeout(function () {
            reject("Oops");
        }, 10);
    });

    Promise.race([p2, p1, v3])
        .then(function fulfilled(val) {
            console.log(val);  // 42
        });
    Promise.race([p2, p1, v3, p4])
        .then(
        function fulfilled(val) {
            // never gets here
        },
        function rejected(reason) {
            console.log(reason);  // Oops
        });
}

