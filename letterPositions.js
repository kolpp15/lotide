const assertArraysEqual = require('./assertArraysEqual');


// first get rid of the spaces
// loop through sentence
// print letters one by one

const letterPositions = sentence => {
  const results = {};

  let noSpace = sentence.split(' ').join('');

  for (let i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]].push(i);
    } else {
      results[noSpace[i]] = [i];
    }
  } return results;
};

module.exports = letterPositions;

// console.log(letterPositions("hello"));

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);
