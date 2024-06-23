// ***** While Döngüsü *****

let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter += 1;
}

let userName = "";

while (!userName) {
    userName = prompt("Kullanıcı adınızı giriniz:");
    console.log(userName);
}