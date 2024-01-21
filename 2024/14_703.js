/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = nums.sort((a, b) => a - b);
  this.ind = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length === 0 || val >= this.nums[this.nums.length - 1]) {
    this.nums.push(val);
  } else {
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] >= val) {
        this.nums.splice(i, 0, val);
        break;
      }
    }
  }
  return this.nums[this.nums.length - this.ind];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// const k = new KthLargest(3, [4, 5, 8, 2]);
// console.log(k.add(3));
// console.log(k.add(5));
// console.log(k.add(10));
// console.log(k.add(9));
// console.log(k.add(4));

const k = new KthLargest(1, []);
console.log(k.add(-3));
console.log(k.add(-2));
console.log(k.add(-4));
console.log(k.add(0));
console.log(k.add(4));
