/*

You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation. The two arrays have the same length. The index of a name in the names array is the same as the index of the person's job in the jobs array, as shown in the table above.

Names:	Annie		Steven		Lisa		Osman
Jobs:		Teacher	Engineer	Doctor	Cashier

Example
const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

assignPersonToJob(names, jobs) ➞ {
  Dennis: "Butcher",
  Vera: "Programmer",
  Mabel: "Doctor",
  Annette: "Teacher",
  Sussan: "Lecturer"
}


Pseudocode Steps: 
- We need to take two arrays as input: one for names and one for jobs.
- We should create an object where each key is a name and the corresponding value is the person's job.
- We need to ensure that the indices of the names array match the indices of the jobs array.
- We should handle cases where the arrays have different lengths.

*/

function assignPersonToJob(names, jobs) {
  // Check if the arrays have the same length
  if (names.length !== jobs.length) {
    throw new Error('Arrays must have the same length');
  }

  // Create an empty object to store the assignments
  const assignments = {};

  // Iterate through the names array
  names.forEach((name, index) => {
    // Assign the job to the person's name in the assignments object
    assignments[name] = jobs[index];
  });

  // Return the assignments object
  return assignments;
}

const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"];
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

console.log(assignPersonToJob(names, jobs));
// Output: {
//   Dennis: "Butcher",
//   Vera: "Programmer",
//   Mabel: "Doctor",
//   Annette: "Teacher",
//   Sussan: "Lecturer"
// }

// arrays might contain objects instead of strings
function assignPersonToJob(names, jobs) {
  if (names.length !== jobs.length) {
    throw new Error('Arrays must have the same length');
  }
  
  const assignments = {};
  names.forEach((person, index) => {
    assignments[person] = jobs[index];
  });
  
  return assignments;
}

// optimize further for very large arrays, you could use a Map object instead of an object
function assignPersonToJob(names, jobs) {
  if (names.length !== jobs.length) {
    throw new Error('Arrays must have the same length');
  }
  
  const assignments = new Map();
  names.forEach((name, index) => assignments.set(name, jobs[index]));
  
  return Object.fromEntries(assignments);
}


