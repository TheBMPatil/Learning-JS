// var age = 22; //GLOBAL SCOPE coz it isnt contained by anyone its parent is the main file
// //Global variables are accessible anywhere throught the program
// console.log(age);

// {
//   console.log(age);
// }
// if (true) {
//   console.log(age);
// }
// for (let i = 0; i < 2; i++) {
//   console.log(age);
// }

// function sayHello() {
//   console.log("hi   ", age);
// }
// sayHello();

// // BLOCK LEVEL SCOPING
// console.log(age, height); //Inaccsible coz its npt hoisted
// {
//   let age = 22;
//   const height = 123;
//   console.log(age, height);
// }
// //console.log(age, height);  Not accesible coz CONST / LET are block level

console.log(Fname);
// //undefined   coz var hoisting
{
  ///VAR is not block scope
  var Fname = "Bhagvat";
}
console.log(Fname);
// // Accessible op  Bhagvat

function sayHello() {
  var Fname = "Earth";
  console.log("Hello dunia ", Fname);
}
sayHello();

// console.log(Fname); inaccassible

// // TEMPORAL DEAD ZONES

// console.log(Fname); //{ fname is inaccsesible will give errror
// console.log("first"); //
// console.log("Second"); // temporal dead zone
// console.log("Third"); //
const Fname = "Bhagvat"; //}
console.log(Fname);
