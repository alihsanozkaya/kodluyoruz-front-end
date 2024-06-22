// ***** Çoklu koşullarla çalışmak *****

let firstName = prompt("Adınızı giriniz: ");
let age = prompt("Yaşınız: ");
let info = document.querySelector("#info");

if (firstName && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz."
}
else if (!firstName && !age) {
    info.innerHTML = "Hem adınızı hem de yaşınızı girmediniz."
}
else if (!firstName) {
    info.innerHTML = "Adınızı girmediniz.";
}
else if (!age) {
    info.innerHTML = "Yaşınızı girmediniz.";
}
else if (!(age >= 18)) {
    info.innerHTML = "Ehliyet alacak yaşta değilsiniz.";
}
else{
    info.innerHTML = "Bir hata oluştu."
}