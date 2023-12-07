var x = {
    name: "pragna",
    abc: function(){
        console.log("check ", this.name)
    }
}

x.abc(); // check Pragna

const fun1 = function def(greeting){
    console.log("check name ",greeting, " ", this.name)
}

fun1("Hello"); // check name Hello undefined. , since here this is pointing to global object

const fun2 = fun1.bind(x)
fun2("Hello"); // check name Hello Pragna
fun1.apply(x,["Hello"]) // check name Hello Pragna
fun1.call(x,"Hello") // check name Hello Pragna

//----------------------------------------------------


//Function Currying
function multiply(a,b){
    return a*b
}

const mul1 = multiply.bind(this, 2) // sets a to 2.
console.log(mul1(4)); // 8


