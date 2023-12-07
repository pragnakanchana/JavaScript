
// --------------------------------Having Multiple Awaits with same promise------------------

const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("winth in promise")
        res("Hello Pragna")
    },5000)
})
async function getData2(){
    // JS waits for line 35 to complete exec ( for promise to resolve) and then only moves to line 36.
    const x = await p2;
    console.log("out of promise1 ")
    console.log("out of promise1 with val", x)

    const y = await p2;
    console.log("out of promise2 ")
    console.log("out of promise2 with val", y)

}

getData2()