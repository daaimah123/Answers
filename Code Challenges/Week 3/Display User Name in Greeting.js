/*

Prompt a user for their name and then display a greeting message that repeats the name a specified number of times. Practice using concat, join, and repeat.

You may also need some of the following (but not required): 
- parseInt
- isNaN
- new Array()

*/

const prompt = require("prompt-sync")(); // Do not remove line

function askForNameAndRepeat() {
  var userName = prompt("Please enter your name:");
  var repeatCount = prompt("How many times would you like your name to be repeated?");

  if (userName != null && repeatCount != null) {
    // Convert the repeat count to an integer if it's not already
    repeatCount = parseInt(repeatCount,  10);

    // Check if the repeat count is a number and greater than zero
    if (!isNaN(repeatCount) && repeatCount >  0) {
      // Create an array filled with the user's name, repeated the desired number of times
      var repeatedNames = new Array(repeatCount +  1).join(userName);

      // Use concat to combine the repeated names into one string
      var greetingMessage = "Hello ".concat(repeatedNames, "!");

      console.log(greetingMessage);
    } else {
      console.log("Invalid repeat count. Please enter a number greater than zero.");
    }
  } else {
    console.log("You didn't enter a name or a valid repeat count.");
  }
}

askForNameAndRepeat();