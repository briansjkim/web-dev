function userCreator(name, score) {
  const anotherUser = Object.create(userFunctionStore);
  anotherUser.name = name;
  anotherUser.score = score;
  return anotherUser;
}

// 'this' inside add1 will be the global value because the 'this' value isn't defined when using add1
var userFunctionStore = {
  increment: function () {
    var add1 = function () { this.score++; }
    add1();
  }
}

const user1 = userCreator('Brian', 5);
const user2 = userCreator('John', 4);

// In order to make this code work, we have to change add1 into an arrow function instead of a regular function
var userFunctionStore = {
  increment: function () {
    var add1 = () => {
      this.score++;
    }
    add1();
  }
}

// It may seem like a good idea to use get rid of add1 and just make increment an arrow function, BUT
// arrow functions will take the 'this' value based on WHERE it was stored, which is global
