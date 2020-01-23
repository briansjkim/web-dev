// updated array functions

// Map
var numbers = [1, 2, 3];
// map returns a new array w/ the results of calling a function on each element
const doubleNum = numbers.map(num => num * 2);
const tripleNum = numbers.map((num) => {
  return Math.pow(num, 3);
})

var weapons = ['Broken Candlestick', 'Lead pipe', 'Donut'];

const makeBroken = function (item) {
  return `broken ${item}`;
}

var broken = weapons.map((weapon) => {
  console.log(makeBroken(weapon));
})

// console.log(broken);

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

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(num => num % 2 === 0);
const odds = numbers.filter(num => num % 2 !== 0);

// console.log(evens);
// console.log(odds);


// Find
// returns the VALUE of the first element in the provided array that passes the provided func

// basically like creating for loop and setting an if condition inside it
var nums = [1, 2, 3, 4, 5];
const found = nums.find(num => num > 3);
const notFound = nums.find(num => num < 0);

// console.log(found);
// console.log(notFound);

// findIndex
// returns the INDEX of the first element in the provided array that passes the provided func

var nums = [1, 2, 3, 4, 5];
const foundIndex = nums.findIndex(num => num > 2);
const notFoundIndex = nums.findIndex(num => num > 5);

// console.log(foundIndex);
// console.log(notFoundIndex);

