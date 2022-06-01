const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.

You should look up Regex methods to help you in these challenges :)
Try this link -> https://javascript.info/regexp-introduction#regular-expressions
*/


function extractCode(myStr) {

const r = /[0-9]+/;
return Number(myStr.match(r));

}

/* This function should take a string as an argument
Somwhere in the middle of the string, there will be a series of consecutive digits composing a number
You should extract that number from the string and return it
*/

runTest("extractCode() can find the total from a single code string", function () {
  check(extractCode("abcd67yuio")).isEqualTo(67);
  check(extractCode("abcd103yuio")).isEqualTo(103);
  check(extractCode("abcd4567yuio")).isEqualTo(4567);
  check(extractCode("abcd1000289yuio")).isEqualTo(1000289);
});

/*

This function should take a string repesenting a sort code as an argument
A valid sort code should adher to the format: 2 digits hyphen 2 digits hyphen 2 digits
You should return true if the sort code is valid, and false otherwise
*/

function isValidSortCode(sortCode) {
  
  const r = /^\d{2}-\d{2}-\d{2}$/
 return r.test(sortCode)
  
}

runTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode("10-34-67")).isEqualTo(true);
  check(isValidSortCode("51-34-58")).isEqualTo(true);
  check(isValidSortCode("85-16-23")).isEqualTo(true);

  check(isValidSortCode("51-349-67")).isEqualTo(false);
  check(isValidSortCode("7980-34-67")).isEqualTo(false);
  check(isValidSortCode("34-12-899")).isEqualTo(false);
  check(isValidSortCode("a8-78-10")).isEqualTo(false);
  check(isValidSortCode("45_78_10")).isEqualTo(false);
});


function isProfessionalEmail(myStr) {

const r= /[xX]$/

return !myStr.match(r)

}
/*
This function should take a string representing an email as an argument
An email is considered to be professional if it does not end with a kiss ("x" or "X")
You should return true if the email is professional, and false otherwise
*/

runTest("isProfessionalEmail() checks if an email ends with an x", function () {
  check(isProfessionalEmail("x")).isEqualTo(false);
  check(isProfessionalEmail("Dear Sir/Madam")).isEqualTo(true);
  check(isProfessionalEmail("Dear Alex, How are you?")).isEqualTo(true);
  check(isProfessionalEmail("i miss u xx")).isEqualTo(false);
  check(isProfessionalEmail("X_X")).isEqualTo(false);
});


function countVowels(myStr) {

  let count = 0;
  const r = /[a, e, i, o, u]/i

  for (let i = 0; i < myStr.length; i++) {
  if (r.test(myStr.charAt(i))) { 
    count ++ 
}
  }
return count;
}

/*
This function should take a string as an argument, and return a count representing the number of vowels it contains
*/

runTest("countVowels() counts the vowels in a string", function () {
  check(countVowels("")).isEqualTo(0);
  check(countVowels("bcd")).isEqualTo(0);
  check(countVowels("a")).isEqualTo(1);
  check(countVowels("abc")).isEqualTo(1);
  check(countVowels("AEbiO")).isEqualTo(4);
  check(countVowels("aaeee!!!")).isEqualTo(5);
});

 /*
function sumNums(myStr) {
  
  const noDigit = /[^0-9]/g
  const oneDigit = /[0-9]/
  const oneOrMore = /[0-9]g/ 
  const consecDigit = /[0-9]{2,}/

  if ( myStr.match(noDigit)) {
    return 0
    } else if ( myStr.match(consecDigit)) && (myStr.match(oneOrMore))
      return Number(myStr.match(consecDigit)) + Number(myStr.match(oneOrMore))
    } else if ( myStr.match(oneOrMore))  { 
  }
}
/*
This function should take a string as an argument, and return a sum of all the numbers found within
Consecutive digits should be taken as numbers: i.e. "24" = 24, not 6
If there are no numbers, you should return 0
*/

skipTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums("hello")).isEqualTo(0);
  check(sumNums("1")).isEqualTo(1);
  check(sumNums("12")).isEqualTo(12);
  check(sumNums("1hello2")).isEqualTo(3);
  check(sumNums("12hiya!3")).isEqualTo(15);
});


/*
This function should take a string as an argument
You will need to check whether or not it contains *exactly* 2 consecutive occurrences of the letter "l"
This means that there *must* be exactly 2 "l"s in total and they *must* be consecutive
You should return true if this is the case, and false otherwise
*/

function testExact2ConsecutiveLs(myStr){

  const r = /l{2,2}/
  return myStr.match(r)
}



skipTest("testExact2ConsecutiveLs()", function () {
  check(testExact2ConsecutiveLs("ll")).isEqualTo(true);
  check(testExact2ConsecutiveLs("hello")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bells")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bellows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("aaaallasdows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("llama")).isEqualTo(true);
  check(testExact2ConsecutiveLs("well")).isEqualTo(true);

  check(testExact2ConsecutiveLs("mile")).isEqualTo(false);
  check(testExact2ConsecutiveLs("fly")).isEqualTo(false);
  check(testExact2ConsecutiveLs("wellll")).isEqualTo(false);
  check(testExact2ConsecutiveLs("mitchelllloyd")).isEqualTo(false);
  check(testExact2ConsecutiveLs("l")).isEqualTo(false);
});
