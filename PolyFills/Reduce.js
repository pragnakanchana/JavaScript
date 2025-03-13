Array.prototype.reducePolyFill = function(callback, initialVal){
    let i=0;
    let accumulator;
    if(initialVal === undefined ){
        accumulator = this[i];
        i++;
    }
    else{
        accumulator = initialVal
    }
    for(; i < this.length; i++){
        accumulator = callback(accumulator, this[i],i)
    }
    return accumulator;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce((prevItem, curr, index)=>{
    return prevItem + curr;
}, 0)
const sumWithPolyFill = arr.reducePolyFill((prevItem, curr, index)=>{
    return prevItem + curr;
}, 0)
console.log("reduce ", sum, sumWithPolyFill)