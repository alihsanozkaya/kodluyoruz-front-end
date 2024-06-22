// ***** Liste içerisindeki son elemana ulaşmak veya eleman eklemek *****

let firstItem = document.querySelector("ul#list>li:first-child")
console.log(firstItem.innerHTML);

let lastItem = document.querySelector("ul#list>li:last-child")
console.log(lastItem.innerHTML);

firstItem.innerHTML = "İlk öğe değişti";

let ulDOM = document.querySelector("#list");
let sonaliDOM = document.createElement("li");

sonaliDOM.innerHTML = "Sona oluştu";
ulDOM.append(sonaliDOM);

let basaliDOM = document.createElement("li");
basaliDOM.innerHTML = "Başa oluştu";
ulDOM.prepend(basaliDOM);