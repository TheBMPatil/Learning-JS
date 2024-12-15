function isEven(n) {
  let absN = Math.abs(n);
  let out = true;
  for (let i = 0; i < absN; i++) {
    out = !out;
  }
  return out;
}

console.log(isEven(22));

const arr = [10, 5, 3, 9, 4];
console.log(arr);
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log(arr[i], arr[i], i * 1000));
  }
}

sortArr(arr);

// console.log(arr);
