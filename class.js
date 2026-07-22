class Animal {
  constructor(name, color) {
    //this keyword is used to refer to the current
    // instance of the class.
    // It is used to access the properties and methods of the class.
    //Same as Java, this keyword is used to refer to the current instance of the class.
    this.name = name;
    this.color = color;
  }

  action() {
    return `${this.name} is a ${this.color} animal.`;
  }
}

const dog = new Animal("Dog", "Black");
console.info(dog);
console.info(dog.action());

class Dog extends Animal {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  action() {
    return `${this.name} is a ${this.color} ${this.breed}.`;
  }
}
const goldenRetriever = new Dog("Golden Retriever", "Golden", "Retriever");
console.info(goldenRetriever);
console.info(goldenRetriever.action());
