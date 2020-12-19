// const number = 808;

// const intr = number => {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(intr(number));
// ============================================================================
// Сгенерировать обьект с рандомными названиями ключей.
// После этого в значение каждого ключа поместить число, это количество символов ключа умноженное
// на порядковый номер в алфавите последней буквы ключа.

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// const generateRandomString = function (minLength, maxLength) {
//   const strLength = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   let stringResponse = '';
//   for (let i = 0; i < strLength; i++)
//     stringResponse += alphabet.charAt(
//       parseInt(Math.random() * alphabet.length),
//     );
//   return stringResponse;
// };

// const generateRandomObject = function (minLength, maxLength) {
//   const objectResponse = {};
//   const keyCount = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   for (let i = 0; i < keyCount; i++) {
//     let randomString = generateRandomString(5, 8);
//     objectResponse[randomString] =
//       randomString.length * alphabet.indexOf(randomString.substr(-1));
//   }
//   return objectResponse;
// };

// console.log(generateRandomString(5, 8));
// console.log(generateRandomObject(5, 8));

// =================================================================================================
// Сгенерировать строку цифр от 0 до 9 длиной, кот передадим в функцию
// Определить наибольшую последовательность
// 8555238397379716621549384598978692182877122955895555502001344734026270107421597387466806040235694188891848853405174157089986073009305193743206082566354381982568303248598946899129416988722832444623014483790127138754647543424327519657367430296701454558
// const strNumbers = amount => {
//   let responseString = '';
//   for (let i = 0; i < amount; i++) {
//     responseString += parseInt(Math.random() * 10);
//   }
//   return responseString;
// };

// const longestChain = string => {
//   let responseChain = '';
//   let isChain = false;
//   let tempChain = '';
//   for (let i = 0; i < string.length; i++) {
//     if (Number(string[i]) + 1 === Number(string[i + 1])) {
//       isChain = true;
//       tempChain += string[i];
//     } else {
//       if (isChain === true) {
//         tempChain += string[i];
//       }
//       isChain = false;
//       if (tempChain.length > responseChain.length) {
//         responseChain = tempChain;
//       }
//       tempChain = '';
//     }
//   }
//   return responseChain;
// };

// let stringNumbers = strNumbers(1000);

// console.log(stringNumbers);
// console.log(longestChain(stringNumbers));
// ===================================================================

  createTransaction(amount, type){
    const transactionNew = { name: id, operation: type, summary: amount };
    console.log(transitionNew);
  };