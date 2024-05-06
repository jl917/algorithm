/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let min = text.length;
  const base = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };

  const map = new Map();
  for (const s of text) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1);
  }

  for (const [k, v] of Object.entries(base)) {
    if (map.has(k)) {
      min = Math.min(Math.floor(map.get(k) / v), min);
    } else {
      return 0;
    }
  }

  return min;
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
