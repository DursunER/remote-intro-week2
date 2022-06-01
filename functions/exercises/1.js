const { check, runTest } = require("../../test-api");

function getLength() {
  // return the length of the passed string
}

runTest("getLength() returns the correct string length", function () {
  check(getLength("jonny")).isEqualTo(5);
  check(getLength("jd")).isEqualTo(2);
  check(getLength("rosa")).isEqualTo(4);
});
