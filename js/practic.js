// //  ========= bubbles sort === пузырьквая сортировка====

// for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//     for (let j = 0, endJ = endI - i; j < endJ; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let swap = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = swap;
//         }
//     }
// }

// // =================== вывод четного и не четного числа !!!! =====
// 'use strict';

// const userInput = prompt('Введите последовательность чисел');
// console.log(userInput);
// let arr;

// if (userInput !== null) {
//     arr = userInput.split(',');
//        console.log(arr);
//     for (let i = 0; i < arr.length; i +=1){
//         // if (i % 2 === 0)
//         // console.log( arr[i]);
//     }

//     for (let i = 0; i < arr.length; i +=1){
//         if (i % 2 === 1)
//         console.log( arr[i]);
//     }

// }

// 'use srict';

// // ============ function for selection/ FOR======
// // let numbers = [1, 2, 3, 4, 5];

// // const friends = ['Mango', 'Holly', 'Chelsy', 'Ayova', 'Chicago'];

// // const finde = function(items) {
// //   for (const item of items) {
// //         console.log(item);
// //     }
// // };

// // finde(numbers);
// // finde(friends);
// // finde(['n', 2, 3, 'l']);

// // =============== Function for SEARCHINS / FindFriend====

// const friends = ['Mango', 'Holly', 'Chelsy', 'Ayova', 'Chicago'];
// // const nameToFind1 = 'Mango';
// // const nameToFind2 = 'Holly';

// const findeFriend = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (name === friend) {
//       return 'The friend is present';
//     }
//   }

//   return 'The friend is absent';
// };

// const r1 = findeFriend(friends, 'Mango');
// console.log(r1);
// const r2 = findeFriend(friends, 'Holly');
// console.log(r2);
// const r3 = findeFriend(friends, 'Texas');
// console.log(r3);

// ============ проверка строки на Полиндром==========
// const isPolindrom = function (string) {
//   return string === string.split('').reverse().join('');
// };

// console.log(isPolindrom('101'));

// ============  ====== задача Фибаначи
// РЕКУРСИВНАЯ ФУНКЦИЯ====================

// const febo = function (amount, resArr = [0,1]) {

//   resArr.push(resArr[resArr.length-2] + resArr[resArr.length-1]);
//   if (resArr.length < amount) {
//     return febo(amount, resArr);
//   } else {
//     return resArr;
//   }

// }
// console.log(febo(10));

// ============== СОРТИРОВКА МАССИВА ПО ТИПАМ ДАННЫХ И ПРИСВАИВАНИЕ ИМЕНИ КЛЮЧАМ ======
// ============== МНОГОМЕРНЫЙ МАССИВ ==============

// let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];
// const addToArray = function (arr) {
//     let responseArray = [];
//     responseArray['int'] = [];
//     responseArray['float'] = [];
//     responseArray['string'] = [];
//     for (let item of arr) {
//         if (Number.isInteger(item)) {
//             responseArray['int'].push(item);
//         }
//         else if (item % 1 !== 0 && typeof item === 'number') {
//             responseArray['float'].push(item);
//         }
//         else if (typeof item === 'string') {
//             responseArray['string'].push(item);
//         }
//     }
//     return responseArray;
// }
// console.log(addToArray(arr));

// Семья из мамы, папы и 2 детей хотят попасть в будущее. Но машина времени есть только у соседа.
//   Сосед готов одолжить машину только если ему её вернут обратно. Так же в машину могут
// одновременно сесть только один взрослый или 2 детей.
//   Нужно вывести пошаговые действия в консоль и так же посчитать количество итераций.

// =============== ВАЛЮТНЫЙ КАЛЬКУЛЯТОР =======
// const usdBuy = 27.5;
// const usdSell = 28.5;

// const euroBuy = 31.5;
// const euroSell = 32.5;

// const rubBuy = 0.3;
// const rubSell = 0.5;

// const exBuy = (amount, currensy) => amount / currensy;

// const exSell = (amount, currensy) => amount * currensy;

// console.log(exBuy(100, usdBuy));
// console.log(exSell(100, euroSell));

// const randomArr =
