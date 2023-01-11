let newCard = document.createElement("div");
newCard.className = "card";
newCard.innerText = 6;

let container = document.querySelector(".container");

// container.append(newCard);

// setTimeout(() => {
//   container.append(newCard);
// }, 2000);

// container.prepend(newCard);
// container.before(newCard); - перед контейнером
// container.after(newCard); - после
// container.replaceWith(newCard); - вместо

container.append(newCard);

container.insertAdjacentHTML("beforeend", `<div class="card">7</div>`);

// "beforebegin" – вставить html непосредственно перед elem,
// "afterend" – вставить html непосредственно после elem.

// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,

let lastCard = container.lastChild;
lastCard.remove();

//Изменения элемента
newCard.classList.add("warning");
// newCard.classList.remove("card");

newCard.innerText = "wow";

document.getElementsByTagName("input")[0].value = "goodbye";
document.getElementsByTagName("input")[0].dataset.message = "goodbye";
document.getElementsByTagName("input")[0].setAttribute("myattribute", "345");
