// Hata yönetimi için try catch kullanımı

let products;

try {
  products.forEach((product) => console.log(product));
} catch (error) {
    console.log("Error:", error);
    products = [1, 2, 3];
    products.forEach((item) => console.log(item));
}

console.log("Hata yönetimi düzgün çalışıyor");
let info = "Kodluyoruz"
console.log(info);
