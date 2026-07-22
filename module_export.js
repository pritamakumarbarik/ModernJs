const employee = () => {
  return { name: "Pritam", age: 18, city: "Odisha" };
};

//See module_import.js for how to import this module in another file.
export const { name, age, city } = employee();
