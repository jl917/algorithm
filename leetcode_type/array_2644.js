/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let max = 0;
  let answer = 0;
  const newDivs = [...new Set(divisors)].sort((a, b) => b - a);
  for (const div of newDivs) {
    let count = 0;
    for (const num of nums) {
      if (num % div === 0) {
        count++;
        if (count >= max) {
          max = count;
          answer = div;
        }
      }
    }
  }

  return answer || newDivs[newDivs.length - 1];
};

console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]));
console.log(maxDivScore([20, 14, 21, 10], [5, 7, 5]));
console.log(maxDivScore([12], [10, 16]));
