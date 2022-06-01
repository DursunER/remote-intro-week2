const { check, runTest, skipTest } = require("../../test-api");

// declare getFactorials here

console.log("getFactorials");

runTest("returns [] when passed []", function () {
  check(getFactorials([])).isEqualTo([]);
});
skipTest("returns one factorial", function () {
  check(getFactorials([3])).isEqualTo([6]);
});
skipTest("returns multiple factorials", function () {
  check(getFactorials([3, 4, 5])).isEqualTo([6, 24, 120]);
});
skipTest("returns large factorials", function () {
  check(getFactorials([3, 8, 9, 10])).isEqualTo([6, 40320, 362880, 3628800]);
});
