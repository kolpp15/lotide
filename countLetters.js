// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  let result = {};

  // first get rid of the spaces
  let noSpace = sentence.split(' ').join('');

  // loop through sentence
  for (const letter of noSpace) {
    // check if letter exists
    if (result[letter]) {
      result[letter] += 1;
    } else {
      // if letter doesn't exist
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

