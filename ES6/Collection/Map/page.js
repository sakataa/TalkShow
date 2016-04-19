let x = { id: 1 },
    y = { id: 2 };
function CreateMapData() {
    let m = new Map();

    m.set(x, "foo");
    m.set(y, "bar");
    m.set(1, "Value 1");
    m.set("string", "String value");

    return m;
}
function Ex1() {
    let m = CreateMapData();

    console.log(m.size); //4

    let xValue = m.get(x);  // "foo"
    console.log(xValue);
    let yValue = m.get(y);  // "bar"
    console.log(yValue);

    m.delete(1);
    console.log(m.size); //3

    let m2 = new Map(m);
    console.log(m2);

    m.clear();
    console.log(m.size);
}

function Ex2() {
    let m = CreateMapData();

    let values = m.values(); // return iterator
    console.log(values);
    console.log(values.next());
    console.log(values.next());

    let spreadValues = [...m.values()]; //return array
    console.log(spreadValues);
}

function Ex3() {
    let m = CreateMapData();
    let spreadValues = [...m.values()];
    
    let isInclude = spreadValues.includes("foo");
    console.log(isInclude);
    
    isInclude = spreadValues.includes(34);
    console.log(isInclude);
    
    isInclude = spreadValues.includes("Value 1");
    console.log(isInclude);
}

function Ex4() {
    let m = CreateMapData();

    let values = m.entries(); // return iterator
    console.log(values);
    console.log(values.next());
    console.log(values.next());

    let spreadValues = [...m.entries()]; //return array
    console.log(spreadValues);
}

function Ex5() {
    let m = CreateMapData();

    let keys = m.keys();
    console.log(keys);
    console.log(keys.next());
    console.log([...keys]);
    
    let z = { Id:3, Value: 4 };
    let hasKey = m.has(x);  // true
    console.log(hasKey);
    hasKey = m.has(z);  // false
    console.log(hasKey);
}