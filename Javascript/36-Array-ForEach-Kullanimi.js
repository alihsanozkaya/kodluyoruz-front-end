// ***** Array forEach metodu

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

PRODUCTS.forEach(product => console.log(product));

PRODUCTS.forEach((product, index, array) => array[index] = product + " ürünü");
console.log(PRODUCTS)

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);
console.log(PRODUCTS);

const userListDOM = document.querySelector("#userList");

PRODUCTS.forEach(product => {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = product;
    userListDOM.append(liDOM);
})