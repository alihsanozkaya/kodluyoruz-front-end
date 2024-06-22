// ***** Arrow function kullanımı *****

const helloFuncV1 = (firstName) => {
    console.log(`Merhaba ${firstName}`);
}
helloFuncV1("HTML");

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("CSS");

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`);
helloFuncV3("Ali", "Özkaya");

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info);
    return info;
}

let result = helloFuncV4("Ali İhsan", "Özkaya");
console.log(result);