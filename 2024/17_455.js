/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let gi = 0;
  let si = 0;
  let count = 0;

  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      gi++;
      si++;
      count++;
    } else {
      gi++;
    }
  }
  return count;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
