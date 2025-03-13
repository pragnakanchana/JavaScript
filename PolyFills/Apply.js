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