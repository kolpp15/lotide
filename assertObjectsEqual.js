const eqObjects = require('./eqObjects');


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({a : 1, b : 2, c : 3}, {a : 1, b : 2, c : 3}); // 
// assertObjectsEqual({a : 1, b : 2, c : 3}, {a : 1, b : 2, c : 4}); // has to be wrong 