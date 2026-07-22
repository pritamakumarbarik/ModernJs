const employee = { name: "Pritam", age: 27, city: "Odisha" };

//Before string template literals, we used to concatenate strings using the + operator. For example:
//Old way
console.log("Name: " + employee.name + ", Age: " + employee.age);

//New way using template literals
console.log(`Name: ${employee.name}, Age: ${employee.age}`);
