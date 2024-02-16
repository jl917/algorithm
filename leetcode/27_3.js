/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let slow = 0;
  let count = 0;
  let maxCount = 0;

  for (const t of s) {
    while (set.has(t)) {
      set.delete(s[slow]);
      slow++;
      count--;
    }

    set.add(t);
    count++;

    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring(" ")); // 3

console.log(lengthOfLongestSubstring("abcbef")); // 3
