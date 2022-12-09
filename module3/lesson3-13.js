//Функциональные методы

//forEach, map, some, filter, reduce, find

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
// }

arr.forEach((element, index, thisArr) => {
  // console.log(index);
  // console.log(element);
  // console.log(thisArr);
});

// arr.forEach(function (el) {
//   console.log(el);
// });

//Это колбэк!!!

const logEl = (el) => console.log(el);

// arr.forEach(logEl);
// arr.forEach((el) => logEl(el));

//MAP

let newArr = arr.map((el) => {
  return (el *= 2);
});

console.log(newArr);

// SOME

let have6 = arr.some((element) => {
  // element === 6;
  return element === 6;
});

console.log(have6);

//FIND

let moreThan7 = arr.find((el) => {
  return el > 7;
});

console.log(moreThan7);

//RETURN сам по себе тут
// let moreThan5 = arr.filter((el) => el > 5);
let moreThan5 = arr.filter((el) => {
  return el > 5;
});

console.log(moreThan5);

//Четные
let oddElements = arr.filter((el) => {
  if (el % 2 === 0) return el;
});

console.log(oddElements);

// REDUCE

let arr2 = [1, 2, 3, 4, 5];

let sum = arr2.reduce((prev, current) => {
  return prev + current;
}, 0);

// 1 - 0+1=1
// 2 - 1+2=3
// 3 - 3+3=6
// 4 - 6+4=10
// 5 - 10+5=15

console.log(sum);
