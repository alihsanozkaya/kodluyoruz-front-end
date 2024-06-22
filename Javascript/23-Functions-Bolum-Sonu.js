// ***** Fuctions Bölüm Sonu Egzersizi *****

let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
    this.id == "decrease" ? counter -= 1 : counter += 1;
    counterDOM.innerHTML = counter;
}