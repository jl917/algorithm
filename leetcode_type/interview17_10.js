/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  if (nums.length === 1) {
    return nums[0];
  }

  for (const num of nums) {
    if (map.has(num)) {
      const count = map.get(num);

      if (count + 1 > nums.length / 2) {
        return num;
      }
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }

  return -1;
};

console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));
console.log(majorityElement([2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
