//While

// while (smth) {
//   // doit!
// }

let i = 0;

while (i < 5) {
  console.log("I =", i);

  //Если не добавить это, браузер зависнет
  i++;
}

//FOR

for (let i = 0; i < 10; i++) {
  //console.log("I is", i, "in for");
}

let user = {
  name: "Bob",
  age: 29,
  job: "developer",
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

console.log(" \n ------------------------------ \n");

let arr = ["John", "Bob", "Alex", "Mark"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(" \n ------------------------------ \n");

//Если не нужны индексы - это лучше
for (let name of arr) {
  console.log(name);
}

console.log(" \n ------------------------------ \n");

//JavaScript arrays are objects. That means you can add string properties to your array, not just numbers.

for (let name in arr) {
  console.log(name);
}
