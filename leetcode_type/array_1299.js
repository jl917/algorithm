/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const result = [];
  let max = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      result.unshift(-1);
    } else {
      result.unshift(max);
    }
    max = Math.max(max, arr[i]);
  }
  return result;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
