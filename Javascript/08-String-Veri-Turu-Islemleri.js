// ***** String Veri Türü İşlemleri *****

let email = "alihsanozkaya27@gmail.com";
let firstName = "ali İhsan";
let lastName = "ÖZKAYA";

// String karakter sayısı -> length
console.log(email.length)

// İlk karakteri bulmak -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

// Büyük harf / küçük harf
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search
console.log(email.search("@"));

// Belli bir yere kadar al -> slice
console.log(email.slice(0,15))
console.log(email.slice(15))

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))

// Bilgiyi değiştir -> replace
let hotmailEmail = email.replace('gmail.com', 'hotmail.com');
console.log(hotmailEmail);

// İstediğim bilgi var mı? -> includes
console.log(email.includes('@'));
console.log(email.includes("hot"));

// İstediğim bilgiyle başladı mı? Bitti mi? -> startsWidth, endsWidth
console.log(email.startsWith('ali'));
console.log(email.startsWith('ahmet'));
console.log(email.endsWith('.com'));
console.log(email.endsWith('.org'));

// İlk harflerini büyük yapmak
firstName = "AHMET";
lastName = "SARUHAN"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} 
${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`;
console.log(fullName);