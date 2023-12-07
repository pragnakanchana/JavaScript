
// --------------------------------Having Multiple Awaits with multiple promise------------------

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("with in promise p1")
        res("Hello Pragna")
    },5000)
})

const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("with in promise p2")
        res("How are you")
    },10000)
})

async function getData(){
    // JS Engine seems to be waiting but it doesn't actually wait. 
    const startTime = new Date()
    const x = await p1;
    console.log("out of promise1 ")
    console.log("out of promise1 with val", x, " ",new Date() - startTime)

    const y = await p2;
    console.log("out of promise2 ")
    console.log("out of promise2 with val", y," ", new Date() - startTime)

}

getData()

/*
output:
(waits for 5 sec)
> with in promise p1
> out of promise1 
> out of promise1 with val Hello Pragna 5016
(waits for 5 more sec)
> with in promise p2
> out of promise2 
> out of promise2 with val How are you 10003


explanation:
JS has one Call Stack.
1. getData enters call stack.
2. Once it hits 21, it get's suspended and moved out of call stack.
3. Once p1 is resolved, then it is pushed again to call stack.
4. at line 25, it get's suspended and moved out of call stack.
5. Once p2 is resolved, then it is pushed again to call stack.
*/

