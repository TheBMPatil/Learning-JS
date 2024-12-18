let src = {
  name: "Bhagvat",
  age: "23",
  weight: "58",
  height: "135",
};
console.log("SRC : ", src);
//Method 1  : Iteration Method

let dest = {};

console.log("Dest : ", dest);
for (let key in src) {
  let newKey = key;
  let newVal = src[key];
  dest[newKey] = newVal;
}

console.log("Dest : ", dest);

//Method 2 using spred operator (...)

let dest2 = { ...src };
console.log("Dest2 : ", dest2);

//Method 3 : Using asign method of object class

let dest3 = Object.assign({}, src);
console.log("Dest3 : ", dest3);

let src2 = {
  subject: "Java Script",
};
console.log("SRC2 : ", src2);

let dest4 = Object.assign({}, src, src2);
console.log("Dest4 : ", dest4);

// //OP

// PS D:\Learning JS\Object cloning> node script.js
// SRC :  { name: 'Bhagvat', age: '23', weight: '58', height: '135' }
// Dest :  {}
// Dest :  { name: 'Bhagvat', age: '23', weight: '58', height: '135' }
// Dest2 :  { name: 'Bhagvat', age: '23', weight: '58', height: '135' }
// Dest3 :  { name: 'Bhagvat', age: '23', weight: '58', height: '135' }
// SRC2 :  { subject: 'Java Script' }
// Dest4 :  {
//   name: 'Bhagvat',
//   age: '23',
//   weight: '58',
//   height: '135',
//   subject: 'Java Script'
// }
// PS D:\Learning JS\Object cloning>
