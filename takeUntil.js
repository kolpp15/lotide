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
}

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  }
}


//1. push all items into results
//2. if callback item = break;
//3. else, push all items into results

const takeUntil = (array, callback) => {
  const results = [];
  
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);