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