// array destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;

// console.log(num1, num2);

// object destructuring
const person = { name: 'Brian', age: 23};
const { name, age } = person;

// console.log(name);
// console.log(age);

// assignment without declaration
const child = { nickName: 'B' };
({nickName} = child)

// console.log(nickName);
