let string = "Hello!";

let number = 5;

// let bigInt = 2**53
// Потом показать, что vs code предлагает указать n в конце

let bigInt = 90071992547409921n;

let trueBooleanValue = true;
let falseBooleanValue = false;

let nullValue = null;

let undefinedValue = undefined;

console.log(typeof number);
console.log(typeof bigInt);
console.log(typeof falseBooleanValue);
//Баг в JS
console.log(typeof nullValue);

console.log(typeof g);

let user = { name: "Alex", age: 27 };

console.log(typeof user);

//Преобразование типов
console.log("______Преобразование типов______");

let stringNumber = "5";
let numberFromString = Number(stringNumber);

// console.log(typeof stringNumber);
console.log(numberFromString);
console.log(typeof numberFromString);

let stringAgain = numberFromString.toString();
console.log(typeof stringAgain);

console.log("5" - 4);
console.log("5" + 4);


console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));