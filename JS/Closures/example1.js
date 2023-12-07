function mainFunc(greetWord){
    return function(name){
        return greetWord+' '+ name
    }
}

const x = mainFunc('Hello')
console.log(x('Pragna')) // Hello Pragna