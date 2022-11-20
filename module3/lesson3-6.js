// console.log("Hi");

function myLog() {
  console.log("Hey!");
  console.log("I am function");
}

// console.log(typeof myLog);

// myLog();

function greeting(name = "mister") {
  console.log("Hello,", name);
}

// greeting("Alex");
// greeting("John");
// greeting("Bob");

// greeting();
// greeting("Alex");

//Переменные внутри функций

//И снаружи

let globalX = 5;

function multiply(num) {
  let x = 3;
  return num * x * globalX;
}

function newOne() {
  console.log(x);
}

console.log(multiply(2));

// Попытка обратиться к переменной в другой функции
// newOne();

// Стрелочные функции

const arrowMultiply = (num) => {
  return num * globalX;
};

const multiplyX2 = (num) => num * 2;

console.log(arrowMultiply(3));
console.log(multiplyX2(8));
