// ***** Css class eklemek veya çıkarmak *****

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class")

greeting.classList.remove("new-info", "title");

console.log(greeting.classList)