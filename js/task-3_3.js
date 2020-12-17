'use strict';

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  // console.log(values);
  let task = 0;
  for (let value of values) {
    if (value > task) {
      task = value;
    }
  }
  return task;
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
