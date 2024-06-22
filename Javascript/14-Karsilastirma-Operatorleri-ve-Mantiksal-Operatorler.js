// ***** Karşılaştırma Operatörleri ve Mantıksal Operatörler *****

let price = "100";
let user = "guest";

// Eşitse ==
console.log(price == 1);
console.log(price == 100);

// Hem değeri hem de türü eşitse ===
console.log(price === 1);
console.log(price === 100);

// Eşit değilse !=
console.log(user != "guest");

// Küçükse <
console.log(price < 100);

// Küçük eşitse <=
console.log(price <= 100);

// Büyükse > 
console.log(price > 100);

// Büyük eşitse >=
console.log(price >= 100);

// && ve
console.log(price > 0 && user != "guest");

// || veya
console.log(price > 0 || user != "guest");

// ! değil (tersi)
console.log(!(price > 0 && user != "guest"));
