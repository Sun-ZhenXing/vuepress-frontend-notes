class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

export class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
