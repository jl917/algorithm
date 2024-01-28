/**
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function (s) {
  let result = "";
  const map = new Map();

  for (const t of s) {
    map.set(t, map.has(t) ? map.get(t) + 1 : 1);
  }

  const sortMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

  if (sortMap.length === 1 && sortMap[0][1] > 1) {
    return "";
  }

  while (sortMap[0][1] > 0) {
    if (sortMap[1] && sortMap[1][1] === 0 && sortMap[0][1] > 1) {
      return "";
    }

    result += sortMap[0][0];
    sortMap[0][1]--;

    if (sortMap[1] && sortMap[1][1]) {
      result += sortMap[1][0];
      sortMap[1][1]--;
    }

    sortMap.sort((a, b) => b[1] - a[1]);
  }
  return result;
};

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));
console.log(reorganizeString("abbabbaaab"));

console.log(reorganizeString("bbbbbbb"));
