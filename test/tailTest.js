const assertEqual = require('../assertEqual');
const tail = require('../tail');

let words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

console.log('--------------------------------');

words = tail(["Hello"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

console.log('--------------------------------');

words = tail([]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");