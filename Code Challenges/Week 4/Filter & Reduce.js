// === Task 1 - Using filter to Extract Specific Elements

const arrayOfNumbers = [5, 12, 8, 130, 44];

function filterGreaterThanTen(array) {
 return array.filter(number => number > 10);
}

const result = filterGreaterThanTen(arrayOfNumbers);
console.log(result); // Output: [12, 130, 44]


// === Task 2 - Using reduce to Calculate the Sum of Numbers

const numbers = [1, 2, 3, 4, 5];

function sumNumbers(array) {
 return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const total = sumNumbers(numbers);
console.log(total); // Output: 15

// === Task 3 - Create an Array of Unique Categories for a Restaurant Menu
const menuItems = [
 { name: 'Pizza', category: 'Main Dish' },
 { name: 'Salad', category: 'Main Dish' },
 { name: 'Pasta', category: 'Main Dish' },
 { name: 'Caesar Salad', category: 'Salad' },
 { name: 'Greek Salad', category: 'Salad' },
];

// Extract all categories into an array
const allCategories = menuItems.map(item => item.category);

// Filter out duplicates using reduce
const uniqueCategories = allCategories.reduce((acc, curr) => {
 if (!acc.includes(curr)) {
    acc.push(curr);
 }
 return acc;
}, []);

console.log(uniqueCategories); // Output: ['Main Dish', 'Salad']


// === Task 4 - Count Coffee Shops by Neighborhood ===

const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];

// Function to count coffee shops by neighborhood
function countShopsByNeighborhood(neighborhood) {
 // Filter coffee shops by the specified neighborhood
 const shopsInNeighborhood = coffeeShops.filter(shop => shop.neighborhood === neighborhood);

 // Return the count of shops in the neighborhood
 return shopsInNeighborhood.length;
}

// Example usage
const rogersParkCount = countShopsByNeighborhood('Rogers Park');
console.log(`Number of coffee shops in Rogers Park: ${rogersParkCount}`); // Output: Number of coffee shops in Rogers Park: 3

const wickerParkCount = countShopsByNeighborhood('Wicker Park');
console.log(`Number of coffee shops in Wicker Park: ${wickerParkCount}`); // Output: Number of coffee shops in Wicker Park: 2