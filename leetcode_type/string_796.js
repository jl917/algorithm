/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let count = s.length;

  while (count > 0) {
    if (s === goal) {
      return true;
    }

    s = s.slice(1) + s[0];
    count--;
  }

  return false;
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
