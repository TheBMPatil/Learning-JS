// function seayMyName(MyName = "Ram") {
//   console.log("My name is ", MyName);
// }
// function seayMyName(fName = "Ram", lName) {
//   console.log("My name is ", fName, lName);
// }
// function seayMyName(fName = "Ram", lName = fName.toUpperCase()) {
//   console.log("My name is ", fName, lName);
// }

// // seayMyName();
// seayMyName("Bhagvat", "Mutthe");
// // PS D:\Learning JS\Classes&Objects> node defaultParam.js
// // My name is  Bhagvat Mutthe

// seayMyName("Bhagvat");

// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// My name is  Bhagvat BHAGVAT
// PS D:\Learning JS\Classes&Objects>

// function solve(vaal = 69) {
//   console.log("Hello Bhai ", vaal);
// }
// function solve(vaal = 69) {
//   console.log("Hello Bhai ", vaal);
// }

// solve(229);
// solve("Bhagvat");
// solve();
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Hello Bhai  229
// Hello Bhai  Bhagvat
// Hello Bhai  69
// PS D:\Learning JS\Classes&Objects>

// function solve(vaal ={ag:18}) {
//   console.log("Hello Bhai ", vaal);
// }
// solve()
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Hello Bhai  { ag: 18 }
// PS D:\Learning JS\Classes&Objects>

// function solve(vaal = ["Bhagvat", "Mutthe", "Patil"]) {
//   console.log("Hello Bhai ", vaal);
// }
// solve();
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Hello Bhai  [ 'Bhagvat', 'Mutthe', 'Patil' ]

// function solve(vaal = ["Bhagvat", "Mutthe", "Patil"]) {
//   console.log("Hello Bhai ", vaal);
// }
// solve(null);
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Hello Bhai  null
// PS D:\Learning JS\Classes&Objects>

function solve(vaal = ["Bhagvat", "Mutthe", "Patil"]) {
  console.log("Hello Bhai ", vaal);
}
solve(undefined);
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Hello Bhai  [ 'Bhagvat', 'Mutthe', 'Patil' ]
// PS D:\Learning JS\Classes&Objects>

function getAge() {
  return 120;
}

function utility(name = "Ram", age = getAge()) {
  console.log(name, " ", age);
}

utility();
utility("Bhagvat", 23);
// PS D:\Learning JS\Classes&Objects> node defaultParam.js
// Ram   120
// Bhagvat   23
// PS D:\Learning JS\Classes&Objects>
