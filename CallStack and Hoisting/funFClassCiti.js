/////////////////////////////////////////////////////////////
//_______________Resons why fun is called__________________//
//+++++++++++++__FIRST CLASS CITIZEN__++++++++++++++++++++//
////////////////////////////////////////////////////////////

//FUN EXPRESSION
// let greet = function () {
//   console.log("Suprabhat Mitrano...!");
// };

// greet();
// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// Suprabhat Mitrano...!

//FUN AS ARGUMENT
// function greetMe(greet, name) {
//   console.log("Hello ", name);
//   greet();
// }

// let greet = function () {
//   console.log("Suprabhat Mitrano...!");
// };
// greetMe(greet, "Bhagvat");
// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// Hello  Bhagvat
// Suprabhat Mitrano...!
// PS D:\Learning JS\CallStack and Hoisting>

//RETURNING FUNCTION

// function solve(number) {
//   return function (number) {
//     return number * number;
//   };
// }
// let ans = solve(5); // returns internal function in ans  so ans is also a function that we can call
// console.log(ans(10));

// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// [Function (anonymous)]
// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// 100
// PS D:\Learning JS\CallStack and Hoisting>

//FUNCTION AS DATA STUCTURE

// const arr = [
//   function (a, b) {
//     return a + b;
//   },
//   function (a, b) {
//     return a - b;
//   },
//   function (a, b) {
//     return a * b;
//   },
// ];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log("Answer", element(10, 5));
// }
// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// Answer 15
// Answer 5
// Answer 50
// PS D:\Learning JS\CallStack and Hoisting>

///FUNCTION AS POPERTY OF CLASS / OBJECT

let obj = {
  age: 22,
  fName: "Bhagvat",
  weight: 58,
  height: 180,
  greet: () => {
    console.log("Hello everyone my name is Bhagvat.....!");
  },
};

console.log(obj);
obj.greet();


// PS D:\Learning JS\CallStack and Hoisting> node funFClassCiti.js
// {
//   age: 22,
//   fName: 'Bhagvat',
//   weight: 58,
//   height: 180,
//   greet: [Function: greet]
// }
// Hello everyone my name is Bhagvat.....!
// PS D:\Learning JS\CallStack and Hoisting> 
