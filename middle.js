const assertArraysEqual = require('./assertArraysEqual');


// return middle array
// return always one(odd) or two(even) elements
// if array is less than 3, return empty array


const middle = (array) => {
  let midArray = [];

  if (array.length < 3) {
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[(array.length / 2) - 1]);
    midArray.push(array[array.length / 2]);
  } else {
    midArray.push(array[(array.length - 1) / 2]);
  }
  return midArray;
};

module.exports = middle;