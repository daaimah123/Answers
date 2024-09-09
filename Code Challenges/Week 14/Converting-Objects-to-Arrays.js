/*

This may look familiar, it was your problem from Week 12 - Friday. If you were OOO that Friday, so I’ve moved it here for you to solve. If you’ve submitted this during Week 12, share that link with me. 

Given an array of objects and the task is to convert the object keys to an array with the help of JavaScript. Convert an object into a new array which consists of all the keys in sequential order.

Example: 
Input: let myObj = {	
 		 name: "your name",	
 		 address: "your address",
 		 age: "your Age",	
};
Output: ["name", "address", "age"]

Pseudocode Steps: 
- We need to access the keys of the object.
- We want to create a new array with these keys.
- We should use a method that gives us all keys at once.


*/

function getObjectKeys(obj) {
	// Check if obj is null or undefined
	if (obj === null || typeof obj !== 'object') {
	  return [];
	}
  
	// Get all keys of the object
	return Object.keys(obj);
  }
  
  // Example usage
  let myObj = {
	name: "Your Name",
	address: "123 Main St",
	age: "30"
  };
  
  console.log(getObjectKeys(myObj));
  // Output: ["name", "address", "age"]
  