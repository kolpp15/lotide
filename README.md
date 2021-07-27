# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kolpp15/lotide`

**Require it:**

`const _ = require('@kolpp15/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)` : 
  - input: array 
  - output: first element
* `tail(...)` : 
  - input: array 
  - output: everything except for the head
* `middle(...)` : 
  - input: array 
  - output: middle element(s) 
    - Even number returns 2, Odd number returns 1
* `flatten(...)` : 
  - flattening a nested array
* `countLetters(...)` : 
  - input: sentence or string 
  - output: in an object, returns a count of each of the letters
* `countOnly(...)` : 
  - input: object listed
  - output: in an object, returns counts of input
* `findKey(...)` : 
  - input: object and a callback
  - output: looks through the object and returns the value of the callback function
* `findKeyByValue(...)` : 
  - input: object and a value
  - output: looks through the object and returns the first key of the given value. 
    - return undefined if no key is found
* `letterPositions(...)` : 
  - input: letterPositions('example').character
  - output: returns all the indices 
    - ex) e will return [0, 6]
* `map(...)` : 
  - input: array and callback function
  - output: new array based on the callback function 
    - ex) map('hello', word => word[0]) returns 'h'
* `takeUntil(...)` : 
  - input: array and callback function
  - output: items until the callback function is truthy
    - ex) takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0) returns [1, 2, 5, 7, 2]
* `without(...)` : 
  - input: array and items to remove
  - output: array with items removed
* `assertArraysEqual(...)` : 
  - asserts if the two arrays are equal
* `assertEqual(...)` : 
  - asserts if the two values are equal
* `assertObjectsEqual(...)` : 
  - asserts if the two objects are equal 
* `eqArrays(...)` : 
  - compare two arrays if they are identical
* `eqObjects(...)` : 
  - compare two objects if they are identical