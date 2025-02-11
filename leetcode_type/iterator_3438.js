/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
  let result = "";
  const map = new Map();
  for (const t of s) {
    map.set(t, map.has(t) ? map.get(t) + 1 : 1);
  }

  for (const [k, v] of map.entries()) {
    if (parseInt(k) === v) {
      result += k;
    }
  }
  return result;
};

console.log(findValidPair("2523533"));
console.log(findValidPair("221"));
console.log(findValidPair("22"));
