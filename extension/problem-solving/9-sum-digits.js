const { check, runTest, skipTest } = require("../../test-api");

// declare sumDigits here

console.log("sumDigits");

runTest("picks out a digit from a string and returns", function () {
  check(sumDigits("foo5foo")).isEqualTo(5);
});
skipTest("sums multiple digits from a string", function () {
  check(sumDigits("5foo5foo")).isEqualTo(10);
});
skipTest("returns a sum of several digits in a string", function () {
  check(sumDigits("hello1world5this3is2a2string")).isEqualTo(13);
});
skipTest("treats consecutive digits as individual numbers", function () {
  check(sumDigits("he110world")).isEqualTo(2);
});
