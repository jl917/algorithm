/**
 * @param {string} s
 * @return {string}
 */
var reverse = function (s) {
  return s.split("").reverse().join("");
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const k2 = k * 2;
  for (let i = 0; i < s.length; i += k2) {
    s = `${s.slice(0, i)}${reverse(s.slice(i, i + k))}${s.slice(i + k)}`;
  }
  return s;
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
