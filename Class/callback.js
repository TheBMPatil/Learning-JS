arr = [10, 20, 30, 40, 50];

sum = function (a, b) {
  return a + b;
};

largest = function (a, b) {
  return a > b ? a : b;
};
smallest = function (a, b) {
  return a <b ? a : b;
};

res = arr.reduce(sum);
larg = arr.reduce(largest);
small = arr.reduce(smallest);
console.log(res);
console.log(larg);
console.log(small);
