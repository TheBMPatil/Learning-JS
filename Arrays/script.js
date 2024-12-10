// let obj = {
//   name: "Bhagvat Mutthe",
//   age: 22,
//   weight: 58,
//   height: "5ft 5in",

//   greet: function () {
//     console.log("Ha bhaai sab badhiya....!");
//   },
// };

// console.log(obj);
// obj.greet();

// OUTPUT
// PS D:\Learning JS> cd Arrays
// PS D:\Learning JS\Arrays> node .\script.js
// {
//   name: 'Bhagvat Mutthe',
//   age: 22,
//   weight: 58,
//   height: '5ft 5in',
//   greet: [Function: greet]
// }
// PS D:\Learning JS\Arrays> node .\script.js
// {
//   name: 'Bhagvat Mutthe',
//   age: 22,
//   weight: 58,
//   height: '5ft 5in',
//   greet: [Function: greet]
// }
// Ha bhaai sab badhiya....!
// PS D:\Learning JS\Arrays>

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
//                  ARRAYS                                                   ///

// //Normal Array ccreation
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr);

// ///Array constructor
//  let brr = new Array("Bhagvat", 1, true);
// console.log(brr);
// console.log(typeof brr);
// PS D:\Learning JS\Arrays> node .\script.js
// [ 1, 2, 3, 4, 5 ]
// PS D:\Learning JS\Arrays> node .\script.js
// [ 1, 2, 3, 4, 5 ]
// [ 'Bhagvat', 1, true ]
// PS D:\Learning JS\Arrays> node .\script.js
// [ 1, 2, 3, 4, 5 ]
// [ 'Bhagvat', 1, true ]
// PS D:\Learning JS\Arrays> node .\script.js
// [ 1, 2, 3, 4, 5 ]
// object
// [ 'Bhagvat', 1, true ]
// object
// PS D:\Learning JS\Arrays>

////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

//Array Builtin methods

// let arr = [1, 2, 3, 4, 5, "Bhagvat", "Mutthe", true];

// console.log(arr);

// arr.push(12);
// console.log(arr);
// // [ 1, 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true, 12 ]
// arr.pop();
// console.log(arr);
// // [ 1, 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]
// arr.shift();
// console.log(arr);
// // [ 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]
// arr.unshift("Raj");

// console.log(arr);
// // [ 'Raj', 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]

// console.log(arr.slice(3, 7));
// // [ 4, 5, 'Bhagvat', 'Mutthe' ]

// arr.splice(1,2,"BM");
// console.log(arr);
// // [ 'Raj', 'BM', 4, 5, 'Bhagvat', 'Mutthe', true ]

// let arr = [10, 67, 20, 333, 11, 30, 45, 40];

// arr.map((num, index) => {
//   console.log(num + " : " + index);
// });
// PS D:\Learning JS\Arrays> node .\script.js
// 10
// 20
// 30
// 40
// PS D:\Learning JS\Arrays>

// PS D:\Learning JS\Arrays> node .\script.js
// 10 : 0
// 20 : 1
// 30 : 2
// 40 : 3

// console.log(arr);
// let ansArray = arr.map((num) => {
//   return num * num;
// });

// console.log(ansArray);
// [ 10, 20, 30, 40 ]
// [ 100, 400, 900, 1600 ]
// PS D:\Learning JS\Arrays>

// let arr = [10, 67, 20, 33, 11, 30, 45, 40];
// let ansArr = arr.filter((num) => {
//   return num % 2 === 0;
//   //   if (num % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// });
// console.log(arr);

// console.log(ansArr);

// PS D:\Learning JS\Arrays> node .\script.js
// [ 10, 67, 20, 33,11, 30, 45, 40 ]
// [ 10, 20, 30, 40 ]
// PS D:\Learning JS\Arrays>

// let arr = ["Bhagvat", 84, 91, "Mutthe", null, undefined, "Jai Ho"];

// let ans = arr.filter((val) => {
//   return typeof val === "string";
// });

// console.log(arr);
// console.log(ans);
// PS D:\Learning JS\Arrays> node .\script.js
// ['Bhagvat', 84,91,'Mutthe',null,undefined,'Jai Ho']
// [ 'Bhagvat', 'Mutthe', 'Jai Ho' ]
// PS D:\Learning JS\Arrays>

// let arr = [11, 20, 3, 340, 4, 1, 33, 2, 23, 324];
// console.log(arr);
// let ans = arr.reduce(
//   (acc, curr) => {
//     return acc + curr;
//   },
//   //Acc default / initialized value
//   0
// );
// console.log(ans);
// PS D:\Learning JS\Arrays> node .\script.js
// [
//   110, 20, 3, 340,   4,
//     1, 33, 2,  23, 324
// ]
// 860
// PS D:\Learning JS\Arrays>

// let arr = [11, 20, 3, 4, 33];
// console.log(arr);
// arr.sort();
// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);

// PS D:\Learning JS\Arrays> node .\script.js
// [ 11, 20, 3, 4, 33 ]
// [ 11, 20, 3, 33, 4 ]
// [ 3, 4, 11, 20, 33 ]
// PS D:\Learning JS\Arrays>
// console.log(arr.indexOf(533));

// let arr = [10, 20, 30];
// let len = arr.length;
// console.log("Length : " + len);
// arr.forEach((val, ind) => {
//   console.log("Num: " + val + "  Index: " + ind);
// });
// Num: 10  Index: 0
// Num: 20  Index: 1
// Num: 30  Index: 2
// PS D:\Learning JS\arrays>

// let obj = {
//   name: "Bhagvat Mutthe",
//   age: 22,
//   weight: 58,
//   height: "5ft 5in",

//   greet: function () {
//     console.log("Ha bhaai sab badhiya....!");
//   },
// };

// for (let key in obj) {
//   console.log(key,": ",obj[key]);
// }
// PS D:\Learning JS\arrays> node .\script.js
// name
// age
// weight
// height
// greet
// PS D:\Learning JS\arrays> node .\script.js
// name   Bhagvat Mutthe
// age   22
// weight   58
// height   5ft 5in
// greet   [Function: greet]
// PS D:\Learning JS\arrays> node .\script.js
// name :  Bhagvat Mutthe
// age :  22
// weight :  58
// height :  5ft 5in
// greet :  [Function: greet]
// PS D:\Learning JS\arrays> node .\script.js
// let arr = [10, 20, 30, 50, 40];

// for (let val of arr) {
//   console.log(val);
// }
// PS D:\Learning JS\arrays> node .\script.js
// 10
// 20
// 30
// 50
// 40
// PS D:\Learning JS\arrays>

// let fullName = "Bhagvat Mutthe";

// for (let val of fullName) {
//   console.log(val);
// }
// PS D:\Learning JS\arrays> node .\script.js
// B
// h
// a
// g
// v
// a
// t

// M
// u
// t
// t
// h
// e

///////////////////////////////
///ARRAYS WITH FUNCTIONS //////
///////////////////////////////

let arr = [10, 20, 30, 40, 50];

function getSum(arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  //   let len = arr.length;
  //   let sum = 0;
  //   for (let idx = 0; idx < len; idx++) {
  //     sum += arr[idx];
  //   }
    return sum;
}

let totSum = getSum(arr);

console.log(totSum);
