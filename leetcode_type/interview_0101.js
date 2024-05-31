/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  const set = new Set();

  for (const s of astr) {
    if (set.has(s)) {
      return false;
    } else {
      set.add(s);
    }
  }

  return true;
};

console.log(isUnique("leetcode"));
console.log(isUnique("abc"));
