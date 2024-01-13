/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  const answers = [];

  for (const num of nums2) {
    if (stack.length === 0) {
      stack.push(num);
    } else {
      while (stack[stack.length - 1] < num) {
        map.set(stack.pop(), num);
      }
      stack.push(num);
    }
  }

  for (const num of nums1) {
    answers.push(map.get(num) || -1);
  }
  return answers;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
