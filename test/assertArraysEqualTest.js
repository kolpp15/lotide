const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual(['a', 'b', 'c'], ['c', 'b', 'a']);
