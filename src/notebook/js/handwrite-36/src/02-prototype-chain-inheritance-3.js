function Animal(name) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function () {
  return this.name
}

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

function test() {
  const dog1 = new Dog('奶昔', 2)
  dog1.colors.push('brown')
  const dog2 = new Dog('哈赤', 1)
  console.log(dog2)
  // Dog { name: "哈赤", colors: ["black", "white"], age: 1 }
}

test()
