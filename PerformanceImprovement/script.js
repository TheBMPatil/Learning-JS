// // Code 1

// //In this code 100 reflows and 100 repaints
// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let para = document.createElement("p");
//   para.textContent = "This is para : " + i;
//   document.body.appendChild(para);
// }
// const t2 = performance.now();
// // console.log(t1);
// // console.log(t2);
// console.log("Time taken by Code 1 :", t2 - t1);

// // Code 2

// //In this code only 1 reflow and 1 repaint

// const t3 = performance.now();
// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let para = document.createElement("p");
//   para.textContent = "This is para : " + i;
//   myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log("Time taken by Code 2 :", t4 - t3);

// // Time taken by Code 1 : 3.2999999970197678
// // script.js:27 Time taken by Code 2 : 0.800000011920929

//Best code
const t5 = performance.now();
let fragMent = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para : " + i;
  //No relow / No repaint for this line
  fragMent.appendChild(para);
}
//This line takes 1 reflow 1 repaint
document.body.appendChild(fragMent);
const t6 = performance.now();

console.log("Time taken by Best Code :", t6 - t5);
