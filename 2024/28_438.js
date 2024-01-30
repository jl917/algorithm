/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const pArray = new Array(26).fill(0);
  const sArray = new Array(26).fill(0);

  const pl = p.length;
  const sl = s.length;

  let current = "";

  for (const t of p) {
    pArray[t.charCodeAt() - 97]++;
  }

  for (let i = 0; i < sl; i++) {
    current += s[i];
    sArray[s[i].charCodeAt() - 97]++;

    if (current.length > pl) {
      sArray[current[0].charCodeAt() - 97]--;
      current = current.slice(1);
    }

    if (compareArray(pArray, sArray)) {
      result.push(i - pl + 1);
    }
  }
  return result;
};

/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @return {boolean}
 */
const compareArray = function (a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
