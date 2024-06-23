// ***** Array - Dizilerle çalışmak *****

// Array oluşturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = [] // Boş liste
// Array içerisindeki eleman / oge sayısını öğrenmek
console.log(items.length);
// document.querySelector("#info").innerHTML = items.length

// Array içindeki ilk elemanın çağrılması
console.log(items[0]);

// Array içindeki tam ortadaki elemanın çağrılması
console.log(items[Math.floor(items.length / 2)])

// Array içindeki son elemanın çağrılması
console.log(items[items.length - 1]);

// Değişken içindeki bilginin array olup olmadığının kontrol edilmesi
console.log(typeof(items));

console.log(Array.isArray(items));

// Hangileri isArray -> True verir ?
console.log("[]: ",Array.isArray([]));
console.log("{}: ",Array.isArray({}))
console.log("1: ",Array.isArray(1));
console.log("A: ",Array.isArray("A"));
console.log("false: ",Array.isArray(false));