('use strict');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice;
  for (const item of allProdcuts) {
    if (item !== productName) {
      const values = Object.values(item);
      console.log(values);

      // totalPrice = allProdcuts.price * allProdcuts.quantity;
      // console.log(totalPrice);
    }

    // console.log(item);
  }

  //
  //
  // {
  //
  // }

  // return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800