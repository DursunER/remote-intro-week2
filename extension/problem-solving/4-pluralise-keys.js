const { check, runTest, skipTest } = require("../../test-api");

function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys.
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };
    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals.
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)

    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */
}

console.log("pluraliseKeys()");

runTest("returns a new object", function () {
  const input = {
    name: "Sam's Pet Shop",
    tagLine: "From Aardvarks to Zebras!",
    pet: [
      { name: "mitch", species: "hamster", price: "£9.99" },
      { name: "jonny", species: "canary", price: "£24.99" },
    ],
  };
  const actual = pluraliseKeys(input);

  check(typeof actual).isEqualTo("object");
});

skipTest(
  "returns an object with identical keys to the input when the input's keys do not need pluralising",
  function () {
    const input = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };
    const actual = pluraliseKeys(input);
    const expected = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };

    check(actual).isEqualTo(expected);
  }
);

skipTest("returns an object with its keys pluralised", function () {
  let input = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    student: ["Suneet", "Ant", "Haz"],
  };
  let actual = pluraliseKeys(input);
  let expected = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    students: ["Suneet", "Ant", "Haz"],
  };
  check(actual).isEqualTo(expected);

  input = {
    name: "Tom",
    job: ["writing katas", "marking"],
    favouriteShop: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  actual = pluraliseKeys(input);
  expected = {
    name: "Tom",
    jobs: ["writing katas", "marking"],
    favouriteShops: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  check(actual).isEqualTo(expected);
});
