// ***** Prompt ile Kullanıcıdan Bilgi Almak *****

let fullName = prompt("Adınızı Giriniz: ");
console.log(fullName);

let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color: red">${fullName}</small>`;
