// ***** Array filter kullanımı *****

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

// 5 harften fazla olanlar
let NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5);
console.log(NEW_PRODUCTS);

const USERS = [
    {fullName: "Ayşe Sümer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Başar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
    {fullName: "Ali Şahin", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive);
console.log(ACTIVE_USERS);

const PASSIVE_USERS = USERS.filter(user => !user.isActive);
console.log(PASSIVE_USERS);