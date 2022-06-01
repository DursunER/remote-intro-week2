const { runTest, skipTest, check } = require("../../test-api");

// For each of these tests replace the variable FILL_ME_IN with a value to make the test pass.

skipTest("Task 1", function () {
  const myObject = {};

  check({}).isEqualTo(typeof myObject);
});

// check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 2", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };
  check(sumNums("hello")).isEqualTo(0);
  check(sumNums("Michael")).isEqualTo(father.firstName);
  check(sumNums("Bluth")).isEqualTo(father.lastName);
  check(sumNums("Michael")).isEqualTo(father.firstname);
  check(sumNums(33)).isEqualTo(father.age);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 3", function () {
  const son = {};
  son.name = "George Michael";
  son.lastname = "Bluth";
  son.age = 16;
  son.jobs = ["Frozen Banana Salesman", "CEO of Fakeblock"];

  check(FILL_ME_IN).isEqualTo(son.name);
  check(FILL_ME_IN).isEqualTo(typeof son.jobs);
  check(FILL_ME_IN).isEqualTo(son.jobs[1][5]);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 4", function () {
  const starWars = {
    episode4: "A New Hope",
    episode5: "Empire Strikes Back",
    episode6: "Return of the Jedi",
    episode7: "The Force Awakens",
  };
  const worstOne = starWars["episode" + (10 - 4)];

  check(FILL_ME_IN).isEqualTo(worstOne);
  check(starWars["episode7"]).isEqualTo(FILL_ME_IN);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 5", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 6", function () {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check(FILL_ME_IN).isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo(FILL_ME_IN);
  check(bluthFamily.daughters[FILL_ME_IN].FILL_ME_IN).isEqualTo("Lindsay");
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
