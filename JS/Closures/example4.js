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