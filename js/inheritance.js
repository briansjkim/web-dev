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

// ES5 'inheritance'
function Student(name, studentId) {
  Person.call(this, name);
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
