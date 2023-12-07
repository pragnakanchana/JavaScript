// using let
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