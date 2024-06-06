/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < demand.length; i++) {
    const countMap = new Map();
    for (const s of demand[i]) {
      countMap.set(s, countMap.has(s) ? countMap.get(s) + 1 : 1);
    }

    for (const [key, value] of countMap.entries()) {
      map.set(key, map.has(key) ? Math.max(map.get(key), value) : value);
    }
  }

  for (const value of map.values()) {
    count += value;
  }
  return count;
};

console.log(minNumBooths(["acd", "bed", "accd"]));
