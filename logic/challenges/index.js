const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function isBiggerThan10(num) {
  // This function should take a number as an argument, and return an appropriate message based on that number's relationship to the number 10
if (num > 10) {
  return `Number ${num} is more than 10`
} else if (num < 10) {
  return `Number ${num} is less than 10`
} else {
  return `Number ${num} is equal to 10`
}
}


runTest("isBiggerThan10() returns a message indicating if a number is bigger than 10", function () {
  check(isBiggerThan10(3)).isEqualTo("Number 3 is less than 10");
  check(isBiggerThan10(4)).isEqualTo("Number 4 is less than 10");
  check(isBiggerThan10(5)).isEqualTo("Number 5 is less than 10");
  check(isBiggerThan10(10)).isEqualTo("Number 10 is equal to 10");
  check(isBiggerThan10(11)).isEqualTo("Number 11 is more than 10");
  check(isBiggerThan10(100)).isEqualTo("Number 100 is more than 10");
});

function isFalsy(value) {
  // This function should take any value as an argument, and return true if it is falsy, and false otherwise

  return value ? false : true
  }


runTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  check(isFalsy(false)).isEqualTo(true);
  check(isFalsy("")).isEqualTo(true);
  check(isFalsy(0)).isEqualTo(true);
  check(isFalsy(NaN)).isEqualTo(true);
  check(isFalsy(undefined)).isEqualTo(true);
  check(isFalsy(null)).isEqualTo(true);
  check(isFalsy(true)).isEqualTo(false);
});

function readTrafficLight(lightColour) {
  // This function should take a string representing a traffic light colour as an argument
  // It will be one of "red", "green" or "amber" in either uppercase or lowercase
  // You should return a corresponding message

  switch (lightColour.toLowerCase()) {
    case "green" : 
    return "GO!"
    break;
    case "amber" : 
    return "GET READY...";
    break;
    case "red" : 
    return "STOP!";
  
  }
}

runTest("readTrafficLight() should print a message according to the different colour passed in", function () {
  check(readTrafficLight("green")).isEqualTo("GO!");
  check(readTrafficLight("GREEN")).isEqualTo("GO!");

  check(readTrafficLight("amber")).isEqualTo("GET READY...");
  check(readTrafficLight("AMBER")).isEqualTo("GET READY...");

  check(readTrafficLight("red")).isEqualTo("STOP!");
  check(readTrafficLight("RED")).isEqualTo("STOP!");
});

function isMultipleOf6(num) {
  // This function should take a number as an argument, and return true if it is a multiple of 6, and false otherwise

return num % 6 === 0;

}

runTest("isMultipleOf6() should check if a number is divisible by 6", function () {
  check(isMultipleOf6(6)).isEqualTo(true);
  check(isMultipleOf6(10)).isEqualTo(false);
  check(isMultipleOf6(15)).isEqualTo(false);
  check(isMultipleOf6(36)).isEqualTo(true);
  check(isMultipleOf6(60)).isEqualTo(true);
  check(isMultipleOf6(61)).isEqualTo(false);
});

function checkInfinitive(word) {
  // This function should take a string representing a French word as an argument, and return true if it is an infinitive verb, and false otherwise
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"

  switch (word.slice(-2)) {
    case "re" : 
    return true;
    break;
    case "ir" : 
    return true;
    break;
    case "er" : 
    return true;
    break;
    default: 
    return false;
  }
}

runTest("checkInfinitive() checks if a french word is an infinitive", function () {
  check(checkInfinitive("manger")).isEqualTo(true);
  check(checkInfinitive("faire")).isEqualTo(true);
  check(checkInfinitive("aller")).isEqualTo(true);
  check(checkInfinitive("finir")).isEqualTo(true);
  check(checkInfinitive("rendre")).isEqualTo(true);
  check(checkInfinitive("savoir")).isEqualTo(true);

  check(checkInfinitive("suis")).isEqualTo(false);
  check(checkInfinitive("ai")).isEqualTo(false);
  check(checkInfinitive("ete")).isEqualTo(false);
  check(checkInfinitive("sais")).isEqualTo(false);
  check(checkInfinitive("allons")).isEqualTo(false);
});

function checkGame(diceRoll, coinToss) {
  // This function should take a number representing a dice roll and a string repesenting a coin toss as its arguments
  // A dice roll will be a number between 1 and 6
  // A coin toss will be "H" or "T" representing heads or tails
  // The game is considered to be won if the dice roll is 3 or higher AND the coin toss is "H"
  // You should return true if the game has been won, and false otherwise

  if (diceRoll >= 3 && coinToss === "H") {
    return true
  } else return false
  
}

runTest("checkGame() should check if a user was won the game", function () {
  check(checkGame(3, "H")).isEqualTo(true);
  check(checkGame(4, "H")).isEqualTo(true);
  check(checkGame(5, "H")).isEqualTo(true);
  check(checkGame(6, "H")).isEqualTo(true);
  check(checkGame(6, "T")).isEqualTo(false);
});

function checkBatteryLevel(batteryLevel) {
  // This function should take a number representing a battery level as a percentage
  // If the battery level is less than or equal to 5%, then you should return a string stating:
  // "Warning - battery level low: <number-here>%, please charge your device"
  // If the battery level is between 5 and 99% then it should return a string stating:
  // "Battery level: <number-here>%"
  // If the battery level is 100% then it should return a string stating:
  // "Fully charged :)"

if (batteryLevel <= 5) {
  return `Warning - battery level low: ${batteryLevel}%, please charge your device`
} else if (batteryLevel >= 5 && batteryLevel <=99) {
  return `Battery level: ${batteryLevel}%`
} else if (batteryLevel === 100) {
  return `Fully charged :)`
}
}

runTest("checkBatteryLevel() should return a message with info about the battery level", function () {
  check(checkBatteryLevel(100)).isEqualTo("Fully charged :)");

  check(checkBatteryLevel(99)).isEqualTo("Battery level: 99%");
  check(checkBatteryLevel(80)).isEqualTo("Battery level: 80%");
  check(checkBatteryLevel(30)).isEqualTo("Battery level: 30%");
  check(checkBatteryLevel(10)).isEqualTo("Battery level: 10%");
  check(checkBatteryLevel(6)).isEqualTo("Battery level: 6%");

  check(checkBatteryLevel(5)).isEqualTo("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel(4)).isEqualTo("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel(3)).isEqualTo("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel(1)).isEqualTo("Warning - battery level low: 1%, please charge your device");
});

function getOrdinalSuffix(num) {

  // This function should take a number as an argument
  // An ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc
  // You should return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/

let numToStr = num.toString(); 
const th =[0,4,5,6,7,8,9,11,12,13,14,16,17,18,19]
if ( th.includes(Number(numToStr.slice(-1))) || th.includes(Number(numToStr.slice(-2)))) {
  return "th";
} else if (Number(numToStr.slice(-1)) === 1) {
  return "st";
} else if (Number(numToStr.slice(-1)) === 2) {
  return "nd"
} else if (Number(numToStr.slice(-1)) === 3) {
  return "rd"
}
}

runTest("getOrdinalSuffix() should give the correct ordinal suffix for a number", function () {
  check(getOrdinalSuffix(1)).isEqualTo("st");
  check(getOrdinalSuffix(2)).isEqualTo("nd");
  check(getOrdinalSuffix(3)).isEqualTo("rd");
  check(getOrdinalSuffix(4)).isEqualTo("th");
  check(getOrdinalSuffix(5)).isEqualTo("th");
  check(getOrdinalSuffix(10)).isEqualTo("th");
  check(getOrdinalSuffix(11)).isEqualTo("th");
  check(getOrdinalSuffix(12)).isEqualTo("th");
  check(getOrdinalSuffix(13)).isEqualTo("th");
  check(getOrdinalSuffix(14)).isEqualTo("th");
  check(getOrdinalSuffix(15)).isEqualTo("th");
  check(getOrdinalSuffix(16)).isEqualTo("th");
  check(getOrdinalSuffix(17)).isEqualTo("th");
  check(getOrdinalSuffix(18)).isEqualTo("th");
  check(getOrdinalSuffix(19)).isEqualTo("th");
  check(getOrdinalSuffix(20)).isEqualTo("th");
  check(getOrdinalSuffix(21)).isEqualTo("st");
  check(getOrdinalSuffix(22)).isEqualTo("nd");
  check(getOrdinalSuffix(23)).isEqualTo("rd");
  check(getOrdinalSuffix(32)).isEqualTo("nd");
});
