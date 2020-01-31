function userCreator(name, score) {
  const anotherUser = Object.create(userFunctionStore);
  anotherUser.name = name;
  anotherUser.score = score;
  return anotherUser;
}

// 'this' inside add1 will be the global value because the 'this' value isn't defined when using add1
const userFunctionStore = {
  increment: function () {
    const add1 = function () { this.score++; }
    add1();
  }
}

const user1 = userCreator('Brian', 5);
const user2 = userCreator('John', 4);

