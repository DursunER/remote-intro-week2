const { check, runTest, skipTest } = require("../../test-api");

// declare pairDNA here

console.log("pairDNA");

runTest('returns [] when passed ""', function () {
  check(pairDNA("")).isEqualTo([]);
});
skipTest("returns a single pair in an array when passed one", function () {
  check(pairDNA("G")).isEqualTo(["GC"]);
});
skipTest("returns multiple pairs when passed multiple chars", function () {
  check(pairDNA("GGC")).isEqualTo(["GC", "GC", "CG"]);
});
skipTest("returns correctly when passed lowercase letters", function () {
  check(pairDNA("gat")).isEqualTo(["GC", "AT", "TA"]);
});
skipTest("ignores invalid chars but still returns valid ones within the string", function () {
  check(pairDNA("PGYYYHVB")).isEqualTo(["GC"]);
});
