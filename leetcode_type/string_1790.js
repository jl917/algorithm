/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true;
  }
  const map = new Map();

  for (const s of s1) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1);
  }
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
    if (!map.has(s2[i])) {
      return false;
    }

    map.get(s2[i]) === 1
      ? map.delete(s2[i])
      : map.set(s2[i], map.get(s2[i]) - 1);
  }

  return count === 2 && map.size === 0;
};

console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("attack", "defend"));
console.log(areAlmostEqual("kelb", "kelb"));
console.log(areAlmostEqual("abcd", "dcba"));
console.log(areAlmostEqual("bankb", "kannb"));
