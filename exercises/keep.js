"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
  return str.slice(0, 2);
};

const keepLast = (str) => {
  return str.slice(-2);
};

const keepFirstLast = (str) => {
  return str.slice(0, 2) + str.slice(-2);
};
//* Begin of tests
const assert = require("assert");

// keepFirst
assert.strictEqual(keepFirst("ratatouille"), "ra");
assert.strictEqual(keepFirst("rap"), "ra");
// keepLast
assert.strictEqual(keepLast("bonjour"), "ur");
assert.strictEqual(keepLast("paris"), "is");

// keepFirstLast
assert.strictEqual(keepFirstLast("nantes et angers"), "nars");
assert.strictEqual(keepFirstLast("pomme"), "pome");

// assert.fail("You must write your own tests");
// End of tests */
