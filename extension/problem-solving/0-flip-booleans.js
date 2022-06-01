const { check, runTest, skipTest } = require("../../test-api");

function flipBooleans(booleans) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
}

console.log("flipBooleans()");
runTest("returns an empty array when passed []", function () {
  check(flipBooleans([])).isEqualTo([]);
});

skipTest("inverts all booleans in the array", function () {
  check(flipBooleans([true, true, true])).isEqualTo([false, false, false]);
  check(flipBooleans([false, true, true])).isEqualTo([true, false, false]);
  check(flipBooleans([false, false, false])).isEqualTo([true, true, true]);
});
