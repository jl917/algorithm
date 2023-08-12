/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const isArray = arr[i] instanceof Array;
    if (isArray) {
      newArr = newArr.concat(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return flat(newArr, n - 1);
};
