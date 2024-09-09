/* Write a short program that prints each number from 1 to 100 on a new line. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

Example 1:
Input: n = 3
Output: [1 2 Fizz]

Example 2:
Input: n = 5
Output: [1 2 Fizz 4 Buzz]

Example 3:
Input: n = 19
Output: [1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz]

Pseudocode steps: 
- Create a loop that iterates from 1 to 100.
- For each number, check if it's divisible by 3 and/or 5.
- Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.
- Print the number itself if it's not divisible by either 3 or 5.


*/

function fizzBuzz(n) {
    let output = '';
    
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) { // Check for multiples of both 3 and 5
        output += 'FizzBuzz ';
      } else if (i % 3 === 0) { // Check for multiples of 3
        output += 'Fizz ';
      } else if (i % 5 === 0) { // Check for multiples of 5
        output += 'Buzz ';
      } else { // Print the number itself
        output += i + ' ';
      }
    }
    
    // Remove trailing space and return the result
    return output.trim();
  }
  
  
  // Test the function
  console.log(fizzBuzz(3)); // Output: "1 2 Fizz"
  console.log(fizzBuzz(5)); // Output: "1 2 Fizz 4 Buzz"
  console.log(fizzBuzz(19)); // Output: "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz"
  
  // or solution for larger ranges optimization
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      let output;
      if (i % 15 === 0) output = 'FizzBuzz';
      else if (i % 3 === 0) output = 'Fizz';
      else if (i % 5 === 0) output = 'Buzz';
      else output = i;
      
      console.log(output);
    }
  }
  
  // Call the function
  fizzBuzz(100);