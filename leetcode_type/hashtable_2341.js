/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const set = new Set();
  let count = 0;

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
      count++;
    } else {
      set.add(num);
    }
  }

  return [count, set.size];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs([1, 1]));
console.log(numberOfPairs([0]));
