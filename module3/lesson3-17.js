let user = {
  name: "John",
  sayHi: function () {
    console.log(`Hi! I am ${this.name}.`);
  },
};
console.log(user);

//В программировании мы часто хотим взять что-то и расширить.
//Прототипное наследование

//Добавим метод к юзеру

user.sayHi();

let adminUser = {
  sayAdmin: function () {
    console.log("I am admin");
  },
};

console.log(adminUser);

// adminUser.__proto__ = user;
Object.setPrototypeOf(adminUser, user);

adminUser.name = "Alex";
adminUser.sayHi();

console.log(adminUser);

console.log("___Функции___");

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(`Hi! I am ${this.name}.`);
};

let user1 = new User("Bob");
let user2 = new User("Fred");

console.log(user1);
console.log(user2);

user2.sayHi();

function Admin(name) {
  User.call(this, name);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.sayAdmin = function () {
  console.log("I am admin!");
};

let user3 = new Admin("Artur");
console.log(user3);

user3.sayHi();
