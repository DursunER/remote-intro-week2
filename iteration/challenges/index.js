const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function makeAllUpperCase(arr) {
  // This function should take an array of strings as an argument and return an array consisting of the same strings in upper case (retaining the order)

  let newArr = [];
  for (const element of arr) {
  newArr.push(element.toUpperCase())
}
return newArr;

}

runTest("makeAllUpperCase() can convert all strings to upper case", function () {
  check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
  check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo(["I", "LOVE", "CODING"]);
});

  
  function collectStrings(arr) {
    // This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)
    
    let newArr = [];
    for (const element of arr) {
      if ( typeof element === "string") {
        newArr.push(element)
      }
    }
    return newArr
  }

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
});

function getEvenNumbers(arr) {
  // This function should take an array of numbers as an argument and return an array containing all even numbers from the input (retaining the order)

  let newArr= []
  for (const element of arr) {
    if (element % 2 === 0) {
      newArr.push(element)
    }
  }
return newArr;
}

runTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
  check(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).isEqualTo([2, 4, 6, 8, 10]);
  check(getEvenNumbers([9, 100, 13, 20])).isEqualTo([100, 20]);
  check(getEvenNumbers([78, 5, 9, 11, 24])).isEqualTo([78, 24]);
});

function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)

  let newArr= []
  for (const element of arr) {
    if (element.slice(-1) === "s") {
      newArr.push(element)
    }
  }
return newArr;
}

runTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])).isEqualTo(["dogs", "apples", "kittens"]);
  check(collectPlurals(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])).isEqualTo([
    "abcs",
    "humans",
    "thoughts",
    "cups",
  ]);
});

function createArray(length, char) {
  // This function should take a length and a character as arguments and return an array of the given length populated with the given character

  let newArr= []
  for (let i=0; i<length; i++) {
      newArr.push(char)
    }
  
return newArr;
}


runTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
});

function deleteManyPasswords(arr) {

  let newArr= []
  for (const element of arr) {
     delete element.password
    }
  
return arr;
}
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'password' property
  You should return an array of user objects each with the 'password' property removed (retaining the order)
  */


runTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(
    deleteManyPasswords([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

function collectTheVowels(str) {
  // This function should take a string as its argument and return a string consisting of all vowels found in the input (retaining the order)

let newStr = "";
const r = ["a","e","i","o","u"];

for (let i = 0; i< str.length; i++) {
  
  if ( r.includes(str.charAt(i))) {
    newStr = newStr.concat(str.charAt(i));
}
} 
return newStr;
}

runTest(
  "collectTheVowels() takes a string of many letters and returns a string containing those vowels in correct order",
  function () {
    check(collectTheVowels("a")).isEqualTo("a");
    check(collectTheVowels("bcd")).isEqualTo("");
    check(collectTheVowels("bcdepiaouk")).isEqualTo("eiaou");
    check(collectTheVowels("hello world")).isEqualTo("eoo");
  }
);

function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise

for 
}

skipTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);
