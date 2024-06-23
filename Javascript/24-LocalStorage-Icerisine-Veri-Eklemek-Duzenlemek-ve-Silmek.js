// ***** Local Storage *****

let email = "alihsanozkaya27@gmail.com";
localStorage.setItem("userEmail", email);

let localStorageEmail = localStorage.getItem("userEmail");
console.log("1.", localStorageEmail);

localStorage.removeItem("userEmail");

localStorageEmail = localStorage.getItem("userEmail");
console.log("2.",localStorageEmail);
