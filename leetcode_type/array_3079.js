/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  return nums
    .map((e) => {
      let num = 0;
      let max = 0;
      let position = 0;
      while (e >= 1) {
        max = Math.max(e % 10, max);
        e = Math.floor(e / 10);
        position++;
      }

      while (position > 0) {
        num += 10 ** (position - 1) * max;
        position--;
      }
      return num;
    })
    .reduce((total, value) => (total += value), 0);
};

console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));
