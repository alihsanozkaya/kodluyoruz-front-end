let myName = document.querySelector("#myName");
let firstName = prompt("Adınızı giriniz: ");
let myClock = document.querySelector("#myClock");

function days() {
    let dayNumber = new Date().getDate();
    let day;
    if (dayNumber == 0) {
        day = "Pazar";
    }
    else if (dayNumber == 1) {
        day = "Pazartesi";
    }
    else if (dayNumber == 2) {
        day = "Salı";
    }
    else if (dayNumber == 3) {
        day = "Çarşamba";
    }
    else if (dayNumber == 4) {
        day = "Perşembe";
    }
    else if (dayNumber == 5) {
        day = "Cuma";
    }
    else{
        day = "Cumartesi";
    }
    return day;
} 

myClock.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getMinutes()} ${days()}`

myName.innerHTML = firstName;