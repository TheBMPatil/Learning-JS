const arr = [103, 20, 307, 40];

// let res = arr.map((n) => n * 2); //To do some operation on each element in array

// let res = arr.map((n) => {
//   return n % 2==0 ? true : false;
// });
//op : [ false, true, false, true ]
let res = arr.filter((n) => {
  //To filter the elements from the array
  return n % 2 == 0 ? true : false;
});
// op : [ 20, 40 ]
console.log(res);

// arr.forEach()
// arr.for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }