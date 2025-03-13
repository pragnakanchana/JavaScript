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