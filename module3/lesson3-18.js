//Класс - это "описание объекта", не сам объект - например Пользователь
//Когда нам нужен настоящий объект - мы создаем "Экземпляр" класса (инстанс)

// function User(name) {
//     this.name = name;
//   }

//   User.prototype.sayHi = function () {
//     console.log(`Hi! I am ${this.name}.`);
//   };

// function Admin(name) {
//     User.call(this, name);
//   }

//   Admin.prototype = Object.create(User.prototype);
//   Admin.prototype.sayAdmin = function () {
//     console.log("I am admin!");
//   };

//   let user3 = new Admin("Artur");
//   console.log(user3);

//   user3.sayHi();

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi = function () {
    console.log(`Hi! I am ${this.name}.`);
  };
}

let user1 = new User("Alex");
console.log(user1);
user1.sayHi();

class Admin extends User {
  constructor(name) {
    super(name);
    this.isAdmin = true;
  }

  sayAdmin = function () {
    console.log("I am admin!");
  };
}

let user2 = new Admin("Bob");
console.log(user2);

user2.sayHi();
user2.sayAdmin();
