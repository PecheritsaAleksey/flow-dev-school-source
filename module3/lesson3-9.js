//Map

let myMap = new Map();

myMap.set("abc", "Hello there!");

console.log(myMap);

// console.log(myMap["abc"]);
console.log(myMap.get("abc"));

let user1 = { name: "Alex" };
let user2 = { name: "John" };

let blogPosts = new Map();

blogPosts.set(user1, 5);
blogPosts.set(user2, 8);

console.log(blogPosts);

//Set

// Объект Set – это особый вид коллекции: «множество» значений (без ключей),
// где каждое значение может появляться только один раз.

let array = [1, 2, 3, 23, 4, 3, 4, 4, 2, 1, 3, 543, 34, 12, 5, 33, 12, 4];

// let onlyUnique = new Set(array);

// let uniqueArray = Array.from(onlyUnique);

let uniqueArray = Array.from(new Set(array));

console.log(uniqueArray);
console.log(uniqueArray.length);
