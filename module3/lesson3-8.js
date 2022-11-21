"use strict";

let user = {};

user.id = 1;

console.log(user);

user.id = 2;

console.log(user);

/*
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
*/

console.log(Object.getOwnPropertyDescriptor(user, "id"));

let betterUser = {};
Object.defineProperty(betterUser, "id", {
  value: 1,
  writable: false,
  configurable: false,
});

console.log(betterUser);
// betterUser.id = 2;

/*
На протяжении долгого времени JavaScript развивался без проблем с обратной совместимостью. 
Новые функции добавлялись в язык, в то время как старая функциональность не менялась.

Преимуществом данного подхода было то, что существующий код продолжал работать. 
А недостатком – что любая ошибка или несовершенное решение, принятое создателями JavaScript, застревали в языке навсегда.

Так было до 2009 года, когда появился ECMAScript 5 (ES5). Он добавил новые возможности в язык и изменил некоторые из существующих.
Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются. 
Поэтому нам нужно явно их активировать с помощью специальной директивы: "use strict".
*/

//Интерполяция СТРОК

//Геттеры и Сеттеры

//Ещё раз заметим, что свойство объекта может быть либо свойством-аксессором (с методами get/set),
// либо свойством - данным(со значением value).

let cleverUser = {
  firstName: "Artur",
  lastName: "Morgan",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    let newFirstName = name.split(" ")[0];
    let newLastName = name.split(" ")[1];

    if (name.length < 4) {
      console.error("Имя слишком короткое");
      return;
    }

    this.firstName = newFirstName;
    this.lastName = newLastName;
  },
};

console.log(cleverUser.fullName);

cleverUser.fullName = "A B";

console.log(cleverUser);