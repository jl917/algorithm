/**
 * @param {string} s
 * @return {boolean}
 */

// string replace;
var isValid = function (s) {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return s.length === 0;
};

// stack
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const t of s) {
    if (map.has(t)) {
      if (stack[stack.length - 1] !== map.get(t)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(t);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
