/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let total = 0;
  this.sums = [0];

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    this.sums.push(total);
  }

  console.log(this.sums);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sums[right + 1] - this.sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
const a = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(a.sumRange(0, 2));
console.log(a.sumRange(2, 5));
console.log(a.sumRange(0, 5));
