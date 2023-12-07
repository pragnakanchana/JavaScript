
// --------------------------------Having Multiple Awaits with multiple promise------------------

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("with in promise p1")
        res("Hello ")
    },10000)
})

const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("with in promise p2")
        res("How are you")
    },5000)
})

async function getData(){
    // JS Engine seems to be waiting but it doesn't actually wait. 
    const x = await p1;
    console.log("out of promise1 ")
    console.log("out of promise1 with val", x)

    const y = await p2;
    console.log("out of promise2 ")
    console.log("out of promise2 with val", y)

}

getData()

/*
output:
(waits for 5 sec)
> with in promise p2
(waits for 5 more sec)
> with in promise p1
> out of promise1 
> out of promise1 with val Hello 
> out of promise2 
> out of promise2 with val How are you

*/