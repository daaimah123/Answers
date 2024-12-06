// Challenge 1: Convert Inches to Meters - Runtime Complexity: O(1)

function metersToInches(meters) {
    return meters * 39.3701;
  }
  console.log(metersToInches(0)); // 0
  console.log(metersToInches(1)); // 39.3701
  console.log(metersToInches(1.5)); // 59.05515
  console.log(metersToInches(15.6)); // 614.17356
  
  
  
  // Challenge 2: Loop n Times - Runtime Complexity: O(n)
  
  function loopThrough(times) {
    for(let i = 0; i < times; i++) {
      console.log("Hello World");
    }
  }
  loopThrough(0); // Nothing displayed
  loopThrough(1); // Message displayed 1 time
  loopThrough(3); // Message displayed 3 times
  
  
  
  // Challenge 3: Number Sum - Runtime Complexity: O(n)
  
  function calculateSum(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(calculateSum(0)); // 0
  console.log(calculateSum(1)); // 1
  console.log(calculateSum(3)); // 6
  console.log(calculateSum(10)); // 55
  
  
  
  // Challenge 4: FizzBuzz - Runtime Complexity: O(n)
  
  function fizzbuzz(limit) {
    for(let i = 1; i <= limit; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if(i % 3 === 0) {
        console.log("Fizz");
      } else if(i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  fizzbuzz(16);
  
  
  
  // Challenge 5: Calculate Factorial Number - Runtime Complexity: O(n)
  
  function factorial(num) {
    let result = 1;
    for(let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(3)); // 6
  console.log(factorial(10)); // 3628800
  
  
  
  // Challenge 6: Switch Statements - Runtime Complexity: O(1)
  
  function sleep_in(weekday, vacation) {
    return !weekday || vacation;
  }
  console.log(sleep_in(false, false)); // true
  console.log(sleep_in(true, false)); // false
  console.log(sleep_in(false, true)); // true
  
  
  
  // Challenge 7: Accessing Arrays - Runtime Complexity: O(1)
  
  function common(a, b) {
    return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
  }
  console.log(common([1, 2, 3], [7, 3])); // True
  console.log(common([1, 2, 3], [7, 3, 2])); // False
  console.log(common([1, 2, 3], [1, 3])); // True
  
  
  
  // Challenge 8: Object Keys and Values - Runtime Complexity: O(1)
  
  let obj = {firstKey: "value1", secondKey: "value2"};
  console.log(obj);
  
  delete obj.firstKey;
  console.log(obj);
  
  
  
  // Challenge 9: Mutating Objects - Runtime Complexity: O(n)
  
  let objectsArray = [{key1: "value1", key2: "value2"}, {key1: "value3", key2: "value4"}, {key1: "value5", key2: "value6"}];
  
  function mutateObjects(arr) {
    arr.forEach(obj => console.log(obj.key2));
    arr.forEach(obj => obj["key2"] = "newValue");
    arr.forEach(obj => console.log(obj.key2));
  }
  
  mutateObjects(objectsArray);
  
  
  
  
  // Challenge 10: Determine Runtime Complexity
  // The runtime complexity for each challenge has been stated at the top of each solution.