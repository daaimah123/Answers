/*

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00. Ignore tax or additional fees when calculating the total order cost.

Examples
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true


Pseudocode Steps: 
- We need to accept an object representing the shopping cart.
- We should sum up the costs of all items in the cart.
- We need to check if the total cost exceeds $50.00.
- We should ignore any tax or additional fees when calculating the total.

*/

function freeShipping(cart) {
    // Sum up all item prices
    const totalPrice = Object.values(cart).reduce((sum, price) => sum + parseFloat(price), 0);
  
    // Check if the total price exceeds $50.00
    return totalPrice > 50;
  }
  
  console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); // false
  console.log(freeShipping({ "Flatscreen TV": 399.99 })); // true
  console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })); // true
  
  // handle cases where the cart might contain non-numeric values
  function freeShipping(cart) {
    try {
      const totalPrice = Object.values(cart).reduce((sum, price) => sum + parseFloat(price), 0);
      return totalPrice > 50;
    } catch (error) {
      console.error("Invalid cart data:", cart);
      return false;
    }
  }

  // optimize further for very large carts
  function freeShipping(cart) {
    let sum = 0;
    for (const price of Object.values(cart)) {
      sum += parseFloat(price);
    }
    return sum > 50;
  }
  
  