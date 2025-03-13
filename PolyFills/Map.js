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
