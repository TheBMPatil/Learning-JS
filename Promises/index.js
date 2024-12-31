// // let firstPromise = new Promise((resolve, reject) => {
// //   console.log("Hello bhai");
// //   //   resolve(1);   //resolved
// //   //   reject(new Error("Internal server error"));   //rejected
// //   // //Pending
// // });
// function syaMyName() {
//   console.log("My name is Bhagvat");
// //   resolve(1);
// }
// let firstPromise = new Promise((resolve, reject) => {
//   setTimeout(syaMyName, 10000);
// //   resolve(1);
// // return 1;
// });

// let promise1 = new Promise((resolve, reject) => {
// //   let success = false;
//     let success = true;
//   if (success) {
//     resolve("Promise Fullfilled");
//   } else {
//     reject("Promise rejectd");
//   }
// });
// //Multiple then blocks
// //Promise chaining
// promise1
//   .then((message) => {
//     console.log("Then ka msg is : " + message);
//     return "Promise second message";
//   })
//   .then((message) => {
//     console.log(`Third message : ${message}`);
//     return "Promise Third message";
//   })
//   .then((message) => {
//     console.log(`Fourth message : ${message}`);
//     return "Promise fourth message";
//   })
//   .then((message) => {
//     console.log(`Fifth message : ${message}`);
//     return "Promise second message";
//   })
//   .catch((error) => {
//     console.error(`Error : ${error}`);
//   })
//   .finally((message) => {
//     console.log("Main to final hhu hamesha chalunga");
//   });

// promise1
//   .then((message) => {
//     console.log("Then ka msg is : " + message);
//   })
//   .catch((error) => {
//     console.log(`Error  : ${error}`);
//   });

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "second");
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 4000, "Third");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Error : " + error);
  });
