// updated array functions

// Map
var numbers = [1, 2, 3];
// map returns a new array w/ the results of calling a function on each element
const doubleNum = numbers.map(num => num * 2);
const tripleNum = numbers.map((num) => {
  return Math.pow(num, 3);
})

// console.log(doubleNum);
// console.log(tripleNum);

// Reduce
var numbers = [1, 2, 4, 6, 10];
// accumulator stores the current sum, while current is the current element
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const product = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);

// console.log(sum);
// console.log(product);

// Filter

// Find

// findIndex

