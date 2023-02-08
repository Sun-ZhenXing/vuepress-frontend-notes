function Animal() {
    this.colors = ['black', 'white']
}
Animal.prototype.getColor = function () {
    return this.colors
}
function Dog() { }
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors)  // ['black', 'white', 'brown']
