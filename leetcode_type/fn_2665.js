/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let current = init;
  const increment = () => {
    current++;
    return current;
  };
  const decrement = () => {
    current--;
    return current;
  };
  const reset = () => {
    current = init;
    return current;
  };
  return {
    increment,
    reset,
    decrement,
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
