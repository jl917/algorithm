/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isComplate = false;
  return function (...args) {
    if (!isComplate) {
      isComplate = true;
      return fn(...args);
    }
  };
};

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn 没有被调用

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
