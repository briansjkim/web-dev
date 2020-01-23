// 'const' is block-scoped
// can't RE-ASSIGN a variable

var a = 45;
const b = 20;

a = 10;
b = 14;

// console.log(a); // 10
// console.log(b); // TypeError: Assignment to constant variable
