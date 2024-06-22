// ***** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geri Dönüş Almak *****

// let firstName = "Ali";

function greetings(firstName = "") {
    // console.log(`Merhaba ${firstName ? firstName : ""}`);
    console.log(`Merhaba ${firstName}`);
}
greetings();
greetings("Ali");

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info;
}

let greetingsInfo = greetings2("Ali İhsan", "Özkaya");
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`) ;
    domObject.innerHTML = info;
}

let htmlInfo = `<span style = "color: red">${greetingsInfo}</span>`

domIdWriteInfo("greeting", htmlInfo)