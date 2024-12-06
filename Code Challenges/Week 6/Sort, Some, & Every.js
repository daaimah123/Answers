// Sorting an Array of Objects by a Key
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
   ];
   
   users.sort((a, b) => a.age - b.age);
   
   // console.log(users);
   
   /* Expected Output:
   
   [
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 35 }
   ]
   
   */
   
   
   
   
   
   // Checking if Any Element in an Array Meets a Condition
   const numbers = [1, 2, 3, 4, 5];
   
   const hasEvenNumber = numbers.some(num => num % 2 === 0);
   
   // console.log(hasEvenNumber);
   
   // Expected Output: true
   
   
   
   
   
   
   
   // Checking if All Elements in an Array Meet a Condition
   const evenNumbers = [2, 4, 6, 8, 10];
   
   const allEven = evenNumbers.every(num => num % 2 === 0);
   
   // console.log(allEven);
   
   // Expected Output: true