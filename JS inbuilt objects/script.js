// // console.log("Bhagvat")
// //Math object

// console.log(Math.PI)

// console.log(Math.max(60,30,24,55,4334,5675))
// console.log(Math.min(60,30,24,55,4334,5675))

// console.log(Math.round(45.78))
// console.log(Math.round(45.38))
// console.log(Math.floor(45.78))
// console.log(Math.floor(45.38))
// console.log(Math.ceil(45.78))
// console.log(Math.ceil(45.38))
// console.log(Math.abs(-55))
// console.log(Math.random())
// // PS D:\Learning JS\JS inbuilt objects> node script.js
// // Bhagvat
// // 3.141592653589793
// // 5675
// // 24
// // 46
// // 45
// // 45
// // 45
// // 46
// // 46
// // 55
// // PS D:\Learning JS\JS inbuilt objects>

// console.log(Math.sqrt(49))
// console.log(Math.pow(5,3))

// PS D:\Learning JS\JS inbuilt objects> node script.js
// 7
// 125
// PS D:\Learning JS\JS inbuilt objects>

//Date Object
let curr = Date();
console.log(curr);

let date = new Date("Oct 11 2002  11:15");
let newDate =new Date(2002,9,11,11,15)
// Fri Oct 11 2002 11:15:00 GMT+0530 (India Standard Time)  For month Zero based indexing is maintained
console.log(date);
console.log(newDate);
console.log(newDate.getDay()) //Also day is 0 - 6

console.log(newDate.getFullYear())