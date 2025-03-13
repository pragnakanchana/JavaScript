function calculation(a,b){
    for(let i = 0; i < 1000000000; i++){}
    return a+b;
}

console.time('first fun')
console.log(calculation(5,6))
console.timeEnd('first fun')

console.time('Second fun')
console.log(calculation(5,6))
console.timeEnd('Second fun')

function memoise(callback){
    let cache = {} // 1
    return function(...args){
        key = JSON.stringify(args)
        if(cache[key]){
            return cache[key]
        }
        else{
            let res = callback(...args);
            cache[stringi] = res;
            return res;
        }
    }
}

const memoisedFn = memoise(calculation)


console.time('memo first fun')
console.log(memoisedFn(5,6))
console.timeEnd('memo first fun')

console.time('memo Second fun')
console.log(memoisedFn(5,6))
console.timeEnd('memo Second fun')
