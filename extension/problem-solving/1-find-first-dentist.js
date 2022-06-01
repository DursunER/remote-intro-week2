const { check, runTest, skipTest } = require("../../test-api");

function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
}

console.log("findFirstDentist()");

runTest("returns null if no dentist is in the array", function () {
  check(findFirstDentist([])).isEqualTo(null);
});

skipTest("returns a person object who is a dentist", function () {
  const dentists = [{ name: "Orin Scrivello", isDentist: true }];

  check(findFirstDentist(dentists).isDentist).isEqualTo(true);
  check(findFirstDentist(dentists).name).isEqualTo("Orin Scrivello");
});

skipTest("returns the first dentist from the array", function () {
  const dentists = [
    { name: "Johnny Karate", isDentist: false },
    { name: "Lucy Hobbs Taylor", isDentist: true },
    { name: "Pierre Fauchard", isDentist: true },
    { name: "Bert Macklin", isDentist: false },
    { name: "Orin Scrivello", isDentist: true },
    { name: "Kip Hackman", isDentist: false },
  ];
  check(findFirstDentist(dentists)).isEqualTo({
    name: "Lucy Hobbs Taylor",
    isDentist: true,
  });
});
