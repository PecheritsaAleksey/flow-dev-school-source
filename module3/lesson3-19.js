console.log("Message 1");

// console.log("Message 2");

// setTimeout(() => {
//   console.log("Message 2");
// }, 1000);

console.log("Message 3");

//  Функция setTimeout() не является частью JavaScript-движка,
//  это по сути Web API, включённое в среду браузера как дополнительная функциональность

//Стэк вызовов
console.log("Wow");
function myFunc() {
  console.log("Hello from func");
}
myFunc();

//Рассмотреть стэк вызовов в браузере

// Управление тем, как должны вызываться функции Web API, берёт на себя цикл событий (Event loop)

console.log("------callback-------");

let f1 = function (callback) {
  return setTimeout(() => {
    console.log("f1");
    callback();
  }, 2000);
};

let f2 = function () {
  return setTimeout(() => {
    console.log("f2");
  }, 1000);
};

// f1(() => {
//   f2();
// });

//Ад колбэков (Callback-hell)

// f1(() => {
//   f2(() => {
//     f3(() => {
//       f4(() => {
//         f5(() => {
//           f6();
//         });
//       });
//     });
//   });
// });

//Promise

function promiseF1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Promise F1");
      resolve();
    }, 4000);
  });
}

function promiseF2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Promise F2");
      resolve();
    }, 3000);
  });
}

// promiseF1().then(() => {
//   promiseF2();
// });

// promiseF1()
//   .then(() => {
//     promiseF2();
//   })
//   .then(() => {
//     promiseF3();
//   })
//   .then(() => {
//     promiseF4();
//   })
//   .then(() => {
//     promiseF5();
//   })
//   .then(() => {
//     promiseF6();
//   });

console.log("------Async/Await--------");

function asyncF1() {
  return setTimeout(() => {
    console.log("Async F1");
  }, 2000);
}

async function myAsyncFunc() {
  await promiseF1();
  await promiseF2();
}

myAsyncFunc();
