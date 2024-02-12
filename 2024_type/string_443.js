/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let count = 1;
  let length = chars.length;

  for (let i = 1; i <= length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
      chars.splice(i, 1);

      length--;
      i--;
    } else {
      const countArray = count === 1 ? [] : count.toString().split("");
      chars.splice(i, 0, ...countArray);
      length += countArray.length;
      i += countArray.length;
      count = 1;
    }
  }

  return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
