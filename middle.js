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

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]),[4]);