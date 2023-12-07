// when an async func is called with in normal function without await.

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("with in promise p1")
        res("Hello Pragna")
    },5000)
})

async function fun2() {
    const x = await p1;
    console.log("out of promise1 ")
    return x
}

 function getData(){
    // JS Engine seems to be waiting but it doesn't actually wait. 
    const startTime = new Date()
    const x = fun2()
    x.then((val)=>{
        console.log("check val")
    })
    console.log("out of outer func")

}

getData()