// 'const' is block-scoped
// can't RE-ASSIGN a variable

var a = 45;
const b = 20;

a = 10;
b = 14;

// console.log(a); // 10
// console.log(b); // TypeError: Assignment to constant variable


// 'let' is also block-scoped

let x = 1;

if (x === 1) {
  let x = 5;
  console.log(x); // 5
}

console.log(x); // 1
