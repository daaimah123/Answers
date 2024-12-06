/*
For Loop: Write a for loop that prints numbers from 1 to 5.

Explanation: The for loop initializes a counter i to 1, checks if i is less than or equal to 5, executes the console.log(i); statement, and increments i by 1 after each iteration. This continues until i is greater than 5, at which point the loop terminates 
*/

for (let a =  1; a <=  5; a++) {
    console.log(a);
  }
  
  
  
  /*
  While Loop: Write a while loop that prints numbers from 1 to 5.
  
  Explanation: The while loop checks if i is less than or equal to 5. If true, it logs i to the console and increments i. This process repeats until i is greater than 5, causing the loop to terminate
  */
  
  let i =  1;
  while (i <=  5) {
    console.log(i);
    i++;
  }
  
  
  
  /*
  Do-While Loop: Write a do...while loop that prints numbers from 1 to 5.
  
  Explanation: The do...while loop guarantees that the code inside the loop will execute at least once, regardless of the condition. It checks the condition (i <= 5) after executing the loop body, ensuring that i is logged to the console and incremented before checking if i is less than or equal to 5 again 
  */
  
  let j =  1;
  do {
    console.log(i);
    j++;
  } while (j <=  5);
  
  
  /*
  Switch Statement: Write a switch statement that performs different actions based on the input value:
  
  - If the input is 'apple', output 'It's an apple.'
  - If the input is 'banana', output 'It's a banana.'
  - If the input is 'cherry', output 'It's a cherry.'
  - Otherwise, output 'Unknown fruit.'
  
  Explanation: The switch statement evaluates the expression within the parentheses (fruit) and compares it to the values in the case clauses. When it finds a match, it executes the corresponding block of code. If no matches are found, it executes the default case
  */
  
  function describeFruit(fruit) {
    switch (fruit) {
      case 'apple':
        return 'It\'s an apple.';
      case 'banana':
        return 'It\'s a banana.';
      case 'cherry':
        return 'It\'s a cherry.';
      default:
        return 'Unknown fruit.';
    }
  }
  
  console.log(describeFruit('apple'));  // Output: It's an apple.
  console.log(describeFruit('banana')); // Output: It's a banana.
  console.log(describeFruit('cherry')); // Output: It's a cherry.
  console.log(describeFruit('grape'));  // Output: Unknown fruit.
  
  
  
  /*
  forEach Loop: Write a forEach loop that iterates over an array of fruits and logs each one to the console.
  
  Explanation: The forEach method is called on the fruits array. It takes a callback function as an argument, which is executed for each item in the array. The current item being processed is passed to the callback function as fruit, which is then logged to the console 
  */
  
  const fruitsArray = ['pineapple', 'plum', 'passionfruit'];
  
    fruitsArray.forEach((individualFruit) => {
    console.log(individualFruit);
  });