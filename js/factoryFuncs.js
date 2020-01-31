function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator('Brian', 3); // score = 3
const user2 = userCreator('Will', 5); // score = 5


user1.increment(); // score = 4
user2.increment(); // score = 6


// using the prototype chain to have a func/property in just one obj and have the interpreter
// go up the prototype chain if it doesn't find it on an instance

function userCreator(name, score) {
  const anotherUser = Object.create(userFunctionStore);
  anotherUser.name = name;
  anotherUser.score = score;
  return anotherUser;
}

const userFunctionStore = {
  increment: function () { this.score++; }
}

const user3 = userCreator('Brian', 3); // score = 3
const user4 = userCreator('Will', 5); // score = 5

user3.increment(); // score = 4

user3.hasOwnProperty('score'); // true
user4.hasOwnProperty('name'); // true
