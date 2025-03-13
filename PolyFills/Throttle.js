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
