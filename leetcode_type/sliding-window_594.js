/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();
  let max = 0;

  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  const mapSort = [...map.keys()].sort((a, b) => a - b);

  for (let i = 1; i < mapSort.length; i++) {
    if (mapSort[i] - mapSort[i - 1] === 1) {
      max = Math.max(map.get(mapSort[i]) + map.get(mapSort[i - 1]), max);
    }
  }

  return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));

console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([1, 1, 1, 1, 4]));
