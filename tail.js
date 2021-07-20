const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function (array) {
  return array.slice(1);
};

let words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); 
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

words = tail(["Hello"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

words = tail([]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");