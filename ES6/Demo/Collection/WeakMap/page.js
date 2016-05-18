let x = { id: 1 },
    y = { id: 2 };
function CreateWeakMapData() {
    let wm = new WeakMap();
    
    wm.set(x, "foo");
    wm.set(y, "bar");
    

    return wm;
}
function Ex1() {
    let weakMap = CreateWeakMapData();

    weakMap.set(x, y);
    console.log(weakMap);
    console.log(weakMap.get(x));
    x = null;  // `x` is GC-able
    y = null;
    console.log(weakMap);
}

function Ex2() {
    // Start with a map for holding some data:
    var wm = new WeakMap();
    let m = new Map();

    // Create a key object and store it in the map
    var obj = { a: 1 };
    wm.set(obj, "a is 1");
    m.set(obj, "a is 1");

    // Get the data by the `obj` key
    console.log(wm.get(obj));
    //=> "a is 1" (as expected)
    console.log(m.get(obj));

    // Now, re-associate `obj`
    var obj = { b: 2 };

    // Try to access the entry again
    console.log(wm.get(obj));
    console.log(m.get(obj));
//=> undefined
}