// promise chaining

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Hello")
    }, 5000)
})

function getNameWithGreet(greet){
   return new Promise((res,rej)=>{
    res(greet+' Pragna')
   })
}

function getData(){
    console.log("check getData")
    return p1.then(greet=>{
        console.log("check greet val ", greet)
        return getNameWithGreet(greet)
    })
    .then(greetWithName=>{
        console.log("cehck greetWithNAme ",greetWithName)
        return greetWithName
    })
}

const returnedval = getData()
console.log("check returnedval ",returnedval)