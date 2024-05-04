function Animal() {
  this.colors = ['black', 'white']
}

Animal.prototype.getColor = function () {
  return this.colors
}

function Dog() { }

Dog.prototype = new Animal()

function test() {
  const dog1 = new Dog()
  dog1.colors.push('brown')
  const dog2 = new Dog()
  console.log(dog2.colors)
  // ['black', 'white', 'brown']
}

test()
