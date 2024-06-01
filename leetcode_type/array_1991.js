/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const prefix = [];

  for (let i = 0; i < nums.length; i++) {
    prefix.push((prefix[prefix.length - 1] || 0) + nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (prefix[prefix.length - 1] === prefix[i]) {
        return 0;
      }
    } else {
      if (prefix[i - 1] === prefix[prefix.length - 1] - prefix[i]) {
        return i;
      }
    }
  }

  return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4])); // 3
console.log(findMiddleIndex([1, -1, 4])); // 2
console.log(findMiddleIndex([2, 5])); // -1
console.log(findMiddleIndex([1])); //0

console.log(findMiddleIndex([4, 1, -1])); // 0
