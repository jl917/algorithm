/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = new Map();
  let result = "";
  let last = "";

  for (const o of order) {
    map.set(o, "");
  }

  for (const t of s) {
    if (map.has(t)) {
      map.set(t, map.get(t) + t);
    } else {
      last += t;
    }
  }

  for(const value of map.values()){
    result+= value;
  }
  result += last;

  return result;
};

console.log(customSortString("cba", "abcd"));
console.log(customSortString("cbafg", "abcd"));
console.log(customSortString("kqep", "pekeq"));
