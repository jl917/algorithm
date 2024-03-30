/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const result = [];
  const length = mountain.length;

  let i = 1;
  while (i < length - 1) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      result.push(i);
      i += 2;
    } else {
      i++;
    }
  }

  return result;
};

console.log(findPeaks([2, 4, 4]));
console.log(findPeaks([1, 4, 3, 8, 5]));
