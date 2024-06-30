let listDOM = document.querySelector("#list");
let liveToastBtnDOM = document.querySelector("#liveToastBtn");
let taskDOM = document.querySelector("#task");
let liArray = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];

liveToastBtnDOM.addEventListener("click", itemAdd);

function init() {
  if (!localStorage.getItem("li")) {
    localStorage.setItem("li", JSON.stringify(liArray));
  } else {
    let localStorageLi = JSON.parse(localStorage.getItem("li"));
    localStorageLi.forEach((element, index) => {
      createListItem(element, index);
    });
  }
}

function createListItem(element, index) {
  let liDOM = document.createElement("li");
  liDOM.classList.add("d-flex", "justify-content-between");
  liDOM.innerHTML = `${element}<span class="close bg-danger" data-id="${index}" aria-hidden="true">&times;</span>`;
  listDOM.append(liDOM);

  liDOM.querySelector(".close").addEventListener("click", () => {
    removeItem(index);
  });
}

function itemAdd() {
  let childElementCount = listDOM.childElementCount;
  if (taskDOM.value) {
    let taskValue = taskDOM.value.trim();
    createListItem(taskValue, childElementCount);
    liArray.push(taskValue);
    localStorage.setItem("li", JSON.stringify(liArray));
    taskDOM.value = "";
    successToast();
  } else {
    errorToast();
  }
}

function removeItem(index) {
  liArray.splice(index, 1);
  localStorage.setItem("li", JSON.stringify(liArray));
  listDOM.innerHTML = "";
  liArray.forEach((element, idx) => {
    createListItem(element, idx);
  });
}

function successToast() {
  let toastDOM = document.querySelector("#liveToast1");
  let sucToast = new bootstrap.Toast(toastDOM);
  sucToast.show();
}

function errorToast() {
  let toastDOM = document.querySelector("#liveToast2");
  let errToast = new bootstrap.Toast(toastDOM);
  errToast.show();
}

init();
