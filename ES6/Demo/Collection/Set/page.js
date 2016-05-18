let x = { id: 1 },
    y = { id: 2 };
function CreateSetData() {
    let s = new Set();

    s.add(x).add(y).add(x).add(1).add("string").add(1);

    return s;
}
function Ex1() {
    let s = CreateSetData();
    let z = {};

    console.log(s.size); // 4

    console.log(s.has(x)); // true
    console.log(s.has(z)); //false

    s.delete(y);
    console.log(s.size); // 3

    s.clear();
    console.log(s.size); // 0 
}

function Ex2() {
    let s = CreateSetData();

    let keys = [...s.keys()],
        vals = [...s.values()],
        entries = [...s.entries()];

    console.log(s.keys());
    console.log(s.values());
    console.log(s.entries());
        
    console.log(keys);
    console.log(vals);
    console.log(entries);
}

function Ex3() {
    let set = new Set( [1,2,3,4,"1",2,4,"5"] ),
    uniques = [ ...set ];
    
    console.log(set);
    console.log(uniques); // [1,2,3,4,"1","5"]
}

function Ex4() {
    let s = new WeakSet();
    let x = { id: 1 },
        y = { id: 2 };
    s.add(x).add(y);

    console.log(s);
    x = null; // `x` is GC-able
    y = null; // `y` is GC-able
    console.log(s);
}