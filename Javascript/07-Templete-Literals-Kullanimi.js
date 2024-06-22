// ***** Templete Literals Kullanımı *****

let userName = "alihsanozkaya";
let DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN;

console.log("Merhaba", userName, "\nMail adresiniz:", email);

let info = 
`
Merhaba ${userName} sitemize hoşgeldiniz.
Kısa isminiz: ${userName[0]}
Sistemimizdeki mail adresiniz: ${email}
Mail uzunluğunuz ${email.length}
Borcunuz: ${(2 + 3) * 10} ₺
Saat: ${new Date().getHours()}:${new Date().getMinutes()}
`;

console.log(info);