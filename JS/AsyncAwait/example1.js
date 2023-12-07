const p = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Hello Pragna")
    },10000)
})
function getData(){
    // JS doesn't wait for line 8 to complete exec and move to line 9.
    p.then((val)=> console.log("val ",val))
    console.log("namasthe")
}

getData()


/*
output :
> namasthe
(waits for 10sec)
> val  Hello Pragna

exp: 
JS when it notices a promise, it keeps it aside and 
runs remaining code and then when promise is executed, it resolves the value.
*/
