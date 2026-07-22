//Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables. In React, it's commonly used with props, hooks, and state management.
const fruits = ["apple", "banana", "cherry"];
// Array destructuring
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana

const person = { name: "Pritam", age: 30 };

// Object destructuring
const { name, age } = person;
console.log(name); // Output: Pritam
console.log(age); // Output: 30
