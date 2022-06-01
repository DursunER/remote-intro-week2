const { check, runTest, skipTest } = require("../../test-api");

function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
}

console.log("getPugOwners()");

runTest("returns [] when passed []", function () {
  check(getPugOwners([])).isEqualTo([]);
});

skipTest("returns an array of pug owners names when passed an array of dog objects", function () {
  const dogs = [
    { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
    { name: "Max", breed: "Pug", owner: "Izzi" },
    { name: "Poppy", breed: "Pug", owner: "Anat" },
  ];
  check(getPugOwners(dogs)).isEqualTo(["Izzi", "Anat"]);

  const dogs2 = [
    { name: "Steven", breed: "Lurcher", owner: "Mitch" },
    { name: "Daphne", breed: "Pug", owner: "Paul" },
    { name: "Sandy", breed: "Labrador", owner: "Paul" },
    { name: "Mike", breed: "Pug", owner: "Shaq" },
    { name: "Spike", breed: "Pug", owner: "Alex" },
  ];
  check(getPugOwners(dogs2)).isEqualTo(["Paul", "Shaq", "Alex"]);

  const dogs3 = [
    { name: "Kevin", breed: "Labrador", owner: "Sam" },
    { name: "Patch", breed: "Rottweiler", owner: "Ant" },
    { name: "Miles", breed: "Lurcher", owner: "Nicki" },
    { name: "Sandy", breed: "Pug", owner: "Vel" },
    { name: "Spot", breed: "Pug", owner: "Haz" },
    { name: "Josephine", breed: "Terrier", owner: "Jonny" },
    { name: "Eric", breed: "Pug", owner: "David" },
  ];
  check(getPugOwners(dogs3)).isEqualTo(["Vel", "Haz", "David"]);
});
