const { check, runTest, skipTest } = require("../../test-api");

function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
}

console.log("getWordLengths()");

runTest("returns [] when passed an empty string", function () {
  check(getWordLengths("")).isEqualTo([]);
});

skipTest("returns an array containing the length of a single word", function () {
  check(getWordLengths("woooo")).isEqualTo([5]);
});

skipTest("returns the lengths when passed multiple words", function () {
  check(getWordLengths("hello world")).isEqualTo([5, 5]);
});

skipTest("returns lengths for longer sentences", function () {
  check(getWordLengths("like a bridge over troubled water")).isEqualTo([4, 1, 6, 4, 8, 5]);
});
