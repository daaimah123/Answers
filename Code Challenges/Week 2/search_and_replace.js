/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

*/




// function with 3 params
function myReplace(sentence, before, after){

    // use sentence-string.includes() to return boolean if before-string exists
    if(sentence.includes(before)){
      //   grab first letter of before-string (first index) ==> charAt(0)
      const firstChar = before.charAt(0);
      //   use our firstLetter variable and compare it to firstLetter.toUpperCase() ==> advise of capital
      const firstCapitalized = firstChar === firstChar.toUpperCase();
      //   toBeReplaced = adjust after-string conditionally uses capitalBool (true/false)
      // true ==> (capitalized) after-string using first index and uppercase + rest of after-string word by slice at index 1
      const yesCapital = after.charAt(0).toUpperCase() + after.slice(1);
      //  false ==> (not-capitalized) after-string is NOT capitalized
      const noCapital = after.charAt(0).toLowerCase() + after.slice(1);
      const toBeReplaced = firstCapitalized ? yesCapital : noCapital;
      //   newSentence = sentence-string.replace(before, toBeReplaced)
      const newSentence = sentence.replace(before, toBeReplaced)
  
      return newSentence;
    } else {
      // false ==> output before-string not in sentence-string
      return `${before} is not in the sentence`
    }
  }
  
  
  // Example usage:
  console.log(myReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall."
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch."
  console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there."
  console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error."
  console.log(myReplace("His name is Tom", "Tom", "john")); // "His name is John."
  console.log(myReplace("Let us get back   to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms."
  
  /*
  Explanation:
  
  It determines whether the first character of the before word is capitalized and adjusts the case of the first character of the after word accordingly.
  
  A regular expression is created to match the before word in a case-insensitive manner and bounded by word boundaries (\\b).
  
  The replace method is called on the sentence with the regular expression and the adjusted after word to perform the substitution 
  */












console.log(myReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall."
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch."
console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there."
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error."
console.log(myReplace("His name is Tom", "Tom", "john")); // "His name is John."
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms."