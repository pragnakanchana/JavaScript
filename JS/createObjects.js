function Person(){
    this.name = 'Pragna'
    this.age = 22
}
Person.prototype.getName = function(){
    return this.name
}
const obj1 = new Person()
console.log("obj1 ", obj1.getName())