 // Iterating Over the Values of an Object [Object.values]
 const user = { name: 'Alice', age: 30, city: 'New York' };

 for (const value of Object.values(user)) {
  console.log(`Value: ${value}`);
 }
 
 /* Expected Output:
 
 Value: Alice
 Value: 30
 Value: New York
 */
 
 
 
 
 
 
 // Iterating Over the Keys of an Object [Object.keys]
 const user = { name: 'Alice', age: 30, city: 'New York' };
 
 for (const key of Object.keys(user)) {
  console.log(`Key: ${key}, Value: ${user[key]}`);
 }
 
 /*
 Expected Output:
 
 Key: name, Value: Alice
 Key: age, Value: 30
 Key: city, Value: New York
 */
 
 
 
 
 
 
 // Iterate over an Array of Strings [For Of]
 
 // Define an array of strings
 const fruits = ['apple', 'banana', 'cherry'];
 
 // Use for...of to iterate over the array
 for (const fruit of fruits) {
  console.log(fruit);
 }
 
 /*
 Expected Output:
 
 apple
 banana
 cherry
 */