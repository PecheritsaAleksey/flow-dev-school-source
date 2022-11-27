let myVar = "Hi!";

if (true) {
  // let newVar = "Wow";
  var newVar = "Wow";
}

console.log(myVar);
console.log(newVar);

//Область видимости (Scope in JavaScript) - это концепция, благодаря которой определяется доступность переменных

//Внутри if - блок

//Отличия var и let

var result = 0;

for (let index = 0; index < 5; index++) {
  let result = 0;
  result = index * 2;
  console.log(result);
}

for (let index = 0; index < 5; index++) {
  let result = 0;
  result = index * 3;
  console.log(result);
}

console.log("result", result);

//Функция создаёт свою область видимости

function myFunc() {
  let someStr = "my string";
  console.log(someStr);
}

myFunc();

function myBigFunc() {
  let a = 1;

  // let myVar = "I am inside func"

  if (a === 1) {
    // let wow = "wow";
    // console.log(wow);
    console.log(myVar);
  }

  // console.log(wow);
}

myBigFunc();

// Замыкания (Closures) - механизм который
// даёт вам доступ к Scope(en - US) внешней функции из внутренней функции.

function createFunction() {
  let scope = "Inside create function!";

  function innerFunction() {
    console.log(scope);
  }

  return innerFunction;
}

let newFunc = createFunction();

newFunc();
