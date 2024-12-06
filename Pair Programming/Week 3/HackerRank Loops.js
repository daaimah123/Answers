/*The HackerRank challenge titled "Loops" focuses on understanding loops in JavaScript, specifically for, while, and do...while loops. Each type of loop has its own syntax and use cases, and mastering them is essential for writing efficient and readable code. Below, I'll provide solutions for problems typically encountered in such challenges, including examples of each loop type.*/

// Problem 1: Print Numbers from 1 to N
// Task:
// Print numbers from 1 to N.

// Solution:
function printNumbers(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5); // Prints numbers from 1 to 5


// Problem 2: Print Even Numbers from N to 1
// Task:
// Print even numbers from N to 1.

// Solution:
function printEvenNumbers(n) {
    for(let i = n; i >= 1; i--) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers(10); // Prints even numbers from 10 to 2


// Problem 3: Count Down and Up with Jump
// Task:
// Count down from N to 1 with a jump of J, and count up from 1 to N with a jump of J.

// Solution:
function countdownAndUpward(N, J) {
    let countDown = N;
    while(countDown >= 1) {
        console.log(countDown);
        countDown -= J;
    }

    let countUp = 1;
    do {
        console.log(countUp);
        countUp += J;
    } while(countUp <= N);
}
countdownAndUpward(10, 2); // Counts down from 10 to 1 with a jump of 2, then counts up from 1 to 10 with a jump of 2


/* Explanation:
For Loop: The for loop is ideal for situations where you know the exact number of iterations ahead of time. It initializes a counter variable, provides a condition to continue looping, and increments/decrements the counter at the end of each iteration.
While Loop: The while loop is useful when the number of iterations is not known beforehand. It continues executing as long as the condition evaluates to true. In the countdown example, it keeps subtracting J from countDown until it reaches 1.
Do...While Loop: Similar to the while loop, but with a key difference: the do...while loop executes the block of code once before checking the condition. This makes it suitable for scenarios where you want to ensure the block of code runs at least once, regardless of the initial condition.*/