const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let element of array[i]) {
        result.push(element);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};


module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));