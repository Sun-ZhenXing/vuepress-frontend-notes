function Animal(name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = new Animal()
