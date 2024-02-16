/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = [1];
  const post = [1];
  const answer = [];

  for (let i = 1; i < nums.length; i++) {
    pre.push(nums[i - 1] * pre[pre.length - 1]);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    post.unshift(nums[i] * post[0]);
  }

  for (let i = 0; i < nums.length; i++) {
    answer.push(pre[i] * post[i] || 0);
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
