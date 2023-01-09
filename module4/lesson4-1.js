// window -> document

console.log(document);
console.log(document.body);
console.log(document.documentElement);

// document.body.style.backgroundColor = "red"

// childNodes, firstChild, lastChild, firstElementChild, lastElementChild

console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);

// console.log((document.body.childNodes[1]));
// document.body.childNodes[1].style.backgroundColor = "green";

console.log(document.body.childNodes[1].children);
console.log(document.body.childNodes[1].childNodes);
// document.body.childNodes[1].children[0].style.backgroundColor = "green";

/*
DOM-коллекции
Как мы уже видели, childNodes похож на массив. На самом деле это не массив, а коллекция – особый перебираемый объект-псевдомассив.

И есть два важных следствия из этого:

Для перебора коллекции мы можем использовать for..of:
for (let node of document.body.childNodes) {
  alert(node); // покажет все узлы из коллекции
}
Это работает, потому что коллекция является перебираемым объектом (есть требуемый для этого метод Symbol.iterator).

Методы массивов не будут работать, потому что коллекция – это не массив:
alert(document.body.childNodes.filter); // undefined (у коллекции нет метода filter!)
Первый пункт – это хорошо для нас. Второй – бывает неудобен, но можно пережить. 
Если нам хочется использовать именно методы массива, то мы можем создать настоящий массив из коллекции, используя Array.from
*/

for (let div of document.body.childNodes[1].children) {
  console.log(div); // покажет все узлы из коллекции
}

console.log("-----------");

// document.body.childNodes[1].children.forEach()
Array.from(document.body.childNodes[1].children).forEach((div) => {
  console.log(div);
});

console.log("-----------");

// родитель через parentElement
// соседние через nextSibling и previousSibling, previousElementSibling, nextElementSibling

console.log(document.body.childNodes[1].parentNode);
console.log(document.body.childNodes[1].children[1]);
console.log(document.body.childNodes[1].children[1].previousElementSibling);
console.log(document.body.childNodes[1].children[1].nextElementSibling);

// Свойства навигации по DOM хороши, когда элементы расположены рядом. А что, если нет? Как получить произвольный элемент страницы?
// Для этого в DOM есть дополнительные методы поиска.

// document.getElementById
// querySelectorAll

//Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.

// getElementsByName
// getElementsByTagName
// getElementsByClassName

console.log("-----------");

console.log(document.querySelector(".container"));
