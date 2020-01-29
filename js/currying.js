// practice with currying

var addTwo = function (a) {
  return function (b) {
    return a + b;
  }
}

var one = addTwo(1);
// console.log(one(2));

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

function createFunction2() {
  return function (num) {
    return num * 2;
  }
}

var generatedFn = createFunction();
var result = generatedFn(3);
// console.log(result); //6

var generatedFn2 = createFunction2();
var result2 = generatedFn2(3);
// console.log(result2); // 6
