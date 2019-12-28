// updated array functions

const numbers = [1, 2, 3];
// map returns a new array w/ the results of calling a function on each element
const doubleNum = numbers.map(num => num * 2);
const tripleNum = numbers.map((num) => {
  return Math.pow(num, 3);
})

console.log(doubleNum);
console.log(tripleNum);
