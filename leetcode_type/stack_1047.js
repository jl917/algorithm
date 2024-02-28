/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const t of s) {
    if (stack.length && stack[stack.length - 1] === t) {
      stack.pop();
    } else {
      stack.push(t);
    }
  }

  return stack.join("");
};

console.log(removeDuplicates("abbaca"));
