// ***** Array yapısına öğe eklemek ve Array içerisinden istenilen öğenin çıkarılması *****

let items = [10,20,30,40];
console.log("items ilk hali:", items);

// Array: sona eleman eklemek -> push
items.push(50);
console.log("items sona eleman eklenmiş hali:", items)

// Array: başa eleman eklemek -> unshift
items.unshift(5);
console.log("items başa eleman eklenmiş hali:", items)

// Array: sondaki elemanı çıkarmak -> pop
let lastItem = items.pop();
console.log("Last item:", lastItem, "Items:", items);

// Array: baştaki elemanı çıkarmak -> pop
let firstItem = items.shift();
console.log("First item:", firstItem, "Items:", items);

// İlk öğenin değiştirilmesi
items[0] = 5;
console.log(items);

// Sonunca öğenin değiştirilmesi
items[items.length - 1] = 12;
console.log(items);

items[1000] = 1000;
console.log(items);
