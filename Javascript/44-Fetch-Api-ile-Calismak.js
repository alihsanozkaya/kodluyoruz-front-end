// Fetch Api ile çalışmak

// JSON dosyadan veri çekmek
fetch("settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJSON) => {
    console.log(responseJSON);
    console.log(responseJSON.userName);
  });


let userList = document.querySelector("#userList");
// API üzerinde veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then(resJSON => {
    resJSON.forEach(item => {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = item.title;
        userList.append(liDOM);
    })
});



