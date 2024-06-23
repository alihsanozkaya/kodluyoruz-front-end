// ***** Break & Continue

const LOREM_LIST = ["lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"];

for (let counter = 0; counter < 10; counter++) {
    if(counter === 5){
        break;
    }
    console.log("break:", counter);    
}

for (let counter = 0; counter < 10; counter++) {
    if (counter === 5) {
        continue;
    }
    console.log("continue:",counter);
}

const ulDOM = document.querySelector("#userList");

for (let index = 0; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "amet") {
        break;
    }
    const liDOM = document.createElement("li");
    liDOM.innerHTML = LOREM_LIST[index];
    ulDOM.append(liDOM);
}

for (let index = 0; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "amet") {
        continue;
    }
    const liDOM = document.createElement("li");
    liDOM.innerHTML = LOREM_LIST[index];
    ulDOM.append(liDOM);    
}