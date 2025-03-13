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
