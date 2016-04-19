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
    var map = new Map();
    var weakmap = new WeakMap();

    {
        let a = { x: 12 };
        let b = { y: 15 };

        map.set(a, 1);
        weakmap.set(b, 2);
        
        a = null;
        b = null;
        
        console.log(map);
        console.log(weakmap);
    }
    
    console.log(map);
    console.log(weakmap);
}