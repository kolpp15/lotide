const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop through keys
// if callback key is object key / return key

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) { //this is IMPORTANT!!!
      return key;
    }
  }
};

const sample = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(sample, x => x.stars === 2), 'noma');
assertEqual(findKey(sample, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(sample, x => x.stars === 1), 'Blue Hill');
