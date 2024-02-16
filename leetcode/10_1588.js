/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;
  const sums = [0];

  for (const num of arr) {
    sums.push(sums[sums.length - 1] + num);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      result += sums[j + 1] - sums[i];
    }
  }

  return result;
};
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarrays([1, 2]));
console.log(sumOddLengthSubarrays([10, 11, 12]));
