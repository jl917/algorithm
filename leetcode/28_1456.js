/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let current = "";
  let max = 0;
  let count = 0;
  let slow = 0;

  for (const t of s) {
    current += t;
    if (current.length > k) {
      slow++;
      if (isVowel(current[0])) {
        count--;
      }
      current = current.slice(1);
    }

    if (isVowel(t)) {
      count++;
    }

    if (count > max) {
      max = count;
    }

    if (count >= k) {
      return count;
    }
  }
  return max;
};

const isVowel = function (s) {
  return s === "a" || s === "e" || s === "i" || s === "o" || s === "u";
};

console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
console.log(maxVowels("rhythms", 4)); // 0
console.log(maxVowels("tryhard", 4)); // 1

console.log(maxVowels("zpuerktejfp", 3)); // 2
