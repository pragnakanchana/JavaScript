
// --------------------------------Having Multiple Awaits with same promise------------------

const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("winth in promise")
        res("Hello Pragna")
    },5000)
})
async function getData2(){
    const x = await p2;
    console.log("out of promise1 ")
    console.log("out of promise1 with val", x)

    const y = await p2;
    console.log("out of promise2 ")
    console.log("out of promise2 with val", y)

}

getData2()

/*
output:
(waits for 5 sec)
> winth in promise
> out of promise1 
> out of promise1 with val Hello Pragna
> out of promise2 
> out of promise2 with val Hello Pragna


explanation:
JS Engine waits at line 12 for promise to resolve the value and then outputs all at once

why "winth in promise" is not printed twice ???

You are correct that callbacks are executed on the call stack, but the behavior you're observing in your code is because promises in JavaScript, when resolved or rejected, do not reset their state. Once a promise is resolved, it will not re-execute the resolved callback.

In your code:

You create a promise p2.
After a 5-second delay, the promise resolves with the value "Hello Pragna," and "winth in promise" is printed.
The key point here is that a promise's then or await handler is executed once when the promise is resolved, and the result is cached. Subsequent await calls for the same resolved promise will not re-execute the resolved callback; instead, they retrieve the cached result.

So, in your code, when you use await p2 the second time, "winth in promise" is not printed again because the promise has already resolved and cached the result.

If you want "winth in promise" to be printed twice, you would need to create a new promise for each await to allow the resolved callback to execute again.
*/