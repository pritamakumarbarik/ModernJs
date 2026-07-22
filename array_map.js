//The map() method creates a new array with the results of calling a function for every array element.
//used to iterate over an array and perform a specific operation on each element, returning a new array with the results.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
