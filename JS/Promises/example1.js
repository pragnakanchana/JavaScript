/// run on browser to see promise object 
// basic on how flow goes.

const x = new Promise((res, rej)=> {
    setTimeout(()=>{
        console.log("check set Timeout")
        res("abc")
    },5000)
}) 
// x.__proto__.abc = ()=>{
//     console.log("check 123")
//     return '123'
// }
console.log("check x ",x)
x.then((val)=>{
    console.log("check x after",x)
    console.log("check val ", val)
    // x.abc()
})
console.log("check x2 ",x)
/*
output : 
> check x Promise {<pending>}
            [[Prototype]]: Promise
            [[PromiseState]]: "pending"
            [[PromiseResult]]: undefined

(waits for 5sec)
> check set Timeout
> check x after Promise {<fulfilled>: 'abc'}
        [[Prototype]]: Promise
        [[PromiseState]]: "fulfilled"
        [[PromiseResult]]: "abc"
> check val abc
> check 123
*/