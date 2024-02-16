/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  let result = -1;

  for (const a of arr) {
    map.set(a, map.has(a) ? map.get(a) + 1 : 1);
  }

  for (const [key, value] of map.entries()) {
    if (key === value) {
      if (value > result) {
        result = value;
      }
    }
  }
  return result;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
console.log(findLucky([5]));
console.log(findLucky([7, 7, 7, 7, 7, 7, 7]));
