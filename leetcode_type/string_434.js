/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0;
  let isNullMode = true;

  for (const t of s) {
    if (t !== " ") {
      if (isNullMode) {
        count++;
        isNullMode = false;
      }
    } else {
      isNullMode = true;
    }
  }
  return count;
};
console.log(countSegments("Hello"));
console.log(countSegments("Hello, my name is John"));

console.log(countSegments("Hello, my name is    John"));
