// creating a regular class
class Person {
  constructor() {
    this.name = 'Brian';
  }

  printName() {
    return this.name;
  }
}

var person = new Person();
// console.log(person.printName());

// 'inheriting'
class Child extends Person {
  constructor() {
    super();
    this.age = 5;
  }

  // even though this.name is not defined in Child
    // the super keyword is used to access and call functions on the parent
  printName() {
    return this.name;
  }

  printAge() {
    return this.age;
  }
}

var child = new Child();
// console.log(child.printName());
// console.log(child.printAge());
