// practice with currying

var addTwo = function (a) {
  return function (b) {
    return a + b;
  }
}

var one = addTwo(1);
// console.log(one(2));
