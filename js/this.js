// methods that can be used for 'this'

// BIND
// creates a new function that, when called, has its 'this' keyword set to the provided value
var me = {
  firstName: 'Brian',
  lastName: 'Kim',
  getName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}

// console.log(me.getName());

var myName = function() {
  var greeting = 'Hello, my name is ' + this.getName();
  return greeting;
}

// 'this' keyword is now set to the object 'me'
var logName = myName.bind(me);

console.log(logName());
