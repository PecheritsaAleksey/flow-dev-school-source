// Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы.
// Самые частые события - мыш и клавиатура, а так же формы

// click, mousedown, mouseup - нажали / отпустили
// mouseover / mouseout – когда мышь наводится на / покидает элемент.

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.

// submit

// Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.

// Именно благодаря обработчикам JavaScript-код может реагировать на действия пользователя.

// обработчик - похож на атрибут, начинается с on

// идём в html

// document.querySelector(".card").onclick = () => {
//   console.log("WOW");
// };

// document.querySelector(".card").onclick = (e) => {
//   console.log(e.target);
// };

document.querySelectorAll(".card").forEach((card) => {
  card.onclick = (e) => {
    console.log(`This is card number ${e.target.innerText}`);
  };

  card.onclick = (e) => {
    console.log("Hey!");
  };
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", (e) => {
    console.log(`This is card number ${e.target.innerText}`);
  });

  //   card.addEventListener("mouseover", (e) => {
  //     console.log("Hey!");
  //   });

  const logHey = () => {
    console.log("Hey!");
  };

  card.addEventListener("mouseover", logHey);
  card.removeEventListener("mouseover", logHey);
});

//Всплытие

let input = document.getElementsByTagName("input")[0];
input.onclick = function (e) {
  e.stopPropagation();
  console.log("Input!!!");
};

//Вызывается HEY! почему?

//ДЗ будет переключать цвета по клику
