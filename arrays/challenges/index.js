const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function getLastItem(arr) {
  // This function should take an array as an argument and return the last item from it

  return arr.pop()

}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});

function getLastNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the last n items of the given array

 // return arr.slice(arr.length - n)
myArr = [];
for (let i = arr.length -n; i < arr.length; i++) {
  myArr.push(arr[i]);
}
return myArr
}

runTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems(["a", "b", "c", "d"], 2)).isEqualTo(["c", "d"]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["banana", "pear", "kiwi"]);
});

function removeItem(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array without the item at index 'n'

arr.splice(n,1)
return arr;

}

runTest("removeItem() removes an item at a given index", function () {
  check(removeItem(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d"]);
  check(removeItem(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d"]);
  check(removeItem(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d"]);
});

function mergeArrays(arr1, arr2) {
  const myArr= arr1.concat(arr2)
return myArr
}

runTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});

function getSandwichFilling(sandwich) {
  // If an array is like a sandwich, the first and last items are the bread
  // This function should take an array as an argument and return an array containing the filling of the sandwich

sandwich.splice(0,1)
sandwich.splice(sandwich.length-1,1)
return sandwich
}

runTest("getSandwichFilling() returns the inner elements of an array", function () {
  check(getSandwichFilling(["a", "b", "c", "d"])).isEqualTo(["b", "c"]);
  check(getSandwichFilling([10, 20, 30, 40, 50, 60])).isEqualTo([20, 30, 40, 50]);
  check(getSandwichFilling(["northcoders", "are", "the", "best"])).isEqualTo(["are", "the"]);
});

function isEmptyArray(arr) {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise

  if (arr.length === 0) { 
    return true
  } else return false



}

runTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});

function howManyArguments(...arguments) {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation
return arguments.length;

}

runTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments("a", "b", "c")).isEqualTo(3);
  check(howManyArguments()).isEqualTo(0);
  check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
  check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(6);
});

function updatePosition(coords, direction) {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */
}

skipTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});

function addCoins(collection, coin) {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */
}

skipTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([[], ["2p", "2p"], [], []]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([["1p"], ["2p"], [], ["10p", "10p"]]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([[], [], ["5p", "5p", "5p"], []]);
});

function accessItem(arr, index) {
  /* 
  This function should take two arguments, an array and an index, and return the element at that specified index

  The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array

  For examples of this behaviour, look at the second group of tests below
  */
}

skipTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
  check(accessItem(["a", "b", "c", "d"], 2)).isEqualTo("c");
  check(accessItem(["a", "b", "c", "d"], 0)).isEqualTo("a");
  check(accessItem(["a", "b", "c", "d"], 3)).isEqualTo("d");
});

skipTest(
  "accessItem() can access an item inside in an array with an index equal to or above the array length",
  function () {
    check(accessItem(["a", "b", "c", "d"], 4)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 6)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 10)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 11)).isEqualTo("d");
  }
);

function findDayOfTheWeek(num) {
  // This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week
}

skipTest("findDayOfTheWeek() returns the day of the week given a passed number", function () {
  check(findDayOfTheWeek(2)).isEqualTo("Tuesday");
  check(findDayOfTheWeek(3)).isEqualTo("Wednesday");
  check(findDayOfTheWeek(1)).isEqualTo("Monday");
  check(findDayOfTheWeek(6)).isEqualTo("Saturday");
  check(findDayOfTheWeek(7)).isEqualTo("Sunday");
});


