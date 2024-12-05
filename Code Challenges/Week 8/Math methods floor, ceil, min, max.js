/* 

Working with Math methods:

1. Generate an array of 10 random integers between 1 and 100.
2. Then, round down half of the numbers to the nearest integer using Math.floor and round up the other half using Math.ceil. 
3. Finally, find the minimum and maximum values among the rounded numbers.

*/

// Solution:
function solveChallenge() {
    // Generate an array of 10 random integers between 1 and 100
    const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

    // Round down half of the numbers
    const roundedDown = randomNumbers.slice(0, 5).map(num => Math.floor(num));

    // Round up the other half of the numbers
    const roundedUp = randomNumbers.slice(5).map(num => Math.ceil(num));

    // Combine the rounded numbers
    const combinedRounded = [...roundedDown,...roundedUp];

    // Find the minimum and maximum values among the rounded numbers
    const minVal = Math.min(...combinedRounded);
    const maxVal = Math.max(...combinedRounded);

    return { minVal, maxVal };
}

console.log(solveChallenge());

/* 
Explanation:

Generating Random Numbers: We start by creating an array of 10 random integers between 1 and 100. Array.from() is used to create an array of a specified length, and for each element, we generate a random number using Math.random() * 100 to get a float between 0 and 99.9999. Adding 1 ensures our range starts from 1 instead of 0. Math.floor() rounds down the result to ensure we stay within the desired range.

Rounding Numbers: We split the generated array into two halves. The first half (roundedDown) consists of the first five numbers, which we round down using Math.floor(). The second half (roundedUp) consists of the last five numbers, which we round up using Math.ceil().

Combining Rounded Numbers: We combine the two arrays of rounded numbers into one using the spread operator (...). This gives us an array of 10 numbers, half rounded down and half rounded up.

Finding Minimum and Maximum Values: Finally, we use Math.min() and Math.max() to find the smallest and largest numbers in the combined array. The spread operator (...) is used again to pass the array elements as arguments to these functions.
*/