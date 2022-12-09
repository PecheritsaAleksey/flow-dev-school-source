//Bind

function isUser() {
  return Boolean(this.name && this.age);
}

let user = {
  name: "Alex",
  age: 27,
};

let fakeUser = {
  myName: "Fake User",
  age: 30,
};

console.log(isUser.bind(user)());
console.log(isUser.bind(fakeUser)());

/* 
    С помощью bind() мы можем каррировать функцию
    Каррирование функции, также известное, как частичное применение функции — это использование функции,
    которая возвращает новую функцию с уже частично выставленными аргументами.
*/

function calculateSallary(bonus, perHour, hours) {
  return perHour * hours * bonus;
}

console.log(calculateSallary(15, 165, 1.3));

function calculateBaseSallary(perHour, hours) {
  return calculateSallary(1, perHour, hours);
}
console.log(calculateBaseSallary(15, 50));

let calculateBaseSallaryWithBind = calculateSallary.bind(null, 1);

console.log(calculateBaseSallaryWithBind(15, 50));

//APPLY
console.log("---------APPLY---------");

let user2 = {
  name: "Alex",
  age: 27,
};

let fakeUser2 = {
  myName: "Fake User",
  age: 30,
};

console.log(isUser.apply(user2));
console.log(isUser.apply(fakeUser2));
let calculateBaseSallaryWithApply = calculateSallary.apply(null, [1, 15, 100]);
console.log(calculateBaseSallaryWithApply);

//CALL
console.log("---------CALL---------");
let calculateBaseSallaryWithCall = calculateSallary.call(null, 1, 15, 100);
console.log(calculateBaseSallaryWithApply);

let arr = [1, 2, 3];
console.log(arr.join(" - "));


//Заимствование методов
let obj = {
  0: 2,
  1: "ABC",
  2: 5,
  length: 3,
};

let result = [].join.call(obj, " - ");
console.log(result);

