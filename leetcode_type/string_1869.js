/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let max1 = 0;
  let max0 = 0;

  let tmp1 = 0;
  let tmp0 = 0;

  for (const t of s) {
    if (t === "1") {
      tmp1 += 1;
      max1 = Math.max(max1, tmp1);
      tmp0 = 0;
    } else {
      tmp0 += 1;
      max0 = Math.max(max0, tmp0);
      tmp1 = 0;
    }
  }

  return max1 > max0;
};

console.log(checkZeroOnes("1101"));
console.log(checkZeroOnes("111000"));
console.log(checkZeroOnes("110100010"));
