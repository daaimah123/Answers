/*

Implement a simple program that demonstrates the creation and manipulation of Object Literals, Maps, and Sets. The program should include operations like adding elements, accessing values, and iterating over each collection type.

Step 1: Define an Object Literal Representing a Person
Step 2: Create a Map to Store Additional Details About the Person
Step 3: Create a Set to Store Unique Hobbies of the Person

*/

// Step 1: Define an Object Literal Representing a Person

const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

console.log(person); 
// Output: { name: 'John Doe', age: 30, occupation: 'Software Developer' }



// Step 2: Create a Map to Store Additional Details About the Person

const personalDetailsMap = new Map();

personalDetailsMap.set(person, 'Has a pet dog named Buddy');
console.log(personalDetailsMap.get(person)); 
// Output: Has a pet dog named Buddy



// Step 3: Create a Set to Store Unique Hobbies of the Person

const hobbiesSet = new Set();
hobbiesSet.add('Reading').add('Cycling').add('Hiking');

// Attempt to add a duplicate hobby
hobbiesSet.add('Reading'); // This will not be added since Sets only allow unique values

for (let hobby of hobbiesSet) {
  console.log(hobby); // Outputs each unique hobby
}


