## Debounce vs Throttle

<img width="866" alt="Screenshot 2025-03-13 at 9 11 05 PM" src="https://github.com/user-attachments/assets/9b8784db-bf22-4733-af67-b478084660ba" />


Throttle:
within delay, if the func is invoked, we don't execute it and it is ignored.

Debounce:
within delay, if the func is invoked, we see if there are any setTimeout ka CBs that are yet to be executed, if we find any - we clear them and add a new callback to the queue. 

# PolyFills
### Apply
```javascript
Function.prototype.myApply = function (applyObj, params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }

  // Default to the global object if applyObj is not provided
  applyObj = applyObj || globalThis;

  // Ensure params is an array-like object, default to an empty array if not
  params = Array.isArray(params) ? params : [];

  // Temporarily assign the function to the context (applyObj)
  applyObj.tempFunction = this;

  // Execute the function with provided parameters
  const result = applyObj.tempFunction(...params);

  // Clean up the temporary property
  delete applyObj.tempFunction;

  return result;
};

  
  let object1 = {
    name: "Pragna",
    surname: "Kanchana",
    printName: function(age, city) {
      return  this.name + " " + this.surname + " " + age + " " + city;
    }
  };
  
  let object2 = {
    name: "Amy",
    surname: "Patel"
  };
  
  console.log(object1.printName.myApply(object2, [22, "morbi"]));
```
### Bind
```javascript
if (!Function.prototype.myBind) {
    Function.prototype.myBind = function(context, ...args) {
      if (typeof this !== 'function') {
        throw new Error(this + ' is not a function');
      }
      const fn = this;
      return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
      };
    };
  }
  
  // Example usage:
  let object1 = {
    name: "Vivek",
    surname: "moradiya",
    printName: function(age, city) {
      return this.name + " " + this.surname + " " + age + " " + city;
    }
  };
  
  let object2 = {
    name: "Amy",
    surname: "Patel"
  };
  
  const boundFunction = object1.printName.myBind(object2, 22);
  console.log(boundFunction("morbi")); // Output: Amy Patel 22 morbi
```

### Call
```javascript
Object.prototype.myCall = function(callObj, ...params) {
    if (typeof this !== "function") {
      throw new Error(this + " is not a Function");
    }
    callObj.tempFunction = this;
    const result = callObj.tempFunction(...params);
    delete callObj.tempFunction;
    return result;
  };
  
  let object1 = {
    name: "Vivek",
    surname: "moradiya",
    printName: function(age) {
      return this.name + " " + this.surname + " " + age;
    }
  };
  
  let object2 = {
    name: "Amy",
    surname: "Patel"
  };
  
  console.log(object1.printName.myCall(object2, 22));  
```

### Debounce
```javascript
function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


const fn = () => {
  console.log("Debounced function called");
};

const debouncedFunction = debounce(fn, 2000);

fn();
fn();
fn();
debouncedFunction();
debouncedFunction();
debouncedFunction();
```

### Throttle
```javascript
function throttle(fn, delay) {
  let bool = false;

  return function (...args) {
    if (!bool) {
      bool = true;
      setTimeout(() => {
        bool = false;
        fn.apply(this, args);
      }, delay);
    }
  };
}

const fn = () => {
  console.log("Throttled function called");
};

const throttledFunction = throttle(fn, 2000);

fn();
fn();
fn();
throttledFunction();
throttledFunction();
throttledFunction();
```

### Filter
```javascript
Array.prototype.filterPolyfill = function (callback, context) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

const context = {
  dividend: 2,
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arr.filter(function (item) {
  return item % this.dividend === 0;
}, context);

const evenWithPolyFill = arr.filterPolyfill(function (item) {
  return item % this.dividend === 0;
}, context);

console.log("filter ", even, evenWithPolyFill); // [2, 4, 6, 8, 10]
```

### Map
```javascript
/* In your polyfill, if you define mapPolyFill using an arrow function, 
    this will not refer to the array instance on which the method is called, 
    but rather to the this value of the enclosing scope, 
    which may be undefined or some other object.
*/
Array.prototype.mapPolyFill = function (callback, context) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback.call(context, this[i]));
  }
  return res;
};

const context = {
  multiplier: 2,
};

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = arr2.map(function (item) {
  return item * this.multiplier;
}, context);
const doubleWithPolyfill = arr2.mapPolyFill(function (item) {
  return item * this.multiplier;
}, context);
console.log("map ", double, doubleWithPolyfill);
```

### Reduce
```
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError("Array.prototype.myReduce called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const arr = Object(this);
    const length = arr.length >>> 0;

    let accumulator;
    let startIndex = 0;

    // If initialValue is provided
    if (arguments.length >= 2) {
      accumulator = initialValue;
    } else {
      // Find the first defined value in the array
      for (; startIndex < length; startIndex++) {
          if (startIndex in arr) {
                accumulator = arr[startIndex];
                startIndex++;
                break;
          }
      }

      if (startIndex >= length) {
        throw new TypeError("Reduce of empty array with no initial value");
      }

      accumulator = arr[startIndex++];
    }

    for (let i = startIndex; i < length; i++) {
      if (i in arr) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }

    return accumulator;
  };
}


const arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce((prevItem, curr, index)=>{
    return prevItem + curr;
}, 0)
const sumWithPolyFill = arr.reducePolyFill((prevItem, curr, index)=>{
    return prevItem + curr;
}, 0)
console.log("reduce ", sum, sumWithPolyFill)
```

### Memoise
```
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
```

### Promises
```javascript
const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)

    constructor(cb) {
        try {
            // like (resolve,reject) => {}
            cb(this.#onSuccessBind, this.#onFailBind)
        } catch (e) {
            this.#onFail(e)
        }
    }

    #runCallbacks() {
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#thenCbs = []
        }

        if (this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#catchCbs = []
        }
    }

    #onSuccess(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return

            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }

            this.#value = value
            this.#state = STATE.FULFILLED
            this.#runCallbacks()
        })
    }

    #onFail(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return

            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }

            if (this.#catchCbs.length === 0) {
                throw new UncaughtPromiseError(value)
            }

            this.#value = value
            this.#state = STATE.REJECTED
            this.#runCallbacks()
        })
    }

    then(thenCb, catchCb) {
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push(result => {
                if (thenCb == null) {
                    resolve(result)
                    return
                }

                try {
                    resolve(thenCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#catchCbs.push(result => {
                if (catchCb == null) {
                    reject(result)
                    return
                }

                try {
                    resolve(catchCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#runCallbacks()
        })
    }

    catch(cb) {
        return this.then(undefined, cb)
    }

    finally(cb) {
        return this.then(
            result => {
                cb()
                return result
            },
            result => {
                cb()
                throw result
            }
        )
    }

    static resolve(value) {
        return new Promise(resolve => {
            resolve(value)
        })
    }

    static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                
                    .then(value => {
                        completedPromises++
                        results[i] = value
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
                    .catch(reject)
            }
        })
    }

    static allSettled(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise(resolve => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                    .then(value => {
                        results[i] = { status: STATE.FULFILLED, value }
                    })
                    .catch(reason => {
                        results[i] = { status: STATE.REJECTED, reason }
                    })
                    .finally(() => {
                        completedPromises++
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
            }
        })
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve).catch(reject)
            })
        })
    }

    static any(promises) {
        const errors = []
        let rejectedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise.then(resolve).catch(value => {
                    rejectedPromises++
                    errors[i] = value
                    if (rejectedPromises === promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"))
                    }
                })
            }
        })
    }
}

class UncaughtPromiseError extends Error {
    constructor(error) {
        super(error)

        this.stack = `(in promise) ${error.stack}`
    }
}

module.exports = MyPromise
```
