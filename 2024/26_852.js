/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[mid+1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([1, 2, 31, 15, 5, 4, 3, 2, 1])); // 2
console.log(peakIndexInMountainArray([3,4,5,1]));