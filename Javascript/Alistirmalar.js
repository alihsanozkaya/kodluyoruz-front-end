let ul = document.querySelector("#list");

ul.classList.add("text-center")

let first_li = document.createElement("li");
let last_li = document.createElement("li");

first_li.innerHTML = "Başa ekle";
last_li.innerHTML = "Sona ekle";

ul.prepend(first_li);
ul.append(last_li);

console.log(ul.classList);

let boolean;
const isBooleanTrue = boolean ? true : false;
console.log(isBooleanTrue)
console.log(boolean)