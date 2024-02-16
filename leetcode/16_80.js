/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curInd = 1;
  let count = 1;
  let curNum = nums[0];
  while (curInd < nums.length) {
    if (nums[curInd] === curNum) {
      if (count >= 2) {
        nums.splice(curInd, 1);
        curInd--
      }else {
        count++
      }
    } else {
      count = 1;
      curNum = nums[curInd];
    }

    curInd++;
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
