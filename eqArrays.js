const assertEqual = require('./assertEqual');

// step 1: check if array length are the same (false)
// step 2: if length are the same, check elements (false)
// step 3: if identical, true

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;