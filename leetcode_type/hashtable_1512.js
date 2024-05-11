/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;
  for (const num of nums) {
    const value = map.get(num);
    if (value) {
      count += value;
      map.set(num, value + 1);
    } else {
      map.set(num, 1);
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
