/*
Halloween is the time of year when youth prepare for tricks or treats! Create a function that accepts a Date object and returns true if it's Halloween (October 31st) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning October is the 9th month while January is 0.

Examples:
timeForTrickOrTreat(new Date(2013, 9, 31)) ➞ true
timeForTrickorTreat(new Date(2013, 0, 23)) ➞ false
timeForTrickorTreat(new Date(3000, 9, 31)) ➞ true

Pseudocode steps: 
- We need to check the month and day of the given date.
- Remember that JavaScript's months are zero-indexed, so October is represented by 9.
- We need to compare both the month and day to ensure it's October 31st.
- The function should work for any year, so we don't need to check the year.


*/

function timeForTrickOrTreat(date) {
    // Get the month (0-based) and day from the date
    const month = date.getMonth();
    const day = date.getDate();
  
    // Check if it's October (month 9) and the 31st day
    return month === 9 && day === 31;
  }

  
  console.log(timeForTrickOrTreat(new Date(2013, 9, 31))); // Output: true
  console.log(timeForTrickOrTreat(new Date(2013, 0, 23))); // Output: false
  console.log(timeForTrickOrTreat(new Date(3000, 9, 31))); // Output: true

  
  function isHoliday(date, month, day) {
    return date.getMonth() === month - 1 && date.getDate() === day;
  }
  
  // check for other holidays
  function timeForTrickOrTreat(date) {
    return isHoliday(date, 10, 31); // October is the 10th month (not zero-indexed)
  }
  