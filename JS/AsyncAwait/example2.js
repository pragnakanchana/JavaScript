

//------------------------- Using Async Await------------
const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("winth in promise")
        res("Hello Pragna")
    },10000)
})
async function getData1(){
    // JS waits for line 35 to complete exec ( for promise to resolve) and then only moves to line 36.
    const x = await p1;
    console.log("out of promise")
}

getData1()

/*
output: 
(wait for 10sec)
> winth in promise
> out of promise

explanation: JS Engine waits for execution to complete.
*/
