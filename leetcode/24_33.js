/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const isSmall = target < nums[mid];

    if(nums[mid] === target){
      return mid;
    }

    if(start === end){
      return nums[start] === target ? start : -1
    }

    if (nums[mid] < nums[end]) {
      if (isSmall) {
        end = mid;
      } else {
        start = mid + 1;
      }
    } else if (nums[mid] > nums[end]) {
      if (isSmall) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  }


  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([1, 3], 3)); // 1
console.log(search([1, 3], 0)); // -1
console.log(search([3, 5, 1], 3)); // 0
