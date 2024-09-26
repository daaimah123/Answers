// Problem 1: Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
// Hint: 1 meter equals 39.3701 inches.

const { access } = require("fs");
const { stringify } = require("querystring");

function metersToInches (num) {
  return num *= 39.3701;
}
// console.log(metersToInches(0)); // 0
// console.log(metersToInches(1)); // 39.3701
// console.log(metersToInches(1.5)); // 59.05515
// console.log(metersToInches(15.6)); // 614.17356

// Problem 2: Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and prints a message “Hello World” that number of times.

function loopThrough(num1) {
  let message = "Hello World ";
  return message.repeat(num1);
}
// console.log(loopThrough(0)); // 
// console.log(loopThrough(1)); // 
// console.log(loopThrough(3)); // 

// Bonus: After each "Hello world" exept the last add a comma. Example loopThrough(3) = Hello world, Hello world, Hello world

function loopThrough2(num2) {
  let message2 = "Hello World";
  let comma = ", ";
  let newMessage = "";
  for (let i = 0; i < num2; i++) {
    if (i == num2 - 1) {
      newMessage += message2;
    } else {
      newMessage += message2 + comma;
    }
  }
  return newMessage;
}
// console.log(loopThrough2(0)); // 
// console.log(loopThrough2(1)); // 
// console.log(loopThrough2(3)); // 

// Problem 3: Even or Odd
// Create a function that accepts an integer and checks if it's even or odd.

  function evenOrOdd(num3) {
    if (num3 % 2) {
      return "odd";
  } else {
    return "even";
  }
}
// console.log(evenOrOdd(0)); // even
// console.log(evenOrOdd(1));  // odd
// console.log(evenOrOdd(2));  // even
// console.log(evenOrOdd(13)); // odd

// Problem 4: Working with Objects
// Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.

function catBuilder(name, color, toys) {
  let obj = {};
  obj.name = name;
  obj.color = color;
  obj.toys = toys;
  return obj;
}
// console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"])); // { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("Nyan", "rainbow", ["poptarts"])); // { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

// Problem 5: Iterate Through Obj
// Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

let bootcamp = { name: "Techtonica", color: "Blue", population: 82 };
function printObject(obj5) { 
let newPrint = "";
  for (let [key, value] of Object.entries(obj5)) {
    let newPair = `${key} - ${value} ` 
    newPrint += newPair;
  }
  return newPrint;
}
// console.log(printObject(bootcamp)); // name - Techtonica // color - Blue // population - 82

// Problem 6: Splice Method
// In the examples below, use splice to convert the first array to the second array:
  // [2, 3, 4, 5] ---> [2, 4, 5]
  // ["alpha", "gamma", "delta"] ---> ["alpha", "beta", "gamma", "delta"]
  // [10,-10,-5,-3,2,1] ---> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  let spliceArr = [];
  let arr1 = [2,3,4,5];
    spliceArr += arr1.splice(1,1);
    // console.log(arr1); // [2,4,5]

  let arr2 = ["alpha", "gamma", "delta"];
    spliceArr += arr2.splice(1,0,"beta");
    // console.log(arr2); // ["alpha", "beta", "gamma", "delta"]

  let arr3 = [10,-10,-5,-3,2,1];
    spliceArr += arr3.splice(1,3,9,8,7,6,5,4,3);
    // console.log(arr3); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Problem 7: While Loops
// Write a function with a while loop that prints the multiples of 5 from 5 to 50 inclusive

  function byFive() {
    let i = 5;
    while (i <= 50) {
      // console.log(i);
      i += 5;
    }
  }
// console.log(byFive());

// Problem 8: String Manipulation
// Write a function that takes a string as a parameter and convert it from camelCase to Title Case

  function toTitleCase(str) {
    let newString = "";
    let toCapitalize = str.charAt(0).toUpperCase() + str.slice(1);
    let toSplit = toCapitalize.slice(0).match(/[A-Z][a-z]+/g).join(" ");
    newString += toSplit;
    return newString;
  }

// console.log(toTitleCase("myName")); // My Name
// console.log(toTitleCase("helloWorld")); // Hello World
// console.log(toTitleCase("countToTen")); // Count To Ten

// Problem 9: Functions - Problem Solving
// Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.
// Example: mostVowels("what a wonderful life")); // "wonderful"

function mostVowels(str2) {
  let vowels = /[a|e|i|o|u]+/gi;
  let arrOfWords = str2.split(" ");
  let wordWithMostVowels = "";

  let vowelCounter = 0;

  for (let i = 0; i <= arrOfWords.length - 1; i++) {
    let vowelsInWord = arrOfWords[i].match(vowels);
    let numOfVowels = vowelsInWord.length;
    if (numOfVowels > vowelCounter) {
      wordWithMostVowels = arrOfWords[i];
      vowelCounter = numOfVowels;
    }
  }  
  return wordWithMostVowels;
}
// console.log(mostVowels("what a wonderful life")); // "wonderful"


// Problem 10: Functions - Problem Solving
// Write a function that takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
// Example: multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1} multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function multipleLetterCount(str3) {
  let obj2 = {};
  for (let i = 0; i < str3.length; i++) {
    if (obj2[str3[i]] > 0) {
      obj2[str3[i]] += obj2[str3[i]];
    } else {
      obj2[str3[i]] = 1;
    }
  }
  return obj2;
}
// console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
// console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1})
// console.log(multipleLetterCount("seashell"));