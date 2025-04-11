

## Debounce vs Throttle

<img width="866" alt="Screenshot 2025-03-13 at 9 11 05 PM" src="https://github.com/user-attachments/assets/9b8784db-bf22-4733-af67-b478084660ba" />


Throttle:
within delay, if the func is invoked, we don't execute it and it is ignored.

Debounce:
within delay, if the func is invoked, we see if there are any setTimeout ka CBs that are yet to be executed, if we find any - we clear them and add a new callback to the queue. 

# PolyFills
```javascript
Object.prototype.myApply = function(applyObj, params) {
    if (typeof this !== "function") {
      throw new Error(this + " is not a Function");
    }
    applyObj.tempFunction = this;
    const result = applyObj.tempFunction(...params);
    delete applyObj.tempFunction;
    return result;
  };
  
  let object1 = {
    name: "Vivek",
    surname: "moradiya",
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
