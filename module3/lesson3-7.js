// До этого мы работали с примитивными типами данных, т.е одно значение в переменной

// let user = Object();
// let user = {};

let user = {
  name: "Alex",
  age: 27,
};

console.log(user);

user.job = "Programmer";

console.log(user);

delete user.age;

console.log(user);

console.log(user.name);
console.log(user["name"]);

let job = "job";
console.log(user[job]);

//Копирование по ссылке
let user1 = { name: "John" };
let user2 = user1;

console.log(user1);
console.log(user2);

user2.name = "Bob";

console.log(user1);
console.log(user2);

//Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.

let user3 = { name: "Jack" };
// let user4 = Object.assign({}, user3);
let user4 = { ...user3 };
console.log(user3);
console.log(user4);

user4.name = "Mike";
console.log(user3);
console.log(user4);

console.log("\n ------------------------------ \n ");

let superUser = {
  name: "Alex",
  sayHi: function () {
    console.log(`Hi! I am ${this.name}`);
  },
};

superUser.sayHi();

function User(name, age) {
  this.name = name;
  this.age = age;
}

//Так не работает

// let newUser = User("Bob", 33);
let newUser = new User("Bob", 33);
console.log(newUser);
