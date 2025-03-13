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
