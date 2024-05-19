/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = new Map();
  let count = 0;
  for (const s of arr) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1);
  }

  for (const [key, value] of [...map.entries()]) {
    if (value === 1) {
      count++;

      if (count === k) {
        return key;
      }
    }
  }
  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
