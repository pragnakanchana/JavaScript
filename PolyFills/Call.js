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