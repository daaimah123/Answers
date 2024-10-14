function removeEverySecondElement(arr) {
    let result = [arr[0]]; // Start with the first element
    let keepNext = true;   // Flag to determine whether to keep the next element
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (keepNext) {
            result.push(arr[i]); // Keep the current element
        }
        keepNext = !keepNext; // Toggle the flag for the next iteration
    }
    
    return result;
}

// Example usage
console.log(removeEverySecondElement(["Keep", "Remove", "Keep", "Remove", "Keep"]));
// Output: ["Keep", "Keep", "Keep"]

console.log(removeEverySecondElement(["a", "b", "c", "d", "e"]));
// Output: ["a", "c", "e"]
