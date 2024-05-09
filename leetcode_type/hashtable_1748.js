/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const base = new Set();
  const bucket = new Set();
  let total = 0;

  for (const num of nums) {
    if (base.has(num)) {
      bucket.delete(num);
    } else {
      base.add(num);
      bucket.add(num);
    }
  }

  bucket.forEach((e) => {
    total += e;
  });

  return total;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
