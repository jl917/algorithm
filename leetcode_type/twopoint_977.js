/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let start = 0;
  let end = nums.length - 1;
  let index = end;
  while(start <= end){
    if(nums[start] * nums[start] > nums[end] * nums[end]){
      result[index] = nums[start] * nums[start];
      start++
    }else {
      result[index] = nums[end] * nums[end]
      end--
    }
    index--;
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
