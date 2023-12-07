function mainFunc(greetWord){
    return function(name){
        return greetWord+' '+ name
    }
}

const x = mainFunc('Hello')
console.log(x('Pragna')) // Hello Pragna

// example 2 using var
function getListOfFunc(n){
    var arr = []
    for(var i = 0 ; i< n; i++){
        arr.push(function(){
            console.log("log ", i)
        })
    }
    return arr
}

const listOfFuncs = getListOfFunc(3)
listOfFuncs[0]() // log 3
listOfFuncs[1]() // log 3
listOfFuncs[2]() // log 3


// example 3 - with let 
function getListOfFunc1(n){
    var arr = []
    for(let i = 0 ; i< n; i++){
        // or using let j = i, and log(j) in func
        arr.push(function(){
            console.log("log1 ", i)
        })
    }
    return arr
}

const listOfFuncs1 = getListOfFunc1(3)
listOfFuncs1[0]() // log1 0
listOfFuncs1[1]() // log1 1
listOfFuncs1[2]() // log1 2

// example 4 - calling the function and then storing the value
function getListOfFunc2(n){
    const x = function(j){
        console.log("log2 ", j)
    }
    var arr = []
    for(var i = 0 ; i< n; i++){
        arr.push(x(i)) // instead of calling x, IIFs can also be used.
    }
    return arr
}

const listOfFuncs2 = getListOfFunc2(3)
listOfFuncs2[0] // log2 0
listOfFuncs2[1] // log2 1
listOfFuncs2[2] // log2 2

