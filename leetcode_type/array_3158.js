/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let result = 0;
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      result ^= num;
    } else {
      set.add(num);
    }
  }

  return result;
};

console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));
