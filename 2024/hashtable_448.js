/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];
  const map = new Map();

  for (const num of nums) {
    map.set(num, true);
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
