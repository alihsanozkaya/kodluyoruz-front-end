// ***** Local Storage İşlemleri *****

let user = {firstName: "Ali İhsan", lastName: "Özkaya", age: 24, isActive: false};

localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);

let items = [1,2,3, user];
localStorage.setItem("newItems", JSON.stringify(items));

let itemsInfo = JSON.parse(localStorage.getItem("newItems"));
itemsInfo[3].isActive = true;
console.log(itemsInfo);