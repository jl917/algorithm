/**
 * @param {number} num
 * @return {number}
 */
var get = function (num) {
  let total = 0;

  while (num > 0) {
    total += num % 10;
    num = parseInt(num / 10, 10);
  }
  return total;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumSum = function (nums) {
  const map = new Map();
  let total = -1;

  for (const num of nums) {
    const pt = get(num);

    if (!map.has(pt)) {
      map.set(pt, num);
    } else {
      if (num + map.get(pt) > total) {
        total = num + map.get(pt);
      }

      if (num > map.get(pt)) {
        map.set(pt, num);
      }
    }
  }

  return total;
};

console.log(maximumSum([18, 43, 36, 13, 7]));
