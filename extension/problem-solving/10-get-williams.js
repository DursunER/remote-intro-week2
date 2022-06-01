const { check, runTest, skipTest } = require("../../test-api");

// declare getWilliams here

console.log("getWilliams");

runTest("returns [] when passed []", function () {
  check(getWilliams([])).isEqualTo([]);
});
skipTest("returns a Williams from a mixed array", function () {
  check(getWilliams(["Harry Williams", "Charlotte Bank"])).isEqualTo(["Harry Williams"]);
});
skipTest("returns multiple Williams from a mixed array", function () {
  check(getWilliams(["Harry Williams", "Charlotte Williams"])).isEqualTo(["Harry Williams", "Charlotte Williams"]);
});
skipTest("ignores Williams found in first names", function () {
  check(getWilliams(["William Jones", "Harry Williams"])).isEqualTo(["Harry Williams"]);
});
skipTest("ignores Williams found in extended last names", function () {
  check(getWilliams(["John Williams", "Chris Williamson"])).isEqualTo(["John Williams"]);
});
