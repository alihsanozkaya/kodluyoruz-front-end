// Array Map kullanımı

const USERS = ["AYŞE", "MehMet", "TuğÇE", "AkSEL"];

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })
// console.log(USERS_OBJ);

const USERS_OBJ = USERS.map((item) => ({
  userName: item,
  shortName: `${item[0]}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));
console.log(USERS_OBJ);
