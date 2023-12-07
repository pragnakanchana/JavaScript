// pass by value
var a = 3;
var b = a;
a = 1
console.log("a b ", a, b) // 1 3

// pass by reference (applicable all obejcts (including functions))
var c = {
    'abc':123
}

var d = c
c.abc = 456
console.log("d c ",d,c) //  { abc: 456 } { abc: 456 }

// equals operator creates new memory space 
// if we reassign the object, then a new memory space will be created and reference won't be maintained
c =  {
    'def':567
}
console.log("d c ",d,c) // { abc: 456 } { def: 567 }



// IIFE
const x = function(name){
    console.log("hello ", name);
}('Pragna');