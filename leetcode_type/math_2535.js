/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let t1 = 0;
  let t2 = 0;

  for (let num of nums) {
    t1 += num;

    while (num >= 1) {
      t2 += num % 10;
      num = Math.floor(num / 10);
    }
  }

  return Math.abs(t1 - t2);
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
