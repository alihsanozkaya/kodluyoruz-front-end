// ***** Object ve Array Destructuring Nasıl Kullanılır *****

// Object Destructuring

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// Obje içindeki bilgilerin tek seferde çıkarılması
// let userName = settings.userName;
// console.log(userName);

let {userName: user, password, isActive, ip: serverIp, serverName} = settings
console.log(user);

// Obje içindeki bazi bilgilerin çıkarılması
let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings;
console.log(newSettings);

// Objenin destructuring ile kopyalanması

// HATALI

// let settings2 = settings;
// settings2.userName = "Değişen Bilgi";
// console.log(settings);
// console.log(settings2);

// DOĞRUSU
let settings3 = {...settings};
settings3.userName = "Değişen Bilgi";
console.log(settings);
console.log(settings3);

let score = [100, 200, 300, 400];
let [score1, score2, ...otherScore] = score;
console.log(score);
console.log(score2);
console.log(otherScore);

let copyScore = [...score];
copyScore[0] = 50;
console.log(score, copyScore);
