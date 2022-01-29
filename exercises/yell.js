"use strict";

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (str) => {
  return str.toUpperCase();
};
//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof yell, "function");
assert.strictEqual(yell("bonjour"), "BONJOUR");
assert.strictEqual(yell("a"), "A");
// assert.fail("You must write your own tests");
// End of tests */
