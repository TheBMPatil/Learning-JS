// function changeText(event) {
//   console.log(event);
//   let fpara = document.getElementById("para");
//   fpara.textContent = "Ram Ram Bhaiyo..";
// }

// let fpara = document.getElementById("para");
// fpara.addEventListener("click", changeText);

// // fpara.removeEventListener("click", changeText);
// let achorEle = document.getElementById("fanchor");
// // console.log(achorEle);

// achorEle.addEventListener("click", function (event) {
//   event.preventDefault();
//   achorEle.textContent = "Click Done Bhai";
// });
// let paras = document.querySelectorAll("p");

function alertPara(event) {
  if (event.target.nodeName === "SPAN") {
    alert("You have clicked on Span : " + event.target.textContent);
  }
}
// function alertPara(event) {
//   alert("You have clicked on para : " + event.target.textContent);
// }
// for (let i = 0; i < paras.length; i++) {
//   let para = paras[i];
//   para.addEventListener("click", alertPara);
// }
let myDiv = document.getElementById("paras");

myDiv.addEventListener("click", alertPara);
