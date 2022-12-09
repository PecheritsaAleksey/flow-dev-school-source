//ключевое слово this - Свойство контекста выполнения кода. И чаще всего это связано с областью видимости объекта,
//Внутри токорого мы вызываем это ключевое слово

//{

//     name: "Alex"

// }

console.log(this);

a = 5;

console.log(this.a);

function myFunc() {
  console.log(this);
}

myFunc();

let user = {
  name: "Alex",
  greetings: function () {
    console.log(this);
  },
};

user.greetings();

let user2 = {
  name: "John",
  greetings: function () {
    console.log(this);
  },
  address: {
    street: "Lenina",
    getAdress: function () {
      console.log(this);
    },
  },
};

user2.greetings();
user2.address.getAdress();

let User = function (name) {
  this.name = name;
};

//при использовании ключевого слова new, this указывает на тот объект, который будет создан
let user3 = new User("Bob");

// Контекст может быть неизвестен заранее
function sayMyName() {
  console.log(`My name is ${this.userName}`);
}

sayMyName();

let newUser = {
  userName: "mr.user",
};

newUser.getName = sayMyName;

newUser.getName();

let crazyObject = {
  info: "I am crazy object",
  bigFunc: function () {
    //Добавляем это и меняем this ниже
    let current = this;
    console.log("Crazy object big func -", current);

    function internalFunc() {
      console.log("Internal function THIS is - ", current);
    }

    internalFunc();
  },
};

crazyObject.bigFunc();

//В стрелочных функциях, this привязан к окружению,
// в котором была создана функция. В глобальной области видимости this будет указывать на глобальный объект.

/*

    Cтрелочная функция не имеет своего контекста, она связывается с лексическим окружением, 
    то есть функцией, внутри которой определена стрелочная функция. 
    Это очень важный момент. 
    Именно функция верхнего уровня задаёт контекст стрелочной функции, а не что-то другое.

 */

const saySmth = () => {
  console.log("Hey - ", this);
};

saySmth();

let newUser2 = { name: "Artur" };
newUser2.getUser = saySmth;
newUser2.getUser();

let crazyObject2 = {
  info: "I am crazy object",
  bigFunc: function () {
    console.log("Crazy object 2 big func -", this);

    let internalFunc = () => {
      console.log("Internal function THIS is - ", this);
    };

    internalFunc();
  },
};

crazyObject2.bigFunc();
