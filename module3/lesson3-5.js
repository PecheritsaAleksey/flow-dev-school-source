// Для хранения коллекций существует особая структура данных, которая называется массив, Array.

let a = "Hello";
let b = "World";

// let arr = Array();
// let arr = [];
let arr = [a, b];

console.log(arr);

//Индексы с 0

console.log(arr[0]);

arr[2] = "New";
// arr[3] = "New";

console.log(arr);
console.log(arr.length);

//push
var test = arr.push("Another New");

//pop
// arr.pop();
// console.log(arr);

let pop = arr.pop();
console.log(arr);
console.log("Pop -", pop);

// shift Удаляет из массива первый элемент и возвращает его
let shift = arr.shift();
console.log(arr);
console.log("Shift -", shift);

// unshift Добавляет элемент в начало массива
arr.unshift("Hi");
console.log(arr);

//splice
//Удаляет N элементов начиная с индекса, добавляет. Возвращает массив из удалённых элементов.
arr.push("One", "Two", "Three");
console.log(arr);

// arr.splice(2, 3);
arr.splice(2, 3, "From", "Splice");

console.log(arr);

//concat - объединение массивов
let arr2 = ["Its", "New Array"];
arr = arr.concat(arr2);

console.log(arr);

//Поиск в массиве
// indexOf

console.log("Index of Splice is", arr.indexOf("Splice"));
