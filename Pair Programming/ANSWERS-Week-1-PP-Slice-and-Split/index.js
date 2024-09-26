/* 
=======================================
                SLICE
======================================= 
*/

/*
-Example 1: Basic Substring Extraction-
Prompt: Extract a substring from index 2 to 5.
Explanation: The slice(2, 6) method extracts a substring from index 2 to 5 (inclusive) of the string "Hello, World!".
*/

const sliceStr = "Hello, World!";
console.log("Slice Example 1: ", sliceStr.slice(2, 6)); // "llo,"

/*
-Example 2: Extracting the Last Few Characters-
Prompt: Extract the last 4 characters of a string.
Explanation: The use of -4 as the argument for slice() starts the extraction from the 4th character from the end of the string, resulting in the last 4 characters.
*/

const longStr = "This is a long string";
console.log("Slice Example 2: ", longStr.slice(-4)); // "ring"

/*
-Example 3: Extracting a Portion from a URL-
Prompt: Extract the protocol from a URL.
Explanation: This example extracts the protocol from a URL by finding the index of ":" and then using slice(0, index) to get the portion before the colon.
*/

const url = "https://www.example.com/path/to/resource";
const protocol = url.slice(0, url.indexOf(":"));
console.log("Slice Example 3: ", protocol); // "https"


/*
-PRACTICE: Secret Message Decoder-
 Prompt: Given a string where the secret message starts at a fixed position and ends at a fixed position, extract the secret message using the slice() method.
 Explanation: In this solution, we are using the slice() method to extract a substring from the encodedString starting at startPosition (14) and ending at endPosition (29). This example works under the assumption that the positions of the start and end of the secret message are fixed or pre-determined. This method is effective when you know the exact positions of the substring you want to extract. However, it lacks the flexibility of dynamically finding these positions, which you would typically achieve with methods like indexOf().
*/

const encodedString = "MessageStart: Secret Message:MessageEnd";
const startPosition = 14;
const endPosition = 29;


function decodeFixedPositionMessage(
  encodedString, 
  startPosition, 
  endPosition
) {
  return encodedString.slice(
    startPosition, 
    endPosition
  );
}

console.log("Slice Practice: ", 
  decodeFixedPositionMessage(
    encodedString, 
    startPosition, 
    endPosition
  )
); // "Secret Message"


/* 
=======================================
                SPLIT
======================================= 
*/

/*
-Example 1: Splitting a Sentence into Words-
Prompt: Split a sentence into individual words using space as the separator.
Explanation: This code splits the sentence at each space, resulting in an array of individual words.
*/

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Split Example 1: ", sentence.split(" ")); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]


/*
-Example 2: Splitting a CSV String-
Prompt: Split a comma-separated values (CSV) string into an array.
Explanation: The string is split at each comma, which is a common operation when dealing with CSV data.
*/

let csvString = "apple,banana,cherry,dragonfruit";
console.log("Split Example 2: ", csvString.split(",")); // ["apple", "banana", "cherry", "dragonfruit"]


/*
-Example 3: Limiting the Number of Splits-
Prompt: Split a string into a limited number of substrings.
Explanation: The string is split at colons, but the result is limited to the first two substrings due to the limit parameter (2). This is particularly useful when you only need the first few elements from a split operation.
*/

let splitStr = "one:two:three:four";
console.log("Split Example 3: ", splitStr.split(":", 2)); // ["one", "two"]


/*
-PRACTICE: Split & Solve-
Prompt: Given the string "apple, banana; orange, watermelon; grape". Split the string by ';', and find the number of elements.
Explanation: The function splits the string with split(';'), turning it into an array where each element is a substring between the semicolons. It returns the length of this array, which is the count of elements separated by semicolons.
*/

const fruitString = "apple, banana; orange, watermelon; grape";

function splitFunc(fruitString) {
  // Splitting the string by the ';' delimiter
  let splitArray = fruitString.split(';');

  // Returning the number of elements
  return splitArray.length;
}

console.log("Split Practice: ", "Number of elements:", splitFunc(fruitString)); // Number of elements: 3

