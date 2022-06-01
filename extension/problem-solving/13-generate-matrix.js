const { check, runTest, skipTest } = require("../../test-api");

// declare generateMatrix here

console.log("generateMatrix");

runTest("returns [[null]] when passed 1", function () {
  check(generateMatrix(1)).isEqualTo([[null]]);
});
skipTest("returns a 2*2 matrix of null entries when passed 2", function () {
  check(generateMatrix(2)).isEqualTo([
    [null, null],
    [null, null],
  ]);
});
skipTest("returns a 3*3 matrix of null entries when passed 3", function () {
  check(generateMatrix(3)).isEqualTo([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});
