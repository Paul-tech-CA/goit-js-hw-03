'use strict';

const findBestEmployee = function (employees) {
  let task = 0;
  let keyBest;
  for (let key in employees) {
    if (employees[key] > task) {
      task = employees[key];
      keyBest = key;
    }
  }
  return keyBest;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
