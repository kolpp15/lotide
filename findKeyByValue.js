const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(Object.keys()); -> keys
// loop through keys
// for in the list of object's key and value , if value is found, return the key

const findKeyByValue = (object, value) => {
  const keys = Object.keys(object); // returns sci_fi, comedy, drama

  for (const key of keys) { // loop through keys
    if (object[key] === value) {
      return key;
    }
  } return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);