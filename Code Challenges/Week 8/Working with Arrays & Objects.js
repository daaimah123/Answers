const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  
  function filterObjects(data, propertyName, value) {
    return data.filter(obj => obj[propertyName] === value);
  }
  
  console.log(filterObjects(data, 'name', 'Bob')); // Output: [{ name: 'Bob', age: 30 }]
  console.log(filterObjects(data, 'age', 30)); // Output: [{ name: 'Bob', age: 30 }]
  
  /*
  
  EXPLANATION:
  
  Function Signature: The filterObjects function accepts three parameters: data (the array of objects to filter), propertyName (the name of the property to filter by), and value (the value to match against the specified property).
  
  Filter Method: Inside the function, the filter method is called on the data array. The filter method creates a new array with all elements that pass the test implemented by the provided function.
  
  Condition Check: The callback function passed to filter checks if the object's property value matches the provided value. It does this by accessing the property using bracket notation (obj[propertyName]) and comparing it to value using the strict equality operator (===).
  
  Return Value: The filter method returns a new array containing only the objects that meet the condition. If no objects match the criteria, an empty array is returned.
  */