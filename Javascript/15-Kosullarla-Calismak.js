// ***** Koşullarla Çalışmak *****

let userName = prompt("Adınızı giriniz: ");
// Eğer kullanıcı bilgisi varsa ekrana ismini yazdır
if (userName.length > 0) {
  console.log(`Merhaba ${userName} sitemize hoşgeldiniz.`);
} else {
  console.log("Bilgi yok.");
}