// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
const wrongNums = [numbers, 4, 5, 6];

// console.log(newNumbers); // [1, 2, 3, 4, 5, 6]
// console.log(wrongNums); // [[1, 2, 3], 4, 5, 6];

const person = {
  name: 'Max'
}

const newPerson = {
  ...person,
  age: 23
}
// name will get overwritten
const samePerson = {
  ...person,
  name: 'Brian',
  age: 23
}

// console.log(newPerson);
// console.log(samePerson);

// rest operator
// merges the arguments into an array
var filter = (...args) => {
  return args.filter(num => num % 2 === 0);
}

// console.log(filter(1, 2, 3, 5, 1, 6, 1)); // [2, 6]
