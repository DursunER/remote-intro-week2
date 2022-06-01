const { check, runTest, skipTest } = require("../../test-api");

function tallyLetters(str) {
  /*
    This function takes a string and returns an object tallying the occurrences of each letter in the string
  */
}

console.log("tallyLetters()");

runTest("returns {} when passed empty string", function () {
  check(tallyLetters("")).isEqualTo({});
});

skipTest("can tally a single character string", function () {
  check(tallyLetters("a")).isEqualTo({ a: 1 });
  check(tallyLetters("c")).isEqualTo({ c: 1 });
  check(tallyLetters("z")).isEqualTo({ z: 1 });
});

skipTest("can tally a duplicated character string", function () {
  check(tallyLetters("aaa")).isEqualTo({ a: 3 });
  check(tallyLetters("cc")).isEqualTo({ c: 2 });
  check(tallyLetters("zzzzzz")).isEqualTo({ z: 6 });
});

skipTest("can tally a multiple distinct character string", function () {
  check(tallyLetters("abc")).isEqualTo({ a: 1, b: 1, c: 1 });
  check(tallyLetters("acc")).isEqualTo({ a: 1, c: 2 });
  check(tallyLetters("zzzzzzdde")).isEqualTo({ z: 6, d: 2, e: 1 });
});
