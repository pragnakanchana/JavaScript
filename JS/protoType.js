const obj1 = {
    name: 'Pragna'
}
const obj2 ={
    addreess :'AP'
}
obj1.__proto__ = obj2
console.log(obj1) // obj1 as is with obj2 as prototype
console.log(obj1.addreess) // AP
console.log(obj1.hasOwnProperty('addreess')) // false

const obj3 = {
    pincode: '534005'
}
// using underscore library
// _.extend(obj1, obj3)
// console.log("with extends ", obj1)