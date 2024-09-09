/*
Return the length of the longest word in the provided sentence.
Your output should be a number.

Examples:
findLongestWordLength("The quick brown fox jumped over the lazy dog") ---> 6
findLongestWordLength("May the force be with you") ---> 5
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") ---> 19

Pseudocode: 
Split the sentence into words.
Find the length of each word.
Determine the maximum length among all words.

Explanation:
- Splitting the Sentence: We use the split method to divide the sentence into an array of words based on spaces. This gives us a convenient array to iterate over.
- Initializing maxLength: We initialize a variable maxLength to keep track of the length of the longest word encountered so far. Setting it to 0 ensures that we have a starting point for comparison.
- Iterating Over Words: We loop through each word in the array. For each word, we compare its length to the current maxLength. If the word's length is greater, we update maxLength with this new maximum length.
- Returning the Result: After iterating through all the words, maxLength holds the length of the longest word. We return this value as the result.

*/

function findLongestWordLength(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Initialize maxLength to 0
    let maxLength = 0;
  
    // Iterate over each word
    for (const word of words) {
      // Update maxLength if the current word's length is greater
      maxLength = Math.max(maxLength, word.length);
    }
  
    // Return the maxLength
    return maxLength;
  }
  