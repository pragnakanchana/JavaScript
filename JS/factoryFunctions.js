function fun1(greet){
    return function(name){
        return greet + " " + name
    }
}

const helloNames = fun1('Hello')
const hiNames = fun1('Hi')
console.log(helloNames('Pragna'), ' ', helloNames('Chotu'))
console.log(hiNames('Pragna'), ' ', hiNames('Chotu'))



// example 2: it remembers the param value without using this keyword
// function along with the outer world variable memory creates a closure.
function fun2(greetWord){
    return {
        greetingWord : greetWord,
        greet:function(name){
        return greetWord + " " + name
    }
}
}

const helloNames1 = fun2('Hello')
const hiNames1 = fun2('Hi')
console.log(helloNames1.greet('Pragna'), ' ', helloNames1.greet('Chotu')) // Hello Pragna Hello Chotu
console.log(hiNames1.greet('Pragna'), ' ', hiNames1.greet('Chotu'))// Hi Pragna   Hi Chotu


