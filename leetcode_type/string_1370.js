/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const map = new Map();
  let set = new Set();
  let isReverse = false;
  let current = 0;
  let result = "";

  for (const t of s) {
    set.add(t);
    map.set(t, map.has(t) ? map.get(t) + 1 : 1);
  }
  const codes = [...set.values()].sort(
    (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  );

  while (current < s.length) {
    if (isReverse) {
      for (let i = codes.length - 1; i >= 0; i--) {
        const value = map.get(codes[i]);
        if (value) {
          result += codes[i];
          map.set(codes[i], value - 1);
        }
      }
    } else {
      for (let i = 0; i < codes.length; i++) {
        const value = map.get(codes[i]);
        if (value) {
          result += codes[i];
          map.set(codes[i], value - 1);
        }
      }
    }
    isReverse = !isReverse;
    current++;
  }

  return result;
};

console.log(sortString("aaaabbbbcccc"));
