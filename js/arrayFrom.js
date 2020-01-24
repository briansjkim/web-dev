// Array.from is an ES6 method that replaces the Array.prototype.slice.call in ES5

const constructArr = function () {
  const arr = Array.from(arguments);
  arr.push('Brian');
  return arr.join(' ');
}

// console.log(constructArr('My', 'name', 'is'));
