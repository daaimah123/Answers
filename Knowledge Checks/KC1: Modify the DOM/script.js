// 6. Try using JS DOM manipulation to change the text of the first li to "YAY I WORK"
// get ul using getElementById
let firstLi = document.getElementById('listFirstPerson')

// change the text of the first child of ul 
firstLi.firstElementChild.textContent = "YAY I WORK"

// 7. Using DOM manipulation add one more li to the end of your list, give it all the information needed

// create new list item
let newLi = document.createElement('li')

// add text content to new created list item
newLi.textContent = "Adding New List Item"

// add class of "listItem" to turn list item Red
newLi.className = 'listItem'

// append new created list item to ul
firstLi.appendChild(newLi)


// 8. Using DOM manipulation change the color of the person's hometown
let hometown = document.getElementById('hometownFirstPerson');
hometown.setAttribute('style', 'color:blue');


// ## CODE CHALLENGE

function stringManipulation(str, num){

  // use slice to remove first character of string
  let newStr = str.slice(1);

  //use split method to split string into array of character elements 
  let splitStrArr = newStr.split('')

// use join method to turn array back into string
  let joinedSplitStrArr = splitStrArr.join('')

  // use substring to extract the 2nd (index 1) to 4th (index 3) character
  let extractedStr = joinedSplitStrArr.substring(1,4)

  // use repeat method to repeat string
  let repeatedStr = extractedStr.repeat(num);

  return repeatedStr;
}


// Example:

console.log(stringManipulation("hello world", 3));
// Output:
// ```
// llollollo

