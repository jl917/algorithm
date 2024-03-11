/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const stack = [];

  for (const t of s) {
    if (map.has(t)) {
      if (stack.length === 0 || stack[stack.length - 1] !== map.get(t)) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(t);
    }
  }

  return stack.length ? false : true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
