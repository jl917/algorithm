/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] === map2[t[i]]) {
      map1[s[i]] = i;
      map2[t[i]] = i;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
