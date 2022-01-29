"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (str) => {
  return "*" + str.toLowerCase() + "*";
};
//* Begin of tests
const assert = require("assert");

assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper("Minuscule"), "*minuscule*");
assert.strictEqual(whisper("YO"), "*yo*");
// assert.fail("You must write your own tests");
// End of tests */
