// ***** Koşullarla Çalışmak Bölüm Sonu Egzersizi *****

let point = prompt("Notunuzu giriniz:");
let info = document.querySelector("#info");
let letterGrade = "";

if (point >= 0 && point <= 100) {
  if (point >= 90 && point <= 100) {
    letterGrade = "AA";
    info.classList.add("text-primary");
  } else if (point >= 85 && point < 90) {
    letterGrade = "BA";
    info.classList.add("text-primary");
  } else if (point >= 80 && point < 85) {
    letterGrade = "BB";
    info.classList.add("text-primary");
  } else if (point >= 75 && point < 80) {
    letterGrade = "CB";
    info.classList.add("text-primary");
  } else if (point >= 70 && point < 75) {
    letterGrade = "CC";
    info.classList.add("text-primary");
  } else if (point >= 65 && point < 70) {
    letterGrade = "DC";
    info.classList.add("text-primary");
  } else if (point >= 60 && point < 65) {
    letterGrade = "DD";
    info.classList.add("text-primary");
  } else if (point >= 50 && point < 60) {
    letterGrade = "FD";
    info.classList.add("text-primary");
  } else if (point >= 0 && point < 50) {
    letterGrade = "FF";
    info.classList.add("text-danger");
  }
  info.innerHTML = `Puanınız: ${point} ve Harf Notunuz: ${letterGrade} ${letterGrade == "FF" ? ":(" : ":)"}`;
}
else{
    info.innerHTML = "Hatalı puan girdiniz."
}
