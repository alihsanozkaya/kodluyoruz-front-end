let myName = document.querySelector("#myName");
let firstName = prompt("Adınızı giriniz: ");
let myClock = document.querySelector("#myClock");

function days() {
    let dayNumber = new Date().getDate();
    let day;
    if (day == 0) {
        day = "Pazar";
    }
    else if (day == 1) {
        day = "Pazartesi";
    }
    else if (day == 2) {
        day = "Salı";
    }
    else if (day == 3) {
        day = "Çarşamba";
    }
    else if (day == 4) {
        day = "Perşembe";
    }
    else if (day == 5) {
        day = "Cuma";
    }
    else{
        day = "Cumartesi";
    }
    return day;
} 

myClock.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getMinutes()} ${days()}`

myName.innerHTML = firstName;