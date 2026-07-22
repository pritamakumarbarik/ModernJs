//var has a function scope, not a block scope.
var x = 5.6;
console.log(x);

//let has a block scope.
let y = 10.6;
console.log(y);

//const has a block scope.
const z = 15.6;
console.log(z);

//const cannot be reassigned.
const z1 = 20.6;    
//z1 = 25.6; // This will throw an error.

