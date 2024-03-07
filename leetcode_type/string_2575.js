/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
// 根据当前表示整数的余数，算出包含下一位字符所表示的整数的余数。
var divisibilityArray = function (word, m) {
  const result = [];
  let cur = 0;

  for (const s of word) {
    cur = 10 * cur + parseInt(s, 10);
    if (cur % m === 0) {
      cur = 0;
      result.push(1);
    } else {
      cur = cur % m;
      result.push(0);
    }
  }

  return result;
};

console.log(divisibilityArray("998244353", 3));
console.log(divisibilityArray("1010", 10));
console.log(divisibilityArray("86217457695827338571", 8));
