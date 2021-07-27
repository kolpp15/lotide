const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);
// const results3 = map(words, word => word[2]);
// const length = map(words, word => word.length);

// console.log(results1);
// console.log(results2);
// console.log(results3);
// console.log(length);

// assertArraysEqual(length, [6, 7, 2, 5, 3]);