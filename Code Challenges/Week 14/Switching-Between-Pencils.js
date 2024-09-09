/*

When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils. Create a function where given an array of colors cols, return how long it takes to color the whole pattern. It takes 1 second to switch between pencils. It takes 2 seconds to color a square. Only change coloring pencils if the next color is different to the color before it. Return a number in seconds.

Examples: 
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

colorPatternTimes(["Blue"]) ➞ 2

colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13 


Pseudocode Steps: 
- Each square takes 2 seconds to color.
- Switching colors takes 1 second.
- We only switch colors if the current color is different from the previous one.
- We need to count the number of squares colored.
- We need to count the number of times we switch colors.
- We need to calculate the total time based on these counts.


*/

function colorPatternTimes(cols) {
    // input array might be empty or contain non-string elements
    if (!Array.isArray(cols) || cols.length === 0) return 0;
    let totalTime = 0;
    let prevColor = cols[0];
    let colorSwitchCount = 0;
  
    for (let i = 1; i < cols.length; i++) {
      if (cols[i] !== prevColor) {
        totalTime += 2; // Color the square
        colorSwitchCount++;
        totalTime += 1; // Switch colors
        prevColor = cols[i];
      } else {
        totalTime += 2; // Just color the square
      }
    }
  
    return totalTime;
  }

  console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); // Output: 14
  console.log(colorPatternTimes(["Blue"])); // Output: 2
  console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); // Output: 11
  console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // Output: 13
  
