const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
Remember to use an appropriate array method in your implementation.
*/

/*
makeAllUpperCase()

This function should take an array of strings as an argument, and return an array of those strings capitalised
*/

runTest("makeAllUpperCase() returns an array of capitalised strings", function () {
  check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
  check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo(["I", "LOVE", "CODING"]);
});

/*
collectStrings()

This function should take an array containing various data types as an argument, and return an array of the strings found in the original (retaining the order)

*/

skipTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings([true, "hello", 45, "there", false])).isEqualTo(["hello", "there"]);
  check(collectStrings([1, 2, 3, 4, 5])).isEqualTo([]);
});

/*
getEvenNumbers()

This function should take an array of numbers as an argument, and return an array of only the even numbers
*/

skipTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
  check(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).isEqualTo([2, 4, 6, 8, 10]);
  check(getEvenNumbers([9, 100, 13, 20])).isEqualTo([100, 20]);
});

/*
collectPlurals()

This function should take an array of strings as an argument, and return an array of the strings ending with an "s" (retaining the order)
*/

skipTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])).isEqualTo(["dogs", "apples", "kittens"]);
  check(collectPlurals(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])).isEqualTo([
    "abcs",
    "humans",
    "thoughts",
    "cups",
  ]);
});

/*
createArray()

This function should take a number and a string as its arguments, and return an array of length "number" consisting of elements "string"
NOTE: you may want to use an array method that isn't a *Higher Order Function* here
*/

skipTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
  check(createArray(7, "X")).isEqualTo(["X", "X", "X", "X", "X", "X", "X"]);
});

/*
deleteManyPasswords()

This function should take an array of objects representing users as an argument
A user object will take the form:
{
  name: "Liam",
  password: "secret123"
}
Your function should return an array of user objects, each with their password property removed
*/

skipTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(
    deleteManyPasswords([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

/*
countTheObjects()

This function should take an array containing various data types as an argument, and return a count of how many elements are objects
*/

skipTest("countTheObjects() counts all the objects in an array of multi-type items", function () {
  check(
    countTheObjects([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo(3);
  check(countTheObjects([{}, {}, {}, {}, {}])).isEqualTo(5);
  check(countTheObjects([1, {}, true, {}, {}, false, {}, {}])).isEqualTo(5);
  check(countTheObjects([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])).isEqualTo(5);
  check(countTheObjects([7, "hello", 45, true])).isEqualTo(0);
});

/*
getEmptyTills()

This function should take an array of objects representing tills as an argument
A till object will take the form:
{
  name: "Dave",
  checkout: ["haribo", "coffee"]
}
Your function should return an array of the till objects that have no elements in their checkout array
*/

skipTest("getEmptyTills() gets all the tills that are empty", function () {
  const tills = [
    {
      name: "John",
      checkout: ["bread", "eggs", "milk", "sausages"],
    },
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "Anat",
      checkout: ["chocolate"],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ];
  check(getEmptyTills(tills)).isEqualTo([
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ]);
});
