/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    count = arr[i] % 2 === 1 ? count + 1 : 0;
    i++;
    console.log(count)
    if (count >= 3) {
      return true;
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
