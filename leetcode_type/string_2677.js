/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];
  let bucket = [];

  for (const a of arr) {
    bucket.push(a);
    if (bucket.length >= size) {
      result.push(bucket);
      bucket = [];
    }
  }

  if (bucket.length) {
    result.push(bucket);
  }

  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
