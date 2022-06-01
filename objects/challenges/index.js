const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function accessObject(obj, key) {
  // This function should take an object and a key as its arguments and return the value found at the provided key in the input object

return obj[key]
}

runTest("accessObject() can access a property value using a key", function () {
  check(accessObject({ name: "jonny", age: 32 }, "name")).isEqualTo("jonny");
  check(accessObject({ name: "jonny", age: 32 }, "age")).isEqualTo(32);
});

function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise

return obj[key] != null ? true : false
}

runTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(false);
clearInterval});

function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property 
  // based on the input
 const myKey = arr[0];
 const myVal = arr[1];
 let  myObj = {}
 myObj[myKey] = myVal;
 return myObj

}

runTest("createObject() creates a new object from a key value pair", function () {
  check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
  check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
  check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
});

function countProperties(obj) {
  // This function should take an object as its argument and return the total number of properties it contains

let totNum = 0;
for (let prop in obj) {
  totNum ++
}
return totNum;
}

runTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties({})).isEqualTo(0);
  check(countProperties({ name: "shaq" })).isEqualTo(1);
  check(countProperties({ name: "shaq", job: "tutor", city: "Manchester" })).isEqualTo(3);
});

function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow 
  // ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so

const myObj = {
  "left": "←",
  "right": "→",
  "up": "↑",
  "down": "↓"
}
return myObj[direction]
}

runTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow("left")).isEqualTo("←");
  check(createArrow("right")).isEqualTo("→");
  check(createArrow("up")).isEqualTo("↑");
  check(createArrow("down")).isEqualTo("↓");
});

function updateVoterAddress(voter, correctHouseNumber) {
  
  voter.address.houseNumber = correctHouseNumber;
  
  /*
  This function should take an object representing a voter's details and a house number as its arguments
  A voter object will take this form:
  
  The voter's house number is incorrect and you should update it to be the one provided
  This function does NOT need to return anything
  */
}

runTest("updateVoterAddress() updates the voter's houseNumber", function () {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });
});

function createUserString(user) {

  return `name: ${user.name}, age: ${user.age}, language: ${user.language}`
  /*
  This function should take an object representing a user's details as its argument
  A user object will take this form:
  {
    name: "Mitch",
    age: 30,
    language: "JavaScript"
  }
  You should return a string consisting of these details in this form:
  "name: Mitch, age: 27, language: Javascript"
  This is a good use case for String Template Literals:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  */
}

runTest("createUserString() will create a message from an details object", function () {
  check(createUserString({ name: "Mitch", age: 30, language: "Javascript" })).isEqualTo(
    "name: Mitch, age: 30, language: Javascript"
  );
  check(createUserString({ name: "Anat", age: 24, language: "Ruby" })).isEqualTo("name: Anat, age: 24, language: Ruby");
});

function updateCoinMachine(coinMachine, coin) {

  switch( coin ) {
      case "1p":
      Object.values(coinMachine[coin]++) ;
      break;
      case "2p":
      Object.values(coinMachine[coin]++) ;
      break;
      case "5p":
      Object.values(coinMachine[coin]++) ;
      break;
      case "10p":
      Object.values(coinMachine[coin]++) ;
  }
  return coinMachine;
}
  /*
  This function should take an object representing a coin machine and a string representing a coin as its arguments
  A coinMachine object will take this form:
  {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0
  }
  You should 'add the provided coin to the machine' by altering the associated property and return the updated coinMachine
  */


runTest("updateCoinMachine() will create a message from an details object", function () {
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")).isEqualTo({
    "1p": 1,
    "2p": 0,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 1,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 4,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")).isEqualTo({
    "1p": 0,
    "2p": 3,
    "5p": 11,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")).isEqualTo(
    { "1p": 0, "2p": 3, "5p": 10, "10p": 1 },
    "5p"
  );
});
