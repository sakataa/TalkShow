let x = { id: 1 }, y = { id: 2 };
let objectList = [[x, "foo"], [y, "bar"], [1, "Value 1"], ["string", "String Value"]];

let map = new Map(objectList);

console.log(map.size);
console.log(map.get(x));
map.set(11, "Set function");
console.log(map.size);
console.log([...map.entries()]);
console.log([...map.values()]);
console.log([...map.keys()]);
map.delete(x);
console.log(map.size);
map.clear();
console.log(map.size);