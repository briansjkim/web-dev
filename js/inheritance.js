// Differences between ES6 class and ES5 function constructors

// ES5
function Person(name) {
  this.name = name;
}

// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
}
