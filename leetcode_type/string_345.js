/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const sa = s.split('');

  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    while (start < end && !set.has(s[start])) {
      start++;
    }

    while (start < end && !set.has(s[end])) {
      end--;
    }

    if (start < end) {
      [sa[start], sa[end]] = [sa[end], sa[start]];
    }
    start++;
    end--;
  }
  return sa.join('')
};

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))
