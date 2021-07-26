// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// let words = tail(["Yo Yo", "Lighthouse", "Labs"]);
// assertEqual(words.length, 2);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

// console.log('--------------------------------');

// words = tail(["Hello"]);
// assertEqual(words.length, 2);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

// console.log('--------------------------------');

// words = tail([]);
// assertEqual(words.length, 2);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns ['LHL', 'labs'] for ['hi', 'LHL', 'labs']", () => {
    assert.deepEqual(tail(['hi', 'LHL', 'labs']), ['LHL', 'labs']);
  });

});