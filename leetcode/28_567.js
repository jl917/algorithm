/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Array = new Array(26).fill(0);
  const s2Array = new Array(26).fill(0);

  let current = "";

  for (const s of s1) {
    s1Array[s.charCodeAt() - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    current += s2[i];
    s2Array[s2[i].charCodeAt() - 97]++;

    if (current.length > s1.length) {
      s2Array[current[0].charCodeAt() - 97]--;
      current = current.slice(1);
    }

    if (compareArray(s1Array, s2Array)) {
      return true;
    }
  }
  return false;
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

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
