// ***** Number *****
// Number Veri Türü Tanımlamak
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;

console.log("KDV'siz Fiyat: ", price, " KDV Oranı: ", tax, " KDV Tutarı: ", priceTax, " KDV'li Fiyat: " ,total);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);

// Artırma ve Azaltma İşlemleri
let counter = 320;
counter = counter + 1;
counter += 1;
counter++;
console.log(counter);

counter--;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// İşlem Önceliği
console.log(2 + 3 * 10);
console.log((2 + 3) * 10);

// Mod alma %
console.log(17 % 2);
console.log("Koli Kalan Ürün Örneği: ", 18 % 8);

// Üs alma **
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// Aşağı yuvarlama işlemi -> Math.floor
console.log("Aşağı yuvarlama: ", Math.floor(1.9));

// Yukarı yuvarlama işlemi -> Math.ceil
console.log("Yukarı yuvarlama: ", Math.ceil(1.1));

// Yakına yuvarlama işlemi -> Math.round
console.log("Yakına yuvarlama işlemi: ", Math.round(1.5))