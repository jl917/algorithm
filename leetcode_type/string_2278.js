/**
 * @param {string} s
 * @param {string} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let count = 0;
  // for of보다 for 순회가 성능이 더 좋다.
  for (let i = 0; i < s.length; i++) {
    if (letter === s[i]) {
      count++;
    }
  }

  return Math.floor((count / s.length) * 100);
};

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("jjjj", "k"));
