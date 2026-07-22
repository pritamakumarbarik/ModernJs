//The JavaScript spread operator (...) copies all or part of an existing array or object into another array or object.

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
// Using the spread operator to combine arrays
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]

const person1 = { name: "Alice", age: 25 };
const person2 = { city: "New York", country: "USA" };

// Using the spread operator to combine objects
const combinedPerson = { ...person1, ...person2 };
console.log(combinedPerson); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }