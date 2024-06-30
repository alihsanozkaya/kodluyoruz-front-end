// ***** Object Key - Value *****

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2
};

console.log(laptop1);

console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

laptop1.model = "MacBook M2";

console.log(laptop1);

laptop1.version = "10.15.7";

console.log(laptop1);

let keys = Object.keys(laptop1);
console.log(keys);

console.log(Object.keys(laptop1));

keys.forEach(key => {
    console.log(key);
    console.log(laptop1[key]);
});

console.log(Object.values(laptop1));

let values = Object.values(laptop1);
values.forEach(value => {
    console.log(value);
})
