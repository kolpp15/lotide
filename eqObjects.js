const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);


  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    // console.log("key", key);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        // console.log("key not passing", key);
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // console.log("object key not passing", key);
      return false;
    }
  }
  return true;
};

//Test code :
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc), false);

const cd = { c: [1, "2", null], d: "3" };
const dc = { d: "3", c: [1, "2", null] };
assertEqual(eqObjects(cd, dc), true);

