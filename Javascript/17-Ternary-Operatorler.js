// ***** Ternary Operatörler ile short if kullanımı *****

// Eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let userName = prompt("Kullanıcı adınızı giriniz: ");
let info = document.querySelector("#info");

info.innerHTML = `${userName.length > 0 ? userName : "Bilgi yok."}`