/* =========== Uppercase String Promise =========== */

// function uppercaseString(str) {
//  return new Promise((resolve, reject) => {
//     if (str === null) {
//       reject(new Error('String is null'));
//     } else {
//       resolve(str.toUpperCase());
//     }
//  });
// }

// uppercaseString('hello')
//  .then(result => console.log(result))
//  .catch(error => console.error(error));

// Expected Output: HELLO






/* ========== Simulated Data Fetching ========== */

// function fetchData() {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//  });
// }

// fetchData()
//  .then(data => console.log(data))
//  .catch(error => console.error(error));


// Expected Output: Data fetched successfully!






/* ========== Asynchronous Request Queue ========== */

// class AsyncQueue {
//     constructor(concurrencyLimit) {
//         this.tasks = [];
//         this.runningTasks = 0;
//         this.concurrencyLimit = concurrencyLimit;
//     }

//     enqueue(task) {
//         this.tasks.push(task);
//         this.runNext();
//     }

//     runNext() {
//         if (this.runningTasks < this.concurrencyLimit && this.tasks.length) {
//             const task = this.tasks.shift();
//             this.runningTasks++;
//             task().then(() => {
//                 this.runningTasks--;
//                 this.runNext();
//             });
//         }
//     }
// }

// // Example task factory function
// const createTask = (duration) => {
//     return () => new Promise(resolve => {
//         console.log(`Task started (Duration: ${duration}ms)`);
//         setTimeout(() => {
//             console.log(`Task completed (Duration: ${duration}ms)`);
//             resolve();
//         }, duration);
//     });
// };

// // Create a queue with a concurrency limit of 3
// const queue = new AsyncQueue(3);

// // Add tasks to the queue
// for (let i = 1; i <= 10; i++) {
//     queue.enqueue(createTask(i * 1000));
// }

/* Expected Output: 

Task started (Duration: 1000ms)
Task started (Duration: 2000ms)
Task started (Duration: 3000ms)
Task completed (Duration: 1000ms)
Task started (Duration: 4000ms)
Task completed (Duration: 2000ms)
Task started (Duration: 5000ms)
Task completed (Duration: 3000ms)
Task started (Duration: 6000ms)
Task completed (Duration: 4000ms)
Task started (Duration: 7000ms)
Task completed (Duration: 5000ms)
Task started (Duration: 8000ms)
....
....
....

*/