// Çok Kullanılan Array Metotları ve Array içinde Array

let items = [1, 2, 3, 4, 5];

// Array içinde array
let femaleUsers = ["İrem", "Sena", "Deniz"];
let maleUsers = ["Ali", "İhsan", "Mehmet"];

items.unshift(femaleUsers);
console.log(items);

items.push(maleUsers);
console.log(items);

// Array içerisinden öğe ayırmak -> splice(pos, item?)
let newItems = items.splice(2, 4);
console.log(newItems);

// Array içersindeki öğenin index bilgisini bulmak -> indexOf("Value");
items.unshift("lorem");
items.push("ipsum");
console.log(items);
console.log(items.indexOf("ipsum"));

// Array Kopyalamak -> slice 
let copyItems = items.slice();
console.log(items);

copyItems.pop();
console.log("copyItems:", copyItems);
console.log("Items:",items);

// ES6 dan sonra kopyalamak
let es6Items = [...items];
console.log("ES6:",es6Items);

// ES6 dan sonra birden fazla array birlestirmek
let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// Array içerisindeki bilgiyi stringe çevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" -- "))

// İstediğimiz Index Bilgisine Öğe Eklemek -> splice(index, 0, value);
allUsers.splice(allUsers.length - 1, 0, "Melisa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);