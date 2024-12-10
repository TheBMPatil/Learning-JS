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

let arr = [1, 2, 3, 4, 5, "Bhagvat", "Mutthe", true];

console.log(arr);

arr.push(12);
console.log(arr);
// [ 1, 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true, 12 ]
arr.pop();
console.log(arr);
// [ 1, 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]
arr.shift();
console.log(arr);
// [ 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]
arr.unshift("Raj");

console.log(arr);
// [ 'Raj', 2, 3, 4, 5, 'Bhagvat', 'Mutthe', true ]

console.log(arr.slice(3, 7));
// [ 4, 5, 'Bhagvat', 'Mutthe' ]

arr.splice(1,2,"BM");
console.log(arr);
// [ 'Raj', 'BM', 4, 5, 'Bhagvat', 'Mutthe', true ]

