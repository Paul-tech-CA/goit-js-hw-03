('use strict');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;
  for (const each of allProducts) {
    if (each.name === productName) totalPrice = each.price * each.quantity;
  }
  return totalPrice;
};

// const calculateTotalPrice = function (allProducts, productName) {
//   let totalPrice = 0;
//   for (let i = 0; i < allProducts.length; i++)
//     if (allProducts[i].name === productName) {
//       totalPrice = allProducts[i].price * allProducts[i].quantity;
//     }

//   return totalPrice;
// };

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
