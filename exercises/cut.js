"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => {
  return str.slice(2);
};

const cutLast = (str) => {
  return str.slice(0, -2);
};

const cutFirstLast = (str) => {
  return str.slice(2).slice(0, -2);
};
//* Begin of tests
const assert = require("assert");

// `cutFirst`
assert.strictEqual(cutFirst("blabla"), "abla");
assert.strictEqual(cutFirst("miam"), "am");
// `cutLast`
assert.strictEqual(cutLast("miam"), "mi");
assert.strictEqual(cutLast("abcdefgh"), "abcdef");
// `cutFirstLast`
assert.strictEqual(cutFirstLast("abcdefgh"), "cdef");
assert.strictEqual(cutFirstLast("bonjour"), "njo");

// assert.fail('You must write your own tests');
// End of tests */
