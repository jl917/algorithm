/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const gaps = new Array(s.length).fill(0);
  let maxCount = 0;
  let slow = 0;
  let total = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    gaps[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
  }

  for (const gap of gaps) {
    total += gap;
    count++;
    while (total > maxCost) {
      total -= gaps[slow];
      slow++;
      count--;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));

