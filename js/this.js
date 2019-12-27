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

var myName = function(snack, hobby) {
  var greeting = 'Hello, my name is ' + this.getName();
  var greeting2 = this.getName() + ' loves ' + snack + ' and ' + hobby;
  console.log(greeting);
  console.log(greeting2);
}

// 'this' keyword is now set to the object 'me'
var logName = myName.bind(me);

console.log(logName('sushi', 'basketball'));
/**
 * the JS engine creates a new myName instance and binds me as its 'this' variable
 *  IT COPIES THE myName FUNCTION
 * Additionally, we can use the function like an a regular function, so we could update the function to accept parameters
 * and pass them in
 */

// CALL AND APPLY
// can invoke any function and explicitly specify what 'this' should reference within the calling function

var me = {
  firstName: 'Brian',
  lastName: 'Kim',
  getName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}

var myName = function(snack, hobby) {
  var greeting = this.getName() + ' loves ' + snack + ' and ' + hobby;
  console.log(greeting);
}

// call requires its parameters to be passed in individually (spaced out by commas)
myName.call(me, 'sushi', 'basketball');
// apply requires its parameters to be passed in in an array
myName.apply(me, ['sushi', 'basketball']);
