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

//step 1: create new array
//step 2: if source equals itemsToRemove, return empty array
//step 2: loop through each source item
//step 3: if 
//step 4: 

const words = ["hello", "world", "lighthouse"];

const without = (source, itemsToRemove) => {
  let filteredArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { //if ! is taken out, code will print the included item
      filteredArray.push(source[i]);
    }
  }
  return filteredArray; 
}



assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", 3], [1, 2, "3"])); 
console.log(without([1,2,3], [1, 2, 3])); 