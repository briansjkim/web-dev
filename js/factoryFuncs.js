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

