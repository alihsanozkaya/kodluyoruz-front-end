// ***** DOM İçinden Öğe Seçimi

let h2 = document.getElementsByTagName("h2");
console.log(h2.title.innerHTML);

let title = document.getElementById("title");
console.log(title.innerHTML);
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a");
console.log(link)
link.innerHTML += " değişti"
link.style.color = "green"
link.classList.add("btn");

let linkFarkli = document.querySelector("#KodluyoruzLink")
console.log(linkFarkli.innerHTML);