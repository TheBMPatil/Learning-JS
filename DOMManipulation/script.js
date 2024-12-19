// alert("Ha link hua hain js");

// let myDiv = document.querySelector("#myDiv");

// console.log(myDiv);

// let newEle = document.createElement("span");

// console.log(newEle);

// newEle.textContent = "This is me Bhagvat Mutthe...!";
// myDiv.appendChild(newEle)

// myDiv.insertAdjacentElement("beforebegin", newEle);
// myDiv.insertAdjacentElement("afterbegin", newEle);
// myDiv.insertAdjacentElement("beforeend", newEle);
// myDiv.insertAdjacentElement("afterend", newEle);

//removeChild

// let parent = document.querySelector("#myDiv");
let child = document.querySelector("#fPara");
let parent = child.parentElement; 

parent.removeChild(child);
