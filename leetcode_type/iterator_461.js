/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const s1 = x.toString(2);
  const s2 = y.toString(2);

  const max = Math.max(s1.length, s2.length);

  const s1b = s1.padStart(max, "0");
  const s2b = s2.padStart(max, "0");

  let count = 0;

  for (let i = 0; i < s1b.length; i++) {
    if (s1b[i] !== s2b[i]) {
      count++;
    }
  }
  return count;
};

console.log(hammingDistance(1, 4));
