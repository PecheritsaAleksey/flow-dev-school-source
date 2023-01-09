// if

let a = 5;

if (a > 3) {
  console.log("a > 3");
}

//Преведение к логическому типу

// console.log(Boolean([].length));
console.log(Boolean([]));
console.log(Boolean("WOW!"));
console.log(Boolean(""));

let userName = "Alex";

if (!userName) {
  console.log("Имя необходимо!");
}

let b = 8;

// if (b > 10) {
//   console.log("b > 10");
// } else if (b > 9) {
//   console.log("b > 9");
// }
// else if () {

// }

//Тернарный оператор
b > 10 ? console.log("b > 10") : b > 9 ? console.log("b > 9") : console.log("b < 9");

// let userRole = "Alex";
let userRole = "admin";

// if (userRole === "admin") {
// } else if (userRole === "superadmin") {
// } else if (userRole === "user") {
// }

switch (userRole) {
  case "admin":
    console.log("Hello admin!");
    break;
  case "superadmin":
    console.log("Hello superadmin!");
    break;
  default:
    console.log("Who are you?");
    break;
}
