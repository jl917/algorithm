/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3 || arr[0] > arr[1]) {
    return false;
  }
  let isUp = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false;
    }
    if (isUp) {
      if (arr[i] < arr[i - 1]) {
        isUp = false;
      }
    } else {
      if (arr[i] > arr[i - 1]) {
        return false;
      }
    }
  }

  return isUp === false && true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
