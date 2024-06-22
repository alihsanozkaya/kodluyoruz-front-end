// ***** DOM Etkinlikleriyle Çalışmak *****

// const domClick = () => {
//     console.log("Tıklandı.");
// }

let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", domClick);
greeting.addEventListener("mouseover", domClick);

function domClick() {
    console.log("Etkinlik çalışıyor.");
    this.innerHTML = "Etkinlik çalışıyor.";
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
    console.log(this);
}