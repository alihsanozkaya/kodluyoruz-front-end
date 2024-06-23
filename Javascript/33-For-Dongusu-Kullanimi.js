// ***** For Döngüsü *****

let users = ["Lorem", "Ipsum", "Dolor"];

const userListDOM = document.querySelector("#userList");

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = users[index];
    userListDOM.append(liDOM);
}